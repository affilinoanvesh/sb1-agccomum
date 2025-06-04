import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContactPopupProvider, useContactPopup } from './hooks/useContactPopup';
import { useGTM } from './hooks/useGTM';
import { ContactFormPopup } from './components/forms';
import App from './App.tsx';
import { 
  About, 
  Contact, 
  FAQ, 
  Industries, 
  Industry, 
  NotFound,
  ThankYou
} from './pages';
import { Terms, Privacy } from './pages/legal';
import { CaseStudies, CaseStudy } from './pages/case-studies';
import { VoiceAgent, InvoiceAgent } from './pages/agents';
import { ScrollToTop } from './components/ui';
import './index.css';

// Root layout component that provides popup to all routes
function RootLayout() {
  const { isOpen, triggerSource, closePopup } = useContactPopup();
  
  // Initialize GTM tracking for all routes
  useGTM();
  
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <ContactFormPopup isOpen={isOpen} onClose={closePopup} triggerSource={triggerSource} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "voice-agent",
        element: <VoiceAgent />,
      },
      {
        path: "invoice-agent",
        element: <InvoiceAgent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "case-studies",
        element: <CaseStudies />,
      },
      {
        path: "case-studies/:id",
        element: <CaseStudy />,
      },
      {
        path: "industries",
        element: <Industries />,
      },
      {
        path: "industries/:id",
        element: <Industry />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "thank-you",
        element: <ThankYou />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <ContactPopupProvider>
          <RouterProvider router={router} />
        </ContactPopupProvider>
      </HelmetProvider>
    </StrictMode>
  );
}