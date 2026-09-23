import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, MessageSquareText } from 'lucide-react';
import { HomeLensLogo } from '../common/HomeLensLogo';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
  isAdmin: boolean;
  setIsAdminView: (v: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openConsultation,
  setIsAdminView,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Complete list of each page in HomeLens application
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'loans', label: 'Loan Types' },
    { id: 'comparison', label: '55+ Bank Rates' },
    { id: 'calculators', label: 'Calculators' },
    { id: 'documents', label: 'Documents' },
    { id: 'partner', label: 'Partner Zone' },
    { id: 'blogs', label: 'Insights' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: 'Hello HomeLens Team, I need assistance with home loan comparison.',
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#0a0a0c] border-b-2 border-black ${
          scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-1' : 'py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            {/* Zone 1: Exact Brand Logo & Wordmark */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center text-left cursor-pointer group"
                aria-label="HomeLens Home"
              >
                <HomeLensLogo
                  size="md"
                  subtitle="MORTGAGE NETWORK"
                  className="transition-transform group-hover:scale-[1.02]"
                />
              </button>
            </div>

            {/* Zone 2: Navigation Links for ALL Pages (High Contrast on Deep Black) */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-black bg-[#fae49d] border-2 border-black shadow-xs font-black'
                        : 'text-neutral-200 hover:text-white hover:bg-neutral-900 border border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Responsive Tablet Fallback Nav (Medium-Large Screens) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-1">
              {navItems.slice(0, 6).map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-black bg-[#fae49d] border-2 border-black'
                        : 'text-neutral-200 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'contact'
                    ? 'text-black bg-[#fae49d] border-2 border-black'
                    : 'text-[#fae49d] hover:bg-neutral-900'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Primary Actions - ONLY Reference to WhatsApp at Top, NO Number! */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* WhatsApp Reference Button */}
              <a
                href={navWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#25d366] hover:bg-[#20ba59] border-2 border-black text-xs font-black text-white flex items-center gap-1.5 shadow-xs transition-all"
                title="WhatsApp Advisory"
              >
                <MessageSquareText className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={openConsultation}
                className="px-3.5 py-2 rounded-xl bg-[#fae49d] hover:bg-[#edd482] text-black text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-2 border-black shadow-xs transition-all"
              >
                <span>Free Advisory</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={navWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-xl bg-[#25d366] text-white text-[11px] font-black flex items-center gap-1 border-2 border-black shadow-xs"
                title="WhatsApp Us"
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 transition-colors border-2 border-black"
                aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white border-l-2 border-black p-6 flex flex-col justify-between overflow-y-auto text-black">
            <div>
              <div className="flex items-center justify-between pb-5 border-b-2 border-black mb-6">
                <HomeLensLogo size="sm" subtitle="MORTGAGE" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-black hover:bg-gray-100 rounded-lg border border-transparent hover:border-black cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text / WhatsApp Helpline Strip (Reference to WhatsApp only, NO number) */}
              <div className="p-3 mb-4 rounded-2xl bg-[#eff6ff] border-2 border-black text-center">
                <span className="text-[11px] font-black uppercase text-[#1e40af] block">Official Advisory Desk</span>
                <span className="text-xs font-black text-black block mt-0.5">
                  Connect via WhatsApp for Instant Sanctions
                </span>
              </div>

              {/* Complete List of Each Page (High contrast font-black) */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-black transition-colors flex items-center justify-between cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-[#eff6ff] text-black border-2 border-black shadow-xs'
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t-2 border-black space-y-3">
              <a
                href={navWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sm"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full py-3 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sm cursor-pointer"
              >
                <span>Request Free Advisory</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
