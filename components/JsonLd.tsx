import { LINKEDIN_URL } from '@/lib/constants';

export default function JsonLd({ locale }: { locale: string }) {
  const isEs = locale === 'es';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jfgarcia-portfolio.vercel.app';

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José Fernando García Pérez',
    jobTitle: 'Senior Geospatial Data Engineer & Data Analyst',
    url: baseUrl,
    email: 'mailto:jfgarci206@gmail.com',
    telephone: '+57-317-660-8420',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellín',
      addressCountry: 'CO',
    },
    sameAs: [LINKEDIN_URL],
    knowsAbout: [
      'Power BI',
      'DAX',
      'Python',
      'Mapbox',
      'SQL',
      'GIS',
      'PostGIS',
      'Azure',
      'Data Engineering',
      'RAG',
    ],
    description: isEs
      ? 'Senior Geospatial Data Engineer & Data Analyst. 20+ años SIG, 6+ años analítica. Abierto a remoto USD/EUR.'
      : 'Senior Geospatial Data Engineer & Data Analyst. 20+ years GIS, 6+ years data analytics. Open to remote USD/EUR.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
