import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { isTestimonialPending, orderedTestimonials, siteConfig, weddingPortraitPhotos } from "@/data/siteConfig";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { SmartImage } from "./SmartImage";
import { Portrait } from "./Portrait";
import { SectionTitle } from "./primitives";
import { cn } from "@/lib/utils";

export function WeddingTestimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const copy = siteConfig.copy;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-secondary/40 py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-5">
        <SectionTitle title={copy.loveTitle} eyebrow={copy.testimonialsTitle} />
        <Carousel opts={{ loop: true }} setApi={setApi} aria-label={copy.testimonialsTitle}>
          <div className="mb-6 flex items-center justify-center gap-5">
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => api?.scrollPrev()} aria-label={copy.previousStory} title={copy.previousStory}><ArrowLeft /></Button>
            <span className="min-w-16 text-center text-xs tabular-nums text-muted-foreground" aria-live="polite" aria-atomic="true">{selected + 1} / {orderedTestimonials.length}</span>
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => api?.scrollNext()} aria-label={copy.nextStory} title={copy.nextStory}><ArrowRight /></Button>
          </div>
          <CarouselContent className="items-start">
            {orderedTestimonials.map((testimonial, index) => (
              <CarouselItem key={`${testimonial.couple}-${index}`} className={cn(selected !== index && "h-0 overflow-hidden")} aria-label={`${testimonial.couple}, ${index + 1} / ${orderedTestimonials.length}`} aria-hidden={selected !== index} inert={selected !== index}>
                <article className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
                  <div className={cn("relative mx-auto w-full overflow-hidden rounded-lg shadow-soft", weddingPortraitPhotos.includes(testimonial.photos[0] ?? "") ? "max-w-80" : "max-w-lg")}>
                    {testimonial.photos[0] ? (
                      <SmartImage src={testimonial.photos[0]} alt={testimonial.couple} wrapperClassName={weddingPortraitPhotos.includes(testimonial.photos[0]) ? "aspect-[3/4] rounded-sm" : "aspect-[4/3] rounded-sm"} className={weddingPortraitPhotos.includes(testimonial.photos[0]) ? "object-cover object-top" : "object-contain"} />
                    ) : (
                      <Portrait name={testimonial.couple} className="aspect-[4/3]" />
                    )}
                  </div>
                  <div className="flex min-w-0 flex-col items-center justify-center py-2 text-center">
                    {testimonial.text && <>
                      <Quote className="mb-4 h-7 w-7 shrink-0 text-primary" aria-hidden />
                      <blockquote className="whitespace-pre-line text-pretty text-xs font-light leading-relaxed md:text-sm">“{testimonial.text}”</blockquote>
                    </>}
                    {isTestimonialPending(testimonial) && <p className="text-lg italic text-muted-foreground">{copy.comingSoon}</p>}
                    <p className="mt-5 text-base font-medium text-primary">{testimonial.couple}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}