import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Menu, X, ChevronDown } from 'lucide-react';
import { useContactPopup } from '../../hooks/useContactPopup';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoiceDropdownOpen, setIsVoiceDropdownOpen] = useState(false);
  const { openPopup } = useContactPopup();

  // Toggle body class for preventing scroll when menu is open
  React.useEffect(() => {
    if (!document.body) return;
    
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      if (document.body) {
        document.body.classList.remove('menu-open');
      }
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                <Beaker className="w-7 h-7 text-white transform -rotate-12" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-none mb-0.5">User Labs</span>
              <span className="text-xs text-primary-600 font-medium tracking-wider">AI SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Voice Agent with Dropdown */}
            <div className="relative group">
              <Link 
                to="/voice-agent"
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
                onMouseEnter={() => setIsVoiceDropdownOpen(true)}
                onMouseLeave={() => setIsVoiceDropdownOpen(false)}
              >
                Voice Agent
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border transition-all duration-200 ${
                  isVoiceDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsVoiceDropdownOpen(true)}
                onMouseLeave={() => setIsVoiceDropdownOpen(false)}
              >
                <Link 
                  to="/invoice-agent" 
                  className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
                >
                  Invoice Agent
                </Link>
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              About
            </Link>
            <Link 
              to="/industries" 
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Industries
            </Link>
            <Link 
              to="/case-studies" 
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Case Studies
            </Link>
            <button
              onClick={() => openPopup('Header CTA - Desktop')}
              className="bg-accent-500 text-white px-6 py-2.5 rounded-lg hover:bg-accent-600 transition-colors font-medium shadow-sm hover:shadow transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Beaker className="w-6 h-6 text-white transform -rotate-12" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-none mb-0.5">User Labs</span>
                <span className="text-xs text-primary-600 font-medium tracking-wider">AI SOLUTIONS</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {/* Voice Agent Section with Sub-items */}
            <div>
              <Link
                to="/voice-agent"
                className="text-gray-600 hover:text-gray-900 py-2 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Voice Agent
              </Link>
              <Link
                to="/invoice-agent"
                className="text-gray-500 hover:text-gray-700 py-2 font-medium block ml-4 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                → Invoice Agent
              </Link>
            </div>
            
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/industries"
              className="text-gray-600 hover:text-gray-900 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-600 hover:text-gray-900 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openPopup('Header CTA - Mobile');
              }}
              className="bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors text-center font-medium mt-4 shadow-sm hover:shadow"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}