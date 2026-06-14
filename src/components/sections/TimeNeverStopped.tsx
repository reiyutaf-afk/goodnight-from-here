'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import { COLORS, RELATIONSHIP_START } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimeNeverStopped() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<TimeDifference>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateDifference = () => {
      const now = new Date();
      let diff = now.getTime() - RELATIONSHIP_START.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      diff -= years * (1000 * 60 * 60 * 24 * 365.25);

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      diff -= months * (1000 * 60 * 60 * 24 * 30.44);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      const seconds = Math.floor(diff / 1000);

      setTime({ years, months, days, hours, minutes, seconds });
    };

    calculateDifference();
    const interval = setInterval(calculateDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        className="text-2xl md:text-3xl font-mono font-semibold mb-2"
        style={{
          color: COLORS.accent.gold,
          textShadow: `0 0 10px ${COLORS.accent.gold}`,
        }}
        key={value}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <span className="text-sm text-text-secondary uppercase tracking-wider">{label}</span>
    </motion.div>
  );

  return (
    <Section id="time-never-stopped" className="py-32">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-center mb-16"
          style={{ color: COLORS.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Time Never Stopped
        </motion.h2>

        {/* Timer grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 mb-12 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <TimeUnit label="Years" value={time.years} />
          <TimeUnit label="Months" value={time.months} />
          <TimeUnit label="Days" value={time.days} />
          <TimeUnit label="Hours" value={time.hours} />
          <TimeUnit label="Minutes" value={time.minutes} />
          <TimeUnit label="Seconds" value={time.seconds} />
        </motion.div>

        {/* Quote */}
        <motion.p
          className="text-center text-lg md:text-xl px-4"
          style={{ color: COLORS.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          Every second since August 23, 2024,
          <br />
          and somehow I still choose you.
        </motion.p>
      </div>
    </Section>
  );
}
