import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, MessageSquare, ChevronRight, Bot, Brain, Zap, RefreshCw, Cpu } from 'lucide-react';
import { Header, Footer, SEO } from '../components/layout';

function NotFound() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [aiMessage, setAiMessage] = useState("Oops! My neural network couldn't find that page...");

  const aiMessages = [
    "Oops! My neural network couldn't find that page...",
    "Error 404: This page is not in my training data!",
    "My AI algorithms are confused by this request...",
    "Processing... Processing... Page not found!",
    "Even artificial intelligence has its limits...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setAiMessage(aiMessages[Math.floor(Math.random() * aiMessages.length)]);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <SEO 
        title="404 - AI Assistant Can't Find This Page"
        description="Our AI couldn't locate the page you're looking for. Let us help you find what you need or explore our AI solutions."
        canonical="/404"
      />
      <meta name="robots" content="noindex, nofollow" />
      <Header />

      <main className="flex-grow py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Neural Network Patterns */}
          <div className="absolute top-20 left-10 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
              <defs>
                <pattern id="neural" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" className="text-primary-600" />
                  <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" className="text-primary-600" strokeWidth="0.5" />
                  <line x1="20" y1="20" x2="20" y2="40" stroke="currentColor" className="text-primary-600" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#neural)" />
            </svg>
          </div>
          
          {/* Floating AI Icons */}
          <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Brain className="w-8 h-8 text-primary-300" />
          </div>
          <div className="absolute top-64 left-32 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <Cpu className="w-6 h-6 text-accent-300" />
          </div>
          <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDelay: '2s' }}>
            <Zap className="w-7 h-7 text-primary-300" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            {/* AI Robot Character */}
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <Bot className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl blur opacity-30 animate-pulse" />
              
              {/* Thinking Dots */}
              <div className="absolute -top-8 -right-4 flex space-x-1">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            {/* Dynamic 404 Display */}
            <div className="relative mb-6">
              <h1 className="text-[120px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-500 to-primary-400 leading-none mb-4 animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50 animate-ping"></div>
              </div>
            </div>

            {/* AI Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto shadow-lg border border-primary-100">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3 flex space-x-1">
                  <div className={`w-2 h-2 bg-primary-400 rounded-full ${isAnimating ? 'animate-bounce' : ''}`}></div>
                  <div className={`w-2 h-2 bg-primary-400 rounded-full ${isAnimating ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.1s' }}></div>
                  <div className={`w-2 h-2 bg-primary-400 rounded-full ${isAnimating ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              <p className={`text-xl text-gray-700 transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                {aiMessage}
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't worry! Our AI is constantly learning. While it figures out what went wrong, 
              let me help you find what you're looking for.
            </p>
          </div>

          {/* Enhanced Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link
              to="/"
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary-100 hover:border-primary-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Home className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Return Home</h3>
                <p className="text-gray-600 mb-4">
                  Back to our AI solutions hub
                </p>
                <div className="flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Go Home</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              to="/voice-agent"
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary-100 hover:border-accent-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Bot className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice Agent</h3>
                <p className="text-gray-600 mb-4">
                  Explore our AI voice solutions
                </p>
                <div className="flex items-center text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              to="/contact"
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary-100 hover:border-primary-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MessageSquare className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Help</h3>
                <p className="text-gray-600 mb-4">
                  Talk to our AI experts
                </p>
                <div className="flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Contact Us</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* AI-themed CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 mb-8 shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">AI-Powered Support</h3>
              </div>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Our AI might not have found your page, but our human experts are ready to help you find the perfect solution for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-medium text-primary-600 bg-white hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Our Team
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Fun Error Code */}
            <div className="text-center text-sm text-gray-400 font-mono">
              <p>Error Code: AI_PAGE_NOT_FOUND_404</p>
              <p>Neural Network Status: Confused but Learning 🤖</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;