import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'Scaledata | Consultoria de Dados e Desenvolvimento Web Enterprise', 
  description = 'Transformamos complexidade em autoridade. Consultoria de dados, desenvolvimento web enterprise e automação para líderes na América Latina. Desde 2010.' 
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Scaledata",
    "description": "Consultoria de Dados e Desenvolvimento Web Enterprise.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "São Paulo",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "areaServed": ["BR", "AR", "CL", "CO"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-94190-6079",
      "contactType": "sales",
      "email": "contato@scaledata.com.br"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="São Paulo" />
      <meta name="geo.position" content="-23.5505;-46.6333" />
      <meta name="ICBM" content="-23.5505, -46.6333" />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
