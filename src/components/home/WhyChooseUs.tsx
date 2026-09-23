import React from 'react';
import { Landmark, FileCheck, ShieldCheck, BadgePercent, ArrowRight, MessageSquareText } from 'lucide-react';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';
import { BankLogo } from '../common/BankLogos';

interface WhyChooseUsProps {
  onOpenComparison: () => void;
  onOpenPartnerZone: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenComparison,
  onOpenPartnerZone,
}) => {
  const pillars = [
    {
      icon: Landmark,
      title: '55+ Bank Rate Comparison',
      desc: 'Unbiased side-by-side comparison across Nationalised / PSU banks, private institutions, and HFCs to secure the lowest spread benchmark.',
      bg: 'bg-[#eff6ff]', // light blue
      iconColor: 'text-[#2563eb]',
    },
    {
      icon: FileCheck,
      title: 'Doorstep Documentation',
      desc: 'No bank visits or queue lines. Our mobile executive collects and pre-verifies all your KYC, tax returns, and property deeds at your convenience.',
      bg: 'bg-[#fff0f3]', // light pink
      iconColor: 'text-[#e11d48]',
    },
    {
      icon: ShieldCheck,
      title: '100% Zero Brokerage Fee',
      desc: 'Our advisory and liaisoning services are completely complimentary for homebuyers. Zero hidden fees, consultancy costs, or surprise bills.',
      bg: 'bg-[#eff6ff]', // light blue
      iconColor: 'text-[#2563eb]',
    },
    {
      icon: BadgePercent,
      title: '70% Channel Partner Payout',
      desc: 'Real estate agents, DSAs, and builders receive 70% of bank commission payout within 7 working days of loan disbursement.',
      bg: 'bg-[#fff0f3]', // light pink
      iconColor: 'text-[#e11d48]',
    },
  ];

  const featuredBankLogos = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Bank of Baroda',
    'Punjab National Bank',
    'Canara Bank',
    'Union Bank of India',
    'LIC Housing Finance',
  ];

  const whatsAppPillarsUrl = buildWhatsAppRedirectUrl({
    message: 'Hello HomeLens Team, I want to compare bank offers and understand doorstep loan approval.',
  });

  return (
    <section className="py-20 bg-textured-paper border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
            The HomeLens Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
            Why Choose a <span className="text-[#b48835]">Fintech Mortgage Advisor</span>?
          </h2>
          <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
            &ldquo;Zero brokerage, direct underwriting access, and guaranteed institutional spread discounts.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed max-w-2xl mx-auto">
            Choosing a home loan is one of your life’s largest financial commitments. Different lenders have varying appraisal rules, FOIR tolerance, and fee structures. HomeLens matches your exact profile with the lowest-cost lender.
          </p>
        </div>

        {/* 4 Pillars Grid with Light Pink and Light Blue Cards & Black Framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pillars.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`${card.bg} border-2 border-black p-6 rounded-3xl flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-200`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center mb-4 shadow-sm">
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-black text-black mb-2">{card.title}</h3>
                  <p className="text-xs text-black leading-relaxed font-semibold">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Banks Showcase with Exact Logos */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#f8f9fc] border-2 border-black mb-12 shadow-[0_14px_30px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
            <div>
              <span className="text-xs font-black text-[#b48835] uppercase tracking-[0.16em] block mb-1">
                Direct Institutional Tie-Ups
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-black">55+ Partner Banks &amp; Lending Institutions</h3>
            </div>
            <button
              onClick={onOpenComparison}
              className="px-5 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 self-start md:self-auto cursor-pointer border-2 border-black shadow-sm"
            >
              <span>Open Comparison Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {featuredBankLogos.map((bank) => {
              const displayName = bank.toLowerCase().includes('bank') ? bank : `${bank} Bank Partner`;
              return (
                <div
                  key={bank}
                  onClick={onOpenComparison}
                  className="p-3.5 rounded-2xl bg-white border-2 border-black hover:bg-[#eff6ff] transition-all flex flex-col items-center justify-center gap-2 shadow-xs cursor-pointer hover:-translate-y-0.5 text-center group"
                  title={bank}
                >
                  <div className="h-8 flex items-center justify-center">
                    <BankLogo bankName={bank} size="sm" />
                  </div>
                  <span className="text-[11px] font-black text-black leading-tight group-hover:text-[#b48835] transition-colors">
                    {displayName}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-black text-black">
            <span>Are you a Builder, DSA, or Real Estate Broker?</span>
            <button
              onClick={onOpenPartnerZone}
              className="text-[#b48835] hover:text-black font-black flex items-center gap-1 cursor-pointer underline"
            >
              <span>Join Partner Network (70% Payout Scheme)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* WhatsApp Support Strip (Reference to WhatsApp ONLY, NO number in middle of page!) */}
        <div className="p-6 rounded-2xl bg-[#eff6ff] border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border-2 border-black flex items-center justify-center shrink-0">
              <MessageSquareText className="w-5 h-5 text-[#2563eb]" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase text-[#1e40af] block">Direct Underwriting Desk</span>
              <h4 className="text-sm font-black text-black">
                Have specific queries regarding CIBIL or FOIR? Chat with our senior loan specialists on WhatsApp.
              </h4>
            </div>
          </div>
          <a
            href={whatsAppPillarsUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-sm"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
