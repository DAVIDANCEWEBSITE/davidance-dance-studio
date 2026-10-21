import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, ZoomIn } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { PageHero, CTAButton } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Lightbox } from "@/components/site/Lightbox";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horário — Aulas semanais | Davidance" },
      { name: "description", content: siteConfig.copy.timetableText },
      { property: "og:title", content: "Horário — Davidance" },
      {
        property: "og:description",
        content: "Consulta o horário de todas as aulas da Davidance em Paio Pires.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimetablePage,
});
function TimetablePage() {
  const [zoom, setZoom] = useState<number | null>(null);
  return (
    <>
      <PageHero title={siteConfig.copy.timetableTitle}>
        <p>{siteConfig.copy.timetableText}</p>
      </PageHero>
      <section className="container mx-auto px-5 py-12">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <CTAButton href={siteConfig.links.trialClass} variant="glow">
            {siteConfig.copy.trialButton}
          </CTAButton>
          <CTAButton href={siteConfig.links.enrol} variant="glow">
            {siteConfig.copy.enrolButton}
          </CTAButton>
        </div>
        <div className="mx-auto max-w-6xl">
          <Button
            variant="ghost"
            className="block h-auto w-full overflow-hidden rounded-lg p-0"
            aria-label="Ampliar horário das aulas"
            onClick={() => setZoom(0)}
          >
            <SmartImage
              src={siteConfig.timetable.image}
              alt={siteConfig.copy.timetableTitle}
              wrapperClassName="aspect-[1400/1150] w-full"
            />
          </Button>
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" onClick={() => setZoom(0)}>
              <ZoomIn />
              Ampliar
            </Button>
            <Button asChild>
              <a href={siteConfig.timetable.download} download="horario-davidance.svg">
                <Download />
                Descarregar
              </a>
            </Button>
          </div>
        </div>
        <Lightbox
          images={[siteConfig.timetable.image]}
          index={zoom}
          onClose={() => setZoom(null)}
          onChange={setZoom}
          alt={siteConfig.copy.timetableTitle}
        />
      </section>
    </>
  );
}
