import React, { useState } from 'react';
import { UserCheck, Building2, Globe2, Printer } from 'lucide-react';

interface DocumentsSectionProps {
  onOpenConsultation: () => void;
}

type BorrowerCategory = 'salaried' | 'self-employed' | 'nri';

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<BorrowerCategory>('salaried');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const documentData = {
    salaried: [
      {
        title: 'Identity & Address Proof (KYC)',
        desc: 'Government issued official identity documents for applicant & co-applicants',
        items: [
          'PAN Card (Mandatory for all financial transactions)',
          'Aadhaar Card (linked with active mobile number for e-sign)',
          'Valid Passport / Driving License / Voter ID Card',
          'Current Residence Proof (Electricity Bill, Gas Bill, or Registered Rent Agreement if living on rent)',
          'Two recent passport-sized color photographs',
        ],
      },
      {
        title: 'Employment & Income Verification',
        desc: 'Proof of steady employment and salary credits',
        items: [
          'Latest 3 months salary slips with complete gross/net breakdown',
          'Latest 6 months salary credit bank account statements (original PDF with digital stamp)',
          'Form 16 (Part A & B) for the past 2 financial years',
          'Official Company Identity Card or current appointment letter',
          'Track record proof of previous employment (if current tenure is under 1 year)',
        ],
      },
      {
        title: 'Property Documents (Purchase / Construction)',
        desc: 'Chain of title documents and legal approval sets',
        items: [
          'Allotment letter or registered Agreement for Sale with builder/developer',
          'Receipts of advance payment or margin money already paid to seller',
          'Approved building plan blueprint with sanction copy from local town planning authority',
          'Occupancy Certificate (OC) or Possession Letter (for ready-to-move units)',
          'NOC from Builder / Society / Housing Board for mortgage creation',
        ],
      },
    ],
    'self-employed': [
      {
        title: 'Identity & Business KYC',
        desc: 'Firm/entity proof along with personal identification',
        items: [
          'PAN Card of applicant, co-applicant, and the business entity / firm',
          'Aadhaar Card of all partners / directors / proprietor',
          'Business Registration: GST Certificate, Udyam MSME, Certificate of Incorporation',
          'Partnership Deed (for firms) or MOA & AOA (for Private Limited companies)',
          'Office Address Proof (Electricity bill / Telephone bill in firm name or registered lease)',
        ],
      },
      {
        title: 'Financial Statements & Tax Filings',
        desc: 'Audited financials proving profitability and debt-service capacity',
        items: [
          'Last 3 years Income Tax Returns (ITR) with complete Computation of Income',
          'Last 3 years Audited Balance Sheet and Profit & Loss statement certified by a CA',
          'Tax Audit Reports under Section 44AB (wherever applicable)',
          'Last 12 months primary current bank account statements of the business entity',
          'Last 12 months savings bank account statements of individual applicants',
          'Latest GST-3B return copies matching the current financial turnover',
        ],
      },
      {
        title: 'Existing Loan & Property Records',
        desc: 'Obligation track and real estate title deeds',
        items: [
          'Sanction letters & 12 months repayment statements for all active business/personal loans',
          'Agreement to Sell / Allotment Letter for target property',
          'Title deeds chain covering last 30 years (handled with HomeLens legal desk)',
          'Approved structural plan & municipal clearance certificates',
        ],
      },
    ],
    nri: [
      {
        title: 'NRI Identity & Visa Authentication',
        desc: 'Overseas residency validation and passport records',
        items: [
          'Valid Indian Passport (all pages with stamping) or Foreign Passport with OCI card',
          'Valid Work Permit, Employment Visa, or Permanent Resident (PR) Card',
          'Registered Power of Attorney (POA) drafted in bank standard format, notarized or embassy attested',
          'Passport-sized photographs of applicant and local Indian POA holder',
        ],
      },
      {
        title: 'Overseas Income & Bank Statements',
        desc: 'Foreign compensation and Indian remittance accounts',
        items: [
          'Current valid Employment Contract or HR Letter on company letterhead mentioning designation and salary',
          'Latest 6 months salary slips or wage disbursement certificates',
          'Latest 6 months Overseas Bank Account statement showing salary credits',
          'Latest 6 months NRE / NRO bank account statements in India',
          'Annual tax return copy of country of residence (e.g. W2 / 1040 for USA, P60 for UK)',
          'Credit bureau report from country of residence (e.g. Equifax, Experian, or Al Etihad)',
        ],
      },
      {
        title: 'Property Papers in India',
        desc: 'Indian real estate purchase agreements',
        items: [
          'Registered Sale Agreement or Allotment Letter from RERA registered developer',
          'Payment receipts confirming payment of margin money through NRE/NRO banking channels',
          'RERA registration certificate copy and approved layout plans',
        ],
      },
    ],
  };

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const currentGroups = documentData[activeCategory];
  const allCurrentItems = currentGroups.flatMap((g) => g.items);
  const checkedCount = allCurrentItems.filter((i) => checkedItems[i]).length;
  const progressPercent = Math.round((checkedCount / allCurrentItems.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-textured-paper rounded-3xl border-2 border-black my-8 shadow-sm">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
          Express Verification
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
          Home Loan <span className="text-[#b48835]">Document Checklist</span>
        </h2>
        <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
          &ldquo;Instant readiness blueprint for salaried, self-employed, and overseas NRI borrowers.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
          Select your borrower profile to inspect exact document sets. Tick off papers you already have ready, or request our free doorstep collection service.
        </p>
      </div>

      {/* Category Tabs & Print Bar */}
      <div className="p-3 rounded-2xl bg-white border-2 border-black mb-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setActiveCategory('salaried')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeCategory === 'salaried'
                ? 'bg-black text-[#fae49d] border-2 border-black shadow-xs'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Salaried Individual</span>
          </button>

          <button
            onClick={() => setActiveCategory('self-employed')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeCategory === 'self-employed'
                ? 'bg-black text-[#fae49d] border-2 border-black shadow-xs'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Self-Employed / Business</span>
          </button>

          <button
            onClick={() => setActiveCategory('nri')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeCategory === 'nri'
                ? 'bg-black text-[#fae49d] border-2 border-black shadow-xs'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Non-Resident Indian (NRI)</span>
          </button>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-xl bg-white hover:bg-gray-100 text-black border-2 border-black font-black text-xs flex items-center gap-1.5 self-end sm:self-auto cursor-pointer shadow-xs transition-all"
        >
          <Printer className="w-3.5 h-3.5 text-[#b48835]" />
          <span>Print Checklist</span>
        </button>
      </div>

      {/* Readiness Progress Bar */}
      <div className="p-6 rounded-2xl bg-white border-2 border-black mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
        <div>
          <span className="text-xs uppercase font-black text-[#b48835] tracking-wider">Document Readiness</span>
          <h3 className="text-base sm:text-lg font-black text-black mt-0.5">
            {checkedCount} of {allCurrentItems.length} Papers Checked ({progressPercent}%)
          </h3>
        </div>
        <div className="w-full sm:w-64 bg-gray-100 h-3 rounded-full overflow-hidden border-2 border-black">
          <div
            style={{ width: `${progressPercent}%` }}
            className="bg-[#b48835] h-full transition-all duration-300 rounded-full"
          />
        </div>
      </div>

      {/* Document Groups */}
      <div className="space-y-5 mb-10">
        {currentGroups.map((g, gIdx) => (
          <div key={gIdx} className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="pb-3 border-b-2 border-black mb-4">
              <h3 className="text-sm font-black text-black">{g.title}</h3>
              <p className="text-xs text-gray-700 font-bold mt-0.5">{g.desc}</p>
            </div>

            <div className="space-y-2">
              {g.items.map((item, iIdx) => {
                const isChecked = !!checkedItems[item];
                return (
                  <div
                    key={iIdx}
                    onClick={() => toggleCheck(item)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-[#eff6ff] border-black text-black shadow-xs'
                        : 'bg-gray-50 border-gray-200 hover:border-black text-black'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 w-4 h-4 rounded text-black accent-black border-2 border-black bg-white cursor-pointer"
                    />
                    <span className={`text-xs select-none ${isChecked ? 'text-black font-black' : 'text-black font-semibold'}`}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Doorstep Assistance Banner */}
      <div className="p-7 rounded-3xl bg-[#f8f9fc] border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-md">
        <div>
          <span className="text-xs font-black text-[#b48835] uppercase tracking-[0.16em] block mb-1">
            Doorstep Assistance
          </span>
          <h3 className="text-lg font-black text-black">Need Originals Collected &amp; Scrutinized?</h3>
          <p className="text-xs text-black font-bold mt-1 max-w-xl leading-relaxed">
            You don’t need to stand in bank queues or scan heavy files. Our mobile verification officer visits your residence to cross-verify original deeds and compile your file.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs whitespace-nowrap cursor-pointer shrink-0 font-black uppercase tracking-wider border-2 border-black shadow-sm transition-all"
        >
          Book Doorstep Pickup
        </button>
      </div>
    </div>
  );
};
