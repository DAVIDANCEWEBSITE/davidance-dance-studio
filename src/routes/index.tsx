import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type RefObject } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { siteConfig, teachers, teamPhoto, homeCards } from "@/data/siteConfig";
import { CTAButton, Logo, Reveal, SectionTitle } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Portrait } from "@/components/site/Portrait";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Davidance — Estúdio de Dança em Paio Pires" },
      { name: "description", content: siteConfig.copy.blocks[0]?.text },
      { property: "og:title", content: "Davidance — Estúdio de Dança" },
      { property: "og:description", content: siteConfig.copy.familyPhrase },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
function Home() {
  return (
    <>
      <Hero />
      <AudienceSection />
      <Presentation />
      <TeamSection />
      <SpaceSection />
    </>
  );
}
type YTPlayer = {
  destroy?: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted?: () => boolean;
  playVideo: () => void;
  setVolume: (v: number) => void;
  seekTo: (s: number, allow: boolean) => void;
};

function SoundControl({ playerRef }: { playerRef: RefObject<YTPlayer | null> }) {
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(60);
  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    const actuallyMuted = p.isMuted ? p.isMuted() : muted;
    if (actuallyMuted) {
      p.unMute();
      p.setVolume(volume || 60);
      if (!volume) setVolume(60);
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };
  const change = (v: number) => {
    setVolume(v);
    const p = playerRef.current;
    if (!p) return;
    p.setVolume(v);
    if (v === 0) {
      p.mute();
      setMuted(true);
    } else if (muted) {
      p.unMute();
      setMuted(false);
    }
  };
  const Icon = muted || volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;
  return (
    <div className="group absolute bottom-8 right-5 z-10 flex items-center gap-2 rounded-full bg-plum/50 px-2 py-2 text-cream backdrop-blur md:bottom-10 md:right-8">
      <input
        type="range"
        min={0}
        max={100}
        value={muted ? 0 : volume}
        onChange={(e) => change(Number(e.target.value))}
        aria-label="Volume do vídeo"
        className="w-0 cursor-pointer accent-primary opacity-0 transition-all duration-300 group-hover:w-24 group-hover:opacity-100 group-focus-within:w-24 group-focus-within:opacity-100"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        aria-label={muted ? "Ativar som" : "Desativar som"}
        className="rounded-full p-2 transition hover:bg-cream/20"
      >
        <Icon className="h-5 w-5" />
      </Button>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [playing, setPlaying] = useState(false);

  // Player do YouTube sem controlos, em loop infinito (via IFrame API).
  useEffect(() => {
    const host = hostRef.current;
    if (!host || !siteConfig.hero.youtubeId) return;
    let player: YTPlayer | null = null;
    let cancelled = false;

    const build = () => {
      if (cancelled) return;
      const w = window as unknown as { YT?: { Player?: unknown } };
      if (!w.YT || typeof w.YT.Player !== "function") return;
      const YT = w.YT as { Player: new (el: HTMLElement, opts: unknown) => YTPlayer };
      player = new YT.Player(host, {
        videoId: siteConfig.hero.youtubeId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            e.target.mute();
            e.target.setVolume(60);
            e.target.playVideo();
            playerRef.current = e.target;
          },
          onStateChange: (e: { data: number; target: YTPlayer }) => {
            if (e.data === 1) setPlaying(true);
            if (e.data === 0) e.target.seekTo(0, true); // volta ao início quando acaba
          },
        },
      });
    };

    const w2 = window as unknown as {
      YT?: { Player?: unknown };
      onYouTubeIframeAPIReady?: () => void;
    };
    if (w2.YT && typeof w2.YT.Player === "function") {
      build();
    } else {
      const prev = w2.onYouTubeIframeAPIReady;
      w2.onYouTubeIframeAPIReady = () => {
        prev?.();
        build();
      };
      if (!document.querySelector('script[src*="iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }
    return () => {
      cancelled = true;
      playerRef.current = null;
      player?.destroy?.();
    };
  }, []);

  return (
    <section
      className="relative h-[100svh] overflow-hidden bg-plum"
      aria-label="Vídeo de apresentação"
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] w-[177.78vh] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2">
          <div ref={hostRef} className="h-full w-full" />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-hero-overlay" />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-plum transition-opacity duration-1000 ${playing ? "opacity-0" : "opacity-100"}`}
      >
        <Logo light className="h-auto w-2/3 max-w-md opacity-90" />
      </div>
      {siteConfig.showHeroTagline && (
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <h1 className="text-center text-5xl font-light italic text-cream md:text-7xl">
            {siteConfig.tagline}
          </h1>
        </div>
      )}
      {!siteConfig.showHeroTagline && <h1 className="sr-only">Davidance — Escola de Dança</h1>}
      <SoundControl playerRef={playerRef} />
    </section>
  );
}

type HomeCard = { title: string; subtitle?: string; text: string; to: string };

/** Cortina da marca: em repouso só título e linha; ao passar o rato/tocar revela idade e frase. */
function RevealCard({ c, image }: { c: HomeCard; image: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Link
      to={c.to}
      data-open={open}
      onClick={(e) => {
        const touch = window.matchMedia("(hover: none)").matches;
        if (touch && !open) {
          e.preventDefault();
          setOpen(true);
        }
      }}
      className="group relative flex aspect-[4/3] min-w-0 flex-col justify-end overflow-hidden rounded-lg shadow-soft transition-shadow duration-500 hover:shadow-glow data-[open=true]:shadow-glow"
    >
      <SmartImage
        src={image}
        alt={c.title}
        wrapperClassName="absolute inset-0"
        className="transition-transform duration-[1.2s] group-hover:scale-105 group-data-[open=true]:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-plum/10 via-plum/30 to-plum/85" />
      <div
        aria-hidden
        className="absolute inset-0 translate-y-full bg-gradient-brand opacity-90 transition-transform duration-700 ease-out group-hover:translate-y-0 group-data-[open=true]:translate-y-0"
      />
      <div className="relative p-5">
        <h3 className="text-xl font-medium text-cream">{c.title}</h3>
        <span
          aria-hidden
          className="mt-2 block h-px w-10 bg-cream/80 transition-all duration-500 group-hover:w-20 group-data-[open=true]:w-20"
        />
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-data-[open=true]:grid-rows-[1fr] group-data-[open=true]:opacity-100">
          <div className="overflow-hidden">
            {c.subtitle && <p className="mt-3 text-sm font-medium text-cream">{c.subtitle}</p>}
            <p className="mt-2 text-sm leading-relaxed text-cream/90">{c.text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function AudienceSection() {
  const images = [siteConfig.kidsImage, siteConfig.youngAdultsImage, siteConfig.weddingsHero];
  const cards = homeCards as unknown as HomeCard[];
  return (
    <section className="container mx-auto px-5 pb-12 pt-16 md:pb-16 md:pt-20">
      <SectionTitle title={siteConfig.copy.homeTitle} />
      <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-3">
        {cards.map((c, i) => (
          <RevealCard key={c.to} c={c} image={images[i] ?? ""} />
        ))}
      </div>
    </section>
  );
}
function PresentationCard({
  block,
}: {
  block: { title: string; text: string; quote?: string; photo?: string };
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      whileHover={{ y: reduce ? 0 : -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      data-open={open}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
      className="group relative flex h-full min-h-[24rem] cursor-pointer flex-col justify-end overflow-hidden rounded-[2rem] border border-border bg-plum shadow-soft transition-shadow duration-500 hover:shadow-glow data-[open=true]:shadow-glow"
    >
      {block.photo && (
        <SmartImage
          src={block.photo}
          alt={block.title}
          wrapperClassName="absolute inset-0"
          className="transition-transform duration-[1.2s] group-hover:scale-105 group-data-[open=true]:scale-105"
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-plum/10 via-plum/30 to-plum/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 translate-y-full bg-gradient-brand opacity-90 transition-transform duration-700 ease-out group-hover:translate-y-0 group-data-[open=true]:translate-y-0"
      />
      <div className="relative p-7 md:p-8">
        <h3 className="text-xl font-medium uppercase tracking-wide text-cream md:text-2xl">
          {block.title}
        </h3>
        <span
          aria-hidden
          className="mt-3 block h-px w-10 bg-cream/80 transition-all duration-500 group-hover:w-20 group-data-[open=true]:w-20"
        />
        <p className="max-h-0 translate-y-4 overflow-hidden text-pretty text-sm leading-relaxed text-cream/90 opacity-0 transition-all duration-700 group-hover:mt-4 group-hover:max-h-[30rem] group-hover:translate-y-0 group-hover:opacity-100 group-data-[open=true]:mt-4 group-data-[open=true]:max-h-[30rem] group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100 motion-reduce:transition-none">
          {block.text}
        </p>
      </div>
    </motion.article>
  );
}

function Presentation() {
  return (
    <section className="bg-secondary/40 py-12 md:py-16">
      <div className="container mx-auto px-5">
        <SmartImage
          src={siteConfig.groupPhoto}
          alt={siteConfig.copy.presentationTitle}
          wrapperClassName="mx-auto max-w-4xl rounded-lg"
          className="h-auto object-contain"
        />
        <h2 className="mx-auto mt-10 max-w-4xl whitespace-nowrap text-center text-lg font-light sm:text-2xl md:text-3xl">
          {siteConfig.copy.presentationTitle}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {siteConfig.copy.blocks.map((b) => (
            <Reveal key={b.title} delay={0} className="h-full">
              <PresentationCard block={b} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mx-auto max-w-sm text-balance text-sm font-light sm:max-w-4xl md:whitespace-nowrap md:text-lg">
            {siteConfig.copy.familyPhrase}
          </p>
          <div className="mt-6">
            <CTAButton href={siteConfig.links.enrol} variant="glow" icon={false}>
              {siteConfig.copy.familyButton}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
function TeamSection() {
  const f = siteConfig.founder;
  return (
    <section className="container mx-auto px-5 py-12 md:py-16">
      <SectionTitle title={siteConfig.copy.teamTitle} />
      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[240px_1fr]">
        <Portrait
          src={f.photo}
          name={f.name}
          className="mx-auto aspect-[3/4] w-full max-w-[240px] rounded-lg"
        />
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-primary">{f.role}</p>
          <h3 className="mt-2 text-2xl font-light md:text-3xl">{f.name}</h3>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {f.intro}
          </p>
          <Button asChild className="mt-5 h-auto whitespace-normal rounded-full px-6 py-3">
            <Link to="/sofia-david-luz">{siteConfig.copy.biographyButton}</Link>
          </Button>
        </div>
      </div>
      <h2 className="mb-8 mt-14 text-center text-2xl font-light md:text-3xl">
        {siteConfig.copy.teachersTitle}
      </h2>
      <div className="mx-auto grid max-w-4xl items-stretch gap-8 lg:grid-cols-[320px_1fr]">
        <SmartImage
          src={teamPhoto}
          alt={siteConfig.copy.teamTitle}
          wrapperClassName="mx-auto aspect-[1387/1920] w-full rounded-lg shadow-soft md:max-w-2xl lg:max-w-none"
          className="object-contain"
        />
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 md:mx-auto md:max-w-2xl lg:h-0 lg:max-w-none lg:min-h-full lg:mx-0 lg:grid-rows-2">
          {teachers.map((t) => (
            <article key={t.name} className="flex min-h-0 min-w-0 flex-col">
              <Portrait
                src={t.photo}
                name={t.name}
                className="aspect-square rounded-lg lg:aspect-auto lg:min-h-0 lg:flex-1"
              />
              <h3 className="mt-2 text-xs font-medium sm:text-sm">{t.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function SpaceSection() {
  const photos = siteConfig.facilities.photos;
  const [main, ...previews] = photos;
  return (
    <section className="bg-secondary/40 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-5">
        <SectionTitle title={siteConfig.copy.spaceTitle} />
        <p className="mx-auto max-w-2xl text-balance text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {siteConfig.facilities.text}
        </p>
        <SmartImage
          src={main}
          alt={siteConfig.copy.spaceTitle}
          wrapperClassName="mt-8 aspect-[16/10] w-full rounded-lg"
          className="h-full w-full"
        />
        <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-3 sm:gap-3 md:mt-4 md:grid-cols-5 md:gap-4">
          {previews.map((p) => (
            <SmartImage
              key={p}
              src={p}
              alt={siteConfig.copy.spaceTitle}
              wrapperClassName="aspect-[4/3] w-full rounded-lg"
              className="h-full w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
