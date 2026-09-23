import React from 'react';
import { MapPin, Mail, Phone, ShieldCheck, ArrowUpRight, MessageSquareText, CheckCircle2 } from 'lucide-react';
import { HomeLensLogo } from '../common/HomeLensLogo';
import { OFFICIAL_PHONE_FORMATTED, buildWhatsAppRedirectUrl } from '../../lib/contact';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openLoanModal?: (slug: string) => void;
  setIsAdminView?: (v: boolean) => void;
  openConsultation?: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  setActiveTab, 
  openLoanModal, 
  setIsAdminView, 
  openConsultation,
  onReplayIntro 
}) => {
  const loanLinks = [
    { label: 'Home Loan (Purchase & Resale)', slug: 'home-loan' },
    { label: 'Home Construction Loan', slug: 'home-construction-loan' },
    { label: 'Plot & Land Loan', slug: 'plot-loan' },
    { label: 'Home Loan Balance Transfer', slug: 'home-loan-balance-transfer' },
    { label: 'Top-Up Mortgage Loan', slug: 'top-up-loan' },
    { label: 'NRI Home Loan Services', slug: 'nri-home-loan' },
    { label: 'Loan Against Property (LAP)', slug: 'loan-against-property' },
  ];

  const toolsLinks = [
    { label: '55+ Bank Rate Comparison Matrix', tab: 'comparison' },
    { label: 'Home Loan EMI Calculator', tab: 'calculators' },
    { label: 'FOIR Eligibility Estimator', tab: 'calculators' },
    { label: 'Balance Transfer Savings Analyzer', tab: 'calculators' },
    { label: 'Borrower Document Checklist', tab: 'documents' },
    { label: 'Partner Zone (70% Payout)', tab: 'partner' },
    { label: 'Fintech Guides & Insights', tab: 'blogs' },
    { label: 'About HomeLens Advisory', tab: 'about' },
    { label: 'Contact Us & Head Office', tab: 'contact' },
  ];

  const whatsAppFooterUrl = buildWhatsAppRedirectUrl({
    message: 'Hello HomeLens Team, I need loan guidance and would like to speak to an advisor.',
  });

  return (
    <footer className="bg-white border-t-2 border-black text-black">
      {/* Prominent Official Helpline Banner at the top of the Footer (The ONLY place for the phone number!) */}
      <div className="bg-[#eff6ff] border-b-2 border-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Official HomeLens Desk (Contact at the End)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-black">
              Connect with a Senior Loan Specialist at <span className="text-[#b48835] font-black">{OFFICIAL_PHONE_FORMATTED}</span>
            </h3>
            <p className="text-xs text-black font-semibold">
              Instant sanction assistance, doorstep verification, and balance transfer advice across 55+ partner banks (Text / WhatsApp only).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={whatsAppFooterUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp Us ({OFFICIAL_PHONE_FORMATTED})</span>
            </a>
            <button
              onClick={openConsultation}
              className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
            >
              <span>Book Free Advisory</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Corporate Address (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <HomeLensLogo size="lg" subtitle="MORTGAGE ADVISORY" />
            </div>

            <p className="text-xs text-black leading-relaxed max-w-sm font-semibold">
              India&apos;s leading tech-enabled mortgage franchise network. Unbiased multi-lender comparison across 55+ commercial banks, private institutions, and NBFCs with doorstep documentation and zero borrower fee.
            </p>

            <div className="space-y-3 pt-2 text-xs text-black font-semibold">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b48835] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-black font-bold">
                  HomeLens Realty, 167, 4th Floor, 37th Cross Road, 28th Main Rd, Jayanagara 9th Block, Bengaluru, Karnataka 560041
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b48835] shrink-0" />
                <a href="mailto:contact@homelensrealty.com" className="text-black font-black hover:underline transition-colors">
                  contact@homelensrealty.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b48835] shrink-0" />
                <span className="text-black font-black">
                  {OFFICIAL_PHONE_FORMATTED} <span className="text-black font-semibold">(Official Number at End)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Mortgage Categories (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-black">
              Loan Programs
            </h3>
            <ul className="space-y-2.5 text-xs text-black font-bold">
              {loanLinks.map((item) => (
                <li key={item.slug}>
                  <button
                    onClick={() => {
                      if (openLoanModal) openLoanModal(item.slug);
                      else setActiveTab('loans');
                    }}
                    className="hover:text-[#b48835] transition-colors flex items-center justify-between w-full text-left cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#b48835] transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Tools & Network Portal (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-black">
              Tools &amp; Network
            </h3>
            <ul className="space-y-2.5 text-xs text-black font-bold">
              {toolsLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      setActiveTab(item.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#b48835] transition-colors flex items-center justify-between w-full text-left cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#b48835] transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3 space-y-2">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="w-full py-2 px-3 rounded-xl bg-white border-2 border-black hover:bg-gray-100 text-xs font-black text-black flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Replay Brand Intro</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="mt-14 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black font-bold">
          <div>
            &copy; {new Date().getFullYear()} HomeLens Realty &amp; Mortgage Advisory. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>Official Helpline: <strong className="text-black font-black">{OFFICIAL_PHONE_FORMATTED}</strong></span>
            <span aria-hidden="true">·</span>
            <span>RERA Registered Loan Channel Partner</span>
            <span aria-hidden="true">·</span>
            <span>Zero Brokerage Policy</span>
            <span aria-hidden="true">·</span>
            <span>CIN: U70109KA2023PTC174829</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
