import React, { useState } from 'react';
import { Users, Building2, Landmark, CheckCircle2, ArrowRight, ShieldCheck, Clock, LineChart, MessageSquareText } from 'lucide-react';
import { PartnerType } from '../../types';
import { storage } from '../../lib/storage';
import { handleFormRedirect, buildWhatsAppRedirectUrl } from '../../lib/contact';

export const PartnerZoneSection: React.FC = () => {
  const [partnerType, setPartnerType] = useState<PartnerType>('Agent');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    officeAddress: '',
    designation: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const tabs: { type: PartnerType; label: string; icon: typeof Users; desc: string }[] = [
    {
      type: 'Agent',
      label: 'Real Estate Agent',
      icon: Users,
      desc: 'Independent brokers, channel partners, and DSAs looking for highest industry payouts on home loan referrals.',
    },
    {
      type: 'Builder',
      label: 'Builder & Developer',
      icon: Building2,
      desc: 'Residential project developers needing fast-track APF approvals and seamless buyer mortgage financing.',
    },
    {
      type: 'Banker',
      label: 'Bank Sales Officer',
      icon: Landmark,
      desc: 'Retail banking professionals seeking pre-verified, high-CIBIL customer applications ready for sanction.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name || 'Anonymous Partner',
      partnerType: `${partnerType} (${formData.companyName || 'Ind.'})`,
      phone: formData.phone,
      email: formData.email,
      city: formData.officeAddress,
      message: `Designation: ${formData.designation}. Registered for 70% payout channel network.`,
    };

    storage.addPartnerLead({
      partner_type: partnerType,
      name: formData.name || 'Anonymous Partner',
      company_name: formData.companyName,
      phone: formData.phone,
      email: formData.email,
      office_address: formData.officeAddress,
      designation: formData.designation,
    });

    const targetUrl = buildWhatsAppRedirectUrl(payload);
    setRedirectUrl(targetUrl);
    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      handleFormRedirect(payload);
    }, 600);
  };

  const activeTabDetails = tabs.find((t) => t.type === partnerType)!;

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black bg-textured-paper rounded-3xl border-2 border-black my-8 shadow-sm">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
          Channel Ecosystem
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
          Partner <span className="text-[#b48835]">Zone</span>
        </h2>
        <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
          &ldquo;India&apos;s most rewarding mortgage network with 70% direct bank payout sharing.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
          Join India&apos;s fastest growing mortgage advisory network. Refer homebuyers and earn a transparent 70% share of bank payout disbursed within 7 working days.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        {/* Left Column: Payout Terms & Benefits (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* 70% Payout Spotlight Card */}
          <div className="p-7 rounded-3xl bg-[#fff0f3] border-2 border-black shadow-[0_12px_30px_rgba(244,63,94,0.15)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-[#e11d48] font-black text-2xl shadow-sm">
                70%
              </div>
              <div>
                <span className="text-xs uppercase font-black tracking-wider text-[#9f1239] block">Payout Guarantee</span>
                <h3 className="text-lg font-black text-black">70% Bank Payout Share</h3>
              </div>
            </div>

            <p className="text-xs text-black font-semibold leading-relaxed">
              HomeLens shares 70% of the institutional facilitation commission received from the bank, released directly into your registered bank account within 7 working days of loan disbursement.
            </p>

            <div className="space-y-2 pt-3 border-t-2 border-black text-xs text-black font-bold">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e11d48] shrink-0" />
                <span>7-Day Payout SLA upon disbursement</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-[#e11d48] shrink-0" />
                <span>Live milestone CRM tracking for every referred file</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#e11d48] shrink-0" />
                <span>Zero liaison burden: we handle all documentation</span>
              </div>
            </div>
          </div>

          {/* Testimonial from Partner */}
          <div className="p-6 rounded-3xl bg-[#eff6ff] border-2 border-black shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-[#b48835] text-sm">
              {'★'.repeat(5)}
            </div>
            <p className="text-xs text-black font-semibold italic leading-relaxed">
              &ldquo;HomeLens is our primary mortgage desk for all apartment sales. My clients get sanctions faster, and our channel commission arrives reliably within 7 days.&rdquo;
            </p>
            <div className="text-xs text-black pt-2 border-t-2 border-black">
              <strong className="text-black font-black">Gaurav Saxena</strong> — Associate Director, Prime Realty Pune
            </div>
          </div>
        </div>

        {/* Right Column: Tab Selector & Registration Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-black shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
          {/* Partner Role Tabs */}
          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = partnerType === tab.type;
              return (
                <button
                  key={tab.type}
                  onClick={() => {
                    setPartnerType(tab.type);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 border-2 border-black ${
                    isSelected
                      ? 'bg-black text-[#fae49d] shadow-sm'
                      : 'text-black bg-white hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <p className="text-xs text-black font-semibold leading-relaxed mb-6">
            {activeTabDetails.desc}
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#eff6ff] border-2 border-black text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto" />
              <h3 className="text-base font-black text-black">Partner Registration Received!</h3>
              <p className="text-xs text-black font-semibold max-w-md mx-auto">
                Thank you! Automatically connecting you to our Head of Channel Partnerships on WhatsApp.
              </p>
              <div className="flex justify-center pt-2">
                <a
                  href={redirectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25d366] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-md hover:bg-[#20ba59]"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Open Partner WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-black font-bold underline hover:text-[#b48835] cursor-pointer pt-2 inline-block"
              >
                Register another partner profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-black text-black mb-1">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arunav Sengupta"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-black mb-1">Company / Agency Name</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Metro Prime Real Estate"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-black text-black mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 96866 66960"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-black mb-1">Email ID</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="partner@agency.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-black text-black mb-1">Designation / Role</label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Managing Partner / Director"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-black mb-1">City / Region of Operation</label>
                  <input
                    type="text"
                    value={formData.officeAddress}
                    onChange={(e) => setFormData({ ...formData, officeAddress: e.target.value })}
                    placeholder="e.g. Bengaluru East, Whitefield"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs text-black font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs flex items-center justify-center gap-2 cursor-pointer font-black uppercase tracking-wider border-2 border-black shadow-md transition-all"
                >
                  <span>{loading ? 'Registering...' : 'Register as Franchise Channel Partner'}</span>
                  <ArrowRight className="w-4 h-4 text-[#fae49d]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
