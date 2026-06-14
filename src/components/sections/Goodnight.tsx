'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import Star from '@/components/ui/Star';
import { COLORS } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Goodnight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<{ x: number; y: number }[]>([]);
  const shootingStarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate stars
    starsRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.7,
    }));
  }, []);

  useEffect(() => {
    if (!shootingStarRef.current) return;

    const ctx = gsap.context(() => {
      // Shooting star animation
      gsap.to(shootingStarRef.current, {
        x: window.innerWidth + 100,
        y: window.innerHeight * 0.2,
        duration: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="goodnight" className="relative py-32">
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
            size={Math.random() * 2 + 1}
            delay={Math.random() * 1}
            opacity={0.6}
          />
        ))}
      </div>

      {/* Shooting star */}
      <motion.div
        ref={shootingStarRef}
        className="absolute w-1 h-1 pointer-events-none"
        initial={{ x: -50, y: window.innerHeight * 0.1, opacity: 1 }}
        style={{
          background: COLORS.accent.gold,
          boxShadow: `0 0 20px ${COLORS.accent.gold}`,
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <motion.h2
          className="font-display text-5xl md:text-7xl font-light mb-8"
          style={{ color: COLORS.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Goodnight
        </motion.h2>

        <motion.p
          className="font-body text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: COLORS.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          No matter how far apart we are,
          <br />
          goodnight will always find its way to you.
        </motion.p>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-display text-2xl md:text-3xl" style={{ color: COLORS.accent.rose }}>
            Happy Anniversary.
          </p>
          <p className="font-mono text-lg" style={{ color: COLORS.accent.gold }}>
            August 23.
          </p>
        </motion.div>

        {/* Read Again button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-12 px-6 py-3 rounded-lg font-display text-base transition-all duration-300"
          style={{
            color: COLORS.night.darker,
            backgroundColor: COLORS.accent.gold,
            border: `2px solid ${COLORS.accent.gold}`,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.6 }}
          whileHover={{
            boxShadow: `0 0 20px ${COLORS.accent.gold}`,
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Read Again
        </motion.button>
      </div>
    </Section>
  );
}
