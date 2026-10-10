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
