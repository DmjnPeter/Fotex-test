Hungaroton Artist List 

1. Projekt áttekintése

A Hungaroton Artist List egy webalkalmazás, amely segít a felhasználóknak előadókat keresni és megtekinteni a kapcsolódó albumokat. Az alkalmazás React és Next.js alapon készült, Material-UI komponensekkel és egyedi stílusokkal.



2. Használt technológiák

Frontend: Next.js, React, TypeScript

UI: Material-UI

Adatkezelés: REST API hívások

Stílus: CSS, Material-UI SX

Fejlesztési eszközök: Node.js, npm



3. Telepítés és futtatás


3.1. Telepítés

Projekthez navigálás:

cd hungaroton-artist-list

Függőségek telepítése:

npm install


3.2. Fejlesztési szerver indítása

npm run dev

A szerver alapértelmezés szerint a http://localhost:3000 címen fut.




4. Fájlstruktúra

 cypress/
 ├── e2e/
 |   ├── search.cy.js
 ├── fixtures/
 ├── support/
 ├── tsconfig.json
 hungaroton-artist-list/
 ├── src/
 │   ├── app/
 │   │   ├── layout.tsx
 │   │   ├── page.tsx
 │   ├── components/
 │   │   ├── ArtistCard.tsx
 │   │   ├── ArtistList.tsx
 │   │   ├── Filters.tsx
 │   │   ├── Pagination.tsx
 │   ├── hooks/
 │   │   ├── useArtists.ts
 │   │   ├── useDebounce.ts
 │   ├── pages/
 │   ├── services/
 │   ├── ├──__tests__/
 │   │   ├──  ├──api.test.ts
 │   │   ├── api.ts
 │   ├── styles/
 │   │   ├── globals.css
 │   ├── themes/
 │   │   ├── theme.ts
 │   ├── next.config.js
 │   ├── tsconfig.json
 │   ├── package.json
 │   ├── jest.config.js
 │   ├── Fotexnet Homework.postman_collection.json
 ├── node_modules/
 ├── src/
 │   ├── amplifyconfiguration.json
 │   ├── aws-exports.tsx
 ├── .dockerignore
 ├── .gitignore
 ├── cypress.config.ts
 ├── Dockerfile
 ├── package-lock.json
 ├── package.json



5. Funkcionalitás

5.1. Előadók listázása

Az alkalmazás az API-ból szerzi be az előadók listáját.

Minden előadó kártya formájában jelenik meg (ArtistCard.tsx).


5.2. Keresés előadó neve alapján

A TextField komponens segítségével lehet keresni az előadók között.

A keresés dinamikusan szűri az eredményeket.


5.3. Lapozás (Pagination)

Ha több előadó van, mint ami egy oldalon megjeleníthető, a felhasználó lapozhat köztük.


5.4. Szűrők

Az előadókat további paraméterek alapján lehet szűrni (Filters.tsx).



6. Jövőbeli fejlesztési lehetőségek

Keresés optimalizálása

További szűrők bevezetése.

Reszponzív dizájn továbbfejlesztése.

