import { useForm } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface FormSubmissionOptions {
  formId: string;
  source?: string;
  onSuccess?: () => void;
  redirectToThankYou?: boolean;
  trackingData?: Record<string, string>;
}

export function useFormSubmission({
  formId,
  source = 'unknown',
  onSuccess,
  redirectToThankYou = true,
  trackingData = {}
}: FormSubmissionOptions) {
  const [state, handleSubmit] = useForm(formId);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      // Call custom success handler first
      if (onSuccess) {
        onSuccess();
      }

      // Track the conversion
      trackConversion(source, trackingData);

      // Redirect to thank you page if enabled
      if (redirectToThankYou) {
        const formData = new URLSearchParams();
        formData.append('source', source);
        formData.append('timestamp', new Date().toISOString());
        
        // Add any additional tracking data
        Object.entries(trackingData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        
        navigate(`/thank-you?${formData.toString()}`);
      }
    }
  }, [state.succeeded, source, onSuccess, redirectToThankYou, trackingData, navigate]);

  return { state, handleSubmit };
}

// Enhanced conversion tracking function
function trackConversion(source: string, additionalData: Record<string, string> = {}) {
  const conversionEvent = {
    event: 'form_submission',
    event_category: 'engagement',
    event_label: source,
    value: 1,
    timestamp: new Date().toISOString(),
    custom_parameters: {
      form_source: source,
      ...additionalData,
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      page_url: window.location.href
    }
  };

  // Google Analytics 4 (if available)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      event_category: 'engagement',
      event_label: source,
      value: 1,
      custom_map: {
        dimension1: source,
        dimension2: additionalData.company ? 'business' : 'individual'
      }
    });
  }

  // Facebook Pixel (if available)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_category: 'contact_form',
      content_name: source,
      value: 1.00,
      currency: 'NZD'
    });
  }

  // Microsoft Clarity (if available)
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', 'form_submission', {
      source: source,
      value: 1
    });
  }

  // Store conversion data locally for analytics dashboard
  try {
    const conversions = JSON.parse(localStorage.getItem('user_labs_conversions') || '[]');
    conversions.push({
      ...conversionEvent,
      id: Date.now().toString()
    });
    
    // Keep only the last 100 conversions to prevent localStorage bloat
    if (conversions.length > 100) {
      conversions.splice(0, conversions.length - 100);
    }
    
    localStorage.setItem('user_labs_conversions', JSON.stringify(conversions));
  } catch (error) {
    console.warn('Failed to store conversion data:', error);
  }

  // Console log for debugging
  console.log('Conversion tracked:', conversionEvent);

  // Send to custom analytics endpoint (if available)
  if (import.meta.env.PROD) {
    fetch('/api/track-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conversionEvent),
    }).catch(error => {
      console.warn('Failed to send conversion to analytics:', error);
    });
  }
} 