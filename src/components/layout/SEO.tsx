interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string[];
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  articleSection?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
  businessInfo?: {
    name?: string;
    type?: string;
    address?: string;
    phone?: string;
    email?: string;
    priceRange?: string;
  };
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website', 
  image,
  keywords = [],
  author = 'User Labs',
  publishedDate,
  modifiedDate,
  articleSection,
  breadcrumbs = [],
  faq = [],
  businessInfo,
  noindex = false,
  nofollow = false
}: SEOProps) {
  const siteTitle = 'User Labs';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const domain = 'https://userlabs.co.nz';
  const defaultImage = `${domain}/og-image.png`;
  const canonicalUrl = canonical ? `${domain}${canonical}` : domain;
  const currentDate = new Date().toISOString();
  
  // Generate robots content
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
  
  // Generate structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "User Labs",
    "url": domain,
    "logo": `${domain}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+64-27-123-4567",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NZ",
      "addressRegion": "Auckland"
    },
    "sameAs": [
      "https://www.linkedin.com/company/user-labs"
    ]
  };

  // Generate structured data for WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteTitle,
    "url": domain,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Generate breadcrumb structured data
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${domain}${crumb.url}`
    }))
  } : null;

  // Generate FAQ structured data
  const faqSchema = faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Generate LocalBusiness structured data
  const localBusinessSchema = businessInfo ? {
    "@context": "https://schema.org",
    "@type": businessInfo.type || "LocalBusiness",
    "name": businessInfo.name || "User Labs",
    "image": image || defaultImage,
    "url": domain,
    "telephone": businessInfo.phone || "+64-27-123-4567",
    "email": businessInfo.email || "hello@userlabs.co.nz",
    "priceRange": businessInfo.priceRange || "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address || "",
      "addressCountry": "NZ",
      "addressRegion": "Auckland"
    }
  } : null;

  // Generate Article structured data for blog posts
  const articleSchema = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || defaultImage,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteTitle,
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/logo.png`
      }
    },
    "datePublished": publishedDate || currentDate,
    "dateModified": modifiedDate || currentDate,
    "articleSection": articleSection
  } : null;

  // Combine all schemas
  const structuredData = [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    faqSchema,
    localBusinessSchema,
    articleSchema
  ].filter(Boolean);

  return (
    <>
      {/* Basic meta tags - React 19 will automatically hoist these to <head> */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsContent} />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Author and dates */}
      <meta name="author" content={author} />
      {publishedDate && <meta name="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta name="article:modified_time" content={modifiedDate} />}

      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:creator" content="@userlabs" />
      <meta name="twitter:site" content="@userlabs" />

      {/* Additional SEO tags */}
      <meta name="publisher" content="User Labs" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#0047e1" />
      
      {/* Mobile optimization */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      
      {/* Structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}