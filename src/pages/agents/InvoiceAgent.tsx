import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Clock, ArrowRight, CheckCircle, AlertCircle, Zap, ChevronRight, Play, Users, DollarSign, TrendingUp, MessageSquare, Receipt, Calendar, Target } from 'lucide-react';
import { Header, Footer, SEO } from '../../components/layout';
import { InvoiceROICalculator } from '../../components/calculators';
import { useContactPopup } from '../../hooks/useContactPopup';

function InvoiceAgent() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { openPopup } = useContactPopup();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="AI Invoice Collection Agent - Get Paid 65% Faster"
        description="Automated AI agent that calls overdue invoices professionally. Recover 65% more payments with polite, persistent reminder calls. 24/7 invoice collection on autopilot."
        canonical="/invoice-agent"
        keywords={[
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
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Invoice Agent', url: '/invoice-agent' }
        ]}
        businessInfo={{
          name: 'User Labs - AI Invoice Collection',
          type: 'TechnologyCompany',
          address: 'Auckland, New Zealand',
          phone: '+64-27-123-4567',
          email: 'hello@userlabs.co.nz',
          priceRange: '$$'
        }}
        faq={[
          {
            question: 'How does the AI invoice collection agent work?',
            answer: 'Our AI agent automatically calls customers with overdue invoices, mentions specific invoice details, and professionally requests payment while maintaining good customer relationships.'
          },
          {
            question: 'What is the success rate for AI invoice collection?',
            answer: 'Our AI invoice collection agent achieves a 65% recovery rate, significantly higher than email-only collection methods.'
          },
          {
            question: 'Can the AI handle payment objections and disputes?',
            answer: 'Yes, the AI is trained to handle common payment objections professionally, offer payment plans, and escalate complex disputes to human agents when necessary.'
          },
          {
            question: 'Is the AI invoice collection service compliant with debt collection laws?',
            answer: 'Absolutely. Our AI follows all applicable debt collection regulations and maintains professional, respectful communication with customers at all times.'
          }
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500 bg-opacity-20 text-primary-100 mb-6">
                <AlertCircle className="w-5 h-5 mr-2" />
                Customers forgetting to pay invoices? You're not alone.
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get Paid <span className="text-accent-400">65% Faster</span> with AI Invoice Calls
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Our AI agent makes professional, persistent calls to overdue invoices—so you don't have to. Recover more payments while maintaining customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => openPopup('Invoice Agent - Hero CTA')}
                  className="bg-accent-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-accent-600 transition-colors inline-flex items-center transform hover:scale-105"
                >
                  Start Collecting Today
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">65%</div>
                  <div className="text-sm text-primary-100">Collection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-primary-100">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-primary-100">Professional</div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
                alt="Professional invoice and payment collection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Average Recovery</div>
                    <div className="text-lg font-semibold text-gray-900">65% success rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stop Chasing Payments. Start Collecting Automatically.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Invoice Collection Problem</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <span>30% of invoices are paid late, hurting your cash flow</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <span>You hate making awkward "where's my money?" calls</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Customers ignore emails and delay payments indefinitely</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Cash flow problems from delayed payments impact your business</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The AI Invoice Agent Solution</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Professional, polite calls that maintain relationships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Calls exactly when you schedule them, every time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Recovers 65% more payments than email alone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Never lose another penny to forgotten follow-ups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Start Collecting in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Upload Your Invoices</h3>
              <p className="text-gray-600">
                Connect your accounting system or upload overdue invoices. Our AI learns your payment terms and customer details.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Set Your Schedule</h3>
              <p className="text-gray-600">
                Configure when to call (after 7 days overdue, weekly reminders, etc.). Customise the tone and script for your brand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Watch Payments Roll In</h3>
              <p className="text-gray-600">
                AI makes professional calls, sends summaries, and tracks payment commitments. You get paid faster with zero awkwardness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Professional Collection Calls That Actually Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Payment Conversations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Mentions specific invoice details and amounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Offers payment plans and flexible options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Handles objections professionally and empathetically</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automated Follow-Up System
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Escalating reminder schedule (7, 14, 30 days)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Tracks payment commitments and follows up</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Sends summaries to your team after each call</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Collection Management
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Privacy Act compliant calling practices</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Real-time payment tracking dashboard</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Integration with Xero, MYOB, QuickBooks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            See Your Cash Flow Improvement
          </h2>
          <InvoiceROICalculator />
        </div>
      </section>

      {/* Testimonials section removed */}

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Your Invoice Collection Questions Answered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Won't customers get annoyed by AI calls?
              </h3>
              <p className="text-gray-600">
                Our AI is trained to be helpful, not pushy. It focuses on solving payment issues and offers flexible solutions. Most customers appreciate the professional approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What if they have payment disputes?
              </h3>
              <p className="text-gray-600">
                The AI identifies disputes and immediately transfers to you with full context. It also logs dispute details for faster resolution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How does it integrate with my accounting?
              </h3>
              <p className="text-gray-600">
                Direct integration with Xero, MYOB, QuickBooks, and others. Invoice data syncs automatically—no manual data entry required.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Is this legally compliant?
              </h3>
              <p className="text-gray-600">
                100% Privacy Act and Fair Trading Act compliant. All calls are recorded and logged for compliance. We follow strict guidelines for professional debt collection in New Zealand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Speed Up Your Invoice Collections?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Your AI invoice agent starts working in 24 hours. Try it risk-free for 14 days and see how much faster your customers pay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openPopup('Invoice Agent - Final CTA')}
              className="bg-accent-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-accent-600 transition-colors inline-flex items-center transform hover:scale-105"
            >
              Start Collecting Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="text-center mt-4">
            <div className="text-primary-100 text-sm">
              14-day free trial • No setup fees • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default InvoiceAgent; 