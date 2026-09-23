import { Bank, BankComparisonRow, LoanProduct, BlogPost, Testimonial, FAQ, Statistic, SiteSettings } from '../types';

export const initialBanks: Bank[] = [
  { id: 1, name: 'State Bank of India', sector: 'Nationalised Bank', is_active: 1 },
  { id: 2, name: 'Bank of Baroda', sector: 'Nationalised Bank', is_active: 1 },
  { id: 3, name: 'Punjab National Bank', sector: 'Nationalised Bank', is_active: 1 },
  { id: 4, name: 'Canara Bank', sector: 'Nationalised Bank', is_active: 1 },
  { id: 5, name: 'Union Bank of India', sector: 'Nationalised Bank', is_active: 1 },
  { id: 6, name: 'Indian Bank', sector: 'Nationalised Bank', is_active: 1 },
  { id: 7, name: 'Bank of India', sector: 'Nationalised Bank', is_active: 1 },
  { id: 8, name: 'Central Bank of India', sector: 'Nationalised Bank', is_active: 1 },
  { id: 9, name: 'Indian Overseas Bank', sector: 'Nationalised Bank', is_active: 1 },
  { id: 10, name: 'HDFC Bank', sector: 'Private Bank', is_active: 1 },
  { id: 11, name: 'ICICI Bank', sector: 'Private Bank', is_active: 1 },
  { id: 12, name: 'Axis Bank', sector: 'Private Bank', is_active: 1 },
  { id: 13, name: 'Kotak Mahindra Bank', sector: 'Private Bank', is_active: 1 },
  { id: 14, name: 'LIC Housing Finance', sector: 'HFC / NBFC', is_active: 1 },
  { id: 15, name: 'PNB Housing Finance', sector: 'HFC / NBFC', is_active: 1 },
  { id: 16, name: 'Bajaj Housing Finance', sector: 'HFC / NBFC', is_active: 1 },
];

