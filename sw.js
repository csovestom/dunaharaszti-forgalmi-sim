// Dunaharaszti Forgalmi Szimulátor – service worker az offline működéshez.
// Hálózat először: ha van net, mindig a GitHubon lévő legfrissebb fájlt kapod
// (így a szimulátor frissítéséhez elég a HTML-t lecserélni), net nélkül a mentett példányt.
const CACHE = 'dunaharaszti-v1';
const FILES = [
  './',
  './index.html',
  './dunaharaszti_terepasztal.html',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req, { cache: 'no-cache' })
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          // A ?kezdes=… paraméteres kéréseket paraméter nélkül mentjük, hogy offline is meglegyenek
          const key = new URL(req.url); key.search = ''; key.hash = '';
          caches.open(CACHE).then((c) => c.put(key.href, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true }).then((hit) =>
          hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
        )
      )
  );
});
