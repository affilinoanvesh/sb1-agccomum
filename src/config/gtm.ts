// GTM Configuration
export const GTM_CONFIG = {
  // Google Tag Manager Container ID (already in index.html)
  containerId: 'GTM-5C5J266W',
  
  // Custom conversion values (adjust based on your business)
  // These are just data points to send to GTM - GTM will handle the actual conversion IDs
  conversionValues: {
    lead: 100,        // Value of a lead in USD
    consultation: 250, // Value of a consultation booking
    currency: 'USD'
  }
};

// Event names for consistent tracking
// Your React app pushes these events to dataLayer
// GTM listens for these events and fires the appropriate tags
export const GTM_EVENTS = {
  PAGE_VIEW: 'page_view',
  FORM_SUBMIT: 'form_submit',
  FORM_SUBMIT_ATTEMPT: 'form_submit_attempt',
  BUTTON_CLICK: 'button_click',
  POPUP_OPEN: 'popup_open',
  LEAD_GENERATED: 'lead_generated',
  CASE_STUDY_VIEW: 'case_study_view',
  SERVICE_PAGE_VIEW: 'service_page_view'
}; 