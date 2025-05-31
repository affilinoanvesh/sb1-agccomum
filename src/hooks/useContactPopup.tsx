import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactPopupContextType {
  isOpen: boolean;
  triggerSource: string;
  openPopup: (source?: string) => void;
  closePopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

interface ContactPopupProviderProps {
  children: ReactNode;
}

export function ContactPopupProvider({ children }: ContactPopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerSource, setTriggerSource] = useState('');

  const openPopup = (source = 'unknown') => {
    setTriggerSource(source);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setTriggerSource('');
  };

  return (
    <ContactPopupContext.Provider value={{ isOpen, triggerSource, openPopup, closePopup }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  const context = useContext(ContactPopupContext);
  if (context === undefined) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
} 