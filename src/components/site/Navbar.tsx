import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/siteConfig";
import { Logo } from "./primitives";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const isProject = pathname === "/projeto-davidance";
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setVh(window.innerHeight);
    onScroll(); onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const overHero = (isHome && scrollY < vh * 0.75) || (isProject && scrollY < vh * 0.6);
  const hideLinks = isHome && overHero;
  const solid = !overHero && scrollY > 10;

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-500",
      solid ? "bg-cream/80 shadow-soft backdrop-blur-lg" : "bg-transparent",
    )}>
      <nav className="container mx-auto flex h-20 items-center justify-between px-5" aria-label="Principal">
        <Link to="/" aria-label="Davidance — início" className="shrink-0">
          <Logo light={overHero && !open} />
        </Link>
        <motion.ul
          className="hidden items-center gap-1 lg:flex"
          animate={{ opacity: hideLinks ? 0 : 1, y: hideLinks ? -8 : 0 }}
          style={{ pointerEvents: hideLinks ? "none" : "auto" }}
          aria-hidden={hideLinks}
        >
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                tabIndex={hideLinks ? -1 : 0}
                activeOptions={{ exact: l.to === "/" }}
                className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", overHero ? "text-cream hover:bg-cream/15" : "text-foreground hover:bg-secondary hover:text-primary")}
                activeProps={{ className: overHero ? "bg-cream/15" : "bg-secondary text-primary" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.button
          animate={{ opacity: hideLinks && !open ? 0 : 1 }}
          style={{ pointerEvents: hideLinks && !open ? "none" : "auto" }}
          className={cn("relative z-50 rounded-full p-2.5 lg:hidden", open ? "text-primary" : overHero ? "text-cream" : "text-primary")}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-gradient-soft px-8 lg:hidden"
          >
            <ul className="space-y-4">
              {navLinks.map((l, i) => (
                <motion.li key={l.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
                  <Link to={l.to} activeOptions={{ exact: l.to === "/" }} className="font-display text-4xl text-foreground" activeProps={{ className: "text-primary italic" }}>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={siteConfig.links.trialClass} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex w-fit rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Vem experimentar uma aula
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function MobileTrialButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.9);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
          href={siteConfig.links.trialClass} target="_blank" rel="noopener noreferrer"
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow md:hidden"
        >
          Vem experimentar uma aula
        </motion.a>
      )}
    </AnimatePresence>
  );
}