export const initialBankComparisons: BankComparisonRow[] = [
  {
    id: 1,
    bank_id: 1,
    bank_name: 'State Bank of India',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Home Loan',
    roi: '8.35% - 9.75%',
    login_fees: '₹2,000 - ₹5,000',
    processing_fees: '0.35% (Max ₹10k)',
    legal_technical: '₹4,000 - ₹10,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 90%',
  },
  {
    id: 2,
    bank_id: 2,
    bank_name: 'Bank of Baroda',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Home Loan',
    roi: '8.40% - 10.65%',
    login_fees: '₹1,500 - ₹5,000',
    processing_fees: '0.25% - 0.50%',
    legal_technical: '₹3,500 - ₹9,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 90%',
  },
  {
    id: 3,
    bank_id: 3,
    bank_name: 'Punjab National Bank',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Home Loan',
    roi: '8.45% - 10.25%',
    login_fees: '₹2,000 - ₹7,500',
    processing_fees: '0.35% - 0.50%',
    legal_technical: '₹4,000 - ₹10,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 4,
    bank_id: 4,
    bank_name: 'Canara Bank',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Home Loan',
    roi: '8.45% - 10.50%',
    login_fees: '₹1,500 - ₹6,000',
    processing_fees: '0.50%',
    legal_technical: '₹3,500 - ₹10,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 5,
    bank_id: 5,
    bank_name: 'Union Bank of India',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Home Loan',
    roi: '8.35% - 10.70%',
    login_fees: '₹2,000 - ₹8,000',
    processing_fees: '0.50%',
    legal_technical: '₹5,000 - ₹12,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 90%',
  },
  {
    id: 6,
    bank_id: 10,
    bank_name: 'HDFC Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Home Loan',
    roi: '8.75% - 9.65%',
    login_fees: '₹3,000 - ₹10,000',
    processing_fees: '0.50% (Min ₹3k)',
    legal_technical: '₹5,000 - ₹15,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 7,
    bank_id: 11,
    bank_name: 'ICICI Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Home Loan',
    roi: '8.75% - 9.85%',
    login_fees: '₹2,500 - ₹10,000',
    processing_fees: '0.50% - 1.00%',
    legal_technical: '₹5,000 - ₹15,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 8,
    bank_id: 12,
    bank_name: 'Axis Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Home Loan',
    roi: '8.75% - 10.30%',
    login_fees: '₹3,000 - ₹10,000',
    processing_fees: '1.00%',
    legal_technical: '₹5,000 - ₹15,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 9,
    bank_id: 13,
    bank_name: 'Kotak Mahindra Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Home Loan',
    roi: '8.70% - 9.60%',
    login_fees: '₹2,500 - ₹7,500',
    processing_fees: '0.50%',
    legal_technical: '₹4,500 - ₹12,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 10,
    bank_id: 14,
    bank_name: 'LIC Housing Finance',
    bank_sector: 'HFC / NBFC',
    loan_type: 'Home Loan',
    roi: '8.50% - 10.75%',
    login_fees: '₹1,000 - ₹5,000',
    processing_fees: '0.25% - 0.50%',
    legal_technical: '₹5,000 - ₹12,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 90%',
  },
  {
    id: 11,
    bank_id: 16,
    bank_name: 'Bajaj Housing Finance',
    bank_sector: 'HFC / NBFC',
    loan_type: 'Home Loan',
    roi: '8.55% - 10.20%',
    login_fees: '₹2,000 - ₹5,000',
    processing_fees: '0.50%',
    legal_technical: '₹4,000 - ₹10,000',
    stamp_duty: 'As applicable by State',
    moot: '80% - 85%',
  },
  {
    id: 12,
    bank_id: 1,
    bank_name: 'State Bank of India',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Plot + Construction',
    roi: '8.60% - 10.05%',
    login_fees: '₹2,000 - ₹5,000',
    processing_fees: '0.35% - 0.50%',
    legal_technical: '₹5,000 - ₹15,000',
    stamp_duty: 'As applicable by State',
    moot: '75%',
  },
  {
    id: 13,
    bank_id: 10,
    bank_name: 'HDFC Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Plot + Construction',
    roi: '8.90% - 9.90%',
    login_fees: '₹3,000 - ₹10,000',
    processing_fees: '0.50%',
    legal_technical: '₹5,000 - ₹18,000',
    stamp_duty: 'As applicable by State',
    moot: '75%',
  },
  {
    id: 14,
    bank_id: 1,
    bank_name: 'State Bank of India',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Balance Transfer',
    roi: '8.35% - 9.15%',
    login_fees: 'Zero under promotion',
    processing_fees: 'Flat ₹5,000 + GST',
    legal_technical: '₹3,500 - ₹8,000',
    stamp_duty: 'As applicable by State',
    moot: '80%',
  },
  {
    id: 15,
    bank_id: 10,
    bank_name: 'HDFC Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Balance Transfer',
    roi: '8.50% - 9.40%',
    login_fees: 'Zero under promotion',
    processing_fees: '0.25% or ₹3,000',
    legal_technical: '₹5,000 - ₹12,000',
    stamp_duty: 'As applicable by State',
    moot: '80%',
  },
  {
    id: 16,
    bank_id: 1,
    bank_name: 'State Bank of India',
    bank_sector: 'Nationalised Bank',
    loan_type: 'Loan Against Property',
    roi: '9.10% - 11.25%',
    login_fees: '₹2,000 - ₹5,000',
    processing_fees: '0.50% - 1.00%',
    legal_technical: '₹5,000 - ₹15,000',
    stamp_duty: 'As applicable by State',
    moot: '60% - 65%',
  },
  {
    id: 17,
    bank_id: 10,
    bank_name: 'HDFC Bank',
    bank_sector: 'Private Bank',
    loan_type: 'Loan Against Property',
    roi: '9.50% - 11.00%',
    login_fees: '₹3,000 - ₹10,000',
    processing_fees: '1.00% - 1.50%',
    legal_technical: '₹6,000 - ₹18,000',
    stamp_duty: 'As applicable by State',
    moot: '65%',
  },
  {
    id: 18,
    bank_id: 14,
    bank_name: 'LIC Housing Finance',
    bank_sector: 'HFC / NBFC',
    loan_type: 'Loan Against Property',
    roi: '9.25% - 11.50%',
    login_fees: '₹2,000 - ₹5,000',
    processing_fees: '0.75% - 1.00%',
    legal_technical: '₹5,000 - ₹12,000',
    stamp_duty: 'As applicable by State',
    moot: '60%',
  },
];

