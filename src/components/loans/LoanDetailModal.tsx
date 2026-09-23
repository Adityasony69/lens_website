import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquareText } from 'lucide-react';
import { LoanProduct } from '../../types';
import { storage } from '../../lib/storage';
import { OFFICIAL_PHONE_FORMATTED, handleFormRedirect, buildWhatsAppRedirectUrl } from '../../lib/contact';

interface LoanDetailModalProps {
  product: LoanProduct;
  onClose: () => void;
  onApply?: () => void;
  onSuccessLead?: () => void;
}

export const LoanDetailModal: React.FC<LoanDetailModalProps> = ({
  product,
  onClose,
  onApply,
  onSuccessLead,
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    loanAmount: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: form.name || 'Applicant',
      phone: form.phone,
      email: form.email,
      loanType: product.name,
      loanAmount: form.loanAmount,
      city: form.city,
      message: `Inquiry for ${product.name} (Rate: ${product.roi}, Tenure: ${product.tenure})`,
    };

    // Save lead locally
    storage.addCustomerLead({
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      loan_type: payload.loanType,
      loan_amount: payload.loanAmount,
      city: payload.city,
      message: payload.message,
    });

    const targetUrl = buildWhatsAppRedirectUrl(payload);
    setRedirectUrl(targetUrl);
    setLoading(false);
    setSubmitted(true);

    // Automatically redirect to official phone number WhatsApp
    setTimeout(() => {
      handleFormRedirect(payload);
      if (onSuccessLead) onSuccessLead();
    }, 600);
  };

  const directWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: `Hello HomeLens Team, I am interested in applying for ${product.name}.`,
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] my-8 text-left max-h-[90vh] overflow-y-auto text-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-bold uppercase tracking-[0.18em] mb-2">
            Mortgage Catalog
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-black">{product.name}</h2>
          <p className="text-xs sm:text-sm text-[#b48835] font-bold mt-1">{product.tagline}</p>
        </div>

        {/* Quick Spec Ticker with Light Blue Background */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#eff6ff] border-2 border-black mb-7 shadow-xs">
          <div>
            <span className="text-[10px] text-gray-600 uppercase font-black tracking-wider">Interest Rate</span>
            <span className="text-base sm:text-lg font-black text-black block mt-0.5">{product.roi}</span>
          </div>
          <div className="border-x-2 border-black px-3 sm:px-4">
            <span className="text-[10px] text-gray-600 uppercase font-black tracking-wider">Max Tenure</span>
            <span className="text-base sm:text-lg font-black text-[#b48835] block mt-0.5">{product.tenure}</span>
          </div>
          <div>
            <span className="text-[10px] text-gray-600 uppercase font-black tracking-wider">Sanction Limit</span>
            <span className="text-base sm:text-lg font-black text-black block mt-0.5">{product.maxAmount}</span>
          </div>
        </div>

        {/* Description & Key Features */}
        <div className="space-y-6 mb-7">
          <div>
            <h3 className="text-sm font-black text-black mb-1.5">Overview</h3>
            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-black text-black mb-3">Key Features &amp; Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-800 font-semibold p-2.5 rounded-xl bg-gray-50 border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility Criteria (Light Pink Container) */}
        <div className="mb-7 p-5 rounded-2xl bg-[#fff0f3] border-2 border-black space-y-3 shadow-xs">
          <h3 className="text-sm font-black text-black">Eligibility Guidelines</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[10px] uppercase font-black text-gray-600 block mb-0.5">Borrower Age</span>
              <span className="text-black font-bold">{product.eligibility.age}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-black text-gray-600 block mb-0.5">Min Net Income</span>
              <span className="text-black font-bold">{product.eligibility.income}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-black text-gray-600 block mb-0.5">CIBIL Score</span>
              <span className="text-[#b48835] font-black">{product.eligibility.cibil}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-black text-gray-600 block mb-0.5">Vintage / Experience</span>
              <span className="text-black font-bold">{product.eligibility.employment}</span>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-7">
          <h3 className="text-sm font-black text-black mb-3">Document Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {product.documents.map((d, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#f8f9fc] border-2 border-black space-y-2">
                <span className="text-xs font-black text-black block">{d.category}</span>
                <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
                  {d.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-black font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Inquiry Form with Automatic WhatsApp Redirection */}
        <div className="p-6 rounded-3xl bg-[#eff6ff] border-2 border-black">
          <div className="mb-4">
            <h3 className="text-base font-black text-black">
              Apply for {product.name}
            </h3>
            <p className="text-xs text-gray-700 font-medium mt-1">
              Submit this form to automatically connect directly on WhatsApp with our senior loan specialist.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-white border-2 border-black text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#10b981] mx-auto" />
              <h4 className="text-sm font-black text-black">Inquiry Registered!</h4>
              <p className="text-xs text-gray-700">
                Redirecting automatically to official advisor chat on WhatsApp at <strong>{OFFICIAL_PHONE_FORMATTED}</strong>...
              </p>
              {redirectUrl && (
                <a
                  href={redirectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] text-white text-xs font-bold uppercase tracking-wider border-2 border-black shadow-sm"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Continue on WhatsApp Now</span>
                </a>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 96866 66960"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Email ID</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Required Loan Amount</label>
                  <input
                    type="text"
                    value={form.loanAmount}
                    onChange={(e) => setForm({ ...form, loanAmount: e.target.value })}
                    placeholder="e.g. ₹75,00,000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Property City / Location</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g. Bengaluru, Mumbai, Delhi-NCR"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black placeholder:text-gray-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider bg-black hover:bg-gray-800 text-white border-2 border-black flex items-center justify-center gap-2 cursor-pointer mt-2 shadow-md transition-all"
              >
                <span>{loading ? 'Submitting & Redirecting...' : 'Submit & Connect on WhatsApp (9686666960)'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
