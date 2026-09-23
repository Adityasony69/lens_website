import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { StatsRibbon } from './components/home/StatsRibbon';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { BorrowingPainPointsSection } from './components/home/BorrowingPainPointsSection';
import { HomeLensSolutionSection } from './components/home/HomeLensSolutionSection';
import { BankComparisonSection } from './components/comparison/BankComparisonSection';
import { CalculatorsSection } from './components/calculators/CalculatorsSection';
import { LoanProductsCatalog } from './components/loans/LoanProductsCatalog';
import { DocumentsSection } from './components/documents/DocumentsSection';
import { PartnerZoneSection } from './components/partner/PartnerZoneSection';
import { BlogsSection } from './components/blogs/BlogsSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactUsPage } from './components/contact/ContactUsPage';
import { ConsultationModal } from './components/forms/ConsultationModal';
import { AdminPortal } from './components/admin/AdminPortal';
import { OpeningSplashScreen } from './components/common/OpeningSplashScreen';
import { AskHomLensAiWidget } from './components/common/AskHomLensAiWidget';
import { WhatsAppFloatingWidget } from './components/common/WhatsAppFloatingWidget';
import { storage } from './lib/storage';
import { OFFICIAL_PHONE_FORMATTED, OFFICIAL_PHONE_TEXT_URL, buildWhatsAppRedirectUrl } from './lib/contact';
import { Star, ShieldCheck, ArrowRight, MessageSquareText } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAdminView, setIsAdminView] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationBank, setConsultationBank] = useState<string | undefined>(undefined);
  const [consultationLoanType, setConsultationLoanType] = useState<string | undefined>(undefined);
  const [selectedLoanSlug, setSelectedLoanSlug] = useState<string | null>(null);

  // Preserve admin access via #admin URL hash or ?admin=true without any visible button on the website
  useEffect(() => {
    const checkAdminAccess = () => {
      const isHashAdmin = window.location.hash === '#admin';
      const isQueryAdmin = new URLSearchParams(window.location.search).get('admin') === 'true';
      if (isHashAdmin || isQueryAdmin) {
        setIsAdminView(true);
      }
    };
    checkAdminAccess();
    window.addEventListener('hashchange', checkAdminAccess);
    return () => window.removeEventListener('hashchange', checkAdminAccess);
  }, []);

  const testimonials = storage.getTestimonials();

  const handleOpenConsultation = (bank?: string, loanType?: string) => {
    setConsultationBank(bank);
    setConsultationLoanType(loanType);
    setIsConsultationOpen(true);
  };

  const handleOpenLoanDetail = (slug: string) => {
    setSelectedLoanSlug(slug);
    setActiveTab('loans');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homeConsultationWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: 'Hello HomeLens Team, I would like to speak directly with a certified loan officer.',
  });

  if (isAdminView) {
    return (
      <AdminPortal
        onBackToSite={() => {
          if (window.location.hash === '#admin') {
            window.location.hash = '';
          }
          setIsAdminView(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-[#fae49d] selection:text-black relative">
      {/* 1. Opening Splash Screen (Shown for 3-4s with smooth exit) */}
      {showSplash && (
        <OpeningSplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 2. Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openConsultation={() => handleOpenConsultation()}
        isAdmin={storage.isAdminLoggedIn()}
        setIsAdminView={setIsAdminView}
      />

      {/* 3. Main Content Area */}
      <main className="flex-1">
        {/* ================= HOME VIEW ================= */}
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onOpenConsultation={() => handleOpenConsultation()}
              onExploreComparison={() => {
                setActiveTab('comparison');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCalculator={() => {
                setActiveTab('calculators');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreLoans={() => {
                setActiveTab('loans');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Stats Ribbon */}
            <StatsRibbon />

            {/* Pain Points Section with Hovering Data Cards (User Image 1: Shrushti & Kai) */}
            <BorrowingPainPointsSection
              onOpenConsultation={() => handleOpenConsultation()}
              onOpenComparison={() => {
                setActiveTab('comparison');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* HomeLens Solution Section with Hovering Benefit Cards (User Image 2: Innovator) */}
            <HomeLensSolutionSection
              onOpenConsultation={() => handleOpenConsultation()}
              onOpenComparison={() => {
                setActiveTab('comparison');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCalculators={() => {
                setActiveTab('calculators');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Why Choose HomeLens (4 Pillars & 55+ Banks Showcase) */}
            <WhyChooseUs
              onOpenComparison={() => {
                setActiveTab('comparison');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenPartnerZone={() => {
                setActiveTab('partner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Loan Programs Catalog Preview */}
            <LoanProductsCatalog
              onOpenConsultation={() => handleOpenConsultation()}
              selectedSlug={selectedLoanSlug}
              onClearSelectedSlug={() => setSelectedLoanSlug(null)}
            />

            {/* Customer Testimonials Section */}
            <section className="py-20 border-t-2 border-black bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                    Verified Homeowners
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
                    Stories from Families Like Yours
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 mt-2 font-medium">
                    Real borrowers who turned loan stress into a swift celebration with HomeLens Advisory.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {testimonials.map((t, idx) => (
                    <div
                      key={t.id}
                      className={`p-6 rounded-3xl flex flex-col justify-between border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all ${
                        idx % 2 === 0 ? 'bg-[#eff6ff]' : 'bg-[#fff0f3]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1 text-[#b48835] text-xs mb-3">
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#b48835] text-[#b48835]" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-800 leading-relaxed italic mb-5 font-medium">
                          &ldquo;{t.content}&rdquo;
                        </p>
                      </div>

                      <div className="pt-3 border-t-2 border-black">
                        <div className="font-black text-black text-xs">{t.name}</div>
                        <div className="text-[11px] text-[#b48835] font-bold">{t.loan_detail}</div>
                        <div className="text-[10px] text-gray-600 mt-0.5 font-semibold">{t.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Free Consultation Callout with 9686666960 Helpline */}
            <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#eff6ff] border-2 border-black space-y-4 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span>100% Unbiased Advisory Across 55+ Lenders</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  Speak Directly With a Certified Loan Specialist
                </h3>
                <p className="text-xs sm:text-sm text-black max-w-xl mx-auto leading-relaxed font-semibold">
                  No automated call centers. Get an individual credit evaluation, custom eligibility calculations, and doorstep document assistance with zero borrower fee.
                </p>

                <div className="pt-3 flex flex-wrap justify-center items-center gap-3">
                  <a
                    href={homeConsultationWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md transition-all"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Chat with WhatsApp Specialist</span>
                  </a>

                  <button
                    onClick={() => handleOpenConsultation()}
                    className="px-6 py-3 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-md transition-all cursor-pointer"
                  >
                    <span>Request Free Advisory</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 border-black shadow-sm transition-all cursor-pointer"
                  >
                    <span>Contact Office</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ================= BANK COMPARISON VIEW ================= */}
        {activeTab === 'comparison' && (
          <BankComparisonSection
            onApplyForBank={(bank, loanType) => handleOpenConsultation(bank, loanType)}
          />
        )}

        {/* ================= CALCULATORS VIEW ================= */}
        {activeTab === 'calculators' && (
          <CalculatorsSection
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}


        {/* ================= LOANS CATALOG VIEW ================= */}
        {activeTab === 'loans' && (
          <div className="py-6">
            <LoanProductsCatalog
              onOpenConsultation={() => handleOpenConsultation()}
              selectedSlug={selectedLoanSlug}
              onClearSelectedSlug={() => setSelectedLoanSlug(null)}
            />
          </div>
        )}

        {/* ================= DOCUMENTS VIEW ================= */}
        {activeTab === 'documents' && (
          <DocumentsSection
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* ================= PARTNER ZONE VIEW ================= */}
        {activeTab === 'partner' && (
          <PartnerZoneSection />
        )}

        {/* ================= BLOGS VIEW ================= */}
        {activeTab === 'blogs' && (
          <BlogsSection
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* ================= ABOUT VIEW ================= */}
        {activeTab === 'about' && (
          <AboutSection
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenComparison={() => {
              setActiveTab('comparison');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* ================= CONTACT US VIEW (MATCHES USER URL REFERENCE) ================= */}
        {activeTab === 'contact' && (
          <ContactUsPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Floating Ask HOM-i / AI Assistant Widget (Placed at bottom-left) */}
      <AskHomLensAiWidget
        onOpenConsultation={(bank, loanType) => handleOpenConsultation(bank, loanType)}
        onOpenComparison={() => {
          setActiveTab('comparison');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCalculators={() => {
          setActiveTab('calculators');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Dedicated Floating WhatsApp Desk (Placed at bottom-right per user requirement) */}
      <WhatsAppFloatingWidget
        onOpenCalculator={() => {
          setActiveTab('calculators');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenComparison={() => {
          setActiveTab('comparison');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openConsultation={() => handleOpenConsultation()}
        setIsAdminView={setIsAdminView}
        onReplayIntro={() => setShowSplash(true)}
      />

      {/* Global Consultation Modal */}
      {isConsultationOpen && (
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          defaultBank={consultationBank}
          defaultLoanType={consultationLoanType}
        />
      )}
    </div>
  );
}
