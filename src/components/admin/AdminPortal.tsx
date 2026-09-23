import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Landmark, 
  TableProperties, 
  HelpCircle, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Check, 
  X, 
  Search, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Calendar 
} from 'lucide-react';
import { storage } from '../../lib/storage';
import { CustomerLead, PartnerLead, Bank, BankComparisonRow, FAQ, Testimonial, Statistic, SiteSettings } from '../../types';
import { HomeLensLogo } from '../common/HomeLensLogo';

interface AdminPortalProps {
  onBackToSite: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onBackToSite }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(storage.isAdminLoggedIn());
  const [activeSection, setActiveSection] = useState<'overview' | 'customer_leads' | 'partner_leads' | 'banks' | 'rates' | 'faqs' | 'testimonials' | 'stats' | 'settings'>('overview');

  // Login form state
  const [loginUser, setLoginUser] = useState('admin');
  const [loginPass, setLoginPass] = useState('homelens2025');
  const [loginError, setLoginError] = useState('');

  // Data states
  const [customerLeads, setCustomerLeads] = useState<CustomerLead[]>([]);
  const [partnerLeads, setPartnerLeads] = useState<PartnerLead[]>([]);
  const [banks, setBanks] = useState<Bank[]>([]);
  const [comparisons, setComparisons] = useState<BankComparisonRow[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [stats, setStats] = useState<Statistic[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(storage.getSiteSettings());

  // Search states
  const [searchQuery, setSearchQuery] = useState('');

  // New item modal states
  const [isAddingBank, setIsAddingBank] = useState(false);
  const [newBankName, setNewBankName] = useState('');
  const [newBankSector, setNewBankSector] = useState<Bank['sector']>('Nationalised Bank');

  const [isAddingRate, setIsAddingRate] = useState(false);
  const [rateForm, setRateForm] = useState({
    bank_id: 1,
    loan_type: 'Home Loan',
    roi: '8.40% - 9.75%',
    login_fees: '₹2,000 - ₹5,000',
    processing_fees: '0.35% - 0.50%',
    legal_technical: '₹4,000 - ₹10,000',
    stamp_duty: 'As applicable by State',
    moot: '80%',
  });

  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [faqForm, setFaqForm] = useState({ question: '', answer: '', category: 'General' });

  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);
  const [testForm, setTestForm] = useState({
    name: '',
    role: '',
    location: '',
    loan_detail: '',
    content: '',
    rating: 5,
  });

  const refreshData = () => {
    setCustomerLeads(storage.getCustomerLeads());
    setPartnerLeads(storage.getPartnerLeads());
    setBanks(storage.getBanks());
    setComparisons(storage.getComparisons());
    setFaqs(storage.getFaqs());
    setTestimonials(storage.getTestimonials());
    setStats(storage.getStatistics());
    setSettings(storage.getSiteSettings());
  };

  useEffect(() => {
    if (isLoggedIn) {
      refreshData();
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (storage.adminLogin(loginUser, loginPass)) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid administrator credentials.');
    }
  };

  const handleLogout = () => {
    storage.adminLogout();
    setIsLoggedIn(false);
  };

  // --- LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#121316] flex items-center justify-center p-4 relative font-sans">
        <div className="w-full max-w-md bg-[#18191e] border border-[#2b2d38] rounded-2xl p-8 shadow-2xl relative z-10 text-left">
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="mb-4">
              <HomeLensLogo size="md" subtitle="FRANCHISE MANAGEMENT" />
            </div>
            <h1 className="text-xl font-bold text-[#f0f0f2]">Franchise Portal</h1>
            <p className="text-xs text-[#8e9099] mt-1">Authorized Management Access Only</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/40 text-xs text-red-300 mb-4">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#8e9099] mb-1">Username</label>
              <input
                type="text"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#121316] border border-[#282a33] text-xs text-[#f0f0f2] focus:border-[#c5a059] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8e9099] mb-1">Password</label>
              <input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#121316] border border-[#282a33] text-xs text-[#f0f0f2] focus:border-[#c5a059] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-gold w-full py-3 text-xs flex items-center justify-center gap-2 cursor-pointer font-bold uppercase tracking-wider"
              >
                <Lock className="w-3.5 h-3.5 text-[#121316]" />
                <span>Enter Admin Console</span>
              </button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-[#252731] text-center text-xs">
            <button
              onClick={onBackToSite}
              className="text-[#8e9099] hover:text-[#f0f0f2] transition-colors cursor-pointer"
            >
              ← Return to public website
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- LOGGED-IN ADMIN CONSOLE ---
  return (
    <div className="min-h-screen bg-[#121316] text-[#c2c4cb] flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#141518] border-r border-[#262832] flex flex-col shrink-0">
        {/* Brand Lockup */}
        <div className="p-5 border-b border-[#262832] flex items-center justify-between">
          <HomeLensLogo size="sm" subtitle="ADMIN" />
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#c5a059]/15 text-[#fae49d] border border-[#c5a059]/30 font-bold">
            Live
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          {[
            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
            { id: 'customer_leads', label: 'Customer Leads', icon: Users, badge: customerLeads.filter(l => l.status === 'New').length },
            { id: 'partner_leads', label: 'Partner Leads', icon: Building2, badge: partnerLeads.filter(l => l.status === 'New').length },
            { id: 'banks', label: 'Bank Directory', icon: Landmark },
            { id: 'rates', label: 'Rate Engine', icon: TableProperties },
            { id: 'faqs', label: 'FAQs Manager', icon: HelpCircle },
            { id: 'testimonials', label: 'Client Reviews', icon: MessageSquare },
            { id: 'stats', label: 'Platform Stats', icon: BarChart3 },
            { id: 'settings', label: 'Site Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as any)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059] text-[#121316] font-bold shadow-sm'
                    : 'text-[#8e9099] hover:text-[#f0f0f2] hover:bg-[#1e2026]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#121316]' : 'text-[#c5a059]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && item.badge > 0 ? (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-[#121316] text-[#fae49d]' : 'bg-[#c5a059]/20 text-[#fae49d]'}`}>
                    {item.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={onBackToSite}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>Visit Website</span>
            </span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Administrative Viewport */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#121316]">
        {/* Top bar */}
        <header className="px-6 py-4 border-b border-[#262832] bg-[#141518] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#c5a059] block">
              Franchise Workspace
            </span>
            <p className="text-xs text-[#8e9099]">
              Session active as <span className="text-[#f0f0f2] font-semibold">admin</span>
            </p>
          </div>
          <button
            onClick={onBackToSite}
            className="btn-secondary px-3.5 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-semibold"
          >
            <span>Exit to Site</span>
            <ExternalLink className="w-3 h-3 text-[#c5a059]" />
          </button>
        </header>

        {/* Section Contents */}
        <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
          {/* ================= OVERVIEW ================= */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              {/* Metric Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="luxury-card p-5 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Customer Leads</span>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {customerLeads.length}
                  </div>
                  <span className="text-xs text-amber-400 mt-1 block">
                    {customerLeads.filter(l => l.status === 'New').length} pending action
                  </span>
                </div>

                <div className="luxury-card p-5 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Partner Leads</span>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {partnerLeads.length}
                  </div>
                  <span className="text-xs text-emerald-400 mt-1 block">
                    {partnerLeads.filter(l => l.status === 'New').length} new applications
                  </span>
                </div>

                <div className="luxury-card p-5 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Lending Partners</span>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {banks.filter(b => b.is_active === 1).length}
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {comparisons.length} active rate brackets
                  </span>
                </div>

                <div className="luxury-card p-5 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-semibold block mb-1">Knowledge Hub</span>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {faqs.length} FAQs
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {testimonials.length} client stories
                  </span>
                </div>
              </div>

              {/* Stream of Recent Inquiries */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="luxury-card p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <h3 className="text-sm font-bold text-white">Recent Customer Inquiries</h3>
                    <button
                      onClick={() => setActiveSection('customer_leads')}
                      className="text-xs text-amber-400 hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {customerLeads.slice(0, 4).map((lead) => (
                      <div key={lead.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">{lead.name}</div>
                          <div className="text-[11px] text-slate-400">{lead.loan_type} • {lead.loan_amount}</div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                          lead.status === 'New' ? 'bg-amber-400/20 text-amber-300' : 'bg-emerald-400/20 text-emerald-300'
                        }`}>
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="luxury-card p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <h3 className="text-sm font-bold text-white">Channel Partner Registrations</h3>
                    <button
                      onClick={() => setActiveSection('partner_leads')}
                      className="text-xs text-amber-400 hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {partnerLeads.slice(0, 4).map((lead) => (
                      <div key={lead.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">{lead.name}</div>
                          <div className="text-[11px] text-slate-400">{lead.partner_type} • {lead.company_name}</div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-white/10 text-slate-300">
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CUSTOMER LEADS ================= */}
          {activeSection === 'customer_leads' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">Customer Loan Inquiries</h2>
                  <p className="text-xs text-slate-400">Prospective borrowers registered via forms and calculator CTAs</p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search applicant, phone, city..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#111724] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="luxury-card rounded-2xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#111724] text-slate-400">
                        <th className="p-4">Applicant</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Loan Details</th>
                        <th className="p-4">City</th>
                        <th className="p-4">Status Workflow</th>
                        <th className="p-4 text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-[#0b0f17]">
                      {customerLeads
                        .filter(l => !searchQuery || l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.phone.includes(searchQuery) || l.city.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((lead) => (
                          <tr key={lead.id} className="hover:bg-white/[0.02]">
                            <td className="p-4">
                              <div className="font-bold text-white">{lead.name}</div>
                              {lead.message && <div className="text-[11px] text-slate-400 line-clamp-1 italic mt-0.5">{lead.message}</div>}
                            </td>
                            <td className="p-4 space-y-0.5">
                              <div>{lead.phone}</div>
                              <div className="text-slate-400">{lead.email}</div>
                            </td>
                            <td className="p-4">
                              <div className="font-semibold text-slate-200">{lead.loan_type}</div>
                              <div className="text-amber-400 font-bold tabular-nums">{lead.loan_amount}</div>
                            </td>
                            <td className="p-4 text-slate-300">{lead.city || '—'}</td>
                            <td className="p-4">
                              <select
                                value={lead.status}
                                onChange={(e) => {
                                  storage.updateCustomerLeadStatus(lead.id, e.target.value as any);
                                  refreshData();
                                }}
                                className="px-2.5 py-1.5 rounded-lg bg-[#111724] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Converted">Converted</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => {
                                  if (confirm('Delete this customer lead?')) {
                                    storage.deleteCustomerLead(lead.id);
                                    refreshData();
                                  }
                                }}
                                className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= PARTNER LEADS ================= */}
          {activeSection === 'partner_leads' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Channel Partner Inquiries</h2>
                <p className="text-xs text-slate-400">Real estate agents, DSAs, and builders registered via the Partner Zone</p>
              </div>

              <div className="luxury-card rounded-2xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#111724] text-slate-400">
                        <th className="p-4">Partner Profile</th>
                        <th className="p-4">Channel Role</th>
                        <th className="p-4">Company & Designation</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-[#0b0f17]">
                      {partnerLeads.map((p) => (
                        <tr key={p.id} className="hover:bg-white/[0.02]">
                          <td className="p-4">
                            <div className="font-bold text-white">{p.name}</div>
                            <div className="text-[11px] text-slate-400">{p.office_address || '—'}</div>
                          </td>
                          <td className="p-4">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                              {p.partner_type}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="text-slate-200 font-semibold">{p.company_name || 'Individual'}</div>
                            <div className="text-slate-400">{p.designation}</div>
                          </td>
                          <td className="p-4">
                            <div>{p.phone}</div>
                            <div className="text-slate-400">{p.email}</div>
                          </td>
                          <td className="p-4">
                            <select
                              value={p.status}
                              onChange={(e) => {
                                storage.updatePartnerLeadStatus(p.id, e.target.value as any);
                                refreshData();
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-[#111724] border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                            >
                              <option value="New">New</option>
                              <option value="Verified">Verified</option>
                              <option value="Active Partner">Active Partner</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => {
                                if (confirm('Delete partner lead?')) {
                                  storage.deletePartnerLead(p.id);
                                  refreshData();
                                }
                              }}
                              className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= BANKS DIRECTORY ================= */}
          {activeSection === 'banks' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Bank & Lender Directory</h2>
                  <p className="text-xs text-slate-400">Participating nationalised banks, private lenders, and NBFCs</p>
                </div>
                <button
                  onClick={() => setIsAddingBank(!isAddingBank)}
                  className="btn-gold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Bank</span>
                </button>
              </div>

              {isAddingBank && (
                <div className="p-5 rounded-2xl bg-[#161f2e] border border-amber-400/30 space-y-4">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Add Lending Institution</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Bank Name</label>
                      <input
                        type="text"
                        value={newBankName}
                        onChange={(e) => setNewBankName(e.target.value)}
                        placeholder="e.g. Federal Bank"
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Sector Category</label>
                      <select
                        value={newBankSector}
                        onChange={(e) => setNewBankSector(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      >
                        <option value="Nationalised Bank">Nationalised Bank (PSU)</option>
                        <option value="Private Bank">Private Bank</option>
                        <option value="HFC / NBFC">HFC / NBFC</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsAddingBank(false)}
                      className="px-4 py-1.5 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        if (!newBankName.trim()) return;
                        storage.addBank(newBankName.trim(), newBankSector);
                        setNewBankName('');
                        setIsAddingBank(false);
                        refreshData();
                      }}
                      className="btn-gold px-5 py-1.5 text-xs"
                    >
                      Save Bank
                    </button>
                  </div>
                </div>
              )}

              <div className="luxury-card rounded-2xl overflow-hidden border border-white/10">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#111724] text-slate-400">
                      <th className="p-4">Bank Name</th>
                      <th className="p-4">Sector</th>
                      <th className="p-4">Active Status</th>
                      <th className="p-4 text-right">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-[#0b0f17]">
                    {banks.map((b) => (
                      <tr key={b.id} className="hover:bg-white/[0.02]">
                        <td className="p-4 font-bold text-white">{b.name}</td>
                        <td className="p-4 text-slate-300">{b.sector}</td>
                        <td className="p-4">
                          <button
                            onClick={() => {
                              storage.toggleBank(b.id);
                              refreshData();
                            }}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold border cursor-pointer ${
                              b.is_active === 1
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : 'bg-red-500/10 text-red-400 border-red-500/20'
                            }`}
                          >
                            {b.is_active === 1 ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (confirm(`Delete ${b.name}?`)) {
                                storage.deleteBank(b.id);
                                refreshData();
                              }
                            }}
                            className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= RATE ENGINE ================= */}
          {activeSection === 'rates' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Rate Comparison Engine</h2>
                  <p className="text-xs text-slate-400">Live ROI brackets, processing fees, and LTV limits for comparison matrix</p>
                </div>
                <button
                  onClick={() => setIsAddingRate(!isAddingRate)}
                  className="btn-gold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Rate Row</span>
                </button>
              </div>

              {isAddingRate && (
                <div className="p-5 rounded-2xl bg-[#161f2e] border border-amber-400/30 space-y-4">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Publish New Comparison Row</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Bank</label>
                      <select
                        value={rateForm.bank_id}
                        onChange={(e) => setRateForm({ ...rateForm, bank_id: Number(e.target.value) })}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      >
                        {banks.map(b => (
                          <option key={b.id} value={b.id}>{b.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Loan Scheme</label>
                      <select
                        value={rateForm.loan_type}
                        onChange={(e) => setRateForm({ ...rateForm, loan_type: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      >
                        <option value="Home Loan">Home Loan</option>
                        <option value="Plot + Construction">Plot + Construction</option>
                        <option value="Balance Transfer">Balance Transfer</option>
                        <option value="Loan Against Property">Loan Against Property</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Interest Rate (ROI)</label>
                      <input
                        type="text"
                        value={rateForm.roi}
                        onChange={(e) => setRateForm({ ...rateForm, roi: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Processing Fees</label>
                      <input
                        type="text"
                        value={rateForm.processing_fees}
                        onChange={(e) => setRateForm({ ...rateForm, processing_fees: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Legal / Tech Charges</label>
                      <input
                        type="text"
                        value={rateForm.legal_technical}
                        onChange={(e) => setRateForm({ ...rateForm, legal_technical: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Max LTV / MOOT</label>
                      <input
                        type="text"
                        value={rateForm.moot}
                        onChange={(e) => setRateForm({ ...rateForm, moot: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => setIsAddingRate(false)}
                      className="px-4 py-1.5 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        const bankObj = banks.find(b => b.id === rateForm.bank_id) || banks[0];
                        storage.addComparison({
                          bank_id: bankObj.id,
                          bank_name: bankObj.name,
                          bank_sector: bankObj.sector,
                          loan_type: rateForm.loan_type,
                          roi: rateForm.roi,
                          login_fees: rateForm.login_fees,
                          processing_fees: rateForm.processing_fees,
                          legal_technical: rateForm.legal_technical,
                          stamp_duty: rateForm.stamp_duty,
                          moot: rateForm.moot,
                        });
                        setIsAddingRate(false);
                        refreshData();
                      }}
                      className="btn-gold px-5 py-1.5 text-xs"
                    >
                      Publish Rate
                    </button>
                  </div>
                </div>
              )}

              <div className="luxury-card rounded-2xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#111724] text-slate-400">
                        <th className="p-4">Bank</th>
                        <th className="p-4">Scheme</th>
                        <th className="p-4">ROI</th>
                        <th className="p-4">Processing Fees</th>
                        <th className="p-4">LTV</th>
                        <th className="p-4 text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-[#0b0f17]">
                      {comparisons.map((row) => (
                        <tr key={row.id} className="hover:bg-white/[0.02]">
                          <td className="p-4 font-bold text-white">{row.bank_name}</td>
                          <td className="p-4 text-slate-300">{row.loan_type}</td>
                          <td className="p-4 font-bold text-amber-400 tabular-nums">{row.roi}</td>
                          <td className="p-4 text-slate-300">{row.processing_fees}</td>
                          <td className="p-4 text-slate-300">{row.moot}</td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => {
                                if (confirm('Delete rate entry?')) {
                                  storage.deleteComparison(row.id);
                                  refreshData();
                                }
                              }}
                              className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= FAQS MANAGER ================= */}
          {activeSection === 'faqs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Knowledge Base FAQs</h2>
                  <p className="text-xs text-slate-400">Questions and answers rendered on the About and Loan pages</p>
                </div>
                <button
                  onClick={() => setIsAddingFaq(!isAddingFaq)}
                  className="btn-gold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add FAQ</span>
                </button>
              </div>

              {isAddingFaq && (
                <div className="p-5 rounded-2xl bg-[#161f2e] border border-amber-400/30 space-y-4">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Create FAQ Entry</h3>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Question</label>
                    <input
                      type="text"
                      value={faqForm.question}
                      onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                      placeholder="e.g. Can I prepay my home loan without penalty?"
                      className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Detailed Answer</label>
                    <textarea
                      value={faqForm.answer}
                      onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsAddingFaq(false)}
                      className="px-4 py-1.5 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        if (!faqForm.question.trim() || !faqForm.answer.trim()) return;
                        storage.addFaq(faqForm.question.trim(), faqForm.answer.trim(), faqForm.category);
                        setFaqForm({ question: '', answer: '', category: 'General' });
                        setIsAddingFaq(false);
                        refreshData();
                      }}
                      className="btn-gold px-5 py-1.5 text-xs"
                    >
                      Save FAQ
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {faqs.map((f) => (
                  <div key={f.id} className="luxury-card p-4 rounded-xl border border-white/5 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-white">{f.question}</div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">{f.answer}</div>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm('Delete FAQ?')) {
                          storage.deleteFaq(f.id);
                          refreshData();
                        }
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 cursor-pointer shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TESTIMONIALS MANAGER ================= */}
          {activeSection === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Client Testimonials</h2>
                  <p className="text-xs text-slate-400">Verified reviews and stories shown on the homepage</p>
                </div>
                <button
                  onClick={() => setIsAddingTestimonial(!isAddingTestimonial)}
                  className="btn-gold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Review</span>
                </button>
              </div>

              {isAddingTestimonial && (
                <div className="p-5 rounded-2xl bg-[#161f2e] border border-amber-400/30 space-y-4">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Add Client Review</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Client Name</label>
                      <input
                        type="text"
                        value={testForm.name}
                        onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                        placeholder="e.g. Rahul & Meera Gupta"
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Role / Profession</label>
                      <input
                        type="text"
                        value={testForm.role}
                        onChange={(e) => setTestForm({ ...testForm, role: e.target.value })}
                        placeholder="e.g. Lead Architect"
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">City Location</label>
                      <input
                        type="text"
                        value={testForm.location}
                        onChange={(e) => setTestForm({ ...testForm, location: e.target.value })}
                        placeholder="e.g. Whitefield, Bengaluru"
                        className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Testimonial Story</label>
                    <textarea
                      value={testForm.content}
                      onChange={(e) => setTestForm({ ...testForm, content: e.target.value })}
                      rows={2}
                      className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsAddingTestimonial(false)}
                      className="px-4 py-1.5 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        if (!testForm.name.trim() || !testForm.content.trim()) return;
                        storage.addTestimonial(
                          testForm.name,
                          testForm.role,
                          testForm.location,
                          testForm.loan_detail,
                          testForm.content,
                          testForm.rating
                        );
                        setIsAddingTestimonial(false);
                        refreshData();
                      }}
                      className="btn-gold px-5 py-1.5 text-xs"
                    >
                      Save Review
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((t) => (
                  <div key={t.id} className="luxury-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">{t.name}</span>
                        <span className="text-xs text-amber-400">{'★'.repeat(t.rating)}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mb-2">{t.role} • {t.location}</div>
                      <p className="text-xs text-slate-300 italic leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex justify-end mt-3">
                      <button
                        onClick={() => {
                          if (confirm('Delete review?')) {
                            storage.deleteTestimonial(t.id);
                            refreshData();
                          }
                        }}
                        className="text-xs text-slate-500 hover:text-red-400 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= PLATFORM STATS ================= */}
          {activeSection === 'stats' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-bold text-white">Platform Counter Metrics</h2>
                <p className="text-xs text-slate-400">Edit the 4 primary live counters shown on the homepage</p>
              </div>

              <div className="luxury-card p-6 rounded-3xl border border-white/10 space-y-4">
                {stats.map((s) => (
                  <div key={s.id} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-semibold text-white w-40">{s.label}</span>
                    <input
                      type="text"
                      value={s.value}
                      onChange={(e) => {
                        storage.updateStatistic(s.id, e.target.value, s.suffix);
                        refreshData();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#0b0f17] border border-white/10 text-xs text-amber-300 font-bold tabular-nums w-24 text-center"
                    />
                    <input
                      type="text"
                      value={s.suffix}
                      onChange={(e) => {
                        storage.updateStatistic(s.id, s.value, e.target.value);
                        refreshData();
                      }}
                      className="px-2 py-1.5 rounded-lg bg-[#0b0f17] border border-white/10 text-xs text-slate-300 font-bold w-12 text-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SITE SETTINGS ================= */}
          {activeSection === 'settings' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-lg font-bold text-white">Global Platform Settings</h2>
                <p className="text-xs text-slate-400">Manage corporate brand address, support telephone, and emails</p>
              </div>

              <div className="luxury-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    value={settings.site_name}
                    onChange={(e) => {
                      storage.updateSiteSetting('site_name', e.target.value);
                      refreshData();
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hero Tagline</label>
                  <input
                    type="text"
                    value={settings.tagline}
                    onChange={(e) => {
                      storage.updateSiteSetting('tagline', e.target.value);
                      refreshData();
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Support Email</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => {
                      storage.updateSiteSetting('email', e.target.value);
                      refreshData();
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Central Advisory Phone Number</label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => {
                      storage.updateSiteSetting('phone', e.target.value);
                      refreshData();
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Registered Corporate Address</label>
                  <textarea
                    value={settings.address}
                    onChange={(e) => {
                      storage.updateSiteSetting('address', e.target.value);
                      refreshData();
                    }}
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0f17] border border-white/10 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
