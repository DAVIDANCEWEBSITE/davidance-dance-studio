import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig, styles, teachers, getStyle } from "@/data/siteConfig";
import { ContactCard, CTAButton, GalleryCard, Reveal, SectionTitle, SectionWave, SocialButtons } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Davidance — Escola de Dança onde a dança é família" },
      { name: "description", content: "Ballet, Hip Hop, Contemporâneo, Jazz, Dança Latina e muito mais. Vem experimentar uma aula na Davidance." },
      { property: "og:title", content: "Davidance — Escola de Dança" },
      { property: "og:description", content: "Uma escola de dança com alma. Descobre os nossos estilos, professores e instalações." },
      { property: "og:image", content: siteConfig.hero.poster },
      { name: "twitter:image", content: siteConfig.hero.poster },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StylesSection />
      <ValuesSection />
      <TeachersSection />
      <FacilitiesSection />
      <ContactSection />
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  return (
    <section className="relative h-[100svh] overflow-hidden bg-plum" aria-label="Vídeo de apresentação">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={siteConfig.hero.video}
          poster={siteConfig.hero.poster}
          autoPlay muted loop playsInline preload="auto"
          aria-hidden
        />
      </motion.div>
      <div className="absolute inset-0 bg-hero-overlay" />
      {siteConfig.showHeroTagline && (
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <h1 className="text-center text-5xl font-light italic text-cream md:text-7xl">{siteConfig.tagline}</h1>
        </div>
      )}
      {!siteConfig.showHeroTagline && <h1 className="sr-only">Davidance — Escola de Dança</h1>}
      <a href="#estilos" aria-label="Descer" className="absolute bottom-28 left-1/2 -translate-x-1/2 text-cream md:bottom-32">
        <motion.span className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          Descobre <ChevronDown className="h-5 w-5" />
        </motion.span>
      </a>
      <div className="absolute inset-x-0 bottom-0">
        <SectionWave />
      </div>
    </section>
  );
}

function StylesSection() {
  const spans = ["md:row-span-2", "", "", "md:row-span-2", "", "md:row-span-2", "", ""];
  return (
    <section id="estilos" className="relative -mt-px scroll-mt-20 py-16 md:py-24">
      <div className="blob -right-32 top-20 h-96 w-96 bg-violet" />
      <div className="container relative mx-auto px-5">
        <SectionTitle eyebrow="Encontra o teu ritmo" title="Os Nossos Estilos" />
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.08} className={cn(spans[i % spans.length])}>
              <GalleryCard to="/estilos/$slug" params={{ slug: s.slug }} image={s.cover} title={s.name} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="relative bg-gradient-to-b from-background via-blush to-background py-20 md:py-28">
      <div className="container mx-auto grid items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rose">Quem Somos</p>
          <h2 className="text-4xl font-light text-foreground md:text-6xl">Os Nossos <em className="text-primary">Valores</em></h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Na Davidance, acreditamos que a dança é muito mais do que passos e coreografias: é uma família. Aqui, cada aluno é recebido com carinho e respeito, independentemente da idade, da experiência ou do sonho que traz consigo.</p>
            <p>Movidos pela paixão, trabalhamos todos os dias com dedicação para criar um espaço inclusivo onde se cresce, se arrisca e se celebra. Porque quando dançamos juntos, ficamos mais fortes — dentro e fora do estúdio.</p>
          </div>
          <div className="mt-10"><CTAButton href={siteConfig.links.joinFamily} variant="glow">Junta-te à nossa família</CTAButton></div>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="absolute -bottom-6 -right-4 h-full w-full rounded-[3rem] bg-gradient-to-br from-violet to-rose opacity-70" aria-hidden />
          <SmartImage src={siteConfig.groupPhoto} alt="Fotografia de grupo da família Davidance" wrapperClassName="relative aspect-[4/3] rounded-[3rem] shadow-soft" />
        </Reveal>
      </div>
    </section>
  );
}

function TeachersSection() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="blob -left-32 top-1/3 h-96 w-96 bg-rose" />
      <div className="container relative mx-auto px-5">
        <SectionTitle eyebrow="Quem te guia" title="Os Nossos Professores" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {teachers.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1} className={cn(i % 3 === 1 && "md:translate-y-12")}>
              <GalleryCard to="/estilos/$slug" params={{ slug: t.styleSlug }} image={t.photo} title={t.name} tag={getStyle(t.styleSlug)?.name} className="aspect-[3/4]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const photos = siteConfig.facilities.photos;
  const [idx, setIdx] = useState<number | null>(null);
  const layout = ["md:col-span-2 md:row-span-2", "", "", "md:col-span-2", "", "md:col-span-2"];
  return (
    <section className="relative bg-gradient-to-b from-background via-lilac to-background py-20 md:py-28">
      <div className="container mx-auto px-5">
        <SectionTitle eyebrow="O nosso espaço" title="As Nossas Instalações" className="mb-6" />
        <Reveal><p className="mx-auto mb-12 max-w-xl text-center text-lg text-muted-foreground">{siteConfig.facilities.text}</p></Reveal>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal key={p + i} delay={i * 0.06} className={layout[i % layout.length]}>
              <button onClick={() => setIdx(i)} className="group block h-full w-full overflow-hidden rounded-[2rem] shadow-soft" aria-label={`Ampliar fotografia ${i + 1} das instalações`}>
                <SmartImage src={p} alt={`Instalações Davidance ${i + 1}`} wrapperClassName="h-full w-full" className="group-hover:scale-105" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox images={photos} index={idx} onClose={() => setIdx(null)} onChange={setIdx} alt="Instalações" />
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative px-5 pb-10 pt-10">
      <Reveal className="container relative mx-auto overflow-hidden rounded-[3rem] bg-gradient-brand p-8 shadow-glow md:p-16">
        <div className="blob -right-20 -top-20 h-80 w-80 bg-cream opacity-20" />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-light text-cream md:text-6xl">Fale <em>connosco!</em></h2>
            <p className="mt-4 max-w-md text-cream/85">Tens dúvidas ou queres conhecer-nos? Estamos à tua espera.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={siteConfig.links.enrol} variant="light">Inscreve-te!</CTAButton>
              <CTAButton href={siteConfig.links.trialClass} variant="light" className="bg-transparent text-cream ring-2 ring-cream hover:bg-cream/15">Vem experimentar uma aula!</CTAButton>
            </div>
            <div className="mt-8"><SocialButtons light /></div>
          </div>
          <ContactCard light className="rounded-[2rem] bg-plum/20 p-8 backdrop-blur" />
        </div>
      </Reveal>
    </section>
  );
}
