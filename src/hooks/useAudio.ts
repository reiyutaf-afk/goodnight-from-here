'use client';

import { useEffect, useRef, useState } from 'react';
import { useAudioStore } from '@/store/audioStore';

export const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const { isPlaying, toggleAudio } = useAudioStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/ambient.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay policy might prevent this
        console.log('Audio autoplay prevented by browser policy');
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, mounted]);

  return {
    isPlaying,
    toggleAudio,
  };
};
