import { createFileRoute } from '@tanstack/react-router';
import { ClassCatalogue } from '@/components/site/ClassCatalogue';
import { classGroups } from '@/data/siteConfig';
export const Route = createFileRoute('/kids')({ head: () => ({ meta: [{ title: 'Kids — Aulas dos 3 aos 9 anos | Davidance' }, { name: 'description', content: classGroups.kids.description }, { property: 'og:title', content: 'Kids — Davidance' }, { property: 'og:description', content: classGroups.kids.description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }), component: () => <ClassCatalogue group="kids" /> });
