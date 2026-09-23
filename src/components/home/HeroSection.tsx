import React from 'react';
import { CheckCircle2, ArrowRight, Landmark, MessageSquareText, ShieldCheck } from 'lucide-react';
import { HomeLensLogo } from '../common/HomeLensLogo';
import { BankLogo } from '../common/BankLogos';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
  onExploreComparison: () => void;
  onExploreLoans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenCalculator,
  onExploreComparison,
  onExploreLoans,
}) => {
  const whatsAppHeroUrl = buildWhatsAppRedirectUrl({
    name: 'Home Loan Applicant',
    note: 'Inquiry from HomeLens Home page',
  });

  const exactPartnerBanks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Bank of Baroda',
    'Punjab National Bank',
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-14 overflow-hidden border-b-2 border-black bg-textured-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Official Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-wider border-2 border-black shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Bengaluru&apos;s Premier Mortgage Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.08]">
              Get Lower EMIs with{' '}
              <span className="text-[#b48835]">
                Direct Underwriter
              </span>{' '}
              Matching.
            </h1>

            {/* Editorial Sub-headline */}
            <p className="subheading-editorial text-xl sm:text-2xl text-[#875814] font-semibold italic">
              &ldquo;Independent mortgage underwriting, direct institutional spread discounts, and zero brokerage.&rdquo;
            </p>

            {/* Body Description (High Contrast Bold Text, No Faded Grey) */}
            <p className="text-sm sm:text-base text-black font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop settling for single-bank branch offers. HomeLens transparently benchmarks 55+ institutional lenders, secures exclusive spread discounts, and delivers end-to-end doorstep sanction assistance.
            </p>

            {/* Dual CTAs (Estimate EMI and Bank Rates) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer font-black border-2 border-black shadow-md transition-all"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#fae49d]" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer font-black border-2 border-black shadow-md transition-all"
              >
                <Landmark className="w-4 h-4" />
                <span>Estimate Your EMI</span>
              </button>

              <button
                onClick={onExploreComparison}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer font-black border-2 border-black shadow-sm transition-all"
              >
                <Landmark className="w-4 h-4 text-[#b48835]" />
                <span>55+ Bank Rates</span>
              </button>
            </div>

            {/* Trust bullet markers (High Contrast Text) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs font-black text-black">
              <span className="flex items-center gap-1.5 text-black">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                100% Free Borrower Service
              </span>
              <span className="flex items-center gap-1.5 text-black">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                Doorstep Document Pickup
              </span>
              <span className="flex items-center gap-1.5 text-black">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                Instant WhatsApp Advisory Desk
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Emblem Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 relative border-2 border-black shadow-[0_20px_45px_rgba(0,0,0,0.14)]">
              {/* Official Brand Header */}
              <div className="flex items-center justify-between pb-5 border-b-2 border-black mb-5">
                <div className="flex items-center">
                  <HomeLensLogo size="sm" subtitle="MORTGAGE DESK" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-[#b48835] uppercase tracking-wider block">
                    Fast-Track Sanction
                  </span>
                  <span className="text-[11px] text-black font-black">5-7 Working Days</span>
                </div>
              </div>

              {/* Verified Process Pillars with Light Pink & Light Blue Cards (High Contrast Text) */}
              <div className="space-y-3 mb-5">
                {/* Pillar 1: Light Blue Card */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#eff6ff] border-2 border-black shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-white border-2 border-black text-[#2563eb] flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-black">Unbiased 55+ Bank Matching</h3>
                    <p className="text-[11px] text-black font-semibold leading-relaxed mt-0.5">
                      We match your income &amp; credit with banks giving the lowest spread markup over repo rate.
                    </p>
                  </div>
                </div>

                {/* Pillar 2: Light Pink Card */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#fff0f3] border-2 border-black shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-white border-2 border-black text-[#e11d48] flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-black">Doorstep Paper Collection</h3>
                    <p className="text-[11px] text-black font-semibold leading-relaxed mt-0.5">
                      Our certified mortgage manager verifies KYC, title deeds, ITRs, and salary slips at your home.
                    </p>
                  </div>
                </div>

                {/* Pillar 3: Light Blue Card */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#eff6ff] border-2 border-black shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-white border-2 border-black text-[#2563eb] flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                    03
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-black">Direct Credit Committee Liaison</h3>
                    <p className="text-[11px] text-black font-semibold leading-relaxed mt-0.5">
                      Senior relationship managers expedite sanction letter approval with no branch follow-up needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Calculator Tool Anchor (Light Pink Container) */}
              <div className="p-3.5 rounded-2xl bg-[#fff0f3] border-2 border-black flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-black text-black block">Calculate Monthly EMI</span>
                  <span className="text-[11px] text-black font-bold">Instant principal vs interest breakdown</span>
                </div>
                <button
                  onClick={onOpenCalculator}
                  className="px-3 py-1.5 rounded-xl text-xs font-black bg-white text-black hover:bg-gray-100 border-2 border-black transition-colors cursor-pointer whitespace-nowrap shadow-sm"
                >
                  Open EMI Tool
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Banks Strip with Exact Uploaded Logos */}
        <div className="mt-14 pt-8 border-t-2 border-black">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-black">
              Direct Underwriting Partnerships With India&apos;s Leading Banks
            </span>
            <button
              onClick={onExploreComparison}
              className="text-xs font-black text-[#b48835] hover:text-black flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All 55+ Bank Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {exactPartnerBanks.map((bank) => (
              <div
                key={bank}
                onClick={onExploreComparison}
                className="p-3 rounded-2xl bg-white hover:bg-[#eff6ff] border-2 border-black shadow-xs flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 text-center group"
                title={`Compare ${bank}`}
              >
                <div className="h-8 flex items-center justify-center">
                  <BankLogo bankName={bank} size="sm" />
                </div>
                <span className="text-[11px] font-black text-black leading-tight group-hover:text-[#b48835] transition-colors">
                  {bank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
