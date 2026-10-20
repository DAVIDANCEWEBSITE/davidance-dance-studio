import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { classGroups, getStyle, projectConfig, siteConfig } from '@/data/siteConfig';
import { PageHero } from './primitives';
import { SmartImage } from './SmartImage';

export function ClassCatalogue({ group }: { group: keyof typeof classGroups }) {
  const data = classGroups[group];
  return <><PageHero title={data.title}><p>{data.description}</p></PageHero>
    <section className="container mx-auto px-5 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.slugs.map(slug => {
          const style = getStyle(slug);
          if (!style) return <Link key={slug} to="/projeto-davidance" className="group block"><SmartImage src={siteConfig.projectHero} alt={projectConfig.title} wrapperClassName="aspect-[4/3] rounded-lg" className="group-hover:scale-105" /><div className="mt-4 flex items-center justify-between gap-3"><h2 className="text-xl font-medium">{projectConfig.title}</h2><ArrowUpRight className="h-5 w-5 text-primary" /></div></Link>;
          return <Link key={slug} to="/estilos/$slug" params={{ slug }} className="group block"><SmartImage src={style.cover} alt={style.name} wrapperClassName="aspect-[4/3] rounded-lg" className="group-hover:scale-105" /><div className="mt-4 flex items-start justify-between gap-3"><div><h2 className="text-xl font-medium">{style.name}</h2>{style.ageRange && <p className="mt-1 text-sm text-muted-foreground">{style.ageRange}</p>}</div><ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary" /></div></Link>;
        })}
      </div>
    </section></>;
}
