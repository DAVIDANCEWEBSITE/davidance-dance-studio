import { siteConfig } from "@/data/siteConfig";
import { ContactCard, CTAButton, Logo, SectionWave, SocialButtons } from "./primitives";

/** Rodapé único do site: caixa colorida de contactos com onda no topo. */
export function ContactSection() {
  return (
    <footer id="contactos" className="mt-auto scroll-mt-20">
      <div className="bg-gradient-brand pb-8 text-primary-foreground">
        <SectionWave flip fillClass="fill-background" className="-mt-px mb-4" />
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-2 lg:gap-16">
          <div>
            <Logo light className="h-16 md:h-20" />
            <p className="mt-3 text-lg font-light">{siteConfig.tagline}</p>
            <h2 className="mt-8 text-3xl font-light md:text-4xl">{siteConfig.copy.contactTitle}</h2>
            <p className="mt-3 text-sm text-primary-foreground/90">{siteConfig.copy.contactText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href={siteConfig.links.enrol} variant="light">
                {siteConfig.copy.enrolButton}!
              </CTAButton>
              <CTAButton href={siteConfig.links.trialClass} variant="outlineLight">
                {siteConfig.copy.trialButton}!
              </CTAButton>
            </div>
            <div className="mt-6">
              <SocialButtons light />
            </div>
          </div>
          <div className="self-center">
            <ContactCard light />
          </div>
        </div>
        <div className="container mx-auto mt-10 border-t border-cream/20 px-5 pt-6 text-center text-sm">
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Davidance. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
