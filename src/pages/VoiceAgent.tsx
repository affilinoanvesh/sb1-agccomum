import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageSquare, Clock, CheckCircle, ArrowRight, AlertCircle, Zap, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function VoiceAgent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="AI Voice Agent - Never Miss Another Call"
        description="Your AI receptionist answers every call, qualifies leads, and books appointments 24/7. Stop losing $20,000+ in missed calls every month."
        canonical="/voice-agent"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stop Losing $20,000+ in Missed Calls Every Month
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12">
              Your AI receptionist answers every call, qualifies leads like your best salesperson, and books appointments directly into your calendar—even at 3 AM.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center text-primary-100">
                <Phone className="w-5 h-5 mr-2" />
                AI answers in 2 rings, 24/7
              </div>
              <div className="flex items-center text-primary-100">
                <MessageSquare className="w-5 h-5 mr-2" />
                Qualify leads instantly
              </div>
              <div className="flex items-center text-primary-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book appointments automatically
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl text-xl font-medium text-primary-600 bg-white hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Your AI Agent Free for 14 Days
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              You're Bleeding Money Every Day You Don't Answer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">This Sound Familiar?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <span>78% of customers call the first business that picks up</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Each missed call costs you $243 on average</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Your competitors answer while you're busy, in meetings, or asleep</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What If You Could:</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Answer every call in perfect English, any time of day?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Qualify leads better than your best salesperson?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Never forget to follow up with a prospect again?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Get Started in Under 24 Hours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Business Intake</h3>
              <p className="text-gray-600">
                Forward your business number to SuprHighway. What do you need the agent to do?
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Train Your AI</h3>
              <p className="text-gray-600">
                Tell us about your business, services, and pricing. Our AI learns your sales process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Go Live</h3>
              <p className="text-gray-600">
                Your AI agent starts answering calls immediately. You get real-time notifications of every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Everything You Need to Never Miss Another Sale
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lead Qualification That Actually Works
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Asks custom questions based on your business</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Identifies hot prospects vs. tire-kickers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Choose the best opportunities with scored leads</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Appointment Booking on Autopilot
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Checks your real calendar availability</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Handles rescheduling and cancellations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Sends confirmations and reminders automatically</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Business Operations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span>Sends personalized follow-up messages</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span>HIPAA compliant for medical practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            "But What If...?" Your Concerns Answered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Doesn't AI sound robotic?
              </h3>
              <p className="text-gray-600">
                Our voices are indistinguishable from humans. Customers routinely ask to "speak to the same person" next time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What if it can't answer complex questions?
              </h3>
              <p className="text-gray-600">
                If a question is too complex, your AI seamlessly transfers to you with full context of the conversation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Is this going to be expensive?
              </h3>
              <p className="text-gray-600">
                Most clients save $2,000+ monthly just from not missing calls. SuprHighway pays for itself in the first week.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What if I don't like it?
              </h3>
              <p className="text-gray-600">
                Zero risk. Cancel anytime in your first 14 days and pay nothing. We're that confident you'll love it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get your AI receptionist up and running in under 24 hours. Try it risk-free for 14 days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl text-xl font-medium text-primary-600 bg-white hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default VoiceAgent;