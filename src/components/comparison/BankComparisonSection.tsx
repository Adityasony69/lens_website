import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, MessageSquareText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { storage } from '../../lib/storage';
import { BankLogo } from '../common/BankLogos';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';

interface BankComparisonSectionProps {
  onApplyForBank: (bankName: string, loanType: string) => void;
}

export const BankComparisonSection: React.FC<BankComparisonSectionProps> = ({ onApplyForBank }) => {
  const [selectedLoanType, setSelectedLoanType] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');
  const [search, setSearch] = useState('');

  const comparisons = storage.getComparisons();

  const loanTypes = useMemo(() => {
    const set = new Set(comparisons.map((c) => c.loan_type));
    return ['All', ...Array.from(set)];
  }, [comparisons]);

  const sectors = useMemo(() => {
    const set = new Set(comparisons.map((c) => c.bank_sector));
    return ['All', ...Array.from(set)];
  }, [comparisons]);

  const filtered = useMemo(() => {
    return comparisons.filter((row) => {
      const matchType = selectedLoanType === 'All' || row.loan_type === selectedLoanType;
      const matchSector = selectedSector === 'All' || row.bank_sector === selectedSector;
      const matchSearch =
        !search ||
        row.bank_name.toLowerCase().includes(search.toLowerCase()) ||
        row.loan_type.toLowerCase().includes(search.toLowerCase());
      return matchType && matchSector && matchSearch;
    });
  }, [comparisons, selectedLoanType, selectedSector, search]);

  const resetFilters = () => {
    setSelectedLoanType('All');
    setSelectedSector('All');
    setSearch('');
  };

  const hasActiveFilters = selectedLoanType !== 'All' || selectedSector !== 'All' || search !== '';

  const featuredBanks = [
    { name: 'State Bank of India', roi: '8.35% onwards', benefit: 'Zero prepayment charges', tag: 'PSU Leader' },
    { name: 'HDFC Bank', roi: '8.75% onwards', benefit: 'Fastest 48-hr digital sanction', tag: 'Private Top Pick' },
    { name: 'ICICI Bank', roi: '8.75% onwards', benefit: 'Pre-approved builder tie-ups', tag: 'Digital Priority' },
    { name: 'Axis Bank', roi: '8.75% onwards', benefit: '12 EMI waivers on timely payment', tag: 'Customer Choice' },
    { name: 'Kotak Mahindra Bank', roi: '8.75% onwards', benefit: 'Doorstep concierge assistance', tag: 'Fast Track' },
    { name: 'Bank of Baroda', roi: '8.40% onwards', benefit: 'Special concessions for women', tag: 'Value ROI' },
    { name: 'Punjab National Bank', roi: '8.45% onwards', benefit: 'Lowest processing fees', tag: 'Heritage Bank' },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-textured-paper rounded-3xl border-2 border-black my-8 shadow-sm">
      {/* Section Header with High Contrast Typography */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
          <span>Transparent Lending Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Compare 55+ Bank <span className="text-[#b48835]">Interest Rates &amp; Fees</span>
        </h2>
        <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic">
          &ldquo;Side-by-side benchmark across PSU, private leaders, and housing finance companies.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
          Transparent, side-by-side comparison across Nationalised PSU Banks, Private Banking Leaders, and Housing Finance Companies (HFCs). Updated regularly as per current RBI External Benchmark Lending Rates (EBLR).
        </p>
      </div>

      {/* Featured Partner Banks Showcase Strip with Exact Logos */}
      <div className="mb-10 p-6 rounded-3xl bg-[#eff6ff] border-2 border-black shadow-md">
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <div>
            <span className="text-[11px] font-black uppercase text-[#1e40af] tracking-wider block">Official Bank Partnerships</span>
            <h3 className="text-lg font-black text-black">Top Preferred Partner Banks</h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-black text-black">
            <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
            <span>Direct Underwriter Access</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredBanks.slice(0, 4).map((b) => (
            <div
              key={b.name}
              className="p-4 rounded-2xl bg-white border-2 border-black shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-black text-[#fae49d] text-[10px] font-black uppercase tracking-wider">
                    {b.tag}
                  </span>
                  <span className="text-xs font-black text-[#1e40af]">{b.roi}</span>
                </div>
                <div className="py-1">
                  <BankLogo bankName={b.name} size="md" />
                </div>
                <div className="text-xs font-black text-black">
                  {b.name.toLowerCase().includes('bank') ? b.name : `${b.name} Bank`}
                </div>
                <p className="text-xs font-bold text-black">{b.benefit}</p>
              </div>

              <div className="pt-3 border-t-2 border-black mt-3 flex items-center justify-between">
                <button
                  onClick={() => onApplyForBank(b.name, 'Home Loan')}
                  className="text-xs font-black text-[#b48835] hover:text-black flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Select &amp; Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={buildWhatsAppRedirectUrl({
                    name: 'Borrower',
                    bank: b.name,
                    loanType: 'Home Loan',
                    note: `Inquiry about ${b.name} rate`,
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-[#25d366] text-white border border-black hover:opacity-90"
                  title="WhatsApp Advisor"
                >
                  <MessageSquareText className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Toolbar (High-Contrast Clean White Box with Solid Black Border) */}
      <div className="p-5 rounded-2xl bg-white border-2 border-black mb-6 space-y-4 shadow-md">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Sector Segmented Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-black font-black mr-1 shrink-0 uppercase tracking-wider">Sector:</span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer border-2 border-black ${
                  selectedSector === sec
                    ? 'bg-black text-[#fae49d] shadow-sm'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-black" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search bank name or loan..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:bg-[#eff6ff] focus:outline-none"
            />
          </div>
        </div>

        {/* Loan Type Selector */}
        <div className="flex items-center justify-between gap-4 pt-3 border-t-2 border-black flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-xs text-black font-black mr-1 shrink-0 uppercase tracking-wider">Loan Type:</span>
            {loanTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedLoanType(type)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer border-2 border-black ${
                  selectedLoanType === type
                    ? 'bg-[#fae49d] text-black shadow-xs'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-xs text-black hover:text-[#e11d48] flex items-center gap-1 cursor-pointer font-black ml-auto bg-gray-100 px-3 py-1 rounded-lg border border-black"
            >
              <X className="w-3.5 h-3.5" />
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Quick Note */}
      <div className="flex items-center justify-between text-xs text-black font-bold mb-3 px-1">
        <span>
          Showing <strong className="text-black font-black text-sm">{filtered.length}</strong> active lender rate matrix records
        </span>
        <span className="hidden sm:inline text-xs text-black font-semibold">
          Scroll table horizontally to inspect all criteria →
        </span>
      </div>

      {/* Table Container (Crisp White with Solid Black Border) */}
      <div className="rounded-2xl overflow-hidden border-2 border-black shadow-lg mb-6 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b-2 border-black bg-black text-white">
                <th className="p-4 font-black uppercase tracking-wider text-[11px]">Bank &amp; Exact Logo</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px]">Sector</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px]">Loan Type</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px] text-[#fae49d]">ROI (Interest Rate)</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px]">Processing Fees</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px]">Legal / Tech</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px]">Max LTV %</th>
                <th className="p-4 font-black uppercase tracking-wider text-[11px] text-right">Advisory</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-black bg-white">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-12 text-center text-black font-black text-sm">
                    No comparison rates found matching your selected filters. Please reset filters.
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-[#f8fafc] transition-colors">
                    {/* Bank Name with Exact Logo & Word Bank Below */}
                    <td className="p-4 font-black text-black whitespace-nowrap">
                      <div className="flex flex-col items-start gap-1">
                        <BankLogo bankName={row.bank_name} size="md" />
                        <span className="text-[11px] font-black text-black">
                          {row.bank_name.toLowerCase().includes('bank') ? row.bank_name : `${row.bank_name} Bank`}
                        </span>
                      </div>
                    </td>

                    {/* Sector */}
                    <td className="p-4 whitespace-nowrap text-black font-bold">
                      <span className="px-2.5 py-1 rounded-lg bg-gray-100 border border-black text-[11px] font-black text-black">
                        {row.bank_sector}
                      </span>
                    </td>

                    {/* Loan Type */}
                    <td className="p-4 whitespace-nowrap font-black text-black">
                      {row.loan_type}
                    </td>

                    {/* ROI */}
                    <td className="p-4 whitespace-nowrap font-black text-[#1e40af] tabular-nums text-sm">
                      {row.roi}
                    </td>

                    {/* Processing Fees */}
                    <td className="p-4 whitespace-nowrap text-black font-bold">
                      {row.processing_fees || '—'}
                    </td>

                    {/* Legal / Tech */}
                    <td className="p-4 whitespace-nowrap text-black font-bold">
                      {row.legal_technical || '—'}
                    </td>

                    {/* LTV */}
                    <td className="p-4 whitespace-nowrap font-black text-black tabular-nums">
                      {row.moot || '80%'}
                    </td>

                    {/* Action */}
                    <td className="p-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => onApplyForBank(row.bank_name, row.loan_type)}
                          className="px-3 py-1.5 rounded-xl text-xs font-black bg-black hover:bg-gray-800 text-white border-2 border-black transition-all cursor-pointer inline-flex items-center gap-1 shadow-xs"
                        >
                          <span>Apply</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
                        </button>
                        <a
                          href={buildWhatsAppRedirectUrl({
                            name: 'Borrower',
                            bank: row.bank_name,
                            loanType: row.loan_type,
                            note: `Need rate advisory for ${row.bank_name}`,
                          })}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white border-2 border-black transition-all"
                          title="Chat on WhatsApp"
                        >
                          <MessageSquareText className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regulatory Context Note (High Contrast) */}
      <div className="p-5 rounded-2xl bg-[#eff6ff] border-2 border-black text-xs text-black font-bold leading-relaxed space-y-1.5">
        <p>
          * Floating home loan rates are linked to each lending institution&apos;s External Benchmark Lending Rate (EBLR), pegged to the Reserve Bank of India (RBI) repo rate.
        </p>
        <p>
          * Final sanctioned ROI, processing charges, and loan-to-value (LTV) are determined based on the applicant&apos;s credit score (CIBIL 750+ preferred), income continuity, and property legal title.
        </p>
      </div>
    </div>
  );
};
