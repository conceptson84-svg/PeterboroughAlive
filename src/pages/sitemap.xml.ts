import type { APIRoute } from 'astro';
import { pastEvents } from '../data/pastEvents';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://www.peterboroughaliveconcert.org')).origin;
  const paths = [
    '/',
    '/past-events',
    ...pastEvents.map((e) => `/past-events/${e.year}`),
  ];
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
    .map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
