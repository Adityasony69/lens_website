import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight,
  MessageSquareText
} from 'lucide-react';
import { buildWhatsAppRedirectUrl } from '../../lib/contact';

interface AskHomLensAiWidgetProps {
  onOpenConsultation: (bank?: string, loanType?: string) => void;
  onOpenComparison: () => void;
  onOpenCalculators: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  actionText?: string;
  actionType?: 'consult' | 'compare' | 'calc';
}

export const AskHomLensAiWidget: React.FC<AskHomLensAiWidgetProps> = ({
  onOpenConsultation,
  onOpenComparison,
  onOpenCalculators,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Namaste! I am home-L, your HomeLens AI credit advisor. You can ask me any mortgage question or connect with our loan specialists directly via WhatsApp. How can I help you today?',
    },
  ]);

  const quickPrompts = [
    {
      label: 'Lowest rate today?',
      answer: 'Currently, public sector lenders like SBI and Bank of Baroda offer floating rates starting at 8.35%–8.50% for CIBIL scores 750+. Private banks like HDFC & ICICI offer 8.55%–8.75% with faster digital sanctions.',
      actionText: 'Compare 55+ Bank Rates',
      actionType: 'compare' as const,
    },
    {
      label: 'Eligibility for ₹1 Lakh salary?',
      answer: 'With a net salary of ₹1,00,000/month and zero existing loan EMIs, your approximate eligibility is ₹55 Lakh to ₹65 Lakh over a 20-30 year tenure (assuming 50%–60% FOIR).',
      actionText: 'Open Full EMI Calculator',
      actionType: 'calc' as const,
    },
    {
      label: 'How does the ₹50,000 cashback work?',
      answer: 'HomeLens gives up to ₹50,000 direct cashback to borrowers upon successful first loan disbursement from our partnered banking network, paid straight to your bank account within 7 working days.',
      actionText: 'Claim Cashback / Book Advisor',
      actionType: 'consult' as const,
    },
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const newMessages: Message[] = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');

    // Generate smart response based on query
    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = "I've analyzed your question across 55+ Indian bank guidelines.";
      let actionText: string | undefined = 'Request Free Advisory';
      let actionType: 'consult' | 'compare' | 'calc' = 'consult';

      if (lower.includes('rate') || lower.includes('interest') || lower.includes('bank') || lower.includes('compare')) {
        responseText = 'Current market rates range from 8.35% to 9.75% depending on whether you are salaried or self-employed. We can compare processing fee waivers across all 55+ lenders instantly.';
        actionText = 'View Live Comparison Table';
        actionType = 'compare';
      } else if (lower.includes('emi') || lower.includes('calc') || lower.includes('eligib')) {
        responseText = 'Your EMI depends on loan amount, tenure, and benchmark rate. For instance, a ₹50 Lakh loan at 8.35% for 20 years gives an EMI of approximately ₹42,918/month.';
        actionText = 'Test Different Tenures & EMIs';
        actionType = 'calc';
      } else if (lower.includes('cibil') || lower.includes('score')) {
        responseText = 'A CIBIL score of 750+ qualifies for the best prime rate bands (8.35%–8.55%). If your score is between 650–749, special NBFC programs and balance transfer options are still available without upfront penalties.';
        actionText = 'Check Special Rate Eligibility';
        actionType = 'consult';
      } else {
        responseText = 'Our certified HomeLens loan officer can verify your documents at your doorstep and secure the lowest available interest rate with zero consultation fees.';
        actionText = 'Request Free Doorstep Advisory';
        actionType = 'consult';
      }

      setMessages([...newMessages, { sender: 'ai', text: responseText, actionText, actionType }]);
    }, 600);
  };

  const handleActionClick = (actionType?: 'consult' | 'compare' | 'calc') => {
    if (actionType === 'compare') {
      onOpenComparison();
    } else if (actionType === 'calc') {
      onOpenCalculators();
    } else {
      onOpenConsultation();
    }
    setIsOpen(false);
  };

  const widgetWhatsAppUrl = buildWhatsAppRedirectUrl({
    message: 'Hello, I was chatting with home-L AI on HomeLens and need assistance from a loan specialist.',
  });

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Popover Window with White Background and Black Framing */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] bg-white border-2 border-black rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden text-left animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#f8f9fc] border-b-2 border-black flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white border-2 border-black flex items-center justify-center text-[#2563eb] shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-black">ask home-L Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <span className="text-[10px] text-gray-600 font-bold">55+ Bank Underwriting Desk</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-500 hover:text-black border border-transparent hover:border-black transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick WhatsApp Pill in Widget Header */}
          <div className="px-3 py-1.5 bg-[#eff6ff] border-b border-black flex items-center justify-between text-[11px]">
            <span className="font-bold text-gray-700">Official Desk:</span>
            <div className="flex items-center gap-2">
              <a href={widgetWhatsAppUrl} target="_blank" rel="noreferrer" className="text-[#25d366] hover:opacity-80 font-black flex items-center gap-1">
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 bg-gray-50 border-b-2 border-black flex gap-1.5 overflow-x-auto">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp.label)}
                className="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap bg-white hover:bg-gray-100 border border-black text-black transition-colors cursor-pointer shadow-xs"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="p-4 space-y-3 max-h-[280px] overflow-y-auto bg-white">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed border-2 border-black shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-[#eff6ff] text-black font-semibold'
                      : 'bg-[#fff0f3] text-black font-medium'
                  }`}
                >
                  {m.text}
                </div>
                {m.actionText && (
                  <button
                    onClick={() => handleActionClick(m.actionType)}
                    className="mt-1.5 inline-flex items-center gap-1 px-3 py-1 rounded-xl text-[10px] font-black text-white bg-black hover:bg-gray-800 border border-black transition-all cursor-pointer shadow-sm uppercase tracking-wider"
                  >
                    <span>{m.actionText}</span>
                    <ArrowRight className="w-3 h-3 text-[#fae49d]" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-gray-50 border-t-2 border-black flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rates, CIBIL, eligibility..."
              className="flex-1 px-3 py-2 rounded-xl bg-white border-2 border-black text-xs text-black placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-black hover:bg-gray-800 text-white border-2 border-black transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 border-2 border-black shadow-[0_10px_25px_rgba(0,0,0,0.18)] flex items-center gap-2.5 transition-all duration-200 cursor-pointer"
      >
        <div className="w-7 h-7 rounded-full bg-[#eff6ff] border border-black flex items-center justify-center">
          <Bot className="w-4 h-4 text-[#2563eb]" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-black text-black">
          <span>ask home-L</span>
          <Sparkles className="w-3 h-3 text-[#b48835]" />
        </div>
      </button>
    </div>
  );
};

