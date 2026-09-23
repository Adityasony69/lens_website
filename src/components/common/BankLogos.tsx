import React from 'react';

interface BankLogoProps {
  bankName: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BankLogo: React.FC<BankLogoProps> = ({
  bankName,
  className = '',
  size = 'md',
  showText = true,
}) => {
  const norm = bankName.toLowerCase();

  // Dimensions based on size
  const heightClass = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8';

  // 1. STATE BANK OF INDIA (SBI) - EXACT Cyan keyhole circle + Navy "SBI BANK" text
  if (norm.includes('state bank') || norm.includes('sbi')) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 220 50" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cyan Keyhole Emblem */}
          <circle cx="25" cy="25" r="21" fill="#00a1e4" />
          <circle cx="25" cy="25" r="7" fill="#ffffff" />
          <rect x="23" y="25" width="4" height="15" fill="#ffffff" />
          {/* Bold Navy "SBI BANK" Wordmark */}
          {showText && (
            <text x="56" y="34" fontFamily="Arial, Helvetica, sans-serif" fontSize="21" fontWeight="900" fill="#280071" letterSpacing="0">
              SBI BANK
            </text>
          )}
        </svg>
      </div>
    );
  }

  // 2. HDFC BANK - EXACT Blue bar with white text + red/white cross emblem on left from user image
  if (norm.includes('hdfc')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <svg viewBox="0 0 210 45" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue Container Bar */}
          <rect width="210" height="45" rx="3" fill="#004c8f" />
          {/* Red Square Emblem with White Cross & Blue Center */}
          <rect x="8" y="6.5" width="32" height="32" fill="#ed1c24" />
          <rect x="18.5" y="10.5" width="11" height="24" fill="#ffffff" />
          <rect x="12" y="17" width="24" height="11" fill="#ffffff" />
          <rect x="18.5" y="17" width="11" height="11" fill="#004c8f" />
          {/* White Bold "HDFC BANK" Text */}
          {showText && (
            <text x="48" y="31" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="#ffffff" letterSpacing="0.5">
              HDFC BANK
            </text>
          )}
        </svg>
      </div>
    );
  }

  // 3. ICICI BANK - EXACT Orange/Red Flame 'i' Oval + Royal Navy Italics "ICICI Bank"
  if (norm.includes('icici')) {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <svg viewBox="0 0 225 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange/Red Flame 'i' Oval Icon */}
          <ellipse cx="24" cy="24" rx="20" ry="20" fill="url(#iciciGrad)" />
          <path d="M22 13 C22 10.5 24 10.5 25 10.5 C26 10.5 28 10.5 28 13 C28 15.5 26 15.5 25 15.5 C24 15.5 22 15.5 22 13 Z" fill="#ffffff" />
          <path d="M22 18 L26 18 C28 18 29 20 28 23 L24 33 C23 35.5 25 36 27 35 L26 37 C22 39 19 36 21 32 L24 22 C24.5 20 23.5 19.5 22 19.5 Z" fill="#ffffff" />
          {/* Navy Blue Italics "ICICI Bank" Wordmark with ample viewBox room */}
          {showText && (
            <text x="52" y="33" fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic" fontSize="22" fontWeight="900" fill="#003366">
              ICICI Bank
            </text>
          )}
          <defs>
            <linearGradient id="iciciGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f37024" />
              <stop offset="100%" stopColor="#b02a30" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // 4. AXIS BANK - EXACT Maroon Triangle + "AXIS BANK"
  if (norm.includes('axis')) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 215 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Axis Bank Maroon Triangle Polygon Icon */}
          <path d="M22 6 L4 36 L16 36 L27 18 L22 6 Z" fill="#97144d" />
          <path d="M24 23 L31 36 L43 36 L34 23 L24 23 Z" fill="#97144d" />
          {/* Maroon "AXIS BANK" Text */}
          {showText && (
            <text x="48" y="32" fontFamily="Arial, Helvetica, sans-serif" fontSize="19" fontWeight="900" fill="#97144d" letterSpacing="0.5">
              AXIS BANK
            </text>
          )}
        </svg>
      </div>
    );
  }

  // 5. KOTAK MAHINDRA BANK - EXACT Red Background + Infinity 'k' Emblem + White "kotak BANK"
  if (norm.includes('kotak')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <svg viewBox="0 0 215 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red Background Banner */}
          <rect width="215" height="48" rx="4" fill="#ed1c24" />
          {/* Dark Navy Circular Emblem with White Infinity Loop */}
          <circle cx="26" cy="24" r="17" fill="#001844" />
          {/* Red Vertical Stroke inside Infinity */}
          <rect x="24.5" y="11" width="3" height="26" fill="#ed1c24" />
          {/* White Infinity 'k' Curves */}
          <path d="M26 24 C21 18, 14 19, 14 24 C14 29, 21 30, 26 24 C31 18, 38 19, 38 24 C38 29, 31 30, 26 24 Z" stroke="#ffffff" strokeWidth="3.5" fill="none" />
          {/* Bold White "kotak BANK" Text */}
          {showText && (
            <>
              <text x="50" y="32" fontFamily="Arial, Helvetica, sans-serif" fontSize="21" fontWeight="900" fill="#ffffff" letterSpacing="-0.5">
                kotak
              </text>
              <text x="110" y="32" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="900" fill="#ffffff" letterSpacing="1">
                BANK
              </text>
              <circle cx="196" cy="18" r="4" stroke="#ffffff" strokeWidth="1" fill="none" />
              <text x="194" y="20.5" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#ffffff">R</text>
            </>
          )}
        </svg>
      </div>
    );
  }

  // 6. BANK OF BARODA - EXACT Orange Sun Symbol + Hindi/English Text + Vijaya/Dena from user image
  if (norm.includes('baroda') || norm.includes('bob')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <svg viewBox="0 0 210 52" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange Dual B Baroda Sun Rays Symbol */}
          <g transform="translate(6, 6)">
            {/* Radiant Sunrays */}
            <path d="M2 36 C10 15, 25 5, 34 2 C28 10, 24 20, 22 36 Z" fill="#f26522" />
            <path d="M6 37 C15 20, 30 11, 38 7 C31 16, 27 25, 26 37 Z" fill="#f26522" />
            <path d="M11 38 C20 25, 35 18, 42 14 C36 22, 32 30, 31 38 Z" fill="#f26522" />
            <path d="M17 38 C26 29, 39 24, 45 22 C39 28, 36 34, 35 38 Z" fill="#f26522" />
            {/* Main Outer B arcs */}
            <path d="M27 38 C32 38, 45 34, 45 26 C45 19, 37 17, 30 17 L25 17 L25 38 Z" fill="#f26522" />
            <path d="M25 38 C32 38, 47 38, 47 28 C47 20, 38 18, 28 18" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          </g>

          {showText && (
            <g transform="translate(58, 4)">
              {/* Hindi Header Text */}
              <text x="0" y="14" fontFamily="'Noto Sans Devanagari', 'Mangal', Arial, sans-serif" fontSize="13" fontWeight="900" fill="#f26522">
                बैंक ऑफ़ बड़ौदा
              </text>
              {/* English Bank of Baroda */}
              <text x="0" y="27" fontFamily="Arial, Helvetica, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill="#f26522">
                Bank of Baroda
              </text>
              {/* Vijaya and Dena Box Subtags */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="34" height="12" fill="#ed1c24" rx="1" />
                <text x="3" y="9" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#ffffff">विजया</text>
                <rect x="35" y="0" width="36" height="12" fill="#fff200" rx="1" />
                <text x="38" y="9" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#ed1c24">VIJAYA</text>
                <rect x="73" y="0" width="40" height="12" fill="#002d62" rx="1" />
                <text x="76" y="9" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#ffffff">देना DENA</text>
              </g>
            </g>
          )}
        </svg>
      </div>
    );
  }

  // 7. PUNJAB NATIONAL BANK (PNB) - EXACT Maroon & Yellow Box Dual Emblem + "pnb BANK"
  if (norm.includes('punjab') || norm.includes('pnb')) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <svg viewBox="0 0 220 50" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Maroon Box with Yellow Emblem */}
          <rect x="2" y="5" width="40" height="40" rx="9" fill="#a20b36" />
          <circle cx="22" cy="21" r="7" fill="#fec10d" />
          <path d="M10 18 C10 18 17 14 20 25 C22 32 25 35 32 34 L32 39 C22 41 15 35 15 28 C15 24 12 24 10 24 Z" fill="#fec10d" />
          {/* Yellow Box with Maroon "pnb BANK" Wordmark */}
          {showText && (
            <>
              <rect x="44" y="5" width="170" height="40" rx="9" fill="#fec10d" />
              <text x="52" y="29" fontFamily="Arial, Helvetica, sans-serif" fontSize="22" fontWeight="900" fill="#a20b36" letterSpacing="-1">
                pnb
              </text>
              <text x="96" y="29" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" fill="#a20b36" letterSpacing="0.5">
                BANK
              </text>
              <text x="52" y="41" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" fontWeight="bold" fill="#a20b36" letterSpacing="0.5">
                PUNJAB NATIONAL BANK
              </text>
            </>
          )}
        </svg>
      </div>
    );
  }

  // 8. CANARA BANK
  if (norm.includes('canara')) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 200 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Canara Bank Dual Interlocking Triangles */}
          <polygon points="12,6 30,38 4,38" fill="#0091d0" />
          <polygon points="26,6 44,38 18,38" fill="#fdb813" opacity="0.9" />
          {showText && (
            <g transform="translate(48, 14)">
              <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="900" fill="#0091d0">
                Canara Bank
              </text>
            </g>
          )}
        </svg>
      </div>
    );
  }

  // 9. UNION BANK OF INDIA
  if (norm.includes('union bank')) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 200 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red & Blue Interlocking U's */}
          <path d="M10 8 L10 26 C10 34, 18 38, 25 38 C32 38, 40 34, 40 26 L40 8 L33 8 L33 25 C33 29, 29 31, 25 31 C21 31, 17 29, 17 25 L17 8 Z" fill="#e31b23" />
          <path d="M22 14 L22 28 C22 34, 28 38, 34 38 C40 38, 46 34, 46 28 L46 14 L41 14 L41 27 C41 30, 38 32, 34 32 C30 32, 27 30, 27 27 L27 14 Z" fill="#005a9c" />
          {showText && (
            <text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="900" fill="#005a9c">
              Union Bank
            </text>
          )}
        </svg>
      </div>
    );
  }

  // 10. LIC HOUSING FINANCE
  if (norm.includes('lic')) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 230 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="24" r="18" fill="#00529b" />
          <path d="M12 28 C16 32, 28 32, 32 28 C30 24, 22 20, 22 14 C22 20, 14 24, 12 28 Z" fill="#fdb813" />
          {showText && (
            <g transform="translate(46, 11)">
              <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="#00529b">
                LIC HFL BANK PARTNER
              </text>
              <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#000000">
                Housing Finance Ltd
              </text>
            </g>
          )}
        </svg>
      </div>
    );
  }

  // 11. BAJAJ HOUSING FINANCE
  if (norm.includes('bajaj')) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg viewBox="0 0 220 48" className={`${heightClass} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="24" r="18" fill="#00529b" />
          <path d="M14 20 L22 14 L30 20 L22 26 Z" fill="#ffffff" />
          <path d="M14 28 L22 22 L30 28 L22 34 Z" fill="#ffffff" />
          {showText && (
            <g transform="translate(46, 12)">
              <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="#00529b">
                BAJAJ HFL BANK
              </text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="bold" fill="#555555">
                Housing Finance
              </text>
            </g>
          )}
        </svg>
      </div>
    );
  }

  // Default fallback with clear bold initials and high-contrast badge
  const displayName = bankName.toLowerCase().includes('bank') ? bankName : `${bankName} Bank`;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-xl bg-black border-2 border-black flex items-center justify-center text-[#fae49d] font-black text-xs shrink-0 shadow-xs">
        {bankName.charAt(0)}
      </div>
      {showText && (
        <span className="font-black text-black text-xs whitespace-nowrap">
          {displayName}
        </span>
      )}
    </div>
  );
};
