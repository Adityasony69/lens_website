export interface LoanProduct {
  slug: string;
  name: string;
  tagline: string;
  roi: string;
  tenure: string;
  maxAmount: string;
  description: string;
  features: string[];
  eligibility: {
    age: string;
    income: string;
    cibil: string;
    employment: string;
    nationality: string;
  };
  documents: {
    category: string;
    items: string[];
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

export type BankSector = 'Nationalised Bank' | 'Private Bank' | 'HFC / NBFC';

export interface Bank {
  id: number;
  name: string;
  sector: BankSector;
  is_active: number;
}

export interface BankComparisonRow {
  id: number;
  bank_id: number;
  bank_name: string;
  bank_sector: string;
  loan_type: string;
  roi: string;
  login_fees: string;
  processing_fees: string;
  legal_technical: string;
  stamp_duty: string;
  moot: string;
}

export type LeadStatus = 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Closed';

export interface CustomerLead {
  id: number;
  name: string;
  phone: string;
  email: string;
  loan_type: string;
  loan_amount: string;
  city: string;
  message?: string;
  status: LeadStatus;
  created_at: string;
}

export type PartnerType = 'Agent' | 'Builder' | 'Banker';
export type PartnerStatus = 'New' | 'Verified' | 'Active Partner' | 'Rejected';

export interface PartnerLead {
  id: number;
  partner_type: PartnerType;
  name: string;
  company_name: string;
  phone: string;
  email: string;
  office_address: string;
  designation: string;
  status: PartnerStatus;
  created_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  published_date: string;
  read_time: string;
  content: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  loan_detail: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
}

export interface Statistic {
  id: number;
  label: string;
  value: string;
  suffix: string;
  sort_order: number;
}

export interface SiteSettings {
  site_name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
}
