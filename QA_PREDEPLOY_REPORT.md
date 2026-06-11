# QA Predeploy Report

## Pages Tested

- `/`
- `/tours`
- `/articles`
- `/library`
- `/archive`
- `/gallery`
- `/reviews`
- `/about`
- `/contacts`
- `/admin`

## Issues Fixed

- Added finished premium placeholder for `/library` with archive/book visual motif and no developer wording.
- Added Library to navigation and sitemap.
- Normalized archive taxonomy and filters: `Все`, `Видео`, `Публикации`, `Экскурсии`, `Лекции`, `Афиши`.
- Added imported public-source archive entries with short summaries, attribution, tags, and local imagery.
- Added home section `Последние материалы`.
- Removed raw YouTube embeds from archive cards; video materials now use designed cards and source buttons.
- Fixed remaining public placeholder wording on home/gallery/archive cards.
- Added safer hero/photo positioning and About split hero so Viktor’s face is not used as a cropped background behind text.
- Reduced header height and tightened nav/social icon sizing.
- Increased trust/status strip icon size and added desktop/tablet/mobile grid behavior.
- Reduced floating CTA size and converted it into a compact request CTA.
- Reduced Contacts hero/form scale so the page fits normal desktop viewports better.

## Routes Checked

Local HTTP QA on `http://localhost:3010` returned 200-equivalent rendered pages for:

- `/`
- `/tours`
- `/articles`
- `/library`
- `/archive`
- `/gallery`
- `/reviews`
- `/about`
- `/contacts`
- `/admin`

The same pass found no public email leak and no `TODO`, `будущей публикации`, `ручной сверки`, `постепенно`, or `Оплатить сейчас` wording on those routes.

## Link QA

- Contact form POST returned `200` with `{ "ok": true }`.
- Verified external HTTP status `200` for:
  - ДК Льва Лурье profile
  - ДК Льва Лурье reviews
  - Sputnik8 route
  - JEvents route
  - JEPS old archive
  - YouTube playlist
  - YouTube lecture

## Remaining Limitations

- The Большая Хоральная синагога source domain did not respond during QA (`000` timeout). Its archive item keeps source attribution, but the external source button is hidden until the URL can be verified.
- In-app browser automation could not reliably navigate away from a stale generated browser error page. Route QA was completed with direct local HTTP checks and production build verification.
- Visual review was performed through CSS/DOM and route checks; final human screenshot approval is still recommended before deploy.

## Build Result

- `npm run lint`: passed with no warnings.
- `npm run build`: passed with 25 generated routes, including `/library`.
