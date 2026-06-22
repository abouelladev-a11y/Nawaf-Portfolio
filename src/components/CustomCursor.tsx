import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 800, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 30 });
  
  const cursorXDelay = useSpring(0, { stiffness: 150, damping: 20 });
  const cursorYDelay = useSpring(0, { stiffness: 150, damping: 20 });
  
  const cursorXDelay2 = useSpring(0, { stiffness: 80, damping: 15 });
  const cursorYDelay2 = useSpring(0, { stiffness: 80, damping: 15 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorXDelay.set(e.clientX);
      cursorYDelay.set(e.clientY);
      cursorXDelay2.set(e.clientX);
      cursorYDelay2.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.tagName.toLowerCase() === 'input' || 
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY, cursorXDelay, cursorYDelay, cursorXDelay2, cursorYDelay2]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glow dot */}
      <motion.div
        className="custom-cursor-layer fixed top-0 left-0 w-3 h-3 bg-[var(--color-cursor)] rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_var(--color-cursor)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1 : 1.5,
          opacity: 1
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Ring 1 */}
      <motion.div
        className="custom-cursor-layer fixed top-0 left-0 w-12 h-12 border-2 border-[var(--color-cursor)] rounded-full pointer-events-none z-[9998] shadow-[0_0_20px_var(--color-cursor-border)]"
        style={{
          x: cursorXDelay,
          y: cursorYDelay,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'var(--color-cursor-border)' : 'transparent',
          borderColor: isHovering ? 'transparent' : 'var(--color-cursor)'
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Ring 2 trailing */}
      <motion.div
        className="custom-cursor-layer fixed top-0 left-0 w-16 h-16 border border-[var(--color-cursor-border)] rounded-full pointer-events-none z-[9997] opacity-50 shadow-[0_0_10px_var(--color-cursor-border)]"
        style={{
          x: cursorXDelay2,
          y: cursorYDelay2,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{ duration: 0.4 }}
      />
    </>
  );
}
