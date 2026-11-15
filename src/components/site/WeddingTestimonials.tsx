import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { orderedTestimonials, siteConfig } from "@/data/siteConfig";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SmartImage } from "./SmartImage";
import { Portrait } from "./Portrait";
import { SectionTitle } from "./primitives";

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
          <CarouselContent>
            {orderedTestimonials.map((testimonial, index) => (
              <CarouselItem key={`${testimonial.couple}-${index}`} aria-label={`${testimonial.couple}, ${index + 1} / ${orderedTestimonials.length}`} aria-hidden={selected !== index} inert={selected !== index}>
                <article className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                    {testimonial.photos[0] ? (
                      <SmartImage src={testimonial.photos[0]} alt={testimonial.couple} wrapperClassName="absolute inset-0" className="object-contain" />
                    ) : (
                      <Portrait name={testimonial.couple} className="aspect-[4/3]" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-hero-overlay px-5 pb-4 pt-10 text-center">
                      <p className="text-lg font-medium text-cream">{testimonial.couple}</p>
                    </div>
                  </div>
                  <div className="flex h-[15rem] flex-col items-center justify-center text-center md:h-[20rem]">
                    {testimonial.text && <>
                      <Quote className="mb-4 h-7 w-7 shrink-0 text-primary" aria-hidden />
                      <blockquote className="line-clamp-5 text-pretty text-sm font-light leading-relaxed md:line-clamp-6 md:text-base">“{testimonial.text}”</blockquote>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="link" className="mt-3 text-xs" tabIndex={selected === index ? 0 : -1}>{copy.readFullStory}</Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[85svh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg" aria-label={copy.readFullStory}>
                          <DialogTitle className="pr-6 text-primary">{testimonial.couple}</DialogTitle>
                          <DialogDescription className="text-base leading-relaxed">“{testimonial.text}”</DialogDescription>
                        </DialogContent>
                      </Dialog>
                    </>}
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-center gap-5">
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => api?.scrollPrev()} aria-label={copy.previousStory} title={copy.previousStory}><ArrowLeft /></Button>
            <span className="min-w-16 text-center text-xs tabular-nums text-muted-foreground" aria-live="polite" aria-atomic="true">{selected + 1} / {orderedTestimonials.length}</span>
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => api?.scrollNext()} aria-label={copy.nextStory} title={copy.nextStory}><ArrowRight /></Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}