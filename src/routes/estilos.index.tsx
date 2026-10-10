import { createFileRoute, Link } from "@tanstack/react-router";
import { styles } from "@/data/siteConfig";
import { PageHero, Reveal } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";

export const Route = createFileRoute("/estilos/")({
  head: () => ({
    meta: [
      { title: "Estilos de Dança — Davidance" },
      { name: "description", content: "Descobre todos os estilos de dança da Davidance: Ballet, Hip Hop, Contemporâneo, Jazz, Zumba e mais." },
      { property: "og:title", content: "Estilos de Dança — Davidance" },
      { property: "og:description", content: "Encontra o estilo de dança perfeito para ti na Davidance." },
    ],
  }),
  component: StylesPage,
});

function StylesPage() {
  return (
    <>
      <PageHero eyebrow="Encontra o teu ritmo" title="Estilos" />
      <section className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {styles.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link to="/estilos/$slug" params={{ slug: s.slug }} className="group relative block aspect-square overflow-hidden rounded-[2rem]" aria-label={s.name}>
                <SmartImage src={s.cover} alt={s.name} wrapperClassName="absolute inset-0" className="group-hover:scale-105" />
                <div className="absolute inset-0 flex items-end justify-center bg-primary/0 p-4 transition-all duration-500 group-hover:items-center group-hover:bg-primary/70 group-focus-visible:items-center group-focus-visible:bg-primary/70">
                  <span className="rounded-full bg-cream/85 px-3 py-1 text-xs font-semibold text-primary transition-all duration-500 group-hover:bg-transparent group-hover:font-display group-hover:text-4xl group-hover:font-light group-hover:italic group-hover:text-cream md:opacity-0 md:group-hover:opacity-100">
                    {s.name}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
