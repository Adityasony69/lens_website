import React, { useRef, useState } from 'react';

interface InteractiveHoverCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number; // how far forward it comes
  onClick?: () => void;
}

export const InteractiveHoverCard: React.FC<InteractiveHoverCardProps> = ({
  children,
  className = '',
  depth = 35,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor position from -1 to 1 relative to center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    // Gentle natural micro-tilt (subtle and stable, not hyper-animated)
    const maxTilt = 4; // degrees (restrained, grounded)
    setRotateX(-yPct * maxTilt);
    setRotateY(xPct * maxTilt);
    const distanceFromCenter = Math.sqrt(xPct * xPct + yPct * yPct);
    const zOffset = Math.min(depth * 0.35, 12) * (1 - Math.min(distanceFromCenter * 0.25, 0.4));
    setTranslateZ(zOffset);

    // Glare highlight
    setGlarePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTranslateZ(depth);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setTranslateZ(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="inline-block transition-transform duration-200"
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 0.08s ease-out, box-shadow 0.2s ease-out'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease-out',
        }}
        className={`relative will-change-transform ${className}`}
      >
        {/* Subtle Specular Glare Follows Cursor */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(250, 228, 157, ${glarePosition.opacity}) 0%, transparent 65%)`,
          }}
        />

        {/* Content with 3D Pop */}
        <div style={{ transform: 'translateZ(15px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
