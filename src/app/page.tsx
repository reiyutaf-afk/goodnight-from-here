'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NightOpens from '@/components/sections/NightOpens';
import FilmMoment from '@/components/sections/FilmMoment';
import ConstellationOfUs from '@/components/sections/ConstellationOfUs';
import TimeNeverStopped from '@/components/sections/TimeNeverStopped';
import LongDistance from '@/components/sections/LongDistance';
import LeaveALightOn from '@/components/sections/LeaveALightOn';
import TheLetter from '@/components/sections/TheLetter';
import Goodnight from '@/components/sections/Goodnight';
import AudioToggle from '@/components/ui/AudioToggle';
import { useAudio } from '@/hooks/useAudio';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isPlaying, toggleAudio } = useAudio();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Smooth scroll behavior enhancement
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();

      const scrollAmount = e.deltaY * 0.8;
      container.scrollLeft += scrollAmount;
    };

    // Disable default scroll wheel behavior for horizontal scroll effect if needed
    // container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-night-darker overflow-hidden">
      {/* Audio Toggle */}
      <AudioToggle isPlaying={isPlaying} onToggle={toggleAudio} />

      {/* Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NightOpens />
        <FilmMoment />
        <ConstellationOfUs />
        <TimeNeverStopped />
        <LongDistance />
        <LeaveALightOn />
        <TheLetter />
        <Goodnight />
      </motion.div>
    </div>
  );
}
