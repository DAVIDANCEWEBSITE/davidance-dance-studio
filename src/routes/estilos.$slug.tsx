import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarClock, Camera, Users } from "lucide-react";
import { getStyle, getTeacherByName, siteConfig, styles } from "@/data/siteConfig";
import { CTAButton, GalleryCard, Reveal, SectionTitle } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/estilos/$slug")({
  loader: ({ params }) => {
    const style = getStyle(params.slug);
    if (!style) throw notFound();
    return { style };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Estilo não encontrado — Davidance" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.style;
    const t = `${s.name} — Davidance`;
    return {
      meta: [
        { title: t },
        { name: "description", content: s.description },
        { property: "og:title", content: t },
        { property: "og:description", content: s.description },
        { property: "og:image", content: s.cover },
        { name: "twitter:image", content: s.cover },
      ],
    };
  },
  component: StylePage,
});

function StylePage() {
  const { style } = Route.useLoaderData();
  const teacher = getTeacherByName(style.teacher);
  const [idx, setIdx] = useState<number | null>(null);
  const others = styles.filter((s) => s.slug !== style.slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden pt-28">
        <div className="blob -left-20 top-40 h-80 w-80 bg-violet" />
        <div className="container relative mx-auto px-5">
          <Reveal>
            <SmartImage src={style.cover} alt={style.name} eager wrapperClassName="aspect-[16/9] rounded-[3rem] rounded-tr-[10rem] rounded-bl-[10rem] shadow-soft md:aspect-[21/9]" />
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rose">Estilo</p>
              <h1 className="text-5xl font-light text-foreground md:text-7xl">{style.name}</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{style.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href={siteConfig.links.trialClass} variant="glow">Vem experimentar uma aula!</CTAButton>
                <CTAButton href={siteConfig.links.enrol} variant="outline">Inscreve-te!</CTAButton>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="space-y-4">
              <div className="flex items-center gap-4 rounded-[2rem] bg-card p-5 shadow-soft">
                {teacher && <SmartImage src={teacher.photo} alt={teacher.name} wrapperClassName="h-14 w-14 shrink-0 rounded-full" />}
                <div><p className="text-xs uppercase tracking-widest text-muted-foreground">Professor(a)</p><p className="font-display text-xl">{style.teacher}</p></div>
              </div>
              <div className="flex items-center gap-4 rounded-[2rem] bg-card p-5 shadow-soft">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lilac text-violet"><Users className="h-6 w-6" /></span>
                <div><p className="text-xs uppercase tracking-widest text-muted-foreground">Faixa etária</p><p className="font-display text-xl">{style.ageRange}</p></div>
              </div>
              <div className="flex items-start gap-4 rounded-[2rem] bg-card p-5 shadow-soft">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blush text-primary"><CalendarClock className="h-6 w-6" /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Horário das aulas</p>
                  <ul className="mt-1 space-y-1">{style.schedule.map((s) => <li key={s.day + s.time}><strong className="font-semibold">{s.day}</strong> · {s.time}</li>)}</ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background via-blush to-background py-20">
        <div className="container mx-auto px-5">
          <SectionTitle title="Galeria" />
          {style.gallery.length === 0 ? (
            <div className="mx-auto flex max-w-md flex-col items-center rounded-[2rem] border-2 border-dashed border-rose/40 p-10 text-center">
              <Camera className="h-10 w-10 text-rose" />
              <p className="mt-4 font-display text-2xl">Fotografias a caminho</p>
              <p className="mt-2 text-muted-foreground">Em breve vais poder ver aqui os melhores momentos destas aulas.</p>
            </div>
          ) : (
            <div className="columns-2 gap-4 md:columns-3">
              {style.gallery.map((g, i) => (
                <button key={g + i} onClick={() => setIdx(i)} className="group mb-4 block w-full overflow-hidden rounded-[1.5rem]" aria-label={`Ampliar fotografia ${i + 1}`}>
                  <SmartImage src={g} alt={`${style.name} ${i + 1}`} wrapperClassName={i % 2 ? "aspect-[3/4]" : "aspect-square"} className="group-hover:scale-105" />
                </button>
              ))}
            </div>
          )}
        </div>
        <Lightbox images={style.gallery} index={idx} onClose={() => setIdx(null)} onChange={setIdx} alt={style.name} />
      </section>

      <section className="container mx-auto px-5 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-light md:text-4xl">Outros estilos</h2>
          <Link to="/estilos" className="shrink-0 text-sm font-semibold text-primary hover:underline">Ver todos</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {others.map((s) => <GalleryCard key={s.slug} to="/estilos/$slug" params={{ slug: s.slug }} image={s.cover} title={s.name} className="aspect-[4/5]" />)}
        </div>
      </section>
    </>
  );
}
