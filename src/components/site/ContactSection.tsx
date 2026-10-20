import { siteConfig } from '@/data/siteConfig';
import { ContactCard, CTAButton, Logo, SocialButtons } from './primitives';

export function ContactSection() {
  return <section id="contactos" className="scroll-mt-20 bg-gradient-brand py-14 text-primary-foreground md:py-20">
    <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-2 lg:gap-20">
      <div>
        <div className="mb-8 flex flex-wrap items-center gap-6"><Logo light className="h-20" /><p className="text-xl font-light">{siteConfig.tagline}</p></div>
        <h2 className="text-4xl font-light md:text-5xl">{siteConfig.copy.contactTitle}</h2>
        <p className="mt-4 text-primary-foreground/90">{siteConfig.copy.contactText}</p>
        <div className="mt-7 flex flex-wrap gap-3"><CTAButton href={siteConfig.links.enrol} variant="light">{siteConfig.copy.enrolButton}!</CTAButton><CTAButton href={siteConfig.links.trialClass} variant="light">{siteConfig.copy.trialButton}!</CTAButton></div>
        <div className="mt-7"><SocialButtons light /></div>
      </div>
      <div className="self-center"><ContactCard light /></div>
    </div>
  </section>;
}
