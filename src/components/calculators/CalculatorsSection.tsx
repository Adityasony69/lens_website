import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, RefreshCw, ArrowRight, Info } from 'lucide-react';

interface CalculatorsSectionProps {
  onOpenConsultation: () => void;
}

function formatINR(val: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
}

export const CalculatorsSection: React.FC<CalculatorsSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'emi' | 'eligibility' | 'transfer'>('emi');

  // --- EMI CALCULATOR STATE ---
  const [emiAmount, setEmiAmount] = useState(6000000); // 60 Lakhs
  const [emiRate, setEmiRate] = useState(8.5); // 8.5%
  const [emiTenure, setEmiTenure] = useState(20); // 20 years

  const emiResults = useMemo(() => {
    const P = emiAmount;
    const r = emiRate / 12 / 100;
    const n = emiTenure * 12;

    if (r === 0) {
      const emi = P / n;
      return { emi, totalInterest: 0, totalPayable: P, principal: P };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;

    return { emi, totalInterest, totalPayable, principal: P };
  }, [emiAmount, emiRate, emiTenure]);

  const principalRatio = (emiResults.principal / emiResults.totalPayable) * 100;
  const interestRatio = 100 - principalRatio;

  // --- ELIGIBILITY CALCULATOR STATE ---
  const [applicantIncome, setApplicantIncome] = useState(120000); // 1.2 Lakhs
  const [coApplicantIncome, setCoApplicantIncome] = useState(0);
  const [existingEmi, setExistingEmi] = useState(15000);
  const [applicantAge, setApplicantAge] = useState(32);
  const [preferredTenure, setPreferredTenure] = useState(25);

  const eligibilityResults = useMemo(() => {
    const totalIncome = applicantIncome + coApplicantIncome;
    const foirRate = totalIncome >= 100000 ? 0.6 : 0.5;
    const maxPermissibleEmi = totalIncome * foirRate - existingEmi;

    const maxAgeTenure = Math.max(5, Math.min(preferredTenure, 65 - applicantAge));
    const r = 8.5 / 12 / 100;
    const n = maxAgeTenure * 12;

    if (maxPermissibleEmi <= 0 || n <= 0) {
      return { eligibleLoan: 0, maxEmi: 0, tenure: maxAgeTenure };
    }

    const eligibleLoan =
      (maxPermissibleEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));

    return {
      eligibleLoan: Math.max(0, Math.floor(eligibleLoan)),
      maxEmi: Math.max(0, Math.floor(maxPermissibleEmi)),
      tenure: maxAgeTenure,
    };
  }, [applicantIncome, coApplicantIncome, existingEmi, applicantAge, preferredTenure]);

  // --- BALANCE TRANSFER CALCULATOR STATE ---
  const [currentPrincipal, setCurrentPrincipal] = useState(5000000); // 50 Lakhs
  const [currentRate, setCurrentRate] = useState(9.35); // 9.35%
  const [remainingTenure, setRemainingTenure] = useState(18); // 18 years
  const [newTransferRate, setNewTransferRate] = useState(8.35); // 8.35%

  const transferResults = useMemo(() => {
    const P = currentPrincipal;
    const n = remainingTenure * 12;

    const rOld = currentRate / 12 / 100;
    const emiOld = (P * rOld * Math.pow(1 + rOld, n)) / (Math.pow(1 + rOld, n) - 1);
    const totalOld = emiOld * n;

    const rNew = newTransferRate / 12 / 100;
    const emiNew = (P * rNew * Math.pow(1 + rNew, n)) / (Math.pow(1 + rNew, n) - 1);
    const totalNew = emiNew * n;

    const totalSavings = Math.max(0, totalOld - totalNew);
    const monthlySavings = Math.max(0, emiOld - emiNew);

    return {
      emiOld: Math.floor(emiOld),
      emiNew: Math.floor(emiNew),
      monthlySavings: Math.floor(monthlySavings),
      totalSavings: Math.floor(totalSavings),
    };
  }, [currentPrincipal, currentRate, remainingTenure, newTransferRate]);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-textured-paper rounded-3xl border-2 border-black my-8 shadow-sm">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
          Financial Decision Tools
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
          Interactive Home Loan <span className="text-[#b48835]">Calculators</span>
        </h2>
        <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
          &ldquo;Instant mathematical precision for monthly EMIs, FOIR eligibility limits, and balance transfer gains.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
          Accurately calculate monthly repayment EMIs, estimate maximum borrowing limits based on banking FOIR standards, and analyze net interest saved via balance transfer.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="p-1.5 rounded-2xl bg-white border-2 border-black flex flex-wrap gap-1 shadow-sm">
          <button
            onClick={() => setActiveTab('emi')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'emi'
                ? 'bg-black text-[#fae49d] border-2 border-black shadow-xs'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>EMI Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab('eligibility')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'eligibility'
                ? 'bg-black text-[#fae49d] border-2 border-black shadow-xs'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Eligibility Checker</span>
          </button>

          <button
            onClick={() => setActiveTab('transfer')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'transfer'
                ? 'bg-black text-[#fae49d] border-2 border-black shadow-xs'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Balance Transfer Savings</span>
          </button>
        </div>
      </div>

      {/* ==============================================================
          TAB 1: EMI CALCULATOR
      ============================================================== */}
      {activeTab === 'emi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Sliders (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border-2 border-black space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-black uppercase tracking-wider">
                  Loan Amount
                </label>
                <span className="text-base sm:text-lg font-black text-[#b48835] tabular-nums">
                  {formatINR(emiAmount)}
                </span>
              </div>
              <input
                type="range"
                min={500000}
                max={100000000}
                step={100000}
                value={emiAmount}
                onChange={(e) => setEmiAmount(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-bold text-black mt-1.5">
                <span>₹5 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹10 Crores</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-black uppercase tracking-wider">
                  Interest Rate (% p.a.)
                </label>
                <span className="text-base sm:text-lg font-black text-[#b48835] tabular-nums">
                  {emiRate}%
                </span>
              </div>
              <input
                type="range"
                min={7.0}
                max={15.0}
                step={0.05}
                value={emiRate}
                onChange={(e) => setEmiRate(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-bold text-black mt-1.5">
                <span>7.0%</span>
                <span>8.35% (Lowest Bank Spread)</span>
                <span>15.0%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-black uppercase tracking-wider">
                  Tenure (Years)
                </label>
                <span className="text-base sm:text-lg font-black text-[#b48835] tabular-nums">
                  {emiTenure} Years ({emiTenure * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={emiTenure}
                onChange={(e) => setEmiTenure(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-bold text-black mt-1.5">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Amortization Tip */}
            <div className="p-3.5 rounded-2xl bg-[#eff6ff] border-2 border-black flex items-start gap-2.5 text-xs text-black font-semibold">
              <Info className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
              <span>
                HomeLens Tip: Prepaying just one extra monthly EMI each year can reduce a 20-year mortgage by nearly 4 full years!
              </span>
            </div>
          </div>

          {/* Results Summary & Breakdown (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border-2 border-black space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="text-center pb-5 border-b-2 border-black">
              <span className="text-xs text-black font-black uppercase tracking-wider block mb-1">
                Your Monthly EMI
              </span>
              <div className="text-3xl sm:text-4xl font-black text-black tabular-nums">
                {formatINR(emiResults.emi)}
              </div>
              <span className="text-[11px] text-gray-700 font-bold mt-1 block">
                Calculated on reducing monthly balance
              </span>
            </div>

            {/* Visual Progress Ratio Bar */}
            <div>
              <div className="flex justify-between text-xs font-black mb-2">
                <span className="text-black">Principal ({principalRatio.toFixed(1)}%)</span>
                <span className="text-[#b48835]">Interest ({interestRatio.toFixed(1)}%)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden flex border-2 border-black">
                <div
                  style={{ width: `${principalRatio}%` }}
                  className="bg-black h-full transition-all duration-300"
                />
                <div
                  style={{ width: `${interestRatio}%` }}
                  className="bg-[#b48835] h-full transition-all duration-300"
                />
              </div>
            </div>

            {/* Breakdown rows */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Principal Loan Amount</span>
                <span className="font-black text-black tabular-nums">{formatINR(emiResults.principal)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Total Interest Payable</span>
                <span className="font-black text-[#b48835] tabular-nums">{formatINR(emiResults.totalInterest)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-[#fae49d] border-2 border-black">
                <span className="font-black text-black">Total Repayable (Principal + Interest)</span>
                <span className="font-black text-black tabular-nums">{formatINR(emiResults.totalPayable)}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs flex items-center justify-center gap-2 cursor-pointer font-black border-2 border-black shadow-md transition-all uppercase tracking-wider"
            >
              <span>Lock This Lowest EMI Rate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
            </button>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 2: ELIGIBILITY CHECKER (FOIR Underwriting Formula)
      ============================================================== */}
      {activeTab === 'eligibility' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border-2 border-black space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <h3 className="text-sm font-black text-black">Income &amp; Existing Commitments</h3>

            {/* Net Monthly Income */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-black font-black">Your Net Monthly Take-Home Income</label>
                <span className="text-sm font-black text-[#b48835] tabular-nums">{formatINR(applicantIncome)}</span>
              </div>
              <input
                type="range"
                min={25000}
                max={1000000}
                step={5000}
                value={applicantIncome}
                onChange={(e) => setApplicantIncome(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
            </div>

            {/* Co-Applicant Income */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-black font-black">Co-Applicant Monthly Income (Optional)</label>
                <span className="text-sm font-black text-[#b48835] tabular-nums">{formatINR(coApplicantIncome)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={500000}
                step={5000}
                value={coApplicantIncome}
                onChange={(e) => setCoApplicantIncome(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
            </div>

            {/* Existing EMIs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-black font-black">Existing Active Monthly EMIs</label>
                <span className="text-sm font-black text-[#b48835] tabular-nums">{formatINR(existingEmi)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={200000}
                step={2000}
                value={existingEmi}
                onChange={(e) => setExistingEmi(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
            </div>

            {/* Age & Tenure Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs text-black mb-1 font-black">Applicant Age</label>
                <input
                  type="number"
                  min={21}
                  max={60}
                  value={applicantAge}
                  onChange={(e) => setApplicantAge(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border-2 border-black text-xs text-black font-bold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-black mb-1 font-black">Preferred Loan Tenure (Years)</label>
                <input
                  type="number"
                  min={5}
                  max={30}
                  value={preferredTenure}
                  onChange={(e) => setPreferredTenure(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border-2 border-black text-xs text-black font-bold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border-2 border-black space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="text-center pb-5 border-b-2 border-black">
              <span className="text-xs text-black font-black uppercase tracking-wider block mb-1">
                Estimated Loan Eligibility
              </span>
              <div className="text-3xl sm:text-4xl font-black text-black tabular-nums">
                {formatINR(eligibilityResults.eligibleLoan)}
              </div>
              <span className="text-[11px] text-gray-700 font-bold mt-1 block">
                Calculated at benchmark 8.50% interest
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Max Permissible Monthly EMI</span>
                <span className="font-black text-black tabular-nums">{formatINR(eligibilityResults.maxEmi)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Effective Age-Permitted Tenure</span>
                <span className="font-black text-black tabular-nums">{eligibilityResults.tenure} Years</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Combined Monthly Cash Flow</span>
                <span className="font-black text-[#b48835] tabular-nums">{formatINR(applicantIncome + coApplicantIncome)}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#fff0f3] border-2 border-black text-xs text-black font-semibold leading-relaxed">
              <strong className="text-black font-black">Need a higher sanction?</strong> HomeLens experts specialize in adding income surrogates, rental streams, and co-applicant income to expand your loan limits.
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs flex items-center justify-center gap-2 cursor-pointer font-black border-2 border-black shadow-md transition-all uppercase tracking-wider"
            >
              <span>Get Profile Sanction Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
            </button>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 3: BALANCE TRANSFER SAVINGS ANALYZER
      ============================================================== */}
      {activeTab === 'transfer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border-2 border-black space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <h3 className="text-sm font-black text-black">Existing Loan Parameters</h3>

            {/* Outstanding Principal */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-black font-black">Outstanding Loan Balance</label>
                <span className="text-sm font-black text-[#b48835] tabular-nums">{formatINR(currentPrincipal)}</span>
              </div>
              <input
                type="range"
                min={1000000}
                max={50000000}
                step={100000}
                value={currentPrincipal}
                onChange={(e) => setCurrentPrincipal(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
            </div>

            {/* Current Rate vs New Rate Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-black mb-1 font-black">Your Current Interest Rate (% p.a.)</label>
                <input
                  type="number"
                  step="0.05"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border-2 border-black text-xs text-black font-bold focus:outline-none"
                />
                <span className="text-[10px] text-gray-700 font-bold mt-1 block">Usually 9.25% - 10.50% on older loans</span>
              </div>

              <div>
                <label className="block text-xs text-[#b48835] mb-1 font-black">New HomeLens Transfer Rate (% p.a.)</label>
                <input
                  type="number"
                  step="0.05"
                  value={newTransferRate}
                  onChange={(e) => setNewTransferRate(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-[#fae49d] border-2 border-black text-xs text-black font-black focus:outline-none"
                />
                <span className="text-[10px] text-black font-bold mt-1 block">Starting from 8.35% with premier banks</span>
              </div>
            </div>

            {/* Remaining Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-black font-black">Remaining Loan Tenure (Years)</label>
                <span className="text-sm font-black text-[#b48835] tabular-nums">{remainingTenure} Years</span>
              </div>
              <input
                type="range"
                min={2}
                max={30}
                step={1}
                value={remainingTenure}
                onChange={(e) => setRemainingTenure(Number(e.target.value))}
                className="w-full accent-black h-2 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border-2 border-black space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <div className="text-center pb-5 border-b-2 border-black">
              <span className="text-xs text-black font-black uppercase tracking-wider block mb-1">
                Net Interest You Save
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#b48835] tabular-nums">
                {formatINR(transferResults.totalSavings)}
              </div>
              <span className="text-[11px] text-gray-700 font-bold mt-1 block">
                Total savings over remaining {remainingTenure} years
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Current Monthly EMI</span>
                <span className="font-black text-black tabular-nums">{formatINR(transferResults.emiOld)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-gray-50 border-2 border-black">
                <span className="text-black font-bold">Revised New EMI</span>
                <span className="font-black text-[#b48835] tabular-nums">{formatINR(transferResults.emiNew)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-[#fae49d] border-2 border-black">
                <span className="font-black text-black">Monthly Cash Flow Savings</span>
                <span className="font-black text-black tabular-nums">{formatINR(transferResults.monthlySavings)} / mo</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs flex items-center justify-center gap-2 cursor-pointer font-black border-2 border-black shadow-md transition-all uppercase tracking-wider"
            >
              <span>Transfer Loan &amp; Claim Savings</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
