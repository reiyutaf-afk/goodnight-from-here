'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Star from '@/components/ui/Star';
import Section from '@/components/ui/Section';
import { COLORS } from '@/utils/constants';

export default function NightOpens() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const starsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate random stars
    starsRef.current = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.6,
    }));
  }, []);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 2, ease: 'power2.out', delay: 1 }
      );

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 2, ease: 'power2.out', delay: 1.5 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="night-opens" className="relative">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${COLORS.night.deep}, ${COLORS.night.darker})`,
        }}
      >
        {/* Stars */}
        {starsRef.current.map((star, i) => (
          <Star
            key={i}
            x={star.x}
            y={star.y}
            size={Math.random() * 3 + 1}
            delay={Math.random() * 1.5}
            opacity={Math.random() * 0.4 + 0.3}
            interactive={true}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <motion.h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl font-light mb-6"
          style={{ color: COLORS.text.primary }}
        >
          Goodnight, from here.
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl leading-relaxed"
          style={{ color: COLORS.text.secondary }}
        >
          Even from miles away,
          <br />
          there has never been a night
          <br />
          I didn't think of you.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity"
          style={{ color: COLORS.accent.gold }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </Section>
  );
}
