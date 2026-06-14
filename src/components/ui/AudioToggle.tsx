'use client';

import { motion } from 'framer-motion';
import { COLORS } from '@/utils/constants';

interface AudioToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioToggle({ isPlaying, onToggle }: AudioToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-8 right-8 z-50 p-3 rounded-full backdrop-blur-md border border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300 group"
      style={{
        backgroundColor: 'rgba(12, 15, 30, 0.7)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        animate={{ rotate: isPlaying ? 0 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isPlaying ? (
          <svg
            className="w-5 h-5 text-accent-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
            <path d="M12 4a1 1 0 011-1h4a1 1 0 011 1v12a1 1 0 01-1 1h-4a1 1 0 01-1-1V4z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-accent-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        )}
      </motion.div>
      
      <motion.span
        className="absolute top-full mt-2 text-xs whitespace-nowrap text-text-secondary pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </motion.span>
    </motion.button>
  );
}
