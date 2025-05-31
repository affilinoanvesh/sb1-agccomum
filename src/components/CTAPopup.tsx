import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTAPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const hasPopupShown = localStorage.getItem('ctaPopupShown');
    if (!hasPopupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('ctaPopupShown', 'true');
      }, 30000); // Show after 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stop Losing $20,000+ in Missed Calls
          </h3>
          <p className="text-gray-600 mb-6">
            Get your AI receptionist up and running in under 24 hours. Try it risk-free for 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-xl text-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}