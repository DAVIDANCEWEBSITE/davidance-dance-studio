import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { CTAButton, SectionTitle } from "@/components/site/primitives";
import { WeddingTestimonials } from "@/components/site/WeddingTestimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SmartImage } from "@/components/site/SmartImage";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/casamentos")({
  head: () => ({
    meta: [
      { title: "Casamentos — A vossa primeira dança | Davidance" },
      { name: "description", content: siteConfig.copy.weddingsText },
      { property: "og:title", content: "Casamentos — Davidance" },
      { property: "og:description", content: siteConfig.copy.weddingsPhrase },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeddingsPage,
});
function WeddingsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-plum pt-20">
        <SmartImage src={siteConfig.weddingsHero} alt={siteConfig.copy.weddingsTitle} eager wrapperClassName="aspect-[1318/880] w-full" className="object-contain" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 bg-hero-overlay" />
        <div className="container absolute inset-x-0 top-24 mx-auto px-5 md:top-28">
          <Button asChild variant="ghost" className="absolute left-5 top-0 px-3 text-cream hover:bg-cream/15 hover:text-cream">
            <Link to="/" hash="aulas"><ArrowLeft />{siteConfig.copy.back}</Link>
          </Button>
        </div>
      </section>
      <section className="container mx-auto max-w-2xl px-5 py-12 text-center">
        <h1 className="mb-4 text-3xl font-light text-primary md:mb-8 md:text-5xl">{siteConfig.copy.weddingsTitle}</h1>
        {siteConfig.copy.weddingsText.split("\n\n").map((para, i) => (
          <p
            key={i}
            className={cn(
              "text-balance text-sm leading-relaxed text-muted-foreground md:text-base",
              i > 0 && "mt-3 md:mt-4",
            )}
          >
            {para}
          </p>
        ))}
        <p className="mt-4 text-balance text-sm italic leading-relaxed text-primary md:text-base">
          {siteConfig.copy.weddingsPhrase}
        </p>
        <div id="precario" className="mt-4 scroll-mt-24 md:mt-8">
          <CTAButton href={siteConfig.links.weddings} variant="glow">
            {siteConfig.copy.weddingsButton}
          </CTAButton>
        </div>
      </section>
      <WeddingTestimonials />
      <section className="py-12 md:py-16">
        <div id="perguntas-frequentes" className="container mx-auto max-w-3xl scroll-mt-24 px-5">
          <SectionTitle title={siteConfig.copy.weddingsFaqTitle} />
          <Accordion type="single" collapsible>
            {siteConfig.weddingsFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="min-h-20 gap-4 py-5 text-base text-foreground hover:text-primary hover:no-underline"><span className="flex min-w-0 items-baseline gap-4"><span className="shrink-0 text-xs font-normal tabular-nums text-primary" aria-hidden>{String(index + 1).padStart(2, "0")}.</span><span className="text-pretty">{faq.question}</span></span></AccordionTrigger>
                <AccordionContent className="pl-9 pr-6 text-pretty leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
