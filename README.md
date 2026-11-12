# Dunaharaszti Forgalmi Szimulátor

MÁV Dominó 55 forgalomirányító szimulátor, Dunaharaszti állomás (150-es vonal).
Telepíthető webapp (PWA): böngészőből „appként” felrakható, és telepítés után net nélkül is fut.

## Feltöltés GitHubra

1. A GitHubon jobb felül **+ → New repository**. Név például: `dunaharaszti-szimulator`. Legyen **Public**, majd **Create repository**.
2. Az új repó oldalán kattints az **uploading an existing file** linkre (vagy **Add file → Upload files**).
3. Húzd be a mappa **teljes tartalmát** (nem magát a mappát): `index.html`, `dunaharaszti_terepasztal.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `README.md` és az `icons` mappa. Utána **Commit changes**.
   - A `.nojekyll` rejtett fájl. Ha a Mac nem mutatja, a Finderben nyomd meg a **Cmd + Shift + .** billentyűket. Ha mégis kimarad, az sem baj, az app nélküle is működik.

## GitHub Pages bekapcsolása

1. A repóban **Settings → Pages**.
2. *Build and deployment* alatt: **Source: Deploy from a branch**, **Branch: main**, mappa: **/ (root)**, majd **Save**.
3. 1–2 perc múlva az oldal tetején megjelenik a cím, például:
   `https://benixd1234.github.io/dunaharaszti-szimulator/`

## Telepítés appként

- **Chrome / Edge (Mac, Windows):** nyisd meg a címet, a címsor jobb szélén kattints a telepítés ikonra (monitor lefelé mutató nyíllal), vagy **⋮ menü → Mentés és megosztás → Oldal telepítése alkalmazásként**.
- **Safari (Mac):** **Fájl → Hozzáadás a Dockhoz**.
- **iPhone / iPad (Safari):** **Megosztás → Főképernyőhöz adás**.
- **Android (Chrome):** **⋮ → Alkalmazás telepítése**.

Az első megnyitás után a szimulátor offline is elindul.

## Frissítés új változatra

Elég a `dunaharaszti_terepasztal.html` fájlt lecserélni (a repóban **Add file → Upload files**, ugyanazzal a névvel, majd **Commit changes**).
A többi fájlhoz nem kell nyúlni. Az app netkapcsolattal mindig a legfrissebb változatot tölti be (a Pages frissülése 1–2 perc), net nélkül az utoljára letöltöttet.

## Hasznos

- Kezdési idő megadása a címben: `…/dunaharaszti-szimulator/?kezdes=06:00`
- A fájlok:
  - `dunaharaszti_terepasztal.html` – maga a szimulátor (változatlanul)
  - `index.html` – az app kerete, ez tölti be a szimulátort
  - `manifest.webmanifest` – az app neve, ikonjai, színei
  - `sw.js` – offline működés
  - `icons/` – a szárnyas kerék ikonok
