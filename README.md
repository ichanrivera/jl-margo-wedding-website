# JL & Margo’s wedding invitation

An animated wedding invitation for John Lauren and Marjolyn, built with Next.js 16 and React 19. The design uses locally hosted fonts, botanical SVG artwork, the sage, blush, buttercup, cornflower, and lavender colors of the wedding attire palette.

## Local development

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` to validate changes.

## Update the invitation

- `src/app/wedding.ts` contains the wedding details, entourage, attire palette, and guest questions.
- Add the real RSVP form URL to `WEDDING.rsvpUrl` when available. With an empty URL, guests are asked to message the couple directly. No responses are collected or stored by this website.
- `src/app/components/WeddingSite.tsx` contains the invitation and section copy.
- `src/app/globals.css` controls the responsive layout, colors, and animations.
- `src/app/components/WeddingInteractions.tsx` controls the staggered text reveals and gentle movement of the couple’s names.
- `public/john-lauren-and-marjolyn.ics` provides the calendar download. If the wedding date, time, or venue changes, update this file as well. Its start time is stored in UTC: November 14, 2026 at 01:00 UTC is 9:00 a.m. in the Philippines. No end time is assumed.
- `src/app/layout.tsx` contains the page title and sharing metadata; keep them in sync with the event details.

The countdown uses an explicit Philippine time-zone offset. The site honors reduced-motion preferences, uses native expandable FAQs, and supports keyboard navigation. Core invitation content is rendered on the server. Fonts and their open-source licenses are included in `src/app/fonts/`.
