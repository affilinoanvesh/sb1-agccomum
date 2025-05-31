import React, { useState } from 'react';
import { Send, MessageSquare, MapPin, Phone, Mail, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { Header, Footer, SEO } from '../components/layout';

function Contact() {
  const [state, handleSubmit] = useForm("xldgzdaa");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <SEO 
          title="Message Sent - Thank You for Contacting User Labs"
          description="Thank you for contacting User Labs. We'll get back to you within 24 hours to discuss your AI solution needs."
          canonical="/contact"
          noindex={true}
        />
        <Header />
        <div className="flex items-center justify-center flex-1 min-h-[calc(100vh-200px)] px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <Link
              to="/"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Contact Us - Get Custom AI Solutions for Your Business"
        description="Get in touch to discuss how custom AI solutions can help your business grow. Schedule a consultation and start your AI journey today. Free consultation available."
        canonical="/contact"
        keywords={[
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
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
        businessInfo={{
          name: 'User Labs',
          type: 'TechnologyCompany',
          address: 'Auckland, New Zealand',
          phone: '+64-27-123-4567',
          email: 'hello@userlabs.co.nz',
          priceRange: '$$'
        }}
      />
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            Ready to transform your business with AI? Tell me about your needs and I'll create a personalized solution for you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
              <MessageSquare className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Let's Start Your AI Journey</h2>
              <p className="text-gray-600">Tell me about your business and how AI could help you grow.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Your full name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="your@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Your company name"
              />
              <ValidationError prefix="Company" field="company" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                How can I help your business? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                placeholder="Describe your business challenges, current processes, or what you'd like to automate..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-accent-500 text-white px-6 py-4 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg transform hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              {state.submitting ? 'Sending...' : 'Get My Custom Solution'}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            I'll personally review your message and get back to you within 24 hours with a custom solution proposal.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;