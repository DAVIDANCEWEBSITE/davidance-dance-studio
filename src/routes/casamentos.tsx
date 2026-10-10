import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { siteConfig, testimonials } from "@/data/siteConfig";
import { CTAButton, PageHero, Reveal, SectionTitle } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/casamentos")({
  head: () => ({
    meta: [
      { title: "Casamentos — Coreografias de primeira dança | Davidance" },
      { name: "description", content: "Coreografias para a primeira dança, para padrinhos e madrinhas, e acompanhamento personalizado para o vosso grande dia." },
      { property: "og:title", content: "Casamentos — Davidance" },
      { property: "og:description", content: "Tornem a vossa primeira dança inesquecível com a Davidance." },
      { property: "og:image", content: siteConfig.weddingsHero },
      { name: "twitter:image", content: siteConfig.weddingsHero },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <>
      <PageHero eyebrow="O vosso grande dia" title="Casamentos" image={siteConfig.weddingsHero} />
      <section className="container mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>A primeira dança é um dos momentos mais especiais de um casamento. Na Davidance criamos coreografias à vossa medida, ao ritmo da vossa música e da vossa história — seja algo romântico e delicado ou uma surpresa cheia de energia.</p>
          <p>Preparamos também coreografias de grupo para padrinhos, madrinhas e família, e oferecemos acompanhamento personalizado para que se sintam confiantes e à vontade no grande dia.</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10"><CTAButton href={siteConfig.links.weddings} variant="glow">Pede o teu orçamento</CTAButton></Reveal>
      </section>
      <section className="bg-gradient-to-b from-background via-blush to-background py-20">
        <div className="container mx-auto space-y-24 px-5">
          <SectionTitle eyebrow="Histórias de amor" title="Testemunhos" />
          {testimonials.map((t, i) => (
            <div key={t.couple} className={cn("grid items-center gap-10 md:grid-cols-2", i % 2 && "md:[&>*:first-child]:order-2")}>
              <Reveal className="relative h-80 md:h-[26rem]">
                <SmartImage src={t.photos[0]} alt={t.couple} wrapperClassName={cn("absolute rounded-[2.5rem] shadow-soft", t.photos[1] ? "left-0 top-0 h-[80%] w-[75%]" : "inset-0")} />
                {t.photos[1] && <SmartImage src={t.photos[1]} alt={`${t.couple} 2`} wrapperClassName="absolute bottom-0 right-0 h-[55%] w-[50%] rounded-[2rem] border-8 border-background shadow-soft" />}
              </Reveal>
              <Reveal delay={0.1}>
                <Quote className="h-10 w-10 text-violet" aria-hidden />
                <blockquote className="mt-4 font-display text-2xl font-light leading-relaxed md:text-3xl">“{t.text}”</blockquote>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary">{t.couple}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
