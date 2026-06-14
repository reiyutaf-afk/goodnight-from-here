'use client';

import { motion } from 'framer-motion';
import { COLORS } from '@/utils/constants';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'rose' | 'sage';
}

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
}: GlassCardProps) {
  const variants = {
    default: {
      borderColor: COLORS.accent.gold,
      backgroundColor: 'rgba(12, 15, 30, 0.7)',
    },
    rose: {
      borderColor: COLORS.accent.rose,
      backgroundColor: 'rgba(217, 169, 161, 0.05)',
    },
    sage: {
      borderColor: COLORS.accent.sage,
      backgroundColor: 'rgba(156, 175, 150, 0.05)',
    },
  };

  const style = variants[variant];

  return (
    <motion.div
      className={`backdrop-blur-md border rounded-2xl p-6 ${className}`}
      style={{
        borderColor: style.borderColor,
        backgroundColor: style.backgroundColor,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ borderColor: style.borderColor, scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}
