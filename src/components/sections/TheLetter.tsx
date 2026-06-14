'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import { COLORS, LETTER_TEXT } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function TheLetter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!letterRef.current) return;

    const ctx = gsap.context(() => {
      const lines = letterRef.current?.querySelectorAll('.letter-line');
      if (lines) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
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
    <Section id="the-letter" className="py-32">
      <div ref={containerRef} className="max-w-2xl mx-auto px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-center mb-16"
          style={{ color: COLORS.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          The Letter
        </motion.h2>

        {/* Letter content */}
        <motion.div
          ref={letterRef}
          className="space-y-4 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {LETTER_TEXT.split('\n').filter((line) => line.trim()).map((line, index) => (
            <motion.p
              key={index}
              className={`letter-line ${
                line.includes('Dear') || line.includes('Always') ? 'font-display' : 'font-body'
              }`}
              style={{
                color: line.includes('Dear') || line.includes('Always')
                  ? COLORS.accent.rose
                  : COLORS.text.primary,
                fontStyle: line.includes('always') ? 'italic' : 'normal',
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
