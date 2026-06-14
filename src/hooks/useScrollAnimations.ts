'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

game.registerPlugin(ScrollTrigger);

export const useScrollTrigger = () => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const ctx = gsap.context(() => {
      // Trigger setup will be done per component
    });

    return () => ctx.revert();
  }, []);

  return triggerRef;
};

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: (i, target) => {
          return gsap.getProperty(window, 'scrollY') as number * speed * -1;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
};