export const initialLoanProducts: Record<string, LoanProduct> = {
  'home-loan': {
    slug: 'home-loan',
    name: 'Home Loan',
    tagline: 'Lowest interest rates starting at 8.35% with doorstep document assistance',
    roi: 'From 8.35% p.a.',
    tenure: 'Up to 30 Years',
    maxAmount: 'Up to ₹15 Crores',
    description: 'Whether you are purchasing a newly constructed apartment, a resale flat, or constructing your custom dream home, HomeLens Realty partners with 55+ lending institutions to bring you the most competitive home loan schemes tailored to your financial profile.',
    features: [
      'Tailored interest rates starting as low as 8.35% p.a.',
      'Financing up to 90% of registered property agreement value',
      'Flexible repayment tenures up to 30 years to minimize monthly EMI',
      'Doorstep document pick-up and physical verification liaison',
      'Zero hidden charges with fully transparent breakdown of fees',
      'Pre-approved home loans available for verified builder projects',
    ],
    eligibility: {
      age: '21 to 65 years at time of loan maturity',
      income: 'Minimum monthly net income of ₹25,000 (Salaried) or ₹3L annual profit (Self-Employed)',
      cibil: '650+ preferred for best interest rate tiers',
      employment: 'Minimum 2 years total work experience / 3 years business vintage',
      nationality: 'Resident Indian',
    },
    documents: [
      {
        category: 'Identity & Address Proof (KYC)',
        items: ['PAN Card', 'Aadhaar Card / Passport / Voter ID', 'Latest Utility Bill / Registered Rent Agreement'],
      },
      {
        category: 'Income Proof (Salaried / Business)',
        items: ['Last 3 months salary slips', 'Latest 6 months salary credit bank account statements', 'Form 16 for past 2 assessment years', 'Last 2 years ITR with computation for business owners'],
      },
      {
        category: 'Property Documents',
        items: ['Allotment letter or registered Sale Agreement', 'Approved building plan blueprint & municipal permissions', 'Chain of title deeds (resale) or NOC from developer'],
      },
    ],
    faq: [
      {
        q: 'What is the maximum loan tenure available for a home loan?',
        a: 'Most premier lending partners offer tenures up to 30 years, subject to your age not exceeding the retirement threshold (generally 60-65 years) at loan maturity.',
      },
      {
        q: 'Can I apply for a home loan with a co-applicant?',
        a: 'Yes, adding an earning co-applicant (such as your spouse, parents, or siblings) boosts your total loan eligibility significantly.',
      },
      {
        q: 'Are there any tax benefits on home loans in India?',
        a: 'Under Section 80C of the Income Tax Act, you can claim deductions up to ₹1.5 Lakhs on principal repayment, and under Section 24(b) up to ₹2 Lakhs on interest paid for a self-occupied property.',
      },
    ],
  },
  'home-construction-loan': {
    slug: 'home-construction-loan',
    name: 'Home Construction Loan',
    tagline: 'Disbursements aligned with your construction milestones and civil stages',
    roi: 'From 8.50% p.a.',
    tenure: 'Up to 30 Years',
    maxAmount: 'Up to ₹10 Crores',
    description: 'Construct your home your way on your existing residential plot. Construction loans disburse funds in tranche-by-tranche payments matching your builder or contractor civil milestones, keeping your initial interest outflow minimal.',
    features: [
      'Staged milestone-based disbursement matching construction progress',
      'Pre-EMI option: pay only simple interest during the construction phase',
      'Finance up to 100% of approved architect structural estimate',
      'Available for both self-construction and licensed contractor agreements',
      'Expert civil technical appraisal validation support',
    ],
    eligibility: {
      age: '21 to 65 years',
      income: 'Minimum monthly net income of ₹30,000',
      cibil: '650+ recommended',
      employment: 'Stable employment or verified business profile for at least 2 years',
      nationality: 'Resident Indian',
    },
    documents: [
      {
        category: 'Plot & Legal Documents',
        items: ['Title deed proving clear ownership of plot', 'Non-agricultural (NA) conversion certificate', 'Approved structural building layout from local municipal authority'],
      },
      {
        category: 'Construction Estimates',
        items: ['Detailed civil construction estimate certified by a registered Architect / Chartered Engineer', 'Contract agreement with licensed builder (if applicable)'],
      },
      {
        category: 'Income Proof',
        items: ['Last 6 months bank statements', 'Last 3 months salary slips or 2 years ITR with computation'],
      },
    ],
    faq: [
      {
        q: 'How are disbursements released for construction loans?',
        a: 'Funds are disbursed in phases (plinth, RCC slab, brickwork, finishing) following physical site inspection by the bank-appointed civil technical valuer.',
      },
      {
        q: 'Can I combine plot purchase and construction into one loan?',
        a: 'Yes! A composite Plot-plus-Construction loan allows you to purchase the land and fund the construction under one single sanction.',
      },
    ],
  },
  'plot-loan': {
    slug: 'plot-loan',
    name: 'Plot Loan',
    tagline: 'Secure prime residential land and layout plots for future construction',
    roi: 'From 8.65% p.a.',
    tenure: 'Up to 15 Years',
    maxAmount: 'Up to ₹7.5 Crores',
    description: 'Invest in residential land in approved urban layouts, gated developments, and authority allotments. HomeLens helps you verify title clearances and secure favorable LTV ratios from trusted banks.',
    features: [
      'Financing for residential plots in approved municipal, layout, or authority limits',
      'Financing up to 75% - 80% of registered plot value',
      'Repayment tenure up to 15 years',
      'Seamless conversion to Plot + Construction scheme whenever you are ready to build',
      'Complete title search and legal encumbrance scrutiny by panel advocates',
    ],
    eligibility: {
      age: '21 to 65 years',
      income: 'Minimum monthly net income of ₹30,000',
      cibil: '675+ preferred for plot financing',
      employment: 'Salaried or Self-Employed with minimum 2 years verified vintage',
      nationality: 'Resident Indian / NRI',
    },
    documents: [
      {
        category: 'Property Documents',
        items: ['Sale agreement / Allotment letter from development authority', '7/12 extract / Patta / Khata certificate', 'Layout approval copy by town planning authority'],
      },
      {
        category: 'Financial Documents',
        items: ['6 months bank statements', 'PAN & Aadhaar', 'ITR copies for last 2 assessment years'],
      },
    ],
    faq: [
      {
        q: 'Can I buy agricultural land with a plot loan?',
        a: 'No. Plot loans are restricted to residential plots located within designated municipal limits or layout authorities with clear non-agricultural zoning.',
      },
      {
        q: 'Is there a timeline within which construction must start?',
        a: 'Some banks specify construction must initiate within 2 to 5 years from plot acquisition to maintain standard residential interest rates.',
      },
    ],
  },
  'home-loan-balance-transfer': {
    slug: 'home-loan-balance-transfer',
    name: 'Home Loan Balance Transfer',
    tagline: 'Switch your existing high-cost home loan to lower interest rates and reduce your EMI',
    roi: 'From 8.35% p.a.',
    tenure: 'Balance of original tenure or up to 30 Years',
    maxAmount: 'Existing loan balance + Top-up',
    description: 'Are you paying 9.25% or higher on an older home loan? Transfer your outstanding principal balance to a premier lender at today\'s competitive benchmark rates and save lakhs of rupees over your remaining tenure.',
    features: [
      'Substantial monthly EMI reduction or tenure compression',
      'High-value Top-Up loan option up to ₹1 Crore with zero end-use restrictions',
      'HomeLens takes care of retrieval of original property papers from existing lender',
      'Minimal paperwork with swift turnaround time',
      'Waiver of processing charges on select partner bank promotions',
    ],
    eligibility: {
      age: '21 to 65 years',
      income: 'Demonstrable regular income sufficient to service revised EMI',
      cibil: '700+ for quickest balance transfer approvals',
      employment: 'Clean track record with at least 12 continuous EMIs paid on current loan',
      nationality: 'Resident Indian / NRI',
    },
    documents: [
      {
        category: 'Existing Loan Documents',
        items: ['List of documents (LOD) held by existing bank', 'Foreclosure / Outstanding loan statement for last 12 months', 'Original sanction letter of existing facility'],
      },
      {
        category: 'KYC & Income',
        items: ['PAN & Aadhaar', 'Last 3 salary slips / 2 years ITR', 'Last 6 months bank statement showing regular EMI deductions'],
      },
    ],
    faq: [
      {
        q: 'How much money can I really save with a Balance Transfer?',
        a: 'Even a 0.50% drop in interest on a ₹50 Lakh loan with 20 years remaining can save you over ₹4,00,000 in total interest outflow!',
      },
      {
        q: 'What is the processing time for a balance transfer?',
        a: 'With HomeLens dedicated liaison desk, the full transfer and original paper exchange typically completes within 7 to 10 working days.',
      },
    ],
  },
  'top-up-loan': {
    slug: 'top-up-loan',
    name: 'Top-Up Loan',
    tagline: 'Unlock liquidity at home loan interest rates for renovations, marriage, or education',
    roi: 'From 8.60% p.a.',
    tenure: 'Up to 20 Years (or matching home loan tenure)',
    maxAmount: 'Up to ₹2 Crores',
    description: 'Need additional funds for home interiors, higher education, medical contingency, or business expansion? A top-up loan on your active mortgage offers interest rates substantially cheaper than personal loans or credit cards.',
    features: [
      'Interest rates significantly cheaper than unsecured personal loans (8.60% vs 14%+)',
      'Tenure extended up to 20 years for tiny, stress-free monthly payments',
      'Zero restrictions on legal end-use of funds',
      'Fast-track approval since your property title is already vetted and secured',
      'Tax deduction eligible under Section 24 if funds are utilized for home improvement',
    ],
    eligibility: {
      age: '21 to 65 years',
      income: 'Sufficient FOIR (Fixed Obligation to Income Ratio) to accommodate increased EMI',
      cibil: '675+',
      employment: 'Existing active home loan borrower with 6+ clean repayments',
      nationality: 'Resident Indian',
    },
    documents: [
      {
        category: 'Standard KYC & Income',
        items: ['Updated KYC (PAN & Aadhaar)', 'Latest 3 months salary slips or recent year ITR', 'Latest 6 months bank statement'],
      },
      {
        category: 'Mortgage Track',
        items: ['Current home loan account statement showing punctual EMI clearance'],
      },
    ],
    faq: [
      {
        q: 'How soon can I get a top-up loan approved?',
        a: 'Because the bank already has your property documents and title report, top-up loans are frequently sanctioned within 48 to 72 hours.',
      },
    ],
  },
  'nri-home-loan': {
    slug: 'nri-home-loan',
    name: 'NRI Home Loan',
    tagline: 'Specialized mortgage advisory for Non-Resident Indians buying real estate in India',
    roi: 'From 8.50% p.a.',
    tenure: 'Up to 20 Years',
    maxAmount: 'Up to ₹20 Crores',
    description: 'We simplify the process of investing in Indian real estate for Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs/OCIs). Manage your loan seamlessly from overseas with localized POA and NRE/NRO account workflows.',
    features: [
      'Tailored NRI processing desks across 40+ leading Indian banks and HFCs',
      'Flexible Power of Attorney (POA) document execution support',
      'Serviceable from NRE / NRO banking channels or inward foreign remittances',
      'Virtual consultation and digital verification for overseas residents',
      'End-to-end liaison with Indian property developers and registry offices',
    ],
    eligibility: {
      age: '21 to 60 years at loan maturity',
      income: 'Minimum monthly income of USD 3,000 (USA/UK/Europe) or AED 10,000 (Gulf regions) or equivalent',
      cibil: 'Clean international credit rating or Indian bureau score if applicable',
      employment: 'Minimum 2 years overseas employment with valid work permit/visa',
      nationality: 'Non-Resident Indian (NRI) / OCI / PIO cardholder',
    },
    documents: [
      {
        category: 'Overseas & Identity Proof',
        items: ['Valid Indian Passport and Visa / Work Permit / Resident Card', 'Valid Power of Attorney (POA) attested by Indian Embassy or Notary'],
      },
      {
        category: 'Overseas Income & Bank Statements',
        items: ['Employment contract / HR certificate', 'Last 6 months overseas bank salary statement', 'Last 6 months NRE / NRO account statement', 'Latest tax return of country of residence (W2 / P60 / tax return)'],
      },
      {
        category: 'Property Documentation',
        items: ['Allotment letter or registered agreement to sell with developer in India'],
      },
    ],
    faq: [
      {
        q: 'Do I have to physically visit India to complete loan registration?',
        a: 'No. By executing a verified Power of Attorney (POA) in favor of a trusted relative or representative in India, the entire transaction can be executed on your behalf.',
      },
      {
        q: 'Can loan repayments be made in foreign currency?',
        a: 'Repayments are made in Indian Rupees via your NRE or NRO bank account, which can be regularly funded via inward overseas remittances.',
      },
    ],
  },
  'loan-against-property': {
    slug: 'loan-against-property',
    name: 'Loan Against Property (LAP)',
    tagline: 'Leverage your residential or commercial real estate equity for business growth',
    roi: 'From 9.10% p.a.',
    tenure: 'Up to 15 Years',
    maxAmount: 'Up to ₹15 Crores',
    description: 'Mortgage your unencumbered residential or commercial property to secure high-ticket working capital, business expansion, or major capital outlays at competitive secured rates.',
    features: [
      'Financing up to 65% - 70% of current market valuation of the mortgaged asset',
      'Substantially cheaper interest rate than unsecured commercial or business loans',
      'Longer repayment tenure up to 15 years to preserve operational liquidity',
      'Both residential and commercial properties eligible as collateral',
      'Flexible overdraft (OD) facility option available with select banks',
    ],
    eligibility: {
      age: '23 to 68 years at loan maturity',
      income: 'Demonstrable business cash flow or verifiable audited financial statements',
      cibil: '675+ preferred',
      employment: 'Self-employed professionals, traders, manufacturers, or salaried property owners',
      nationality: 'Resident Indian',
    },
    documents: [
      {
        category: 'Collateral Property Title Deeds',
        items: ['Original registered title deed and chain documents for past 30 years', 'Latest property tax paid receipt and Khata certificate', 'Sanctioned blueprint plan from municipal corporation'],
      },
      {
        category: 'Business & Financial Documentation',
        items: ['Last 3 years audited balance sheets & profit/loss statements with tax audit report', 'Last 12 months current bank account statement', 'GST registration and returns for last 1 year'],
      },
    ],
    faq: [
      {
        q: 'Can I get a loan against property if it is currently rented out?',
        a: 'Yes, both self-occupied and tenanted commercial/residential properties are eligible. Rent receivables can also be factored in to enhance your sanction limits.',
      },
    ],
  },
};

