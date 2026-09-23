import React, { useState } from 'react';
import {
  Target,
  Eye,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Briefcase,
  Zap,
  Lock,
  FileCheck,
  Headphones,
  LineChart,
  Sparkles,
  HeartHandshake,
  Shield,
  Search,
  Award
} from 'lucide-react';
import { storage } from '../../lib/storage';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onOpenComparison: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  onOpenComparison,
}) => {
  const faqs = storage.getFaqs();
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const stats = [
    { label: 'Families Served', value: '5000+', icon: Users, color: 'bg-[#eff6ff] text-[#2563eb]' },
    { label: 'Agents', value: '100+', icon: Briefcase, color: 'bg-[#fef3c7] text-[#d97706]' },
    { label: 'Lending Partners', value: '200+', icon: Building2, color: 'bg-[#ecfdf5] text-[#059669]' },
    { label: 'Employee Count', value: '50+', icon: Users, color: 'bg-[#fff1f2] text-[#e11d48]' },
  ];

  const storyTimeline = [
    {
      year: '2025',
      title: 'The Beginning',
      quote: '“Homelens Realty was founded with a simple belief — getting a home loan should be easier, clearer, and more transparent.”',
      milestones: [
        'Founded in October 2025 with a vision to simplify the home financing journey',
        'Began building a customer-focused home loan advisory and fulfilment model',
        'Started working with builders, channel partners, and homebuyers to provide end-to-end loan assistance',
      ],
    },
    {
      year: '2026',
      title: 'Building the Foundation',
      quote: '“We focused on building strong lender relationships, reliable processes, and a partner-first approach.”',
      milestones: [
        'Expanded our network to 55+ banks and NBFCs',
        'Built a structured process for profile assessment, lender comparison, documentation, sanction, and disbursement coordination',
        'Strengthened our builder and channel partner network to make home loan fulfilment simpler and more efficient',
      ],
    },
    {
      year: '2026',
      title: 'Simplifying the Loan Journey',
      quote: '“Our focus is to take the complexity out of home financing and put the customer at the centre of every step.”',
      milestones: [
        'Help customers compare suitable interest rates, charges, eligibility, and loan options',
        'Provide dedicated support for salaried, self-employed, business owners, and NRI applicants',
        'Support customers with challenging profiles, complex income situations, credit-related concerns, and property-specific requirements, subject to lender policies',
      ],
    },
    {
      year: 'Today',
      title: 'Growing With Purpose',
      quote: '“From a new idea to a growing home financing ecosystem, Homelens Realty continues to build around one promise — simpler, transparent, and dependable loan assistance.”',
      milestones: [
        'End-to-end support from application to sanction and disbursement',
        'Strong focus on builder and channel partner relationships',
        'A growing ecosystem connecting customers, lenders, builders, and channel partners under one roof',
      ],
      futureQuote: '“We are building Homelens Realty to become a trusted name in home financing and real estate advisory — one customer, one partner, and one home at a time.”',
    },
  ];

  const coreBeliefs = [
    {
      title: 'Win Through Teamwork',
      icon: Users,
      desc: 'Great outcomes are built together. We believe in taking ownership while supporting one another as one team. By combining different strengths, knowledge, and experience, we work together to solve challenges and deliver a smoother experience for every customer and partner.',
    },
    {
      title: 'Win Through Integrity',
      icon: Shield,
      desc: 'We do what is right, even when no one is watching. Our customers trust us with one of their most important financial decisions. We are committed to honest advice, responsible guidance, and recommending loan solutions based on suitability—not simply on convenience.',
    },
    {
      title: 'Win Through Transparency',
      icon: Search,
      desc: 'Clarity builds confidence. We believe customers should understand their loan options, interest rates, charges, eligibility, and processes before making a decision. We communicate openly, avoid surprises, and keep our customers and partners informed at every stage.',
    },
    {
      title: 'Win Through Customer Commitment',
      icon: HeartHandshake,
      desc: 'We don’t just process loans—we take responsibility for the journey. From the first conversation to sanction and disbursement, our team stays engaged, addresses challenges, and provides consistent support throughout the process.',
    },
    {
      title: 'Win Through Excellence',
      icon: Award,
      desc: 'We continuously raise the standard of how home loans are delivered. Through better processes, lender relationships, technology, and continuous learning, we strive to make every interaction simpler, faster, and more dependable.',
    },
  ];

  const techFeatures = [
    {
      title: 'Faster & Streamlined Processing',
      desc: 'A structured process helps reduce unnecessary delays and keeps your loan application moving efficiently from one stage to the next.',
      icon: Zap,
    },
    {
      title: 'Secure Document Handling',
      desc: 'Your financial and personal information is handled through secure processes designed to protect your documents throughout the loan journey.',
      icon: Lock,
    },
    {
      title: 'Digital Documentation',
      desc: 'Share and manage your required documents digitally, making the application process more convenient and reducing unnecessary paperwork.',
      icon: FileCheck,
    },
    {
      title: 'End-to-End Support',
      desc: 'From eligibility assessment and lender comparison to documentation, sanction, and disbursement, our team supports you throughout the loan process.',
      icon: Headphones,
    },
    {
      title: 'Real-Time Lead Tracking',
      desc: 'Our structured CRM-based process helps partners stay updated on lead progress, application status, and key milestones throughout the loan journey.',
      icon: LineChart,
    },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-textured-paper rounded-3xl border-2 border-black my-8 shadow-sm space-y-16">
      
      {/* 1 & 2: Tagline & Hero Intro */}
      <div className="text-center max-w-4xl mx-auto pt-4">
        <span className="inline-block px-3.5 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-4">
          Building a Better Home Loan
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-4">
          Experience for <span className="text-[#b48835]">Every Homebuyer</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-black font-semibold leading-relaxed max-w-3xl mx-auto">
          We’re simplifying the home loan journey with expert guidance, multiple banking and lending options, transparent advice, and end-to-end support—helping customers make informed financing decisions and move closer to their dream of homeownership with confidence.
        </p>
      </div>

      {/* 3: Metrics / Key Figures */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-black shadow-xs flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
            >
              <div className={`w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center mb-3 ${stat.color} shadow-xs`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-700 mt-1">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 & 5: Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-black space-y-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] border-2 border-black flex items-center justify-center text-[#2563eb] shadow-xs mb-3">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-[#b48835] block">
              Our Mission
            </span>
            <h3 className="text-lg sm:text-xl font-black text-black mt-1 mb-2">
              Making Homeownership Simpler for Every Indian
            </h3>
            <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
              To make homeownership simpler, smarter, and more accessible for every Indian family. At Homelens, we bring together the right lenders, transparent loan options, and expert guidance under one roof. From the first eligibility check to final disbursement, we take care of the complexities so our customers can focus on what truly matters—turning the dream of owning a home into reality.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-black space-y-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#fff0f3] border-2 border-black flex items-center justify-center text-[#e11d48] shadow-xs mb-3">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-[#b48835] block">
              Our Vision
            </span>
            <h3 className="text-lg sm:text-xl font-black text-black mt-1 mb-2">
              India’s Most Trusted Advisory Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
              To become one of India’s most trusted home financing and real estate advisory platforms, where every homebuyer has access to the right information, the right financial options, and the right guidance.
            </p>
            <p className="text-xs sm:text-sm text-black font-medium leading-relaxed mt-2 pt-2 border-t border-gray-200">
              We envision a future where getting a home loan is simple, transparent, and stress-free—with technology and human expertise working together to turn every homeownership aspiration into a confident decision.
            </p>
          </div>
        </div>
      </div>

      {/* 6: Turning Homeownership Aspirations into Confident Decisions */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-black shadow-sm">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.16em] mb-3">
            About Homelens Realty
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-black tracking-tight mb-4">
            Turning Homeownership Aspirations into <span className="text-[#b48835]">Confident Decisions</span>
          </h3>
          <div className="space-y-3.5 text-xs sm:text-sm text-black font-medium leading-relaxed">
            <p>
              Founded in October 2025, Homelens Realty is a growing real estate and financial advisory firm helping customers navigate the home loan journey with greater clarity and confidence.
            </p>
            <p>
              We connect homebuyers with suitable options across 55+ banks and NBFCs, while providing expert guidance, transparent loan comparisons, documentation assistance, and end-to-end coordination from application to sanction and disbursement.
            </p>
            <p className="font-bold text-black pt-1">
              Our goal is simple: make home financing easier to understand, easier to access, and easier to complete—so every customer can move closer to owning their dream home with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* 7: Our Story So Far (Timeline) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-2">
            Chronicle
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-black">Our Story So Far</h3>
          <p className="text-xs sm:text-sm text-black font-semibold mt-1">From a bold idea in 2025 to a growing national advisory network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {storyTimeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-black shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3.5 py-1 rounded-xl bg-black text-[#fae49d] text-xs font-black font-mono">
                    {item.year}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Milestone 0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-black text-black mb-2">{item.title}</h4>
                <blockquote className="text-xs font-bold italic text-[#875814] mb-4 bg-[#eff6ff]/60 p-3 rounded-xl border border-blue-200">
                  {item.quote}
                </blockquote>
                <ul className="space-y-2 mb-4">
                  {item.milestones.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2.5 text-xs text-black font-semibold leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.futureQuote && (
                <div className="mt-4 pt-4 border-t-2 border-dashed border-gray-300">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#b48835] block mb-1">
                    The Journey Ahead
                  </span>
                  <p className="text-xs font-bold italic text-black leading-relaxed">
                    {item.futureQuote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 8 & 9: What We Believe In & Win Principles */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-2">
            Our Core Values
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-black mb-3">What We Believe In</h3>
          <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed mb-3">
            At Homelens, our principles shape every interaction, every recommendation, and every decision we make. We believe home financing should be built on transparency, integrity, expertise, and accountability—with the customer’s interests at the centre.
          </p>
          <p className="text-xs sm:text-sm text-black font-medium text-gray-700 leading-relaxed">
            We are committed to simplifying complex processes, providing clear and honest guidance, and building long-term relationships with our customers, builders, lenders, and channel partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreBeliefs.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border-2 border-black space-y-2.5 hover:-translate-y-1 transition-all shadow-[0_6px_18px_rgba(0,0,0,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-[#b48835] font-mono">0{i + 1}.</span>
                    <div className="w-8 h-8 rounded-xl bg-gray-100 border border-black flex items-center justify-center text-black">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-black text-black mb-1">{b.title}</h4>
                  <p className="text-xs text-black font-medium leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 10: Simplifying Home Loans Through Technology & Expertise */}
      <div className="bg-[#eff6ff] p-8 sm:p-10 rounded-3xl border-2 border-black shadow-sm">
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.16em] mb-2">
            Innovation &amp; Efficiency
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-black tracking-tight mb-3">
            Simplifying Home Loans Through <span className="text-[#2563eb]">Technology &amp; Expertise</span>
          </h3>
          <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
            At Homelens Realty, we combine technology with expert loan assistance to make home financing simpler, more transparent, and easier to navigate. From comparing lenders to tracking your application, we bring greater clarity and convenience to every stage of your home loan journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {techFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-black shadow-xs space-y-2 hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fae49d] border-2 border-black flex items-center justify-center text-black shadow-2xs mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-black text-black">{feat.title}</h4>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-[#fae49d] text-xs font-black uppercase tracking-[0.18em] mb-2">
            Common Questions
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-black">Frequently Asked Questions</h3>
          <p className="text-xs text-black font-semibold mt-1">Clear answers to your most pressing home loan queries.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white p-5 rounded-2xl border-2 border-black hover:bg-gray-50 cursor-pointer transition-all shadow-xs"
                onClick={() => setOpenFaq(isOpen ? null : faq.id)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm font-black text-black">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-black shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="mt-3 pt-3 border-t-2 border-black text-xs text-black font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 11: Call to Action */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#f8f9fc] border-2 border-black text-center max-w-4xl mx-auto shadow-md">
        <h3 className="text-xl sm:text-3xl font-black text-black mb-2">
          Ready to Find the Best-Fit <span className="text-[#b48835]">Home Loan</span>?
        </h3>
        <p className="text-xs sm:text-sm text-black font-semibold max-w-xl mx-auto mb-6">
          Speak with a certified credit manager today or compare live terms across 55+ lenders online.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs flex items-center gap-2 cursor-pointer font-black border-2 border-black shadow-md transition-all uppercase tracking-wider"
          >
            <span>Get Expert Guidance</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#fae49d]" />
          </button>
          <button
            onClick={onOpenComparison}
            className="px-7 py-3 rounded-xl bg-white hover:bg-gray-100 text-black text-xs cursor-pointer font-black border-2 border-black shadow-xs transition-all uppercase tracking-wider"
          >
            <span>Get bank Comparison</span>
          </button>
        </div>
      </div>

    </div>
  );
};
