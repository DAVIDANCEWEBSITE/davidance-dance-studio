import { createFileRoute, Link } from "@tanstack/react-router";
import { classGroups } from "@/data/siteConfig";
import { PageHero } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/estilos/")({
  head: () => ({
    meta: [
      { title: "Aulas de Dança — Kids, Jovens & Adultos | Davidance" },
      { name: "description", content: "Descobre as aulas Kids e Jovens & Adultos da Davidance." },
      { property: "og:title", content: "Aulas de Dança — Davidance" },
      { property: "og:description", content: "Encontra o teu lugar na Davidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Aulas de Dança" />
      <div className="container mx-auto flex flex-wrap justify-center gap-5 px-5 py-16">
        <Button asChild size="lg">
          <Link to="/kids">{classGroups.kids.menu}</Link>
        </Button>
        <Button asChild size="lg">
          <Link to="/jovens-adultos">{classGroups.adults.menu}</Link>
        </Button>
      </div>
    </>
  ),
});
