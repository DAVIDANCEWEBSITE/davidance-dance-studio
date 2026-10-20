import { createFileRoute } from '@tanstack/react-router';
import { ClassCatalogue } from '@/components/site/ClassCatalogue';
import { classGroups } from '@/data/siteConfig';
export const Route = createFileRoute('/jovens-adultos')({ head: () => ({ meta: [{ title: 'Jovens & Adultos — Aulas de Dança | Davidance' }, { name: 'description', content: classGroups.adults.description }, { property: 'og:title', content: 'Jovens & Adultos — Davidance' }, { property: 'og:description', content: classGroups.adults.description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }), component: () => <ClassCatalogue group="adults" /> });
