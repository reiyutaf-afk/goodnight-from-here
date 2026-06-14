'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/utils/constants';

interface StarProps {
  x: number;
  y: number;
  size?: number;
  delay?: number;
  opacity?: number;
  interactive?: boolean;
}

export default function Star({
  x,
  y,
  size = 2,
  delay = 0,
  opacity = 0.8,
  interactive = false,
}: StarProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const distance = interactive
    ? Math.sqrt(
        Math.pow(mousePosition.x - x, 2) + Math.pow(mousePosition.y - y, 2)
      )
    : 0;

  const influence = interactive ? Math.max(0, 1 - distance / 200) : 0;
  const offsetX = influence * Math.cos(Math.atan2(y - mousePosition.y, x - mousePosition.x)) * 20;
  const offsetY = influence * Math.sin(Math.atan2(y - mousePosition.y, x - mousePosition.x)) * 20;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-auto cursor-pointer"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: COLORS.accent.gold,
        boxShadow: `0 0 ${8 + influence * 8}px ${COLORS.accent.gold}`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: opacity + influence * 0.2,
        x: offsetX,
        y: offsetY,
      }}
      transition={{
        delay,
        duration: 0.8,
        x: { duration: 0.3 },
        y: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    />
  );
}
