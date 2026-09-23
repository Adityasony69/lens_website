import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, MessageSquareText, Lock } from 'lucide-react';
import { storage } from '../../lib/storage';
import { buildWhatsAppRedirectUrl, handleFormRedirect } from '../../lib/contact';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBank?: string;
  defaultLoanType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultBank = '',
  defaultLoanType = 'Home Loan',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    loanType: defaultLoanType,
    loanAmount: '₹50,00,000',
    employmentType: 'Salaried',
    monthlyIncome: '',
    preferredBank: defaultBank,
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name || 'Applicant',
      phone: formData.phone,
      email: formData.email,
      loanType: formData.loanType,
      loanAmount: formData.loanAmount,
      bank: formData.preferredBank,
      city: formData.city,
      employment: formData.employmentType,
      monthlyIncome: formData.monthlyIncome,
      note: formData.note || `Consultation request for ${formData.loanType}`,
    };

    // Store in storage
    storage.addCustomerLead({
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      loan_type: payload.loanType,
      loan_amount: payload.loanAmount,
      city: payload.city,
      message: `${payload.employment} | Income: ${payload.monthlyIncome} | Bank: ${payload.bank} | Note: ${payload.note}`,
    });

    const url = buildWhatsAppRedirectUrl(payload);
    setRedirectUrl(url);
    setLoading(false);
    setSubmitted(true);

    // Automatic redirect to WhatsApp text
    setTimeout(() => {
      handleFormRedirect(payload);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border-2 border-black shadow-[0_25px_60px_rgba(0,0,0,0.3)] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-black hover:bg-gray-100 border border-transparent hover:border-black cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
            <span>100% Complimentary Advisory</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-black">
            {defaultBank ? `Apply for ${defaultBank}` : 'Request Expert Advisor Assistance'}
          </h2>
          <p className="text-xs text-black font-semibold mt-1">
            Our certified loan officer assesses your eligibility across 55+ lenders. You will be automatically redirected to our verified WhatsApp desk.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#eff6ff] border-2 border-black text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto" />
            <h3 className="text-lg font-black text-black">Inquiry Registered Successfully!</h3>
            <p className="text-xs text-black font-semibold leading-relaxed max-w-md mx-auto">
              Connecting you with our official advisory desk on WhatsApp. If not redirected automatically:
            </p>

            <div className="flex justify-center pt-2">
              <a
                href={redirectUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25d366] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-md hover:bg-[#20ba59]"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs text-black font-black hover:underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-black mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1">Mobile Number (WhatsApp)</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 96866 66960"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-black mb-1">Loan Program</label>
                <select
                  value={formData.loanType}
                  onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="Home Loan">Home Loan (Purchase / Resale)</option>
                  <option value="Construction Loan">Home Construction Loan</option>
                  <option value="Plot Loan">Plot & Land Loan</option>
                  <option value="Balance Transfer">Balance Transfer + Top-Up</option>
                  <option value="LAP">Loan Against Property (LAP)</option>
                  <option value="NRI Home Loan">NRI Home Loan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1">Estimated Loan Amount</label>
                <input
                  type="text"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                  placeholder="e.g. ₹75,00,000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-black mb-1">Employment Type</label>
                <select
                  value={formData.employmentType}
                  onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="Salaried">Salaried (Corporate / MNC / Govt)</option>
                  <option value="Self-Employed Professional">Self-Employed (Doctor / CA / Lawyer)</option>
                  <option value="Business Owner">Business Owner / Trader / Director</option>
                  <option value="NRI">Non-Resident Indian (NRI)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1">Monthly In-Hand Income</label>
                <input
                  type="text"
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                  placeholder="e.g. ₹1,20,000 / month"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {defaultBank && (
              <div>
                <label className="block text-xs font-black text-black mb-1">Target Bank Institution</label>
                <input
                  type="text"
                  disabled
                  value={formData.preferredBank}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-100 border-2 border-black text-xs text-black font-black"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-black text-black mb-1">Property Location / Specific Note</label>
              <textarea
                rows={2}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="e.g. Need quick sanction for apartment in Whitefield, Bengaluru"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f9fb] border-2 border-black text-xs text-black font-bold focus:bg-white focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-md transition-all cursor-pointer"
              >
                <span>{loading ? 'Submitting...' : 'Connect With Loan Officer (WhatsApp)'}</span>
                <ArrowRight className="w-4 h-4 text-[#fae49d]" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-black font-bold pt-1">
              <Lock className="w-3 h-3 text-[#10b981]" />
              <span>Zero Brokerage • Doorstep Document Pickup • 100% Free</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
