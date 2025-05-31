import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export default function SEO({ 
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  image = SEO_CONFIG.defaultImage,
  noIndex = false 
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `${SEO_CONFIG.domain}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* No index if specified */}
      {noIndex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
}