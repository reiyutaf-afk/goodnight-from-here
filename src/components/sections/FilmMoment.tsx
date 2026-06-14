'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import GlassCard from '@/components/ui/GlassCard';
import { COLORS } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function FilmMoment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              end: 'center center',
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="film-moment" className="flex flex-col items-center gap-16 py-32">
      <div ref={containerRef} className="relative w-full max-w-2xl">
        {/* Video placeholder with film aesthetic */}
        <motion.div
          ref={videoRef}
          className="relative w-full aspect-video rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center text-center px-8"
            style={{
              background: `linear-gradient(135deg, ${COLORS.night.deep}, ${COLORS.night.darker})`,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' seed=\'2\' /%3E%3CfeColorMatrix type=\'saturate\' values=\'0\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' fill=\'%23070912\' opacity=\'0.15\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
            }}
          >
            <div className="text-accent-gold text-opacity-50">
              <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <p className="text-sm">A moment frozen in time</p>
            </div>
          </div>

          {/* Film grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'8\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' fill=\'%23000\' filter=\'url(%23noise)\' opacity=\'0.4\' /%3E%3C/svg%3E")',
            }}
          />
        </motion.div>
      </div>

      {/* Text below video */}
      <motion.div
        ref={textRef}
        className="text-center max-w-xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.3 }}
      >
        <p className="font-body text-lg md:text-xl" style={{ color: COLORS.text.secondary }}>
          Every night, I fall asleep like this...
        </p>
        <p className="font-display text-2xl md:text-3xl mt-4" style={{ color: COLORS.accent.rose }}>
          ...wishing it was you.
        </p>
      </motion.div>
    </Section>
  );
}