export const initialBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'Complete Guide to Home Loan Interest Rates in 2026: Repo Rate Impact & Smart Borrowing',
    slug: 'home-loan-interest-rates-guide-2026',
    excerpt: 'Understand how RBI repo rates, external benchmark lending rates (EBLR), and CIBIL scores determine your final mortgage interest rate.',
    author: 'HomeLens Credit Research Desk',
    category: 'Interest Rates',
    published_date: 'March 15, 2026',
    read_time: '6 min read',
    content: `When choosing a home loan, even a microscopic difference of 0.25% in interest rate translates into lakhs of rupees saved over a 20 or 25-year tenure. In this guide, our senior credit advisory team breaks down how modern mortgage rates are calibrated and how you can position yourself for the lowest rate tier.

### 1. How External Benchmark Lending Rates (EBLR) Work
Since the Reserve Bank of India mandated that all floating retail loans be linked to an External Benchmark (typically the RBI Repo Rate), home loan interest rate structures consist of two distinct parts:

1. **The External Benchmark Rate (Repo Rate):** Set uniformly by the central bank.
2. **The Spread / Margin:** The markup added by your lending bank depending on your creditworthiness, loan quantum, and property profile.

While the benchmark fluctuates in accordance with monetary policy, your spread remains constant throughout the loan tenure (unless modified due to credit deterioration).

### 2. Fixed vs. Floating Interest Rates
- **Floating Interest Rate:** Starts lower (8.35% - 9.00%), automatically adjusts with central bank repo rate adjustments, and carries **0% prepayment penalty** per RBI regulations for individual borrowers.
- **Fixed Interest Rate:** Locks rate for 2 to 5 years at a premium (9.50% - 11.00%), suitable only if anticipating sharp, runaway macroeconomic rate increases.

### 3. Three Crucial Levers to Slash Your Interest Rate
- **Maintain a CIBIL Score Above 750:** Lenders reserve their tier-1 pricing (e.g. 8.35% - 8.50%) strictly for applicants possessing a credit bureau score of 750+. Borrowers with scores between 650 and 720 are regularly subjected to an additional 40 to 90 basis points markup.
- **Add an Earning Woman Co-Applicant:** Almost every nationalized and private bank offers an interest rate concession of 0.05% (5 basis points) when a woman is added as the primary or joint applicant on the property deed.
- **Restrict Your Loan-to-Value (LTV) Ratio:** Borrowing 75% of the property value instead of stretching to the maximum 90% bracket substantially lowers the bank's risk classification, often unlocking preferred credit spreads.

Before locking in your home loan with your primary savings bank, always evaluate comparative proposals across both PSU and private lenders. HomeLens Realty provides complimentary, transparent comparisons across 55+ lenders so you never pay a rupee more than you should.`,
  },
  {
    id: 2,
    title: 'How to Transfer Your High-Interest Home Loan in 5 Simple Steps (Save ₹4-7 Lakhs)',
    slug: 'home-loan-balance-transfer-guide',
    excerpt: 'Are you stuck with a 9.25%+ rate on an older mortgage? Discover how a balance transfer saves you massive interest with minimal hassle.',
    author: 'HomeLens Advisory Team',
    category: 'Balance Transfer',
    published_date: 'March 10, 2026',
    read_time: '5 min read',
    content: `If you availed your home loan several years ago or experienced interest spread creep from a housing finance company, you might easily be paying **9.25% to 10.50%** while new borrowers secure **8.35%**. 

A **Home Loan Balance Transfer** enables you to refinance your outstanding principal with a new lender offering significantly lower rates.

### The Real Math: How Much Can You Actually Save?
Consider an outstanding principal balance of **₹60,00,000** with **18 years** remaining:
- **Existing Rate (9.35%):** Monthly EMI = ₹57,838 | Total Remaining Interest = ₹64,93,000
- **Refinanced Rate (8.40%):** Monthly EMI = ₹54,082 | Total Remaining Interest = ₹56,81,000
- **Net Interest Saved:** **₹8,12,000!**

Even after deducting administrative transfer costs (around ₹10,000 - ₹15,000), your financial gain is substantial.

### The 5-Step Balance Transfer Process
1. **Obtain List of Documents (LOD) & Outstanding Statement:** Request your existing lender to issue a formal foreclosure letter along with a list of original property title documents currently held in their custody.
2. **Apply with HomeLens Partner Desk:** We submit your file simultaneously to top banks offering the lowest rate spreads and fee waivers.
3. **Credit & Legal Approval:** The new bank conducts a title appraisal and approves the takeover sanction letter.
4. **Disbursement & Check Handover:** The new bank issues a payout cheque/RTGS directly favoriting your existing bank to settle the old loan in full.
5. **Retrieval of Original Title Papers:** Within 7 to 15 days, your existing bank releases your original sale deed and NOC, which are securely deposited into the new bank vault.`,
  },
  {
    id: 3,
    title: 'Salaried vs. Self-Employed Home Loan Eligibility: How Banks Appraise Your Income',
    slug: 'salaried-vs-self-employed-home-loan-eligibility',
    excerpt: 'From 3 months salary slips to 3-year CA audited profit & loss sheets, learn how underwriting metrics differ for businesses and professionals.',
    author: 'Credit Risk Analysis Group',
    category: 'Eligibility',
    published_date: 'February 28, 2026',
    read_time: '7 min read',
    content: `Banks treat salaried employees and business owners very differently when calculating borrowing capacity. Understanding your lender's specific appraisal lens ensures your application is sanctioned without unexpected cuts.

### For Salaried Borrowers: The Fixed Obligation Ratio (FOIR)
For salaried applicants, credit underwriting is largely mathematical:
- **Primary Formula:** FOIR (Fixed Obligation to Income Ratio) must not exceed 50% to 60% of net monthly take-home pay.
- **Key Consideration:** Variable bonuses, overtime, and allowances without a persistent 2-year history are frequently discounted by 50%.
- **Advantage:** Fastest processing turnaround — typically 3 to 5 business days for sanction.

### For Self-Employed & Business Borrowers: Cash Flow & Multipliers
Underwriting for self-employed professionals, traders, and manufacturing proprietors involves detailed balance sheet auditing:
1. **Net Profit After Tax (PAT) Trend:** Banks demand continuous year-on-year revenue or profit growth across the last 3 assessment years.
2. **Depreciation Add-back:** Because depreciation is a non-cash expense, panel credit managers add it back to net profit when assessing cash flow capacity.
3. **Banking Surrogate Program:** If your tax returns do not reflect your true operational scale, banks analyze your 12-month current account gross credits through specialized banking-surrogate programs.

HomeLens specializes in structuring complex income profiles, combining partner incomes, rental cash-flows, and business depreciation to unlock maximum sanctions.`,
  },
  {
    id: 4,
    title: 'NRI Home Loans in India: Practical Guide to POA, Taxation, and Remittance',
    slug: 'nri-home-loans-complete-guide',
    excerpt: 'Everything Non-Resident Indians need to know about purchasing real estate in India, executing Embassy-attested POAs, and managing tax deductions.',
    author: 'Global Indian Advisory',
    category: 'NRI',
    published_date: 'February 14, 2026',
    read_time: '6 min read',
    content: `For Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs), acquiring residential property in India represents both emotional security and strong capital appreciation. However, cross-border banking requires strict regulatory adherence.

### 1. Permissible Properties Under FEMA
Under Foreign Exchange Management Act (FEMA) guidelines:
- NRIs can acquire any number of residential or commercial properties in India.
- **Restriction:** NRIs cannot directly purchase agricultural land, plantation properties, or farmhouses unless inherited.

### 2. The Power of Attorney (POA) Mandate
Because NRIs reside outside Indian geographic territory, banks require an executed **General or Specific Power of Attorney (POA)**:
- Must be executed in bank-prescribed format.
- Attested either at the Indian Embassy/Consulate in your resident country or notarized and apostilled.
- Once sent to India, the POA is stamped and adjudicated at the local District Registrar office within 90 days.

### 3. Repayment Rules & Banking
All loan installments must be serviced in Indian Rupees via **NRE (Non-Resident External)** or **NRO (Non-Resident Ordinary)** accounts. Inward foreign remittances via standard SWIFT channels are also accepted directly.

Contact HomeLens Realty for end-to-end digital NRI consultation and local POA representation support.`,
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rohan & Ananya Sharma',
    role: 'Senior Software Architect',
    location: 'Whitefield, Bengaluru',
    loan_detail: '₹75 Lakhs Home Loan (State Bank of India)',
    content: 'HomeLens helped us compare SBI and HDFC side-by-side. Their executive collected all documents from our apartment and got our loan sanctioned in just 6 business days. Zero brokerage fee and completely transparent.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Karthik Narayanan',
    role: 'Managing Partner, Precision Tech',
    location: 'Kothrud, Pune',
    loan_detail: '₹48 Lakhs Balance Transfer + ₹12L Top-Up',
    content: 'I was paying 9.40% on an older mortgage with an NBFC. HomeLens transferred my balance to 8.35% with SBI and unlocked a ₹12 Lakh top-up for our home interiors. Saved over ₹4.5 Lakhs in interest over the remaining term.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya & Sandeep Menon',
    role: 'Operations Director & Consultant',
    location: 'Dubai / Kochi (NRI)',
    loan_detail: '₹1.2 Crore Villa Loan',
    content: 'Applying from Dubai was seamless. HomeLens guided our Indian Embassy POA stamping and handled all liaison with the builder and local registry in Kochi. Highly dependable and professional team.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Suresh & Meenakshi Patel',
    role: 'Business Owner',
    location: 'Satellite, Ahmedabad',
    loan_detail: '₹95 Lakhs Construction Loan',
    content: 'Our architect milestones were complex with stage-wise contractor payouts. HomeLens assigned a dedicated advisor who coordinated with the bank civil valuer at every stage so our construction was never delayed.',
    rating: 5,
  },
];

