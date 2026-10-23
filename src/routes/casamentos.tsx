import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, orderedTestimonials } from "@/data/siteConfig";
import { CTAButton, PageHero, SectionTitle } from "@/components/site/primitives";
import { Portrait } from "@/components/site/Portrait";
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
      <div className="container mx-auto px-5 pt-28">
        <Button asChild variant="ghost" className="px-3 text-primary hover:bg-brand-hover hover:text-primary-foreground">
          <Link to="/" hash="aulas">
            <ArrowLeft />
            {siteConfig.copy.back}
          </Link>
        </Button>
      </div>
      <PageHero title="Casamentos" image={siteConfig.weddingsHero} imageClassName="max-w-3xl" />
      <section className="container mx-auto max-w-4xl px-5 py-12 text-center">
        {siteConfig.copy.weddingsText.split("\n\n").map((para, i) => (
          <p
            key={i}
            className={cn(
              "text-balance text-base leading-relaxed text-muted-foreground md:text-lg",
              i > 0 && "mt-4",
            )}
          >
            {para}
          </p>
        ))}
        <p className="mt-6 text-balance text-lg italic text-primary md:text-xl">
          {siteConfig.copy.weddingsPhrase}
        </p>
        <div className="mt-8">
          <CTAButton href={siteConfig.links.weddings} variant="glow">
            {siteConfig.copy.weddingsButton}
          </CTAButton>
        </div>
      </section>
      <section className="bg-secondary/40 py-12">
        <div className="container mx-auto px-5">
          <SectionTitle
            title={siteConfig.copy.loveTitle}
            eyebrow={siteConfig.copy.testimonialsTitle}
          />
          <div className="space-y-16">
            {orderedTestimonials.map((t, i) => (
              <div
                key={t.couple + i}
                className={cn(
                  "mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[300px_1fr]",
                  i % 2 && "md:grid-cols-[1fr_300px] md:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative">
                  {t.photos[0] ? (
                    <SmartImage
                      src={t.photos[0]}
                      alt={t.couple}
                      wrapperClassName="aspect-[4/3] rounded-lg shadow-soft"
                    />
                  ) : (
                    <Portrait name={t.couple} className="aspect-[4/3] rounded-lg" />
                  )}
                </div>
                <div>
                  {t.text && (
                    <>
                      <Quote className="h-8 w-8 text-primary" />
                      <blockquote className="mt-3 text-pretty text-sm font-light leading-relaxed md:text-base">
                        “{t.text}”
                      </blockquote>
                    </>
                  )}
                  <p className="mt-5 font-semibold text-primary">{t.couple}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
