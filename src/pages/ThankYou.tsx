import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, MessageSquare, Phone, Trophy, Share2, Download } from 'lucide-react';
import { Header, Footer, SEO } from '../components/layout';

interface ConversionData {
  source?: string;
  timestamp?: string;
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [conversionData, setConversionData] = useState<ConversionData>({});
  const [isTracked, setIsTracked] = useState(false);

  // Extract conversion data from URL params
  useEffect(() => {
    const data: ConversionData = {
      source: searchParams.get('source') || 'direct',
      timestamp: searchParams.get('timestamp') || new Date().toISOString(),
      name: searchParams.get('name') || '',
      email: searchParams.get('email') || '',
      company: searchParams.get('company') || '',
      message: searchParams.get('message') || '',
    };
    
    setConversionData(data);
    
    // Track conversion if not already tracked
    if (!isTracked) {
      trackConversion(data);
      setIsTracked(true);
    }
  }, [searchParams, isTracked]);

  // Comprehensive conversion tracking function
  const trackConversion = (data: ConversionData) => {
    const conversionEvent = {
      event: 'form_submission',
      event_category: 'engagement',
      event_label: data.source,
      value: 1,
      custom_parameters: {
        form_source: data.source,
        timestamp: data.timestamp,
        has_company: !!data.company,
        message_length: data.message?.length || 0,
        user_type: data.company ? 'business' : 'individual'
      }
    };

    // Google Analytics 4 (if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        event_category: 'engagement',
        event_label: data.source,
        value: 1,
        custom_map: {
          dimension1: data.source,
          dimension2: data.company ? 'business' : 'individual'
        }
      });
    }

    // Facebook Pixel (if available)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_category: 'contact_form',
        content_name: data.source,
        value: 1.00,
        currency: 'NZD'
      });
    }

    // Store conversion data locally for analytics dashboard
    const conversions = JSON.parse(localStorage.getItem('user_labs_conversions') || '[]');
    conversions.push({
      ...conversionEvent,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('user_labs_conversions', JSON.stringify(conversions));

    // Console log for debugging
    console.log('Conversion tracked:', conversionEvent);
  };

  // Auto redirect after extended time (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Uncomment if you want auto-redirect after 5 minutes
      // navigate('/');
    }, 300000); // 5 minutes

    return () => clearTimeout(timer);
  }, [navigate]);

  const getSourceDisplayName = (source: string) => {
    const sourceMap: { [key: string]: string } = {
      'popup': 'Website Popup',
      'contact_page': 'Contact Page',
      'AI Journey - Homepage Hero': 'Homepage Hero',
      'hero_cta': 'Hero CTA',
      'case_study': 'Case Study',
      'industry_page': 'Industry Page',
      'about_page': 'About Page',
      'direct': 'Direct'
    };
    return sourceMap[source] || source;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Thank You - Message Received | User Labs"
        description="Thank you for contacting User Labs. Your message has been received and we'll respond within 24 hours with a personalized AI solution proposal."
        noIndex={true}
      />
      
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Hero */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Message Successfully Sent!
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            {conversionData.name && `Hi ${conversionData.name}, `}
            Thank you for reaching out. I've received your message and will personally review it within the next few hours.
          </p>

          <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 max-w-lg mx-auto">
            <p className="text-accent-800 font-medium">
              ⏱️ Expected Response Time: Within 24 hours
            </p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Happens Next?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Personal Review</h3>
              <p className="text-gray-600 text-sm">
                I'll personally review your message and business needs to understand your challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Solution Design</h3>
              <p className="text-gray-600 text-sm">
                I'll create a custom AI solution proposal tailored specifically to your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Personal Response</h3>
              <p className="text-gray-600 text-sm">
                You'll receive a detailed email with next steps and we can schedule a call if needed.
              </p>
            </div>
          </div>
        </div>

        {/* Submission Details */}
        {conversionData.source && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Submission Details</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Source:</span>
                <span className="ml-2 text-gray-600">{getSourceDisplayName(conversionData.source)}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Time:</span>
                <span className="ml-2 text-gray-600">
                  {new Date(conversionData.timestamp || '').toLocaleString()}
                </span>
              </div>
              {conversionData.company && (
                <div className="sm:col-span-2">
                  <span className="font-medium text-gray-700">Company:</span>
                  <span className="ml-2 text-gray-600">{conversionData.company}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link
            to="/case-studies"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center group"
          >
            <Trophy className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">View Success Stories</h4>
            <p className="text-xs text-gray-600">See how we've helped other businesses</p>
            <ArrowRight className="w-4 h-4 text-primary-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/industries"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center group"
          >
            <MessageSquare className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Industry Solutions</h4>
            <p className="text-xs text-gray-600">Explore AI solutions for your industry</p>
            <ArrowRight className="w-4 h-4 text-primary-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/about"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center group"
          >
            <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">About User Labs</h4>
            <p className="text-xs text-gray-600">Learn more about our approach</p>
            <ArrowRight className="w-4 h-4 text-primary-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => {
              const subject = encodeURIComponent('Thank you for contacting User Labs!');
              const body = encodeURIComponent(`I just submitted a contact form and wanted to share User Labs with you. They create custom AI solutions for small businesses. Check them out: ${window.location.origin}`);
              window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
            }}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center group"
          >
            <Share2 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 mb-1">Share with Others</h4>
            <p className="text-xs text-gray-600">Tell others about AI solutions</p>
            <ArrowRight className="w-4 h-4 text-primary-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Proof */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Join 50+ Businesses Already Using AI</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            From medical practices saving 15+ hours per week to cafes increasing customer satisfaction by 40%, 
            our AI solutions are transforming New Zealand businesses.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-primary-100">Businesses Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-primary-100">Hours Saved Weekly</div>
            </div>
            <div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Return Home */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Return to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
} 