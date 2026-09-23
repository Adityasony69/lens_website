import React, { useState } from 'react';
import { 
  Network, 
  FileText, 
  Scale, 
  Receipt, 
  AlertCircle, 
  ArrowRight,
  MessageSquareText
} from 'lucide-react';
import { InteractiveHoverCard } from '../common/InteractiveHoverCard';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';

interface BorrowingPainPointsSectionProps {
  onOpenConsultation: () => void;
  onOpenComparison: () => void;
  onOpenCalculator?: () => void;
}

export const BorrowingPainPointsSection: React.FC<BorrowingPainPointsSectionProps> = ({
  onOpenConsultation,
  onOpenComparison,
  onOpenCalculator,
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const directWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: 'Hello, I saw the Borrowing Dilemma section on HomeLens and need advice on comparing loan rates without getting stuck.',
  });

  return (
    <section className="py-20 relative overflow-hidden bg-textured-paper border-y-2 border-black">
      {/* Light subtle background grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.2em] mb-3">
            The Traditional Borrowing Dilemma
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
            Why Borrowing on Your Own Feels Overwhelming
          </h2>
          <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mt-2">
            &ldquo;Confusing interest spreads, opaque processing fees, and endless bank branches.&rdquo;
          </p>
        </div>

        {/* Character Stage with SNUG Floating Interactive Cards */}
        <div className="relative max-w-5xl mx-auto min-h-[660px] lg:min-h-[560px] flex items-center justify-center my-4">
          
          {/* ================= 4 TIGHTLY FRAMED FLOATING DATA CARDS ================= */}

          {/* Card 1: TOP LEFT - No Comparison (Light Blue Card, Black Framing) */}
          <div className="lg:absolute lg:top-4 lg:left-4 xl:left-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#eff6ff] border-2 border-black shadow-[0_12px_30px_rgba(59,130,246,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 1 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-sm">
                    <Network className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1e40af] block">Pitfall 01</span>
                    <h3 className="text-sm font-black text-black">No Comparison</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  If you only speak to one lender, you only see their offer — not how it compares against others.
                </p>
                {/* Warning Pill with black frame */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
                  <span className="font-extrabold text-black">15+ factors</span>
                  <span className="text-gray-600">compare per bank</span>
                </div>
              </div>
            </InteractiveHoverCard>
          </div>

          {/* Card 2: BOTTOM LEFT - Too Many Decisions (Light Pink Card, Black Framing) */}
          <div className="lg:absolute lg:bottom-4 lg:left-4 xl:left-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(2)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#fff0f3] border-2 border-black shadow-[0_12px_30px_rgba(244,63,94,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 2 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-sm">
                    <Scale className="w-4 h-4 text-[#e11d48]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9f1239] block">Pitfall 02</span>
                    <h3 className="text-sm font-black text-black">Too Many Decisions</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Choosing between multiple lenders, terms, and offers can feel like a lot to handle.
                </p>
                {/* Warning Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-[#e11d48] shrink-0" />
                  <span className="font-extrabold text-black">30+ banks</span>
                  <span className="text-gray-600">with different rates</span>
                </div>
              </div>
            </InteractiveHoverCard>
          </div>

          {/* ================= CENTER CHARACTER ARTWORK (SHRUSHTI & KAI) ================= */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-6">
            <div className="relative w-72 sm:w-80 md:w-88 rounded-3xl bg-white border-2 border-black p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] flex flex-col items-center justify-between overflow-hidden">
              
              {/* Soft pastel ambient background inside portrait */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7ff] via-[#fff5f7] to-white pointer-events-none" />

              {/* Character Illustration Inspired by Shrushti & Kai References */}
              <div className="w-full flex-1 flex items-center justify-center relative py-2">
                <svg
                  viewBox="0 0 400 320"
                  className="w-full h-full max-h-60 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Shrushti Skin & Hair */}
                    <linearGradient id="shrushtiSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#eec4a9" />
                      <stop offset="100%" stopColor="#caa084" />
                    </linearGradient>
                    <linearGradient id="shrushtiHair" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e1e22" />
                      <stop offset="100%" stopColor="#0d0d0f" />
                    </linearGradient>
                    {/* Kai Skin & Hoodie */}
                    <linearGradient id="kaiSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3ccb2" />
                      <stop offset="100%" stopColor="#d49f7e" />
                    </linearGradient>
                    <linearGradient id="kaiHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a1e" />
                      <stop offset="100%" stopColor="#0a0a0c" />
                    </linearGradient>
                  </defs>

                  {/* KAI (Left Character: Messy dark wavy hair, black hoodie, hoop earring) */}
                  <g id="kaiCharacter">
                    {/* Black Hoodie Body */}
                    <path d="M70 230 C90 190, 160 190, 185 230 L200 320 L60 320 Z" fill="url(#kaiHoodie)" stroke="#000000" strokeWidth="2.5" />
                    {/* Hoodie Strings */}
                    <line x1="125" y1="210" x2="122" y2="245" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    <line x1="140" y1="210" x2="143" y2="245" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    {/* Neck */}
                    <rect x="120" y="155" width="26" height="30" fill="url(#kaiSkin)" />
                    {/* Kai Face */}
                    <ellipse cx="132" cy="130" rx="30" ry="38" fill="url(#kaiSkin)" stroke="#000000" strokeWidth="2" />
                    {/* Silver Hoop Earring on Left Ear */}
                    <ellipse cx="98" cy="135" rx="3.5" ry="5" fill="none" stroke="#d4d4d8" strokeWidth="2.5" />
                    {/* Messy Wavy Dark Hair (Kai style) */}
                    <path d="M96 122 C90 90, 115 65, 145 68 C165 70, 172 88, 168 110 C162 100, 150 90, 135 90 C120 90, 105 105, 96 122 Z" fill="url(#kaiHair)" stroke="#000000" strokeWidth="2" />
                    <path d="M125 70 C135 55, 155 60, 158 75 C148 72, 138 72, 125 70 Z" fill="#0d0d0f" />
                    {/* Eyes, Eyebrows & Thoughtful Expression */}
                    <path d="M112 115 Q122 112 128 116" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="120" cy="123" r="3" fill="#000000" />
                    <path d="M142 116 Q148 112 158 115" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="150" cy="123" r="3" fill="#000000" />
                    {/* Nose & Mouth */}
                    <path d="M134 125 L131 138 L137 138" stroke="#a07255" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    <path d="M126 148 Q134 146 142 148" stroke="#a07255" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </g>

                  {/* SHRUSHTI (Right Character: Long dark wavy hair, freckles, ivory embroidered kurta, jhumka) */}
                  <g id="shrushtiCharacter">
                    {/* Back flowing dark hair */}
                    <path d="M220 80 C270 70, 315 110, 310 180 C305 240, 275 280, 260 320 L210 320 Z" fill="url(#shrushtiHair)" />
                    {/* Ivory Embroidered Kurta */}
                    <path d="M205 220 C230 185, 300 185, 325 220 L345 320 L190 320 Z" fill="#fdfbf7" stroke="#000000" strokeWidth="2.5" />
                    {/* Gold Neckline Embroidery */}
                    <path d="M245 200 Q265 225 285 200" stroke="#b48835" strokeWidth="2.5" fill="none" strokeDasharray="3,2" />
                    {/* Neck */}
                    <rect x="252" y="155" width="26" height="30" fill="url(#shrushtiSkin)" />
                    {/* Shrushti Face */}
                    <ellipse cx="265" cy="130" rx="30" ry="38" fill="url(#shrushtiSkin)" stroke="#000000" strokeWidth="2" />
                    {/* Silver Traditional Jhumka Earring */}
                    <g transform="translate(298, 138)">
                      <circle cx="0" cy="0" r="2.5" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
                      <path d="M-4 5 L4 5 L2 9 L-2 9 Z" fill="#b48835" stroke="#000000" strokeWidth="0.8" />
                    </g>
                    {/* Front Cascading Long Wavy Dark Hair */}
                    <path d="M232 105 C230 80, 255 60, 285 65 C305 70, 315 88, 305 125 C295 105, 275 92, 250 98 C240 102, 235 120, 230 145 C225 180, 235 220, 232 250" fill="url(#shrushtiHair)" stroke="#000000" strokeWidth="2" />
                    {/* Freckles on Cheeks */}
                    <circle cx="255" cy="133" r="0.9" fill="#9e6648" />
                    <circle cx="258" cy="135" r="0.8" fill="#9e6648" />
                    <circle cx="260" cy="132" r="0.9" fill="#9e6648" />
                    <circle cx="272" cy="133" r="0.8" fill="#9e6648" />
                    <circle cx="275" cy="135" r="0.9" fill="#9e6648" />
                    {/* Defined Expressive Eyes & Brows */}
                    <path d="M246 114 Q256 111 262 115" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <ellipse cx="254" cy="122" rx="4" ry="3.5" fill="#1e1e24" />
                    <circle cx="255" cy="121" r="1" fill="#ffffff" />
                    <path d="M272 115 Q278 111 288 114" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <ellipse cx="280" cy="122" rx="4" ry="3.5" fill="#1e1e24" />
                    <circle cx="281" cy="121" r="1" fill="#ffffff" />
                    {/* Nose & Soft Lip Line */}
                    <path d="M266 123 L264 136 L269 136" stroke="#9e6648" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    <path d="M258 146 Q266 148 274 146" stroke="#b45309" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Mortage Papers & EMI Calculator Held in Forefront */}
                  <g id="mortgagePapers" transform="translate(140, 230)">
                    {/* Paper Document */}
                    <rect x="0" y="0" width="120" height="75" rx="6" fill="#ffffff" stroke="#000000" strokeWidth="2.5" transform="rotate(-3)" />
                    <line x1="12" y1="18" x2="65" y2="18" stroke="#000000" strokeWidth="2.5" />
                    <line x1="12" y1="28" x2="105" y2="28" stroke="#9ca3af" strokeWidth="2" />
                    <line x1="12" y1="36" x2="95" y2="36" stroke="#9ca3af" strokeWidth="2" />
                    <line x1="12" y1="44" x2="100" y2="44" stroke="#9ca3af" strokeWidth="2" />
                    {/* Stamped Red Alert Box */}
                    <rect x="12" y="52" width="70" height="15" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
                    <text x="16" y="63" fontSize="8" fontWeight="bold" fill="#dc2626">ROI 9.25% ???</text>
                  </g>
                </svg>
              </div>

              {/* Character Identity Label with Black Frame */}
              <div className="w-full pt-2 border-t-2 border-black">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#b48835] block">
                  FIRST-TIME BORROWERS
                </span>
                <span className="text-xs font-black text-black">
                  Shrushti &amp; Kai Reviewing Rate Offers
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: TOP RIGHT - Excessive Paperwork (Light Pink Card, Black Framing) */}
          <div className="lg:absolute lg:top-4 lg:right-4 xl:right-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(3)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#fff0f3] border-2 border-black shadow-[0_12px_30px_rgba(244,63,94,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 3 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-4 h-4 text-[#e11d48]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9f1239] block">Pitfall 03</span>
                    <h3 className="text-sm font-black text-black">Excessive Paperwork</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Between documents, approvals, and follow-ups, the process can start to feel overwhelming.
                </p>
                {/* Warning Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-[#e11d48] shrink-0" />
                  <span className="font-extrabold text-black">₹2-5 lakhs</span>
                  <span className="text-gray-600">hidden in fine print</span>
                </div>
              </div>
            </InteractiveHoverCard>
          </div>

          {/* Card 4: BOTTOM RIGHT - Unclear Charges (Light Blue Card, Black Framing) */}
          <div className="lg:absolute lg:bottom-4 lg:right-4 xl:right-8 my-3 lg:my-0 z-20">
            <InteractiveHoverCard depth={45}>
              <div
                onMouseEnter={() => setActiveCard(4)}
                onMouseLeave={() => setActiveCard(null)}
                className={`w-72 sm:w-80 p-5 rounded-2xl bg-[#eff6ff] border-2 border-black shadow-[0_12px_30px_rgba(59,130,246,0.18)] cursor-pointer transition-all duration-300 ${
                  activeCard === 4 ? 'scale-[1.03] shadow-[0_16px_36px_rgba(0,0,0,0.22)]' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-sm">
                    <Receipt className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1e40af] block">Pitfall 04</span>
                    <h3 className="text-sm font-black text-black">Unclear Charges</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Interest rate, processing charges, and other costs are not always easy to understand.
                </p>
                {/* Warning Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                  <span className="font-extrabold text-black">₹8-12 lakhs</span>
                  <span className="text-gray-600">extra in 20 yr</span>
                </div>
              </div>
            </InteractiveHoverCard>
          </div>

        </div>

        {/* Action Callout & Helpline Bar */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#f8f9fc] border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#25d366] text-white text-[11px] font-black uppercase">
                Active WhatsApp Desk
              </span>
              <span className="text-xs font-black text-black">Need instant clarification on your CIBIL or FOIR?</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-black">
              Chat with our Senior Credit Desk directly via WhatsApp for instant profile review.
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onOpenCalculator ? (
              <button
                onClick={onOpenCalculator}
                className="px-5 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
              >
                <Scale className="w-4 h-4" />
                <span>Estimate Your EMI</span>
              </button>
            ) : (
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
              >
                <Scale className="w-4 h-4" />
                <span>Estimate Your EMI</span>
              </a>
            )}
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md cursor-pointer transition-all"
            >
              <span>Book Doorstep Advisor</span>
              <ArrowRight className="w-4 h-4 text-[#fae49d]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
