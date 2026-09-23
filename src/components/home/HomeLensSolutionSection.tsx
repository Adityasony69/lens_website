import React, { useState } from 'react';
import { 
  Banknote, 
  Sparkles, 
  UserCheck, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageSquareText,
  Calculator
} from 'lucide-react';
import { InteractiveHoverCard } from '../common/InteractiveHoverCard';
import { BankLogo } from '../common/BankLogos';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';

interface HomeLensSolutionSectionProps {
  onOpenConsultation: () => void;
  onOpenComparison: () => void;
  onOpenCalculators: () => void;
}

export const HomeLensSolutionSection: React.FC<HomeLensSolutionSectionProps> = ({
  onOpenConsultation,
  onOpenComparison,
  onOpenCalculators,
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const directWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: 'Hello HomeLens Team, I want to claim the ₹50,000 disbursal cashback and explore zero-fee loan advisory options.',
  });

  return (
    <section className="py-20 relative overflow-hidden bg-textured-paper border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.2em] mb-3">
              The HomeLens Solution
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
              Direct Underwriting + Dedicated Expert Guidance
            </h2>
            <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mt-1.5">
              &ldquo;From doorstep application to final registry, India&apos;s most rewarding mortgage desk.&rdquo;
            </p>
          </div>

          {/* Quick Actions (Estimate Your EMI & Consult Advisor) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCalculators}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 border-2 border-black text-xs font-black text-black transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#b48835]" />
              <span>Estimate Your EMI</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm border-2 border-black cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#fae49d]" />
              <span>Consult Advisor</span>
            </button>
          </div>
        </div>

        {/* Character Stage with SNUG Floating Benefit Cards */}
        <div className="relative max-w-5xl mx-auto min-h-[660px] lg:min-h-[560px] flex items-center justify-center my-4">

          {/* ================= 4 TIGHTLY WRAPPED BENEFIT CARDS ================= */}

          {/* Card 1: TOP LEFT - Up to ₹50,000 Cashback (Light Pink Card, Black Framing) */}
          <div className="lg:absolute lg:top-4 lg:left-4 xl:left-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#fff0f3] border-2 border-black shadow-[0_12px_30px_rgba(244,63,94,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 1 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-sm">
                    <Banknote className="w-4 h-4 text-[#e11d48]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9f1239] block">Exclusive Reward</span>
                    <div className="text-base font-black text-black">
                      Up to ₹50,000
                    </div>
                  </div>
                </div>
                <p className="text-xs font-bold text-gray-900 mt-1">
                  Direct Cashback on Disbursal
                </p>
                <p className="text-[11px] text-gray-700 mt-1 leading-relaxed">
                  Credited directly to your account upon first loan tranches from our approved bank partners.
                </p>
              </div>
            </InteractiveHoverCard>
          </div>

          {/* Card 2: TOP RIGHT - 0 Zero Advisory Fee (Light Blue Card, Black Framing) */}
          <div className="lg:absolute lg:top-4 lg:right-4 xl:right-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(2)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#eff6ff] border-2 border-black shadow-[0_12px_30px_rgba(59,130,246,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 2 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-3xl font-black text-black leading-none font-mono">
                    0
                  </div>
                  <div>
                    <div className="text-sm font-black text-black">
                      Zero Advisory Fee
                    </div>
                    <span className="text-[10px] font-extrabold text-[#1d4ed8] uppercase tracking-wider">
                      100% Free Consultation
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-700 mt-2 leading-relaxed">
                  Zero file opening fees, no hidden consultancy retainers, and complimentary doorstep document pickup.
                </p>
              </div>
            </InteractiveHoverCard>
          </div>

          {/* ================= CENTER AI ADVISOR ART (INNOVATOR REFERENCE) ================= */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-6">
            <div className="relative w-72 sm:w-80 md:w-88 rounded-3xl bg-white border-2 border-black p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] flex flex-col items-center justify-between overflow-hidden">
              
              {/* Soft subtle pastel gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#f0fdf4] via-[#eff6ff] to-white pointer-events-none" />

              {/* Advisor Illustration matching Innovator reference (curly messy hair, warm smile, stubble, corduroy jacket) */}
              <div className="w-full flex-1 flex items-center justify-center relative py-2">
                <svg
                  viewBox="0 0 360 320"
                  className="w-full h-full max-h-60 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="advisorSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0ccb4" />
                      <stop offset="100%" stopColor="#d59e7f" />
                    </linearGradient>
                    <linearGradient id="corduroyJacket" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8d5b38" />
                      <stop offset="100%" stopColor="#673f24" />
                    </linearGradient>
                    <linearGradient id="plaidShirt" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                  </defs>

                  {/* Innovator Advisor (Curly Messy Hair, Corduroy Jacket, Big Smile) */}
                  <g id="innovatorAdvisor">
                    {/* Corduroy Jacket Body */}
                    <path d="M70 210 C100 170, 260 170, 290 210 L315 320 L45 320 Z" fill="url(#corduroyJacket)" stroke="#000000" strokeWidth="2.5" />
                    
                    {/* Plaid Shirt V-Neck Collar */}
                    <path d="M140 180 L180 235 L220 180 Z" fill="url(#plaidShirt)" stroke="#000000" strokeWidth="2" />
                    <line x1="160" y1="180" x2="160" y2="235" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="200" y1="180" x2="200" y2="235" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2" />
                    
                    {/* Jacket Lapels */}
                    <path d="M135 180 L165 245 L130 260 Z" fill="#754728" stroke="#000000" strokeWidth="1.8" />
                    <path d="M225 180 L195 245 L230 260 Z" fill="#754728" stroke="#000000" strokeWidth="1.8" />

                    {/* Neck */}
                    <rect x="165" y="145" width="30" height="35" fill="url(#advisorSkin)" />

                    {/* Head / Face */}
                    <ellipse cx="180" cy="120" rx="34" ry="42" fill="url(#advisorSkin)" stroke="#000000" strokeWidth="2" />

                    {/* Ears */}
                    <ellipse cx="145" cy="122" rx="5" ry="9" fill="url(#advisorSkin)" stroke="#000000" strokeWidth="1.5" />
                    <ellipse cx="215" cy="122" rx="5" ry="9" fill="url(#advisorSkin)" stroke="#000000" strokeWidth="1.5" />

                    {/* Curly Messy Hair (Exact Innovator Signature Style) */}
                    <g id="curlyHair" fill="#2b231c" stroke="#000000" strokeWidth="1.8">
                      <circle cx="150" cy="85" r="14" />
                      <circle cx="170" cy="72" r="16" />
                      <circle cx="190" cy="70" r="15" />
                      <circle cx="210" cy="82" r="14" />
                      <circle cx="138" cy="98" r="12" />
                      <circle cx="222" cy="95" r="12" />
                      <circle cx="158" cy="62" r="10" />
                      <circle cx="185" cy="58" r="12" />
                      <circle cx="202" cy="62" r="10" />
                      {/* Messy Strands sticking out like in photo */}
                      <path d="M142 62 Q130 50 140 40 Q148 55 146 65" />
                      <path d="M218 64 Q232 50 220 42 Q215 54 216 66" />
                      <path d="M178 55 Q180 38 185 36 Q188 48 186 56" />
                    </g>

                    {/* Stubble Beard & Mustache (Innovator style) */}
                    <path d="M158 135 C158 156, 202 156, 202 135 C200 162, 160 162, 158 135 Z" fill="#3f3328" opacity="0.4" />
                    {/* Light Mustache */}
                    <path d="M165 133 Q180 130 195 133" stroke="#2b231c" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Warm Smiling Eyes with laughter crinkles */}
                    <path d="M160 110 Q168 106 174 110" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="167" cy="116" r="3.2" fill="#1e1e24" />
                    <circle cx="168" cy="115" r="1" fill="#ffffff" />
                    <path d="M186 110 Q192 106 200 110" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="193" cy="116" r="3.2" fill="#1e1e24" />
                    <circle cx="194" cy="115" r="1" fill="#ffffff" />
                    {/* Eye Crinkles */}
                    <line x1="156" y1="113" x2="152" y2="116" stroke="#9e6648" strokeWidth="1.2" />
                    <line x1="204" y1="113" x2="208" y2="116" stroke="#9e6648" strokeWidth="1.2" />

                    {/* Joyful Authentic Smile */}
                    <path d="M165 138 Q180 154 195 138" stroke="#000000" strokeWidth="2.5" fill="#ffffff" strokeLinecap="round" />
                    <path d="M168 140 Q180 148 192 140" fill="#ffffff" />

                    {/* Holding Smartphone with ₹50,000 Sanctioned Screen */}
                    <g transform="translate(195, 175) rotate(-5)">
                      <rect x="0" y="0" width="70" height="110" rx="10" fill="#000000" stroke="#b48835" strokeWidth="2.5" />
                      <rect x="5" y="8" width="60" height="94" rx="6" fill="#064e3b" />
                      <circle cx="35" cy="35" r="12" fill="#10b981" />
                      <path d="M29 35 L33 39 L41 31" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="35" y="60" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">APPROVED</text>
                      <text x="35" y="74" textAnchor="middle" fill="#fae49d" fontSize="9.5" fontWeight="black" fontFamily="sans-serif">₹50,000</text>
                      <text x="35" y="84" textAnchor="middle" fill="#a7f3d0" fontSize="6.5" fontFamily="sans-serif">Cashback Credit</text>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Caption with Black Frame */}
              <div className="w-full pt-2 border-t-2 border-black">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#b48835] block">
                  HOMELENS CREDIT ARCHITECT
                </span>
                <span className="text-xs font-black text-black">
                  Dev Sharma • Certified Loan Advocate
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: BOTTOM LEFT - AI + Expert Guidance (Light Blue Card, Black Framing) */}
          <div className="lg:absolute lg:bottom-4 lg:left-4 xl:left-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(3)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#eff6ff] border-2 border-black shadow-[0_12px_30px_rgba(59,130,246,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 3 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-sm">
                    <Zap className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="text-xs font-bold text-black font-mono">+</span>
                  <div className="w-8 h-8 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-sm">
                    <UserCheck className="w-4 h-4 text-[#b48835]" />
                  </div>
                </div>
                <div className="text-sm font-black text-black mb-1">
                  AI + Expert Guidance
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Algorithmic underwriting checks your eligibility across multiple bank formulas, followed by a human loan advocate who fights for your best rate.
                </p>
              </div>
            </InteractiveHoverCard>
          </div>

          {/* Card 4: BOTTOM RIGHT - Compare 55+ Lenders (Light Pink Card, Black Framing) */}
          <div className="lg:absolute lg:bottom-4 lg:right-4 xl:right-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(4)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#fff0f3] border-2 border-black shadow-[0_12px_30px_rgba(244,63,94,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 4 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                {/* Bank mini logos row with exact BankLogo components and bank word below */}
                <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                  <div className="p-1 rounded-md bg-white border-2 border-black flex flex-col items-center justify-center text-center">
                    <BankLogo bankName="SBI" size="sm" showText={false} />
                    <span className="text-[9px] font-black text-black mt-0.5">SBI Bank</span>
                  </div>
                  <div className="p-1 rounded-md bg-white border-2 border-black flex flex-col items-center justify-center text-center">
                    <BankLogo bankName="HDFC" size="sm" showText={false} />
                    <span className="text-[9px] font-black text-black mt-0.5">HDFC Bank</span>
                  </div>
                  <div className="p-1 rounded-md bg-white border-2 border-black flex flex-col items-center justify-center text-center">
                    <BankLogo bankName="ICICI" size="sm" showText={false} />
                    <span className="text-[9px] font-black text-black mt-0.5">ICICI Bank</span>
                  </div>
                  <div className="p-1 rounded-md bg-white border-2 border-black flex flex-col items-center justify-center text-center">
                    <BankLogo bankName="Kotak" size="sm" showText={false} />
                    <span className="text-[9px] font-black text-black mt-0.5">Kotak Bank</span>
                  </div>
                </div>
                <div className="text-sm font-black text-black mb-1">
                  Compare <span className="text-[#b48835]">55+ Lenders</span>
                </div>
                <p className="text-xs text-black font-semibold leading-relaxed">
                  Real-time benchmark comparison of interest spreads, processing fee waivers, and technical valuation turnaround speeds.
                </p>
              </div>
            </InteractiveHoverCard>
          </div>

        </div>

        {/* Fast Action & WhatsApp Redirection Bar */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#eff6ff] border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-black text-[#fae49d] text-[11px] font-black uppercase">
                Zero Fees • Instant Cashback
              </span>
              <span className="text-xs font-black text-black">Direct Advisor Desk</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-black">
              Connect directly with our Loan Officers on WhatsApp for instant disbursement support.
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              onClick={onOpenComparison}
              className="px-5 py-3 rounded-xl bg-white hover:bg-gray-100 text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
            >
              <span>Compare 55+ Rates</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
            >
              <span>Claim ₹50k Cashback</span>
              <ArrowRight className="w-4 h-4 text-[#fae49d]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
