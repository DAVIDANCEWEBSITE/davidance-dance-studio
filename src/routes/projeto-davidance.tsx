import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectYears, siteConfig, type ProjectMedia } from "@/data/siteConfig";
import { CTAButton, Reveal, SectionWave } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projeto-davidance")({
  head: () => ({
    meta: [
      { title: "Projeto Davidance — A companhia da Davidance" },
      { name: "description", content: "Conhece o Projeto Davidance: espetáculos, vídeos e fotografias de cada temporada." },
      { property: "og:title", content: "Projeto Davidance" },
      { property: "og:description", content: "A face da Davidance: espetáculos, vídeos e fotografias de cada ano." },
      { property: "og:image", content: siteConfig.projectHero },
      { name: "twitter:image", content: siteConfig.projectHero },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);
  const scale = useTransform(scrollY, [0, 700], [1, 1.12]);

  return (
    <div className="bg-indigo-deep text-cream">
      <section className="relative flex h-[90svh] items-end overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <SmartImage src={siteConfig.projectHero} alt="Projeto Davidance em palco" eager wrapperClassName="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/40 to-indigo-mid/30" />
        <div className="relative container mx-auto px-5 pb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-violet">A face da Davidance</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-light leading-none md:text-9xl">
            Projeto <em className="text-gradient-brand">Davidance</em>
          </motion.h1>
        </div>
      </section>

      <section className="relative py-24">
        <div className="blob left-1/4 top-0 h-96 w-96 bg-violet opacity-30" />
        <Reveal className="container relative mx-auto max-w-3xl px-5 text-center">
          <p className="font-display text-2xl font-light leading-relaxed text-cream/90 md:text-4xl">
            Um grupo de bailarinos que partilham o palco, o suor e o sonho. O Projeto Davidance é onde a técnica encontra a emoção — e onde cada temporada se transforma numa história para contar.
          </p>
        </Reveal>
      </section>

      {projectYears.map((y, i) => <YearSection key={y.year} year={y.year} description={y.description} media={y.media} alt={i % 2 === 1} />)}

      <section className="relative overflow-hidden bg-gradient-night py-28 text-center">
        <div className="blob left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-primary opacity-40" />
        <Reveal className="container relative mx-auto px-5">
          <h2 className="text-4xl font-light md:text-6xl">Queres fazer parte do <em>nosso projeto</em>?</h2>
          <div className="mt-10">
            {/* Controlado por siteConfig.auditionsOpen em src/data/siteConfig.ts:
                true → botão ativo "Marca a tua audição"; false → desativado "Já estamos cheios". */}
            <CTAButton href={siteConfig.links.audition} variant="glow" disabled={!siteConfig.auditionsOpen} icon={siteConfig.auditionsOpen}>
              {siteConfig.auditionsOpen ? "Marca a tua audição" : "Já estamos cheios"}
            </CTAButton>
          </div>
        </Reveal>
      </section>
      <SectionWave fillClass="fill-background" className="bg-indigo-mid" />
    </div>
  );
}

function YearSection({ year, description, media, alt }: { year: number; description: string; media: ProjectMedia[]; alt: boolean }) {
  const images = media.filter((m): m is Extract<ProjectMedia, { type: "image" }> => m.type === "image").map((m) => m.src);
  const [idx, setIdx] = useState<number | null>(null);
  let imgCounter = -1;
  return (
    <section className={cn("relative py-20", alt && "bg-indigo-mid/40")}>
      <div className="container mx-auto px-5">
        <Reveal className="mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h2 className="text-4xl font-light md:text-6xl">Projeto Davidance <span className="text-gradient-brand italic">{year}</span></h2>
          <p className="text-cream/70">{description}</p>
        </Reveal>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {media.map((m, i) => {
            const big = i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : "";
            if (m.type === "image") {
              imgCounter++;
              const n = imgCounter;
              return (
                <Reveal key={i} delay={i * 0.06} className={big}>
                  <button onClick={() => setIdx(n)} className="group h-full w-full overflow-hidden rounded-[2rem]" aria-label={`Ampliar fotografia ${year}`}>
                    <SmartImage src={m.src} alt={`Projeto Davidance ${year}`} wrapperClassName="h-full w-full" className="group-hover:scale-105" />
                  </button>
                </Reveal>
              );
            }
            return (
              <Reveal key={i} delay={i * 0.06} className={cn(big, "overflow-hidden rounded-[2rem] bg-plum")}>
                {m.type === "youtube" ? (
                  <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${m.id}`} title={`Vídeo Projeto Davidance ${year}`} loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen />
                ) : (
                  <video className="h-full w-full object-cover" src={m.src} poster={m.poster} controls preload="none" />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
      <Lightbox images={images} index={idx} onClose={() => setIdx(null)} onChange={setIdx} alt={`Projeto Davidance ${year}`} />
    </section>
  );
}
