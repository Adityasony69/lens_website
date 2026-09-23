import React, { useState } from 'react';
import { Home, Hammer, MapPin, RefreshCw, PlusCircle, Globe2, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { initialLoanProducts } from '../../lib/data';
import { LoanProduct } from '../../types';
import { LoanDetailModal } from './LoanDetailModal';

interface LoanProductsCatalogProps {
  onOpenConsultation: () => void;
  selectedSlug?: string | null;
  onClearSelectedSlug?: () => void;
}

export const LoanProductsCatalog: React.FC<LoanProductsCatalogProps> = ({
  onOpenConsultation,
  selectedSlug,
  onClearSelectedSlug,
}) => {
  const [activeModalProduct, setActiveModalProduct] = useState<LoanProduct | null>(
    selectedSlug ? initialLoanProducts[selectedSlug] || null : null
  );

  const productList = Object.values(initialLoanProducts);

  const iconMap: Record<string, React.ReactNode> = {
    'home-loan': <Home className="w-5 h-5 text-black" />,
    'home-construction-loan': <Hammer className="w-5 h-5 text-black" />,
    'plot-loan': <MapPin className="w-5 h-5 text-black" />,
    'home-loan-balance-transfer': <RefreshCw className="w-5 h-5 text-black" />,
    'top-up-loan': <PlusCircle className="w-5 h-5 text-black" />,
    'nri-home-loan': <Globe2 className="w-5 h-5 text-black" />,
    'loan-against-property': <Building2 className="w-5 h-5 text-black" />,
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-textured-paper">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
          Tailored Loan Programs
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
          Types of Home Loans <span className="text-[#b48835]">We Provide</span>
        </h2>
        <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
          &ldquo;Custom-tailored mortgage programs designed for every stage of your property journey.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed max-w-2xl mx-auto">
          From ready apartments and custom plot constructions to high-saving balance transfers and NRI mortgages, our advisors connect you to 55+ vetted institutions.
        </p>
      </div>

      {/* Cards Grid with alternating Light Blue & Light Pink Cards and Black Framing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {productList.map((p, idx) => {
          const isBlue = idx % 2 === 0;
          return (
            <div
              key={p.slug}
              className={`p-6 sm:p-7 rounded-3xl border-2 border-black flex flex-col justify-between shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-200 ${
                isBlue ? 'bg-[#eff6ff]' : 'bg-[#fff0f3]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white border-2 border-black flex items-center justify-center shadow-xs">
                    {iconMap[p.slug] || <Home className="w-5 h-5 text-black" />}
                  </div>
                  <div className="text-xs font-black text-black bg-white px-3 py-1 rounded-full border-2 border-black tabular-nums shadow-xs">
                    {p.roi}
                  </div>
                </div>

                <h3 className="text-base font-black text-black mb-2">{p.name}</h3>
                <p className="text-xs text-gray-700 font-medium leading-relaxed mb-5 line-clamp-3">
                  {p.description}
                </p>

                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-white border-2 border-black mb-5 text-xs">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-black block">Tenure</span>
                    <span className="font-black text-black mt-0.5 block">{p.tenure}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-black block">Sanction Limit</span>
                    <span className="font-black text-black mt-0.5 block">{p.maxAmount}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {p.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-800 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setActiveModalProduct(p)}
                className="w-full py-3 px-4 rounded-xl text-xs font-black bg-black hover:bg-gray-800 text-white border-2 border-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>View Requirements &amp; Apply</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Modal for Loan Details */}
      {activeModalProduct && (
        <LoanDetailModal
          product={activeModalProduct}
          onClose={() => {
            setActiveModalProduct(null);
            if (onClearSelectedSlug) onClearSelectedSlug();
          }}
          onApply={() => {
            setActiveModalProduct(null);
            onOpenConsultation();
          }}
        />
      )}
    </div>
  );
};
