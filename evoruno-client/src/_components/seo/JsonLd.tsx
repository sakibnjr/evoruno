export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Evoruno',
    url: 'https://evoruno.com',
    logo: 'https://evoruno.com/icon.png',
    description:
      'Evoruno is a digital solutions and modern technology provider specializing in high-performance web development, mobile applications, and technical SEO architecture.',
    email: 'contact@evoruno.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    sameAs: [],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Evoruno',
    url: 'https://evoruno.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://evoruno.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
