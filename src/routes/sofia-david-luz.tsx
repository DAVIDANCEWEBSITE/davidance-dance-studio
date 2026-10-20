import { createFileRoute } from '@tanstack/react-router';
import { siteConfig } from '@/data/siteConfig';
import { CTAButton } from '@/components/site/primitives';
import { Portrait } from '@/components/site/Portrait';
export const Route = createFileRoute('/sofia-david-luz')({ head: () => ({ meta: [{ title: 'Sofia David Luz — Fundadora e Diretora Artística | Davidance' }, { name: 'description', content: siteConfig.founder.intro }, { property: 'og:title', content: 'Sofia David Luz — Davidance' }, { property: 'og:description', content: siteConfig.founder.intro }, { property: 'og:type', content: 'profile' }, { name: 'twitter:card', content: 'summary_large_image' }] }), component: FounderPage });
function FounderPage() {
 const f = siteConfig.founder;
 return <section className="container mx-auto px-5 pb-20 pt-32"><div className="grid items-start gap-12 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]"><Portrait src={f.photo} name={f.name} className="aspect-[3/4] w-full rounded-lg lg:sticky lg:top-28" /><div><p className="text-sm font-medium text-primary">{f.role}</p><h1 className="mt-3 text-4xl font-light md:text-5xl">{f.name}</h1><div className="mt-10 space-y-8">{f.biography.map(b => <div key={b.title}><h2 className="text-2xl font-medium">{b.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p></div>)}</div><div className="mt-8"><CTAButton href={f.instagram}>{siteConfig.copy.instagramButton}</CTAButton></div></div></div></section>;
}
