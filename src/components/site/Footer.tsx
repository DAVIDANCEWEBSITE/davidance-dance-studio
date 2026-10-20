import { Link } from "@tanstack/react-router";
import { navLinks, siteConfig } from "@/data/siteConfig";
import { Logo, SectionWave, SocialButtons } from "./primitives";

export function Footer() {
  const c = siteConfig.contacts;
  return (
    <footer className="relative mt-auto">
      <SectionWave fillClass="fill-plum" />
      <div className="-mt-px bg-plum pb-24 pt-6 text-cream/80 md:pb-10">
        <div className="container mx-auto grid gap-10 px-5 md:grid-cols-3">
          <div>
            <Logo light className="h-20 md:h-24" />
            <p className="mt-3 max-w-xs text-sm">{siteConfig.tagline}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="/jovens-adultos">Jovens &amp; Adultos</Link>
            </li>
            <li>
              <a href="#contactos">Contactos</a>
            </li>
          </ul>
          <div className="space-y-1 text-sm">
            <p>{c.address}</p>
            <p>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                {c.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${c.email}`} className="hover:text-cream">
                {c.email}
              </a>
            </p>
            <div className="pt-4">
              <SocialButtons light />
            </div>
          </div>
        </div>
        <p className="container mx-auto mt-10 px-5 text-xs text-cream/50">
          © {new Date().getFullYear()} Davidance. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
