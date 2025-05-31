import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock } from 'lucide-react';

interface InvoiceROICalculatorProps {
  className?: string;
}

const InvoiceROICalculator: React.FC<InvoiceROICalculatorProps> = ({ className = '' }) => {
  const [monthlyOverdueAmount, setMonthlyOverdueAmount] = useState(45000);
  const [currentCollectionRate, setCurrentCollectionRate] = useState(35);

  // AI collection rate (fixed at 65% based on your data)
  const aiCollectionRate = 65;
  
  // Calculate current and AI collection amounts
  const currentCollected = Math.round(monthlyOverdueAmount * (currentCollectionRate / 100));
  const aiCollected = Math.round(monthlyOverdueAmount * (aiCollectionRate / 100));
  const additionalCashFlow = aiCollected - currentCollected;
  
  // Calculate payment delay reduction (current 45+ days vs AI 15 days)
  const currentPaymentDelay = 45;
  const aiPaymentDelay = 15;
  const fasterPaymentPercentage = Math.round(((currentPaymentDelay - aiPaymentDelay) / currentPaymentDelay) * 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Calculator className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Calculate Your Cash Flow Improvement</h3>
        <p className="text-sm text-gray-600">Adjust the sliders to see your personalised ROI</p>
      </div>

      {/* Input Controls - Unified Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-4 text-center">Your Current Situation</h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Monthly Overdue Invoices</span>
              <span className="text-lg font-bold text-primary-600">{formatCurrency(monthlyOverdueAmount)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="200000"
              step="5000"
              value={monthlyOverdueAmount}
              onChange={(e) => setMonthlyOverdueAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$5K</span>
              <span>$200K</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Current Collection Rate</span>
              <span className="text-lg font-bold text-red-600">{currentCollectionRate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={currentCollectionRate}
              onChange={(e) => setCurrentCollectionRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10%</span>
              <span>60%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Comparison - More Compact */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="text-base font-bold text-gray-900 mb-3">Current Process</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Collection rate:</span>
              <span className="font-semibold text-red-600">{currentCollectionRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly collected:</span>
              <span className="font-semibold">{formatCurrency(currentCollected)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment delay:</span>
              <span className="font-semibold text-red-600">{currentPaymentDelay}+ days</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-base font-bold text-gray-900 mb-3">With AI Agent</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Collection rate:</span>
              <span className="font-semibold text-green-600">{aiCollectionRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly collected:</span>
              <span className="font-semibold">{formatCurrency(aiCollected)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment delay:</span>
              <span className="font-semibold text-green-600">{aiPaymentDelay} days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Results - More Compact */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-lg font-bold text-blue-600">{formatCurrency(additionalCashFlow)}</div>
            <div className="text-xs text-gray-600">Monthly Cash Flow</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">+{aiCollectionRate - currentCollectionRate}%</div>
            <div className="text-xs text-gray-600">Collection Rate</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">{fasterPaymentPercentage}%</div>
            <div className="text-xs text-gray-600">Faster Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceROICalculator; 