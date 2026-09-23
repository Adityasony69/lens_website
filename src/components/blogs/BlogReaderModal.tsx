import React from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogReaderModalProps {
  post: BlogPost;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  post,
  onClose,
  onOpenConsultation,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#16171a] border border-[#2b2d38] rounded-2xl p-6 sm:p-10 shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#8e9099] hover:text-[#f0f0f2] hover:bg-[#20222a] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Back Link */}
        <button
          onClick={onClose}
          className="text-xs font-semibold text-[#c5a059] hover:text-[#fae49d] flex items-center gap-1.5 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </button>

        {/* Category & Meta */}
        <div className="flex items-center gap-2 text-xs text-[#8e9099] mb-3">
          <span className="text-[#c5a059] font-semibold">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.published_date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.read_time}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f0f0f2] tracking-tight mb-6 leading-snug">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 pb-6 border-b border-[#24262f] mb-8 text-xs text-[#8e9099]">
          <div className="w-8 h-8 rounded-lg bg-[#202228] border border-[#383b46] flex items-center justify-center text-[#c5a059] font-bold">
            HL
          </div>
          <div>
            <span className="text-[#f0f0f2] font-semibold block">{post.author}</span>
            <span className="text-[11px] text-[#6e717b]">Verified Credit Advisory Desk</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-none text-xs sm:text-sm text-[#c2c4cb] leading-relaxed space-y-4">
          <p className="text-base text-[#f0f0f2] font-medium leading-relaxed">
            {post.excerpt}
          </p>

          <p>
            {post.content}
          </p>

          <div className="p-4 rounded-xl bg-[#141518] border border-[#282a33] text-xs text-[#8e9099] leading-relaxed space-y-2">
            <span className="font-bold text-[#c5a059] uppercase tracking-wider block text-[11px]">
              Key Regulatory Takeaway
            </span>
            <p>
              Under current RBI directions, commercial banks cannot levy foreclosure or prepayment penalties on floating-rate home loans sanctioned to individual borrowers. Always assess the external benchmark spread before locking in a balance transfer.
            </p>
          </div>
        </div>

        {/* Consultation Callout in modal */}
        <div className="mt-10 p-6 rounded-xl bg-[#18191e] border border-[#383b46] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#c5a059] uppercase tracking-wider block mb-1">
              Need Personal Guidance?
            </span>
            <h4 className="text-sm sm:text-base font-bold text-[#f0f0f2]">
              Consult a Certified HomeLens Credit Advisor
            </h4>
            <p className="text-xs text-[#8e9099] mt-0.5">
              Get an eligibility calculation across 55+ lenders at zero cost to you.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="btn-gold px-6 py-2.5 text-xs whitespace-nowrap cursor-pointer shrink-0 font-bold uppercase tracking-wider"
          >
            <span>Book Advisor Call</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};
