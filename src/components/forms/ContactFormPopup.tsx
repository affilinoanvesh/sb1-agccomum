import React, { useEffect } from 'react';
import { X, Send, Bot, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { useGTM } from '../../hooks/useGTM';
import { GTM_EVENTS } from '../../config/gtm';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  triggerSource?: string; // Track which CTA triggered the popup
}

export default function ContactFormPopup({ isOpen, onClose, triggerSource }: ContactFormPopupProps) {
  const [state, handleSubmit] = useForm("xldgzdaa");
  const navigate = useNavigate();
  const { trackFormSubmission, trackLeadGeneration } = useGTM();

  // Track popup open
  useEffect(() => {
    if (isOpen && triggerSource) {
      window.dataLayer?.push({
        event: GTM_EVENTS.POPUP_OPEN,
        popup_type: 'contact_form',
        trigger_source: triggerSource
      });
    }
  }, [isOpen, triggerSource]);

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      if (document.body) {
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (document.body) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose]);

  // Redirect to thank you page on success and track conversion
  useEffect(() => {
    if (state.succeeded) {
      // Track form submission and lead generation
      // GTM will handle firing the actual conversion tags
      trackFormSubmission('contact_form', triggerSource);
      trackLeadGeneration(triggerSource || 'popup');
      
      // Close popup first
      onClose();
      
      // Get form data for tracking
      const formData = new URLSearchParams();
      formData.append('source', triggerSource || 'popup');
      formData.append('timestamp', new Date().toISOString());
      
      // Navigate to thank you page with tracking data
      navigate(`/thank-you?${formData.toString()}`);
    }
  }, [state.succeeded, onClose, navigate, triggerSource]);

  // Handle form submission with GTM tracking
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Track form submit attempt
    window.dataLayer?.push({
      event: GTM_EVENTS.FORM_SUBMIT_ATTEMPT,
      form_name: 'contact_form',
      form_source: triggerSource
    });
    
    // Call the original handler
    await handleSubmit(e);
  };

  if (!isOpen) return null;

  // Form state
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] sm:h-auto bg-white rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="bg-primary-600 px-4 sm:px-8 py-4 sm:py-6 text-white flex-shrink-0">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold">Let's Build Your AI Solution</h3>
              <p className="text-primary-100 text-sm sm:text-base">
                Share your business needs and let us help you grow
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-8">
            <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
              {/* Hidden field to track source */}
              <input type="hidden" name="source" value={triggerSource || 'popup'} />
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="popup-name"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-base"
                    placeholder="Your full name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="popup-email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-base"
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="popup-phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-base"
                    placeholder="021 123 4567"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="popup-company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="popup-company"
                    name="company"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-base"
                    placeholder="Your company name"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>
              </div>



              <div>
                <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help your business? *
                </label>
                <textarea
                  id="popup-message"
                  name="message"
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-base resize-none"
                  placeholder="Describe your business challenges, current processes, or what you'd like to automate..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-accent-500 text-white px-6 py-3 sm:py-4 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base sm:text-lg transform hover:scale-105"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {state.submitting ? 'Sending...' : 'Get My Custom Solution'}
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
              I'll personally review your message and get back to you within 24 hours with a custom solution proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 