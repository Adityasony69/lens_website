import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquareText, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Navigation,
  FileText,
  UserCheck
} from 'lucide-react';
import { OFFICIAL_PHONE_FORMATTED, buildWhatsAppRedirectUrl, handleFormRedirect } from '../../lib/contact';
import { storage } from '../../lib/storage';

interface ContactUsPageProps {
  onOpenConsultation?: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    loanType: 'Home Loan',
    loanAmount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name || 'Applicant',
      phone: formData.phone,
      email: formData.email,
      loanType: formData.loanType,
      loanAmount: formData.loanAmount,
      city: formData.city,
      message: formData.message || 'Direct inquiry submitted via Contact Us page',
    };

    // Store in local storage
    storage.addCustomerLead({
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      loan_type: payload.loanType,
      loan_amount: payload.loanAmount,
      city: payload.city,
      message: payload.message,
    });

    setLoading(false);
    setSubmitted(true);

    // Automatic redirect to WhatsApp text (no direct call)
    setTimeout(() => {
      handleFormRedirect(payload);
    }, 600);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('9686666960');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const generalWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: 'Hello HomeLens Team, I am reaching out through the Contact Us page and would like to speak to a loan specialist.',
  });

  const departments = [
    {
      title: 'Borrower Advisory Desk',
      desc: 'Free rate comparisons, eligibility scans, and personalized bank recommendations across 55+ lenders.',
      badge: 'Zero Brokerage',
      contact: 'WhatsApp: +91 96866 66960',
      bg: 'bg-[#eff6ff]', // light blue
      icon: Building2,
      iconColor: 'text-[#2563eb]',
    },
    {
      title: 'Doorstep Document Pickup',
      desc: 'Certified loan executives collect, photocopy, and pre-verify KYC, property deeds, and tax returns at your home.',
      badge: 'All Over Bengaluru',
      contact: 'WhatsApp: +91 96866 66960',
      bg: 'bg-[#fff0f3]', // light pink
      icon: FileText,
      iconColor: 'text-[#e11d48]',
    },
    {
      title: 'Partner & DSA Onboarding',
      desc: 'Real estate agents, DSAs, and builders earning 70% commission payout within 7 days of loan disbursement.',
      badge: '70% Payout Scheme',
      contact: 'partners@homelensrealty.com',
      bg: 'bg-[#eff6ff]', // light blue
      icon: UserCheck,
      iconColor: 'text-[#2563eb]',
    },
    {
      title: 'Grievance & Escalation',
      desc: 'Direct liaison with senior bank credit committee officers to expedite sanction delays or document queries.',
      badge: 'Fast-Track Desk',
      contact: 'contact@homelensrealty.com',
      bg: 'bg-[#fff0f3]', // light pink
      icon: ShieldCheck,
      iconColor: 'text-[#e11d48]',
    },
  ];

  return (
    <div className="py-12 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Tag */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black mb-4">
          <span>Home</span>
          <span>/</span>
          <span className="text-[#b48835] font-black">Contact Us</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 bg-textured-paper p-8 rounded-3xl border-2 border-black shadow-sm">
          <div className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-3">
            HomeLens Realty Headquarters
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-2">
            Get in Touch with <span className="text-[#b48835]">HomeLens Advisory</span>
          </h1>
          <p className="subheading-editorial text-lg sm:text-xl text-[#875814] font-semibold italic mb-3">
            &ldquo;Zero-brokerage advisory, doorstep verification, and direct underwriter liaisons.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
            Have questions about interest rates, CIBIL eligibility, balance transfers, or doorstep documentation? Our certified mortgage specialists are here to assist you with zero fees.
          </p>
        </div>

        {/* Top 3 Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Card 1: Official Address */}
          <div className="p-6 rounded-3xl bg-[#eff6ff] border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="w-6 h-6 text-[#2563eb]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#1e40af] block mb-1">Corporate Office</span>
              <h3 className="text-base font-black text-black mb-2">Bengaluru Headquarters</h3>
              <address className="not-italic text-xs text-black font-bold leading-relaxed">
                HomeLens Realty<br />
                167, 4th Floor, 37th Cross Road,<br />
                28th Main Rd, Jayanagara 9th Block,<br />
                Bengaluru, Karnataka 560041
              </address>
            </div>
            <div className="mt-5 pt-4 border-t-2 border-black flex items-center justify-between text-xs">
              <span className="text-black font-bold">Landmark:</span>
              <span className="font-black text-black">Jayanagar 9th Block</span>
            </div>
          </div>

          {/* Card 2: Helpline & WhatsApp (Text Only - No Direct Calls) */}
          <div className="p-6 rounded-3xl bg-[#fff0f3] border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center mb-4 shadow-sm">
                <MessageSquareText className="w-6 h-6 text-[#e11d48]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#9f1239] block mb-1">Direct Advisor Support</span>
              <h3 className="text-base font-black text-black mb-2">Text &amp; WhatsApp Helpline</h3>
              <div className="text-xs text-black font-semibold leading-relaxed mb-3">
                Send us a message or inquiry anytime. Direct phone calls are disabled in favor of instant text and WhatsApp advisor responses.
              </div>
              
              <div className="p-3 rounded-2xl bg-white border-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e11d48]" />
                  <span className="text-sm font-black text-black">{OFFICIAL_PHONE_FORMATTED}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[10px] font-black text-black border border-black cursor-pointer"
                >
                  {copiedPhone ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t-2 border-black">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sm transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Text on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours & Email */}
          <div className="p-6 rounded-3xl bg-[#eff6ff] border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center mb-4 shadow-sm">
                <Clock className="w-6 h-6 text-[#2563eb]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#1e40af] block mb-1">Office Hours</span>
              <h3 className="text-base font-black text-black mb-2">Availability</h3>
              <div className="space-y-1.5 text-xs text-black font-bold mb-4">
                <div className="flex justify-between">
                  <span>Mon – Sat:</span>
                  <span className="font-black text-black">9:30 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-black text-black">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Doorstep Visits:</span>
                  <span className="font-black text-black">7 Days a Week</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-black text-black uppercase block">Official Email</span>
                <a href="mailto:contact@homelensrealty.com" className="text-xs font-black text-black hover:underline flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[#b48835]" />
                  <span>contact@homelensrealty.com</span>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t-2 border-black flex items-center justify-between text-xs">
              <span className="text-black font-bold">Response Time:</span>
              <span className="font-black text-[#10b981]">Within 15 Mins</span>
            </div>
          </div>
        </div>

        {/* Two-Column Section: Contact Form + Interactive Map & Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Comprehensive Contact & Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border-2 border-black shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-black border-2 border-black mb-2">
                Quick Consultation Form
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-black">
                Send an Inquiry to Our Senior Underwriting Desk
              </h2>
              <p className="text-xs text-black font-semibold mt-1">
                Fill in your details below. We will immediately review your eligibility and connect with you on WhatsApp at <strong className="text-black font-black">{OFFICIAL_PHONE_FORMATTED}</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#eff6ff] border-2 border-black text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-black text-[#10b981] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-black">Message Sent Successfully!</h3>
                <p className="text-xs text-black font-semibold max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been dispatched to our credit committee. We are automatically redirecting you to official WhatsApp chat at <strong>{OFFICIAL_PHONE_FORMATTED}</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={buildWhatsAppRedirectUrl(formData)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25d366] text-white text-xs font-black uppercase tracking-wider border-2 border-black shadow-sm"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Full Name <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Mobile Number <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 96866 66960"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Bengaluru, Mysore, Chennai"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Loan Category Needed
                    </label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                    >
                      <option value="Home Loan">New Home Loan (Flat / House)</option>
                      <option value="Home Construction Loan">Home Construction Loan</option>
                      <option value="Plot Loan">Plot / Site Purchase Loan</option>
                      <option value="Balance Transfer">Home Loan Balance Transfer</option>
                      <option value="Top-Up Loan">Top-Up Loan</option>
                      <option value="Loan Against Property">Loan Against Property (LAP)</option>
                      <option value="NRI Home Loan">NRI Home Loan</option>
                      <option value="Partner Network">Builder / Broker Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Estimated Loan Amount
                    </label>
                    <input
                      type="text"
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                      placeholder="e.g. ₹60 Lakhs"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property, preferred bank, current EMI, or any specific questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-md transition-all cursor-pointer"
                  >
                    <span>{loading ? 'Submitting...' : 'Send Message & Text on WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4 text-[#fae49d]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-black font-black pt-1 flex-wrap">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> Zero Brokerage
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> Doorstep Document Pickup
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> 55+ Partner Banks
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps & Office Location (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Location Showcase */}
            <div className="bg-[#eff6ff] p-6 rounded-3xl border-2 border-black shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-white border-2 border-black flex items-center justify-center text-[#2563eb]">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-black">Visit Our Office</h3>
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-white border border-black text-black">
                  South Bengaluru
                </span>
              </div>

              {/* Map Canvas / Visual Embed Container */}
              <div className="w-full h-56 rounded-2xl border-2 border-black overflow-hidden relative shadow-inner bg-gray-100 mb-4">
                <iframe
                  title="HomeLens Realty Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.665355601248!2d77.5855008!3d12.9157529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508db8c56c5%3A0x6b1076b6ef943e8b!2sJayanagar%209th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="space-y-2 text-xs text-black font-bold mb-4">
                <p>
                  <strong>Address:</strong> 167, 4th Floor, 37th Cross Road, 28th Main Rd, Jayanagara 9th Block, Bengaluru, Karnataka 560041
                </p>
                <p className="text-black font-semibold">
                  Easy metro and road connectivity. Valet and visitor parking available on premises.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=HomeLens+Realty+Jayanagar+9th+Block+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-[#b48835]" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Quick Consultation Callout */}
            <div className="bg-[#fff0f3] p-6 rounded-3xl border-2 border-black shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center text-[#e11d48]">
                  <MessageSquareText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-black">Prefer Immediate Chat?</h4>
                  <span className="text-[11px] text-black font-bold">Direct loan officer line on WhatsApp</span>
                </div>
              </div>
              <p className="text-xs text-black font-semibold mb-4 leading-relaxed">
                Connect directly with a Senior Credit Manager on WhatsApp for live rates and pre-approval calculations.
              </p>
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sm transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Department Support Desks */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#b48835] block mb-1">
              Specialized Departments
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Connect With the Right HomeLens Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <div
                  key={idx}
                  className={`${dept.bg} p-6 rounded-3xl border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-white border-2 border-black flex items-center justify-center shadow-xs">
                        <Icon className={`w-5 h-5 ${dept.iconColor}`} />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white border-2 border-black text-[10px] font-black text-black">
                        {dept.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-black text-black mb-2">{dept.title}</h3>
                    <p className="text-xs text-black font-semibold leading-relaxed mb-4">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t-2 border-black">
                    <span className="text-[10px] uppercase font-black text-neutral-800 block">Direct Desk:</span>
                    <span className="text-xs font-black text-black">{dept.contact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto p-7 sm:p-9 rounded-3xl bg-[#f8f9fc] border-2 border-black">
          <h3 className="text-lg sm:text-xl font-black text-black mb-4 text-center">
            Frequently Asked Questions About Contacting Us
          </h3>
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border-2 border-black">
              <h4 className="font-black text-black mb-1">Does HomeLens charge any fee for consultation or document pickup?</h4>
              <p className="text-black font-semibold leading-relaxed">
                No. HomeLens provides 100% free home loan advisory to homebuyers and borrowers. We never charge any brokerage, file opening fees, or hidden advisory charges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-black">
              <h4 className="font-black text-black mb-1">Can an advisor visit my home or office to collect documents?</h4>
              <p className="text-black font-semibold leading-relaxed">
                Yes. Our certified doorstep mortgage managers provide physical document collection across all zones of Bengaluru and surrounding regions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-black">
              <h4 className="font-black text-black mb-1">How can I text HomeLens on WhatsApp?</h4>
              <p className="text-black font-semibold leading-relaxed">
                You can directly message our official WhatsApp desk, or click any WhatsApp button across our website to start an instant chat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
