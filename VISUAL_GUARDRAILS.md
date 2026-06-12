# Bemidbar Visual Guardrails

## Approved Palette

- Background: `#F3EEE5`
- Surface: `#FAF7F1`
- Text: `#232323`
- Dark: `#171921`
- Accent: `#C76D4D`
- Gold: `#C6A46A`

Use warm light sections for content and a dark footer for contrast. Avoid returning to a fully dark, memorial-like site, but do not force fragile light overlays over photographs.

## Typography

- The brand wordmark is for the header/logo only.
- The home hero headline is always `Еврейский Петербург`.
- Hero and page titles must stay inside their containers.
- Do not use `word-break: break-all` or aggressive wrapping on headings.
- Use readable line lengths: hero copy around `520px`, body copy around `680px`.

## Icons

- Icons must be simple, proven line symbols.
- Use the shared status icon component or an established icon set.
- No emoji, no filled decorative marks, no visually random/generated icons.
- Status strip icons should be 28-36px and use the approved gold.

## Hero Layout

- Home hero uses a stable split layout:
  - left: text with max width around `520px`
  - right: contained image frame/card
- The hero image must not be a full background when it risks cropping Viktor.
- Never crop Viktor's face or head.
- No hero text may overlap the image.

## Do Not Break

- Do not expose public email addresses on the frontend.
- Do not remove `/library`, archive content, booking/YooKassa docs, or current public routes.
- Do not add placeholder/TODO/developer language to public pages.
- Do not add layout experiments that rely on text over complex image areas.
- Always check desktop, tablet, and mobile before deploy.
