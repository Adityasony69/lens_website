import React, { useState, useEffect, useRef } from 'react';
import { HomeLensLogo } from './HomeLensLogo';

interface OpeningSplashScreenProps {
  onComplete: () => void;
}

export const OpeningSplashScreen: React.FC<OpeningSplashScreenProps> = ({ onComplete }) => {
  const [isMerging, setIsMerging] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });

  useEffect(() => {
    // 2.2 seconds display + 0.6 second merging animation = 2.8s total (within 2-4s range)
    const mergeTimer = setTimeout(() => {
      setIsMerging(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      setIsCompleted(true);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(mergeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  // Interactive mouse hover parallax on the intro screen
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMerging) return;
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;

    const xRatio = (clientX / clientWidth - 0.5) * 2; // -1 to 1
    const yRatio = (clientY / clientHeight - 0.5) * 2; // -1 to 1

    setTilt({
      rx: -yRatio * 14, // degrees
      ry: xRatio * 14,
      tx: xRatio * 18,  // pixels
      ty: yRatio * 18,
    });
  };

  const handleSkipOrMerge = () => {
    if (isMerging) return;
    setIsMerging(true);
    setTimeout(() => {
      setIsCompleted(true);
      onComplete();
    }, 550);
  };

  if (isCompleted) return null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleSkipOrMerge}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090a0d] cursor-pointer select-none overflow-hidden transition-all duration-700 ease-out ${
        isMerging ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(30, 48, 38, 0.45) 0%, transparent 60%),
          radial-gradient(circle at 85% 20%, rgba(216, 144, 128, 0.14) 0%, transparent 50%),
          radial-gradient(circle at 15% 85%, rgba(229, 193, 88, 0.12) 0%, transparent 50%),
          #090a0d
        `,
      }}
    >
      {/* Subtle blur-moss atmospheric orbs */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-[#1b2b22]/35 blur-[150px] pointer-events-none animate-pulse-halo" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#3d2420]/25 blur-[130px] pointer-events-none -bottom-20 -right-20" />

      {/* Main Hovering Logo Presentation */}
      <div
        style={{
          perspective: 1000,
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* Floating & Tilting Logo Container */}
        <div
          style={{
            transform: isMerging
              ? 'translateY(-140px) scale(0.65) opacity(0)'
              : `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translate(${tilt.tx}px, ${tilt.ty}px)`,
            transformStyle: 'preserve-3d',
            transition: isMerging
              ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out'
              : 'transform 0.15s ease-out',
          }}
          className="relative animate-float-levitate flex flex-col items-center"
        >
          {/* Ambient Gold Glow Halo behind logo */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#c5a059]/20 via-[#fae49d]/25 to-[#d89080]/20 blur-2xl pointer-events-none" />

          {/* Logo Card floating in 3D */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#121419]/90 border border-[#2b2e38] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(197,160,89,0.12)] backdrop-blur-md">
            <HomeLensLogo size="lg" subtitle="FRANCHISE ADVISORY" />
          </div>

          {/* Pure Brand Name in Metallic Gold & Rose Gold */}
          <div className="mt-6 text-center">
            <div className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-gold-metallic font-['Montserrat']">
              HomeLens Realty
            </div>
            <div className="text-[11px] text-[#8f9693] tracking-[0.18em] uppercase mt-1">
              Multi-Bank Mortgage Network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
