import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InvoiceRemindersContextType {
  isReminderActive: boolean;
  reminderFrequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  overdueCount: number;
  totalOutstanding: number;
  activateReminders: () => void;
  deactivateReminders: () => void;
  setReminderFrequency: (frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly') => void;
  updateOverdueCount: (count: number) => void;
  updateTotalOutstanding: (amount: number) => void;
  getEstimatedRecovery: () => number;
}

const InvoiceRemindersContext = createContext<InvoiceRemindersContextType | undefined>(undefined);

interface InvoiceRemindersProviderProps {
  children: ReactNode;
}

export function InvoiceRemindersProvider({ children }: InvoiceRemindersProviderProps) {
  const [isReminderActive, setIsReminderActive] = useState(false);
  const [reminderFrequency, setReminderFrequencyState] = useState<'daily' | 'weekly' | 'biweekly' | 'monthly'>('weekly');
  const [overdueCount, setOverdueCount] = useState(12); // Example default
  const [totalOutstanding, setTotalOutstanding] = useState(45000); // Example default

  const activateReminders = () => {
    setIsReminderActive(true);
  };

  const deactivateReminders = () => {
    setIsReminderActive(false);
  };

  const setReminderFrequency = (frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly') => {
    setReminderFrequencyState(frequency);
  };

  const updateOverdueCount = (count: number) => {
    setOverdueCount(count);
  };

  const updateTotalOutstanding = (amount: number) => {
    setTotalOutstanding(amount);
  };

  // Calculate estimated recovery based on industry averages (65% recovery rate with AI calling)
  const getEstimatedRecovery = () => {
    return Math.round(totalOutstanding * 0.65);
  };

  return (
    <InvoiceRemindersContext.Provider value={{
      isReminderActive,
      reminderFrequency,
      overdueCount,
      totalOutstanding,
      activateReminders,
      deactivateReminders,
      setReminderFrequency,
      updateOverdueCount,
      updateTotalOutstanding,
      getEstimatedRecovery
    }}>
      {children}
    </InvoiceRemindersContext.Provider>
  );
}

export function useInvoiceReminders() {
  const context = useContext(InvoiceRemindersContext);
  if (context === undefined) {
    throw new Error('useInvoiceReminders must be used within an InvoiceRemindersProvider');
  }
  return context;
} 