# Project Structure

This project has been organized with a clean and scalable file structure.

## 📁 Directory Structure

```
├── docs/                          # Documentation files
│   ├── SEO_GUIDE.md              # SEO optimization guide
│   └── DEPLOYMENT.md             # Deployment instructions
├── deployment/                    # Deployment configuration files
│   ├── nginx.conf                # Nginx configuration
│   ├── .htaccess                 # Apache configuration
│   ├── vercel.json               # Vercel deployment config
│   └── _redirects                # Netlify redirects
├── public/                        # Static assets
│   ├── favicon files             # Various favicon formats
│   ├── robots.txt                # SEO robots file
│   ├── sitemap.xml               # SEO sitemap
│   └── site.webmanifest          # PWA manifest
├── src/
│   ├── components/               # React components
│   │   ├── layout/              # Layout components (Header, Footer, SEO)
│   │   ├── forms/               # Form components
│   │   ├── calculators/         # Calculator components
│   │   ├── ui/                  # Reusable UI components
│   │   └── index.ts             # Barrel exports for all components
│   ├── pages/                   # Page components
│   │   ├── legal/               # Legal pages (Terms, Privacy)
│   │   ├── case-studies/        # Case study pages
│   │   ├── agents/              # Agent-specific pages
│   │   └── index.ts             # Barrel exports for all pages
│   ├── hooks/                   # Custom React hooks
│   │   └── index.ts             # Barrel exports for hooks
│   ├── data/                    # Static data and configurations
│   │   └── industries/          # Industry-specific data
│   ├── config/                  # Configuration files
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
└── Configuration files (package.json, vite.config.ts, etc.)
```

## 🚀 Benefits of This Structure

### 1. **Modular Organization**
- Components are grouped by functionality (layout, forms, UI, calculators)
- Pages are categorized by purpose (legal, case studies, agents)
- Easy to locate and maintain specific features

### 2. **Clean Imports**
- Barrel exports (`index.ts` files) provide clean import paths
- Import multiple components from a single location
- Example: `import { Header, Footer, SEO } from '@/components/layout'`

### 3. **Scalability**
- Easy to add new components to appropriate categories
- Clear separation of concerns
- Consistent file organization patterns

### 4. **Developer Experience**
- Intuitive file structure for new team members
- Reduced cognitive load when navigating the codebase
- Clear documentation and organization

## 📦 Import Examples

```typescript
// Import layout components
import { Header, Footer, SEO } from '@/components/layout';

// Import form components
import { ContactFormPopup } from '@/components/forms';

// Import UI components
import { Image, ScrollToTop } from '@/components/ui';

// Import pages
import { About, Contact, FAQ } from '@/pages';
import { Terms, Privacy } from '@/pages/legal';
import { VoiceAgent, InvoiceAgent } from '@/pages/agents';

// Import hooks
import { useContactPopup, useInvoiceReminders } from '@/hooks';
```

## 🛠️ Development

This project uses:
- **React** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **ESLint** for code quality

## 📚 Documentation

- **SEO Guide**: `docs/SEO_GUIDE.md`
- **Deployment**: `docs/DEPLOYMENT.md`

## 🚀 Deployment

Deployment configuration files are organized in the `deployment/` directory for different platforms:
- Vercel: `deployment/vercel.json`
- Nginx: `deployment/nginx.conf`
- Apache: `deployment/.htaccess`
- Netlify: `deployment/_redirects`