import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GTM_CONFIG, GTM_EVENTS } from '../config/gtm';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

export const useGTM = () => {
  const location = useLocation();
  const lastPageView = useRef<string>('');
  const lastEventTime = useRef<{ [key: string]: number }>({});

  // Debounce function to prevent duplicate events
  const isDuplicateEvent = (eventKey: string, debounceMs: number = 1000): boolean => {
    const now = Date.now();
    const lastTime = lastEventTime.current[eventKey] || 0;
    
    if (now - lastTime < debounceMs) {
      return true; // Too soon, skip this event
    }
    
    lastEventTime.current[eventKey] = now;
    return false;
  };

  // Track page views on route changes (with deduplication)
  useEffect(() => {
    const currentPath = location.pathname + location.search;
    
    // Skip if same page or duplicate
    if (currentPath === lastPageView.current) {
      return;
    }
    
    lastPageView.current = currentPath;
    
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: GTM_EVENTS.PAGE_VIEW,
        page_title: document.title,
        page_location: window.location.href,
        page_path: currentPath
      });
    }
  }, [location]);

  // Function to track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters
      });
    }
  };

  // Function to track form submissions (with deduplication)
  const trackFormSubmission = (formName: string, source?: string) => {
    const eventKey = `form_submit_${formName}_${source}`;
    
    if (isDuplicateEvent(eventKey, 2000)) { // 2 second debounce
      return;
    }
    
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: GTM_EVENTS.FORM_SUBMIT,
        form_name: formName,
        form_source: source,
        timestamp: new Date().toISOString()
      });
    }
  };

  // Function to track button clicks (with deduplication)
  const trackButtonClick = (buttonName: string, location?: string) => {
    const eventKey = `button_click_${buttonName}_${location}`;
    
    if (isDuplicateEvent(eventKey, 500)) { // 500ms debounce for clicks
      return;
    }
    
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: GTM_EVENTS.BUTTON_CLICK,
        button_name: buttonName,
        click_location: location
      });
    }
  };

  // Function to track lead generation (with deduplication)
  const trackLeadGeneration = (source: string, value?: number) => {
    const eventKey = `lead_generated_${source}`;
    
    if (isDuplicateEvent(eventKey, 5000)) { // 5 second debounce for conversions
      return;
    }
    
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: GTM_EVENTS.LEAD_GENERATED,
        form_source: source,
        conversion_value: value || GTM_CONFIG.conversionValues.lead,
        conversion_currency: GTM_CONFIG.conversionValues.currency,
        timestamp: new Date().toISOString()
      });
    }
  };

  return {
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackLeadGeneration
  };
}; 