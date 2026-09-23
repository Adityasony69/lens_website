import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { initialBlogs } from '../../lib/data';
import { BlogPost } from '../../types';
import { BlogReaderModal } from './BlogReaderModal';

interface BlogsSectionProps {
  onOpenConsultation: () => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Interest Rates', 'Balance Transfer', 'Eligibility', 'NRI'];

  const filtered = initialBlogs.filter(
    (b) => filterCategory === 'All' || b.category === filterCategory
  );

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-textured-paper rounded-3xl border-2 border-black my-8 shadow-sm">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
          Fintech Insights & Guides
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
          Mortgage <span className="text-[#b48835]">Knowledge Center</span>
        </h2>
        <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
          &ldquo;Clear financial wisdom on RBI repo shifts, tax saving hacks, and loan underwriting.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
          Comprehensive guides on RBI external benchmarks, EBLR spreads, FOIR underwriting rules, and practical tax deduction tips under Section 80C and Section 24(b).
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-1.5 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap border-2 border-black ${
              filterCategory === cat
                ? 'bg-black text-[#fae49d] shadow-xs'
                : 'text-black bg-white hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-black hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:-translate-y-1 flex flex-col justify-between group cursor-pointer transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
            onClick={() => setSelectedPost(post)}
          >
            <div>
              <div className="flex items-center justify-between text-xs text-black mb-3">
                <span className="text-[#b48835] font-black uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-black font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.read_time}</span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-black text-black group-hover:text-[#b48835] transition-colors mb-2.5 leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-black font-medium leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs">
              <span className="text-black font-bold">{post.published_date}</span>
              <span className="text-black font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#b48835]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <BlogReaderModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onOpenConsultation={() => {
            setSelectedPost(null);
            onOpenConsultation();
          }}
        />
      )}
    </div>
  );
};
