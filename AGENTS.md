<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All editable site content (links, contacts, styles, teachers, testimonials, project years, auditionsOpen) lives in src/data/siteConfig.ts; components only read from it — keeps content swappable in one place.
- Shared site UI (SmartImage, Lightbox, CTAButton, PageHero, GalleryCard, ContactCard, SectionWave) lives in src/components/site/ — reuse instead of re-implementing per page.
- Audience categories use separate public routes and a shared class catalogue; shared classes resolve to one detail URL so schedules cannot diverge.
- Render the contact band once in the root shell and navigate to its in-page anchor from every page, avoiding duplicated contacts.
- Missing named-person and couple photographs render brand placeholders, never stock identities; project history media stays inactive until real source URLs are configured.
- Generate the downloadable timetable from the configured class schedules when no timetable artwork is supplied, preserving one source of truth.
- ProjectVideo resolves playback sources only after an explicit click; each cover's fit is configured in siteConfig, independently of home hero playback.
- SmartImage applies photo framing from the central configuration so the same photograph stays consistently framed across pages.
- Project lock indicators derive from auditionsOpen without blocking the public page; this keeps availability consistent across navigation and catalogues.
- The facilities section derives its main image and smaller non-interactive photographs from the ordered facilities.photos configuration, showing all configured photos without a separate gallery or duplicated content.
- Home presentation blocks reveal configured text with a curtain on hover or touch and close on mobile scroll; reduced motion is respected and touch open state overrides emulated hover.
- Home audience cards and class catalogues reuse RevealPhotoCard: the curtain and age reveal follow hover on desktop, while on touch devices the age/subtitle is always visible below the line and a single tap navigates.
- Home sections expose stable anchors for biography and catalogue back links, and the main school photograph reserves its natural aspect ratio to keep return scrolling stable while images load.
- Netlify hosting is configured in root netlify.toml via NITRO_PRESET=netlify (publish dist); do not add public/_redirects SPA fallbacks — pages are server-rendered.
