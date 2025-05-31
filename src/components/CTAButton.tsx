import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CTAPopup from './CTAPopup';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ children, className = '' }: CTAButtonProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPopupOpen(true)}
        className={className}
      >
        {children}
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
      <CTAPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}