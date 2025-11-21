import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'Scaledata - Consultancy (Web, Chatbot, Data)', 
  description = 'Expert consultancy in Web Development, Chatbots, and Data Solutions. Serving LATAM since 2010.' 
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Consultant",
    "name": "Scaledata",
    "foundingDate": "2010",
    "areaServed": "LATAM",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-94190-6079",
      "contactType": "customer service",
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
