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
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const overHero = (isHome && scrollY < vh * 0.75) || (isProject && scrollY < vh * 0.6);
  const solid = !overHero;

  return (
    <>
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-500",
      open ? "bg-cream" : solid ? "bg-cream/80 shadow-soft backdrop-blur-lg" : "bg-transparent",
    )}>
      <nav className={cn("container relative z-50 mx-auto flex items-center justify-between px-5 transition-all duration-500", isHome && overHero && !open ? "h-24 md:h-28" : "h-20")} aria-label="Principal">
        <Link to="/" aria-label="Davidance — início" className="shrink-0">
          <Logo light={overHero && !open} className={cn("transition-all duration-500", isHome && overHero && !open ? "h-14 drop-shadow-lg md:h-16" : "h-10")} />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", overHero ? "text-cream hover:bg-brand-hover hover:text-cream" : "text-foreground hover:bg-brand-hover hover:text-cream")}
                activeProps={{ className: overHero ? "bg-cream/15" : "bg-secondary text-primary" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={cn("rounded-full p-2.5 lg:hidden", open ? "text-primary hover:bg-secondary" : overHero ? "text-cream hover:bg-cream/15" : "text-primary hover:bg-secondary")}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
    </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-cream px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="divide-y divide-border">
              {navLinks.map((l, i) => (
                <motion.li key={l.to} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    className="block py-4 text-xl font-medium text-foreground transition-colors hover:text-brand-hover"
                    activeProps={{ className: "text-brand-hover" }}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto space-y-1 pt-10 text-sm text-muted-foreground">
              <a href={`tel:${siteConfig.contacts.phone.replace(/\s/g, "")}`} className="block hover:text-brand-hover">{siteConfig.contacts.phone}</a>
              <a href={`mailto:${siteConfig.contacts.email}`} className="block hover:text-brand-hover">{siteConfig.contacts.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
