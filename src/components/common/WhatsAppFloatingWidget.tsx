import React, { useState } from 'react';
import { MessageSquareText, X, Send, CheckCheck, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_PHONE_FORMATTED } from '../../lib/contact';

interface WhatsAppFloatingWidgetProps {
  onOpenCalculator?: () => void;
  onOpenComparison?: () => void;
}

export const WhatsAppFloatingWidget: React.FC<WhatsAppFloatingWidgetProps> = ({
  onOpenCalculator,
  onOpenComparison,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hasUnread, setHasUnread] = useState(true);

  const quickPrompts = [
    'Lowest home loan rate today?',
    'I want to check my eligibility',
    'Request doorstep document pickup',
    'How much can I save on Balance Transfer?',
  ];

  const handleLaunchWhatsApp = (customText?: string) => {
    const textToSend = customText || message || 'Hello HomeLens Team, I need assistance with a home loan.';
    const encoded = encodeURIComponent(textToSend);
    const url = `https://wa.me/91${OFFICIAL_PHONE}?text=${encoded}`;
    window.open(url, '_blank');
    setMessage('');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popover Box */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] bg-white border-2 border-black rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden text-left animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#075e54] text-white border-b-2 border-black flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center p-1 overflow-hidden shadow-xs">
                  <div className="w-full h-full bg-[#128c7e] rounded-full flex items-center justify-center text-white font-black text-sm">
                    HL
                  </div>
                </div>
                {/* Online pulse indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25d366] border-2 border-black" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-black text-white">HomeLens Loan Specialist</h4>
                </div>
                <div className="text-[10px] text-emerald-100 font-semibold flex items-center gap-1">
                  <span>Online</span>
                  <span>•</span>
                  <span>Replies in 5 mins</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-emerald-100 hover:text-white hover:bg-[#128c7e] transition-colors cursor-pointer border border-transparent hover:border-black"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body with subtle WhatsApp-style wallpaper */}
          <div className="p-4 bg-[#efeae2] space-y-3 max-h-[300px] overflow-y-auto">
            {/* Timestamp */}
            <div className="text-center">
              <span className="px-2 py-0.5 rounded-md bg-white/80 border border-gray-300 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Official HomeLens Desk
              </span>
            </div>

            {/* Inbound Agent Bubble */}
            <div className="bg-white border-2 border-black p-3.5 rounded-2xl rounded-tl-none shadow-xs text-xs text-black space-y-1.5 max-w-[90%]">
              <div className="font-black text-[#075e54] text-[11px] flex items-center justify-between">
                <span>Official Loan Advisory Desk</span>
              </div>
              <p className="leading-relaxed font-semibold text-black">
                Namaste! Need assistance comparing 55+ bank interest rates, calculating your EMI, or booking a free doorstep document pickup?
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-neutral-600 font-bold pt-0.5">
                <span>Online</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#34b7f1]" />
              </div>
            </div>

            {/* Notice: Text / WhatsApp Only */}
            <div className="p-2 rounded-xl bg-white border border-black text-[10px] text-black font-black text-center">
              💬 Direct Text &amp; WhatsApp Only
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-black tracking-wider text-black block pl-1">
                Frequently Asked:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLaunchWhatsApp(prompt)}
                    className="text-left px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#eff6ff] text-black text-[11px] font-black border-2 border-black shadow-xs transition-colors cursor-pointer flex items-center justify-between gap-1 w-full"
                  >
                    <span>{prompt}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#25d366] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Box and Direct Launch Footer */}
          <div className="p-3 bg-white border-t-2 border-black space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLaunchWhatsApp();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your loan question..."
                className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border-2 border-black text-xs font-bold text-black placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white border-2 border-black shadow-xs cursor-pointer transition-all shrink-0"
                title="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <button
              onClick={() => handleLaunchWhatsApp()}
              className="w-full py-2.5 px-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black shadow-sm cursor-pointer transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={handleToggle}
        className="relative group p-3.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white border-2 border-black shadow-[0_12px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer flex items-center gap-2.5"
        aria-label="Open WhatsApp Chat with HomeLens"
      >
        {/* Pulsating ripple halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white relative z-10 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.239.771-1.397 1.458-1.942 1.545-.487.078-1.122.112-3.626-.926-2.906-1.206-4.786-4.148-4.931-4.341-.144-.194-1.178-1.567-1.178-2.988 0-1.42.744-2.12.999-2.408.256-.288.56-.36.744-.36.185 0 .371.004.532.012.171.009.4.06.626.603.238.572.812 1.984.883 2.128.071.144.119.312.024.5-.095.188-.143.305-.285.474-.143.168-.302.376-.431.505-.144.144-.294.3-.127.587.167.288.742 1.222 1.592 1.981 1.094.975 2.016 1.278 2.302 1.422.286.144.453.12.62-.072.167-.192.716-.838.907-1.126.19-.288.381-.24.643-.144.262.096 1.666.786 1.952.929.286.144.477.216.548.336.071.12.071.696-.168 1.467z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.143-1.319C8.583 21.493 10.247 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.579 0-3.056-.46-4.305-1.255l-.309-.196-3.197.82.852-3.117-.213-.332A7.95 7.95 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>

        {/* Text Label on larger screens */}
        <span className="hidden sm:inline-block text-xs font-black uppercase tracking-wider relative z-10 pr-1">
          WhatsApp Us
        </span>

        {/* Unread Alert Dot Badge */}
        {hasUnread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#e11d48] border-2 border-white flex items-center justify-center text-[9px] font-black text-white z-20">
            1
          </span>
        )}
      </button>
    </div>
  );
};
