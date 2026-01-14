import React from 'react';

interface SignatureEffectProps {
  effect: 'text-stroke' | 'neon-glow' | 'glass-panel' | 'gradient-text';
  children: React.ReactNode;
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, children, className = '' }) => {
  let effectClass = '';

  switch (effect) {
    case 'text-stroke':
      // Using Tailwind arbitrary values for webkit-text-stroke
      effectClass = '[-webkit-text-stroke:1px_rgba(255,255,255,0.2)] text-transparent hover:[-webkit-text-stroke:0px] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300';
      break;
    case 'neon-glow':
      effectClass = 'shadow-[0_0_30px_rgba(176,38,255,0.15)]';
      break;
    case 'glass-panel':
      effectClass = 'bg-white/5 backdrop-blur-xl border border-white/10';
      break;
    case 'gradient-text':
      effectClass = 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent';
      break;
  }

  return (
    <div className={`${effectClass} ${className}`}>
      {children}
    </div>
  );
};
