import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, ZoomIn } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { PageHero, Reveal } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horários — Davidance" },
      { name: "description", content: "Consulta o horário semanal das aulas de dança da Davidance." },
      { property: "og:title", content: "Horários — Davidance" },
      { property: "og:description", content: "Horário semanal de todas as aulas da Davidance." },
    ],
  }),
  component: TimetablePage,
});

function TimetablePage() {
  const [zoom, setZoom] = useState<number | null>(null);
  return (
    <>
      <PageHero eyebrow="Organiza a tua semana" title="Horários" />
      <section className="container mx-auto px-5 py-14">
        <Reveal className="relative mx-auto max-w-5xl">
          <button onClick={() => setZoom(0)} className="group relative block w-full overflow-hidden rounded-[2.5rem] shadow-soft" aria-label="Ampliar horário das aulas">
            <SmartImage src={siteConfig.timetable.image} alt="Horário semanal das aulas da Davidance" wrapperClassName="aspect-[16/10]" className="group-hover:scale-105" />
            <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cream/90 px-4 py-2 text-sm font-semibold text-primary"><ZoomIn className="h-4 w-4" /> Ampliar</span>
          </button>
          <div className="mt-6 text-center">
            <a href={siteConfig.timetable.download} download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-rose">
              <Download className="h-4 w-4" /> Descarregar
            </a>
          </div>
        </Reveal>
        <Lightbox images={[siteConfig.timetable.image]} index={zoom} onClose={() => setZoom(null)} onChange={setZoom} alt="Horário" />
      </section>
    </>
  );
}
