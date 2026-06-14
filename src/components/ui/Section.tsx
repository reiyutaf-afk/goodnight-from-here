'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
