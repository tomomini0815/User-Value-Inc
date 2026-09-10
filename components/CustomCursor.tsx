import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'pointer' | 'text'>('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      const isText = target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2';

      if (isLink || isButton) {
        setIsHovering(true);
        setHoverType('pointer');
      } else if (isInput) {
        setIsHovering(true);
        setHoverType('text');
      } else {
        setIsHovering(false);
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Ambient Orb Ripple Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-400/20 blur-md pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1.2,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8] pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 22,
          height: isHovering ? 56 : 22,
          borderColor: isHovering ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0.35)',
          backgroundColor: isHovering ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(56, 189, 248, 0.3)' : 'none',
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />
    </>
  );
};

export default CustomCursor;