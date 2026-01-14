import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';

interface SignatureInteractionProps {
  type: 'reveal' | 'hover' | 'smooth-scroll' | 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress';
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  speed = 5
}) => {
  // Marquee Implementation
  if (type === 'marquee') {
    return (
      <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20, // Matches the 20s in original CSS
          }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  // Parallax Implementation
  if (type === 'parallax') {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div style={{ y, height: "120%", width: "100%", position: "absolute", top: "-10%" }}>
          {children}
        </motion.div>
      </div>
    );
  }

  // Hover Implementation
  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  // Default fallback
  return <div className={className}>{children}</div>;
};
