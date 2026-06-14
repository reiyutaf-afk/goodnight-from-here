'use client';

import { motion } from 'framer-motion';
import { COLORS } from '@/utils/constants';

interface MemoryCardProps {
  memory: string;
  index: number;
  onClose: () => void;
}

export default function MemoryCard({
  memory,
  index,
  onClose,
}: MemoryCardProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-96 p-8 rounded-2xl backdrop-blur-md border border-accent-gold/20"
        style={{
          backgroundColor: 'rgba(12, 15, 30, 0.95)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.p
          className="text-lg text-center text-text-primary leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {memory}
        </motion.p>

        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.accent.rose }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}
