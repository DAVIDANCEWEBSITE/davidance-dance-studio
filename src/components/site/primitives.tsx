import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Link2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import { SmartImage } from "./SmartImage";

/* ---------- Reveal (scroll animation) ---------- */
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string | undefined; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- SectionWave ---------- */
export function SectionWave({ className, flip, fillClass = "fill-background" }: { className?: string; flip?: boolean; fillClass?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={cn("block h-16 w-full md:h-24", flip && "rotate-180", className)}
    >
      <path className={fillClass} d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z" />
    </svg>
  );
}

/* ---------- Section title ---------- */
export function SectionTitle({ eyebrow, title, className, light }: { eyebrow?: string; title: string; className?: string; light?: boolean }) {
  return (
    <Reveal className={cn("mb-12 text-center", className)}>
      {eyebrow && (
        <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.3em]", light ? "text-violet" : "text-rose")}>{eyebrow}</p>
      )}
      <h2 className={cn("text-4xl font-light md:text-6xl", light ? "text-cream" : "text-foreground")}>{title}</h2>
    </Reveal>
  );
}

/* ---------- CTAButton ---------- */
type CTAProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "glow";
  disabled?: boolean;
  className?: string;
  icon?: boolean;
};
const ctaVariants = {
  primary: "bg-primary text-primary-foreground shadow-soft hover:bg-rose hover:-translate-y-0.5",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  light: "bg-cream text-primary hover:bg-blush hover:-translate-y-0.5 shadow-soft",
  glow: "bg-gradient-brand text-cream shadow-glow hover:-translate-y-0.5 hover:brightness-110",
};
export function CTAButton({ href, children, variant = "primary", disabled, className, icon = true }: CTAProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold whitespace-normal text-center transition-all duration-300",
    disabled ? "cursor-not-allowed bg-muted text-muted-foreground opacity-80" : ctaVariants[variant],
    className,
  );
  if (disabled || !href) {
    return (
      <span role="link" aria-disabled="true" className={cls}>
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      {icon && <ArrowUpRight className="h-4 w-4" aria-hidden />}
    </a>
  );
}

/* ---------- PageHero ---------- */
export function PageHero({ title, eyebrow, image, children }: { title: string; eyebrow?: string; image?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="container relative mx-auto px-5 text-center">
        <Reveal>
          {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rose">{eyebrow}</p>}
          <h1 className="text-4xl font-light text-foreground md:text-6xl">{title}</h1>
          {children && <div className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
        </Reveal>
        {image && (
          <Reveal delay={0.15} className="mx-auto mt-12 max-w-5xl">
            <SmartImage src={image} alt={title} eager wrapperClassName="aspect-[16/9] rounded-lg shadow-soft" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- GalleryCard ---------- */
export function GalleryCard({
  to, params, image, title, tag, className,
}: { to: "/estilos/$slug"; params: { slug: string }; image: string; title: string; tag?: string | undefined; className?: string }) {
  return (
    <Link to={to} params={params} className={cn("group relative block overflow-hidden rounded-[2rem] shadow-soft", className)} aria-label={title}>
      <SmartImage src={image} alt={title} wrapperClassName="absolute inset-0" className="group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/10 to-transparent transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-brand opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div className="min-w-0">
          {tag && (
            <span className="mb-2 inline-block translate-y-2 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {tag}
            </span>
          )}
          <h3 className="truncate text-2xl font-normal text-cream md:text-3xl">{title}</h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-primary transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/* ---------- Social buttons ---------- */
export function SocialButtons({ light }: { light?: boolean }) {
  const items = [
    { href: siteConfig.links.instagram, label: "Instagram", Icon: Instagram },
    { href: siteConfig.links.facebook, label: "Facebook", Icon: Facebook },
    { href: siteConfig.links.linktree, label: "Linktree", Icon: Link2 },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5",
            light ? "bg-cream/15 text-cream hover:bg-cream/25" : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground",
          )}
        >
          <Icon className="h-4 w-4" aria-hidden /> {label}
        </a>
      ))}
    </div>
  );
}

/* ---------- ContactCard ---------- */
export function ContactCard({ light, className }: { light?: boolean; className?: string }) {
  const c = siteConfig.contacts;
  const row = "flex items-start gap-4";
  const icon = cn("mt-0.5 h-5 w-5 shrink-0", light ? "text-cream" : "text-primary");
  const linkCls = light ? "text-cream hover:underline" : "text-foreground hover:text-primary";
  return (
    <div className={cn("space-y-5", light ? "text-cream" : "text-foreground", className)}>
      <div className={row}><Phone className={icon} aria-hidden /><a className={linkCls} href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a></div>
      <div className={row}><Mail className={icon} aria-hidden /><a className={linkCls} href={`mailto:${c.email}`}>{c.email}</a></div>
      <div className={row}>
        <MapPin className={icon} aria-hidden />
        <div>
          <p>{c.address}</p>
          <a href={siteConfig.links.maps} target="_blank" rel="noopener noreferrer" className={cn("mt-1 inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline", light ? "text-cream" : "text-primary")}>
            Ver localização <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
      <div className={row}><Clock className={icon} aria-hidden /><div>{c.hours.map((h) => <p key={h}>{h}</p>)}</div></div>
    </div>
  );
}

/* ---------- Logo ---------- */
export function Logo({ light, className }: { light?: boolean; className?: string }) {
  if (siteConfig.logo)
    return (
      <img
        src={siteConfig.logo}
        alt="Davidance"
        className={cn("h-10 w-auto", light ? "invert" : "", className)}
      />
    );
  return (
    <span className={cn("font-display text-2xl italic tracking-tight transition-colors duration-500", light ? "text-cream" : "text-primary", className)}>
      Davidance
    </span>
  );
}