export const initialFaqs: FAQ[] = [
  {
    id: 1,
    question: 'What is a home loan and what does HomeLens do?',
    answer: 'A home loan is a secured loan provided by banks and housing finance companies to purchase, construct, or renovate residential properties. HomeLens is an unbiased home loan advisory platform that compares 55+ lenders, provides doorstep documentation pickup, and coordinates the entire journey from eligibility to disbursement with 100% zero brokerage charged to you.',
    category: 'General',
    sort_order: 1,
  },
  {
    id: 2,
    question: 'Does HomeLens charge any fee or brokerage from the homebuyer?',
    answer: 'No. Our advisory, lender comparison, and doorstep documentation liaison services are 100% complimentary for homebuyers and borrowers. We receive standard institutional facilitation support directly from the partner banks upon successful disbursement.',
    category: 'General',
    sort_order: 2,
  },
  {
    id: 3,
    question: 'What documents are required for a home loan?',
    answer: 'Basic documents include PAN card, Aadhaar card, residence proof, last 3 months salary slips (or 2-3 years ITR with audited financials for self-employed), last 6 months bank statements, and property sale agreement/allotment letter.',
    category: 'Documents',
    sort_order: 3,
  },
  {
    id: 4,
    question: 'What is the maximum loan tenure available?',
    answer: 'Most premier Indian lenders offer home loans for a maximum tenure of up to 30 years, subject to the borrower’s retirement age (typically 60-65 years) at loan maturity.',
    category: 'General',
    sort_order: 4,
  },
  {
    id: 5,
    question: 'Can I transfer my existing home loan to another bank for lower interest?',
    answer: 'Yes! A Home Loan Balance Transfer allows you to switch your remaining principal to a new bank offering lower interest rates (e.g. reducing from 9.35% to 8.35%). You can also take an additional low-cost Top-up loan simultaneously.',
    category: 'Balance Transfer',
    sort_order: 5,
  },
  {
    id: 6,
    question: 'What is the minimum credit score required for quick loan approval?',
    answer: 'A CIBIL credit score of 750 or above unlocks the lowest interest rate tiers (e.g., 8.35% - 8.50%). Lenders also consider scores between 650 and 749 with standard rate spreads or additional co-applicant backing.',
    category: 'Eligibility',
    sort_order: 6,
  },
  {
    id: 7,
    question: 'How is home loan eligibility calculated (FOIR)?',
    answer: 'Eligibility is primarily calculated using your Fixed Obligation to Income Ratio (FOIR). Banks generally permit all your active monthly loan EMIs combined to consume up to 50% - 60% of your verifiable net monthly income.',
    category: 'Eligibility',
    sort_order: 7,
  },
  {
    id: 8,
    question: 'Can Non-Resident Indians (NRIs) apply for home loans in India?',
    answer: 'Yes. NRIs and OCIs can avail home loans for purchasing residential properties in India using NRE/NRO accounts and an attested Power of Attorney (POA). HomeLens provides dedicated overseas NRI consultation.',
    category: 'NRI',
    sort_order: 8,
  },
];

export const initialStatistics: Statistic[] = [
  { id: 1, label: 'Families Served', value: '5000', suffix: '+', sort_order: 1 },
  { id: 2, label: 'Channel Partners', value: '100', suffix: '+', sort_order: 2 },
  { id: 3, label: 'Lending Partners', value: '200', suffix: '+', sort_order: 3 },
  { id: 4, label: 'Employee Count', value: '50', suffix: '+', sort_order: 4 },
];

export const initialSiteSettings: SiteSettings = {
  site_name: 'HomeLens Realty',
  tagline: 'Building a Better Home Loan Experience for Every Homebuyer',
  email: 'contact@homelensrealty.com',
  phone: '+91 80 4965 2100',
  address: 'HomeLens, 167, 4th Floor, 37th Cross Road, 28th Main Rd, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560041',
};
