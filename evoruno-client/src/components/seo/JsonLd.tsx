export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Evoruno',
    url: 'https://evoruno.com',
    logo: 'https://evoruno.com/images/og-image.png',
    description:
      'Evoruno designs and engineers high-performing websites, mobile applications, and SEO solutions that help businesses evolve beyond limits.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@evoruno.com',
      contactType: 'customer support',
      availableLanguage: ['English', 'Bengali'],
    },
    sameAs: ['https://github.com/sakibnjr/evoruno'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Evoruno',
    url: 'https://evoruno.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://evoruno.com/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
