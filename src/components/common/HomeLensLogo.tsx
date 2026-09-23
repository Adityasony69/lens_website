import React from 'react';

interface HomeLensLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  subtitle?: string;
  animated?: boolean;
}

export const HomeLensLogo: React.FC<HomeLensLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  subtitle,
}) => {
  // Dimensions based on size preset
  const sizeMap = {
    sm: { iconWidth: 32, iconHeight: 32, fontSize: 'text-base', tracking: 'tracking-[0.16em]', subSize: 'text-[8px]' },
    md: { iconWidth: 42, iconHeight: 42, fontSize: 'text-xl', tracking: 'tracking-[0.18em]', subSize: 'text-[9px]' },
    lg: { iconWidth: 54, iconHeight: 54, fontSize: 'text-2xl', tracking: 'tracking-[0.2em]', subSize: 'text-[10px]' },
    xl: { iconWidth: 70, iconHeight: 70, fontSize: 'text-3xl', tracking: 'tracking-[0.22em]', subSize: 'text-[11px]' },
    hero: { iconWidth: 96, iconHeight: 96, fontSize: 'text-4xl sm:text-5xl', tracking: 'tracking-[0.22em]', subSize: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Exact Vector Emblem from Brand Logo Photo */}
      <svg
        width={currentSize.iconWidth}
        height={currentSize.iconHeight}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        aria-label="HomeLens Logo Icon"
      >
        <defs>
          {/* Metallic Dark Gold Gradient for Front Face */}
          <linearGradient id="hl-gold-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae49d" />
            <stop offset="25%" stopColor="#d8b25e" />
            <stop offset="60%" stopColor="#b48835" />
            <stop offset="100%" stopColor="#7a5518" />
          </linearGradient>

          {/* Deep Antique Gold for 3D Bevels & Depth Facets */}
          <linearGradient id="hl-gold-deep" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a3792c" />
            <stop offset="50%" stopColor="#785317" />
            <stop offset="100%" stopColor="#4e330a" />
          </linearGradient>

          {/* Specular Highlight for Top Edges */}
          <linearGradient id="hl-gold-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff3cf" />
            <stop offset="50%" stopColor="#d8b25e" />
            <stop offset="100%" stopColor="#a3792c" />
          </linearGradient>
        </defs>

        {/* 1. Left House Outer Shell & Sweeping Base (Gable roof angled upward to right + foundation sweep) */}
        {/* Outer Gable and Left Wall */}
        <path
          d="M 12 118 L 12 84 L 56 46 L 76 63 L 76 74 L 54 55 L 21 83 L 21 110 L 80 110 L 118 116 C 96 118 45 118 12 118 Z"
          fill="url(#hl-gold-main)"
        />

        {/* 2. Lower-left Beveled Architectural Triangle (3D Shadow facet) */}
        <path
          d="M 21 110 L 80 110 C 65 106 48 98 21 88 Z"
          fill="url(#hl-gold-deep)"
          opacity="0.9"
        />

        {/* 3. Three Rising Skyscraper Towers emerging through the roofline */}
        {/* Tower 1 (Left: Medium Height) */}
        <path
          d="M 60 102 L 60 38 L 69 46 L 69 102 Z"
          fill="url(#hl-gold-main)"
        />
        {/* Tower 1 Right Shading Edge */}
        <path
          d="M 68 45 L 70 47 L 70 102 L 68 102 Z"
          fill="url(#hl-gold-deep)"
        />

        {/* Tower 2 (Center: Tallest Tower soaring above the house peak) */}
        <path
          d="M 77 102 L 77 14 L 88 23 L 88 102 Z"
          fill="url(#hl-gold-main)"
        />
        {/* Tower 2 Right Shading Edge */}
        <path
          d="M 87 22 L 89 24 L 89 102 L 87 102 Z"
          fill="url(#hl-gold-deep)"
        />

        {/* Tower 3 (Right: Intermediate / Shorter) */}
        <path
          d="M 96 102 L 96 28 L 107 38 L 107 102 Z"
          fill="url(#hl-gold-main)"
        />
        {/* Tower 3 Right Shading Edge */}
        <path
          d="M 106 37 L 108 39 L 108 102 L 106 102 Z"
          fill="url(#hl-gold-deep)"
        />

        {/* 4. Three Window Squares in Lower-Right (1 top-left, 2 on bottom row) */}
        {/* Top-left window */}
        <rect x="69" y="80" width="10" height="10" rx="1" fill="url(#hl-gold-main)" />
        {/* Bottom-left window */}
        <rect x="69" y="93" width="10" height="10" rx="1" fill="url(#hl-gold-main)" />
        {/* Bottom-right window */}
        <rect x="82" y="93" width="10" height="10" rx="1" fill="url(#hl-gold-main)" />

        {/* 5. Right Wall Outline & Extended Foundation Wing */}
        <path
          d="M 115 62 L 122 68 L 122 104 L 115 104 Z"
          fill="url(#hl-gold-main)"
          opacity="0.95"
        />

        {/* Elegant baseline swoop highlight */}
        <path
          d="M 12 118 C 45 118 95 117 126 113 C 105 110 65 108 12 108 Z"
          fill="url(#hl-gold-highlight)"
          opacity="0.75"
        />
      </svg>

      {/* Exact Typography Wordmark "HOMELENS" Matching the Image */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <span
              className={`font-['Montserrat',sans-serif] font-bold ${currentSize.fontSize} ${currentSize.tracking} text-gold-metallic uppercase leading-none`}
            >
              HOMELENS
            </span>
          </div>
          {subtitle && (
            <span
              className={`font-['Montserrat',sans-serif] font-semibold text-[#a57c2b] tracking-[0.28em] uppercase ${currentSize.subSize} mt-1`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
