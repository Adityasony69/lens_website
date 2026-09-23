import { 
  CustomerLead, 
  PartnerLead, 
  Bank, 
  BankComparisonRow, 
  FAQ, 
  Testimonial, 
  Statistic, 
  SiteSettings 
} from '../types';
import { 
  initialBanks, 
  initialBankComparisons, 
  initialFaqs, 
  initialTestimonials, 
  initialStatistics, 
  initialSiteSettings 
} from './data';

const STORAGE_KEYS = {
  CUSTOMER_LEADS: 'homelens_customer_leads',
  PARTNER_LEADS: 'homelens_partner_leads',
  BANKS: 'homelens_banks',
  COMPARISONS: 'homelens_comparisons',
  FAQS: 'homelens_faqs',
  TESTIMONIALS: 'homelens_testimonials',
  STATISTICS: 'homelens_statistics',
  SETTINGS: 'homelens_site_settings',
  ADMIN_SESSION: 'homelens_admin_session',
};

// Seed sample leads so admin isn't empty on first visit
const sampleCustomerLeads: CustomerLead[] = [
  {
    id: 101,
    name: 'Vikram Malhotra',
    phone: '+91 98201 44521',
    email: 'vikram.m@gmail.com',
    loan_type: 'Home Loan',
    loan_amount: '₹85,00,000',
    city: 'Mumbai',
    message: 'Looking for lowest interest rate on ready apartment in Powai.',
    status: 'In Progress',
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 102,
    name: 'Sneha Venkatesh',
    phone: '+91 98450 78210',
    email: 'sneha.v@yahoo.com',
    loan_type: 'Home Loan Balance Transfer',
    loan_amount: '₹55,00,000',
    city: 'Bengaluru',
    message: 'Existing loan at 9.45% with an HFC. Need transfer + top-up of ₹10L.',
    status: 'New',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: 103,
    name: 'Rajesh Gupta',
    phone: '+91 97112 33490',
    email: 'rajesh.gupta@outlook.com',
    loan_type: 'Home Construction Loan',
    loan_amount: '₹1,20,00,000',
    city: 'Noida',
    message: 'Plot already owned with clear registry. Architect blueprints approved.',
    status: 'Contacted',
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
];

const samplePartnerLeads: PartnerLead[] = [
  {
    id: 201,
    partner_type: 'Agent',
    name: 'Arunav Sengupta',
    company_name: 'Metro Prime Real Estate',
    phone: '+91 98300 12890',
    email: 'arunav@metroprimerealty.in',
    office_address: 'Park Street, Kolkata',
    designation: 'Principal Broker',
    status: 'Active Partner',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 202,
    partner_type: 'Builder',
    name: 'Sunil Chhabra',
    company_name: 'Apex Horizon Developers',
    phone: '+91 99990 45678',
    email: 'sunil@apexhorizon.com',
    office_address: 'Sector 62, Gurugram',
    designation: 'Sales Director',
    status: 'New',
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 203,
    partner_type: 'Banker',
    name: 'Deepak Joshi',
    company_name: 'State Bank of India Retail Hub',
    phone: '+91 94220 89123',
    email: 'deepak.joshi@sbi.co.in',
    office_address: 'MG Road, Pune',
    designation: 'Chief Manager Retail Loans',
    status: 'Verified',
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
];

function getStored<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error reading ${key} from storage:`, e);
    return fallback;
  }
}

function setStored<T>(key: string, val: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error(`Error writing ${key} to storage:`, e);
  }
}

export const storage = {
  // Customer Leads
  getCustomerLeads: (): CustomerLead[] => {
    return getStored<CustomerLead[]>(STORAGE_KEYS.CUSTOMER_LEADS, sampleCustomerLeads);
  },
  addCustomerLead: (data: Omit<CustomerLead, 'id' | 'created_at' | 'status'>): CustomerLead => {
    const list = storage.getCustomerLeads();
    const newLead: CustomerLead = {
      ...data,
      id: Date.now(),
      status: 'New',
      created_at: new Date().toISOString(),
    };
    const updated = [newLead, ...list];
    setStored(STORAGE_KEYS.CUSTOMER_LEADS, updated);
    return newLead;
  },
  updateCustomerLeadStatus: (id: number, status: CustomerLead['status']): void => {
    const list = storage.getCustomerLeads();
    const updated = list.map(l => (l.id === id ? { ...l, status } : l));
    setStored(STORAGE_KEYS.CUSTOMER_LEADS, updated);
  },
  deleteCustomerLead: (id: number): void => {
    const list = storage.getCustomerLeads();
    setStored(STORAGE_KEYS.CUSTOMER_LEADS, list.filter(l => l.id !== id));
  },

  // Partner Leads
  getPartnerLeads: (): PartnerLead[] => {
    return getStored<PartnerLead[]>(STORAGE_KEYS.PARTNER_LEADS, samplePartnerLeads);
  },
  addPartnerLead: (data: Omit<PartnerLead, 'id' | 'created_at' | 'status'>): PartnerLead => {
    const list = storage.getPartnerLeads();
    const newLead: PartnerLead = {
      ...data,
      id: Date.now(),
      status: 'New',
      created_at: new Date().toISOString(),
    };
    const updated = [newLead, ...list];
    setStored(STORAGE_KEYS.PARTNER_LEADS, updated);
    return newLead;
  },
  updatePartnerLeadStatus: (id: number, status: PartnerLead['status']): void => {
    const list = storage.getPartnerLeads();
    const updated = list.map(l => (l.id === id ? { ...l, status } : l));
    setStored(STORAGE_KEYS.PARTNER_LEADS, updated);
  },
  deletePartnerLead: (id: number): void => {
    const list = storage.getPartnerLeads();
    setStored(STORAGE_KEYS.PARTNER_LEADS, list.filter(l => l.id !== id));
  },

  // Banks
  getBanks: (): Bank[] => {
    return getStored<Bank[]>(STORAGE_KEYS.BANKS, initialBanks);
  },
  addBank: (name: string, sector: Bank['sector']): Bank => {
    const list = storage.getBanks();
    const newBank: Bank = {
      id: Date.now(),
      name,
      sector,
      is_active: 1,
    };
    const updated = [...list, newBank];
    setStored(STORAGE_KEYS.BANKS, updated);
    return newBank;
  },
  toggleBank: (id: number): void => {
    const list = storage.getBanks();
    const updated = list.map(b => (b.id === id ? { ...b, is_active: b.is_active === 1 ? 0 : 1 } : b));
    setStored(STORAGE_KEYS.BANKS, updated);
  },
  deleteBank: (id: number): void => {
    const list = storage.getBanks();
    setStored(STORAGE_KEYS.BANKS, list.filter(b => b.id !== id));
  },

  // Bank Comparison Rates
  getComparisons: (): BankComparisonRow[] => {
    return getStored<BankComparisonRow[]>(STORAGE_KEYS.COMPARISONS, initialBankComparisons);
  },
  addComparison: (data: Omit<BankComparisonRow, 'id'>): BankComparisonRow => {
    const list = storage.getComparisons();
    const newComp: BankComparisonRow = {
      ...data,
      id: Date.now(),
    };
    const updated = [newComp, ...list];
    setStored(STORAGE_KEYS.COMPARISONS, updated);
    return newComp;
  },
  deleteComparison: (id: number): void => {
    const list = storage.getComparisons();
    setStored(STORAGE_KEYS.COMPARISONS, list.filter(c => c.id !== id));
  },

  // FAQs
  getFaqs: (): FAQ[] => {
    return getStored<FAQ[]>(STORAGE_KEYS.FAQS, initialFaqs);
  },
  addFaq: (question: string, answer: string, category: string): FAQ => {
    const list = storage.getFaqs();
    const newFaq: FAQ = {
      id: Date.now(),
      question,
      answer,
      category,
      sort_order: list.length + 1,
    };
    const updated = [...list, newFaq];
    setStored(STORAGE_KEYS.FAQS, updated);
    return newFaq;
  },
  deleteFaq: (id: number): void => {
    const list = storage.getFaqs();
    setStored(STORAGE_KEYS.FAQS, list.filter(f => f.id !== id));
  },

  // Testimonials
  getTestimonials: (): Testimonial[] => {
    return getStored<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, initialTestimonials);
  },
  addTestimonial: (name: string, role: string, location: string, loan_detail: string, content: string, rating: number = 5): Testimonial => {
    const list = storage.getTestimonials();
    const newTest: Testimonial = {
      id: Date.now(),
      name,
      role,
      location,
      loan_detail,
      content,
      rating,
    };
    const updated = [newTest, ...list];
    setStored(STORAGE_KEYS.TESTIMONIALS, updated);
    return newTest;
  },
  deleteTestimonial: (id: number): void => {
    const list = storage.getTestimonials();
    setStored(STORAGE_KEYS.TESTIMONIALS, list.filter(t => t.id !== id));
  },

  // Statistics
  getStatistics: (): Statistic[] => {
    return getStored<Statistic[]>(STORAGE_KEYS.STATISTICS, initialStatistics);
  },
  updateStatistic: (id: number, value: string, suffix: string): void => {
    const list = storage.getStatistics();
    const updated = list.map(s => (s.id === id ? { ...s, value, suffix } : s));
    setStored(STORAGE_KEYS.STATISTICS, updated);
  },

  // Site Settings
  getSiteSettings: (): SiteSettings => {
    return getStored<SiteSettings>(STORAGE_KEYS.SETTINGS, initialSiteSettings);
  },
  updateSiteSetting: (key: keyof SiteSettings, value: string): void => {
    const current = storage.getSiteSettings();
    const updated = { ...current, [key]: value };
    setStored(STORAGE_KEYS.SETTINGS, updated);
  },

  // Admin Auth
  isAdminLoggedIn: (): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
  },
  adminLogin: (user: string, pass: string): boolean => {
    if (user === 'admin' && pass === 'homelens2025') {
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
      return true;
    }
    return false;
  },
  adminLogout: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
  },
};
