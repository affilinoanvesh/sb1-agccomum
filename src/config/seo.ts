// SEO Configuration for User Labs
export const SEO_CONFIG = {
  // Site Information
  siteName: 'User Labs',
  domain: 'https://userlabs.co.nz',
  defaultTitle: 'User Labs | Custom AI Solutions for Small Business',
  defaultDescription: 'Transform your small business with personalised AI solutions. Save time, reduce costs, and grow your customer base with AI tools tailored to your needs.',
  defaultImage: '/og-image.png',
  
  // Business Information
  business: {
    name: 'User Labs',
    type: 'TechnologyCompany',
    address: 'Auckland, New Zealand',
    phone: '+64-27-123-4567',
    email: 'hello@userlabs.co.nz',
    priceRange: '$$',
    logo: '/logo.png'
  },
  
  // Social Media
  social: {
    twitter: '@userlabs',
    linkedin: 'https://www.linkedin.com/company/user-labs'
  },
  
  // Default Keywords
  defaultKeywords: [
    'AI solutions for small business',
    'custom AI development',
    'business automation',
    'artificial intelligence consulting',
    'small business AI tools',
    'AI customer service',
    'AI voice agents',
    'business process automation',
    'AI for local business',
    'machine learning solutions'
  ],
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: 'Custom AI Solutions for Small Businesses',
      description: 'Transform your small business with personalised AI solutions. Save time, reduce costs, and grow your customer base with AI tools tailored to your needs.',
      keywords: [
        'AI solutions for small business',
        'custom AI development',
        'business automation',
        'artificial intelligence consulting',
        'small business AI tools',
        'AI customer service',
        'AI voice agents',
        'business process automation',
        'AI for local business',
        'machine learning solutions'
      ]
    },
    voiceAgent: {
      title: 'AI Voice Agent - Never Miss Another Call',
      description: 'Your AI receptionist answers every call, qualifies leads, and books appointments 24/7. Stop losing $20,000+ in missed revenue from unanswered calls.',
      keywords: [
        'AI voice agent',
        'AI receptionist',
        'automated phone answering',
        'AI call handling',
        'voice AI for business',
        'automated customer service',
        'AI phone system',
        'virtual receptionist',
        'AI call center',
        'intelligent call routing',
        'missed call recovery',
        'lead qualification AI'
      ]
    },
    invoiceAgent: {
      title: 'AI Invoice Collection Agent - Get Paid 65% Faster',
      description: 'Automated AI agent that calls overdue invoices professionally. Recover 65% more payments with polite, persistent reminder calls. 24/7 invoice collection on autopilot.',
      keywords: [
        'AI invoice collection',
        'automated invoice calls',
        'AI debt collection',
        'invoice recovery agent',
        'automated payment reminders',
        'AI accounts receivable',
        'invoice collection automation',
        'payment collection AI',
        'overdue invoice calls',
        'AI billing agent',
        'automated payment follow-up',
        'invoice collection software'
      ]
    },
    about: {
      title: 'About Us - Small Business AI Solutions',
      description: "We're a small business just like you, dedicated to creating personalised AI solutions that actually work for your needs. Learn about our approach to helping local businesses thrive.",
      keywords: [
        'about user labs',
        'AI solutions company',
        'small business AI experts',
        'AI development team',
        'business automation specialists',
        'AI consulting services',
        'custom AI development',
        'AI for small business owners',
        'technology consulting',
        'business growth through AI'
      ]
    },
    caseStudies: {
      title: 'AI Success Stories - Real Business Transformations',
      description: 'Discover how small businesses are transforming their operations with custom AI solutions. Real results from real businesses in your industry. See proven ROI and case studies.',
      keywords: [
        'AI success stories',
        'AI case studies',
        'business AI transformation',
        'AI implementation results',
        'AI ROI case studies',
        'small business AI examples',
        'AI automation success',
        'business automation case studies',
        'AI customer service results',
        'AI efficiency improvements',
        'AI business solutions examples',
        'AI implementation proof'
      ]
    },
    faq: {
      title: 'Frequently Asked Questions - AI Solutions for Small Business',
      description: 'Find answers to common questions about our AI solutions, implementation process, data security, pricing, and support services. Get expert insights on AI for your business.',
      keywords: [
        'AI solutions FAQ',
        'artificial intelligence questions',
        'AI implementation process',
        'AI pricing questions',
        'AI security questions',
        'AI support services',
        'AI business automation FAQ',
        'AI customer service questions',
        'AI data protection',
        'AI training and support'
      ]
    },
    contact: {
      title: 'Contact Us - Get Custom AI Solutions for Your Business',
      description: 'Get in touch to discuss how custom AI solutions can help your business grow. Schedule a consultation and start your AI journey today. Free consultation available.',
      keywords: [
        'contact AI solutions',
        'AI consultation',
        'custom AI development contact',
        'AI business solutions inquiry',
        'AI implementation consultation',
        'AI project consultation',
        'business automation consultation',
        'AI strategy consultation',
        'AI development inquiry',
        'AI solutions quote'
      ]
    }
  },
  
  // Structured Data Templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'User Labs',
      url: 'https://userlabs.co.nz',
      logo: 'https://userlabs.co.nz/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+64-27-123-4567',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NZ',
        addressRegion: 'Auckland'
      },
      sameAs: [
        'https://www.linkedin.com/company/user-labs'
      ]
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'User Labs',
      url: 'https://userlabs.co.nz',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://userlabs.co.nz/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  }
};

// Helper function to generate page title
export const generatePageTitle = (pageTitle: string, siteName: string = SEO_CONFIG.siteName): string => {
  return pageTitle.includes(siteName) ? pageTitle : `${pageTitle} | ${siteName}`;
};

// Helper function to generate canonical URL
export const generateCanonicalUrl = (path: string): string => {
  return `${SEO_CONFIG.domain}${path}`;
};

// Helper function to get page-specific SEO data
export const getPageSEO = (pageKey: keyof typeof SEO_CONFIG.pages) => {
  return SEO_CONFIG.pages[pageKey] || {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    keywords: SEO_CONFIG.defaultKeywords
  };
}; 