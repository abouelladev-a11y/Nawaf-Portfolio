import React from 'react';
import { motion } from 'motion/react';

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-1/4 w-[620px] h-[620px] rounded-full bg-cyan-400/10 blur-[120px]"
        animate={{ x: [0, 80, -30, 0], y: [0, 40, 90, 0], scale: [1, 1.1, .95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-28 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[130px]"
        animate={{ x: [0, -80, 10, 0], y: [0, -30, 70, 0], scale: [1, .9, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[580px] h-[580px] rounded-full bg-blue-600/10 blur-[120px]"
        animate={{ x: [0, 70, 20, 0], y: [0, -60, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
