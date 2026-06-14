'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import MemoryCard from '@/components/ui/MemoryCard';
import { COLORS, MEMORIES } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

interface ConstellationStar {
  id: number;
  x: number;
  y: number;
  memory: string;
}

export default function ConstellationOfUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [constellation, setConstellation] = useState<ConstellationStar[]>([]);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  const [drawnLines, setDrawnLines] = useState<number>(0);

  useEffect(() => {
    // Generate constellation points in a heart shape
    const createHeartConstellation = () => {
      const scale = 80;
      const offsetX = 200;
      const offsetY = 150;

      // Heart shape coordinates (normalized)
      const heartShape = [
        [0, 0.3],
        [0.15, 0],
        [0.3, 0],
        [0.4, 0.1],
        [0.5, 0.25],
        [0.6, 0.1],
        [0.7, 0],
        [0.85, 0],
        [1, 0.3],
        [0.85, 0.7],
        [0.5, 1],
        [0.15, 0.7],
      ];

      const stars: ConstellationStar[] = heartShape.map((point, i) => ({
        id: i,
        x: point[0] * scale + offsetX,
        y: point[1] * scale + offsetY,
        memory: MEMORIES[i % MEMORIES.length],
      }));

      setConstellation(stars);
    };

    createHeartConstellation();
  }, []);

  useEffect(() => {
    if (!svgRef.current || constellation.length === 0) return;

    const ctx = gsap.context(() => {
      constellation.forEach((star, index) => {
        gsap.fromTo(
          `#star-${star.id}`,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              end: 'center center',
              scrub: 0.5,
            },
            delay: index * 0.1,
          }
        );
      });

      // Draw lines between stars
      constellation.forEach((star, index) => {
        const nextIndex = (index + 1) % constellation.length;
        const nextStar = constellation[nextIndex];
        const lineId = `line-${index}`;

        const line = document.querySelector(`#${lineId}`) as SVGLineElement;
        if (line) {
          const length = line.getTotalLength();
          gsap.fromTo(
            line,
            { strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'center center',
                end: 'bottom center',
                scrub: 1,
              },
              delay: index * 0.15,
            }
          );
        }
      });
    }, svgRef);

    return () => ctx.revert();
  }, [constellation]);

  return (
    <Section id="constellation" className="flex flex-col items-center py-32">
      <motion.h2
        className="font-display text-4xl md:text-5xl text-center mb-16"
        style={{ color: COLORS.text.primary }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        The Constellation of Us
      </motion.h2>

      {/* Constellation SVG */}
      <div ref={containerRef} className="relative w-full max-w-2xl mx-auto px-4">
        <svg
          ref={svgRef}
          viewBox="0 0 500 400"
          className="w-full h-auto"
          style={{ maxWidth: '500px', margin: '0 auto' }}
        >
          {/* Lines connecting stars */}
          {constellation.map((star, index) => {
            const nextIndex = (index + 1) % constellation.length;
            const nextStar = constellation[nextIndex];
            return (
              <line
                key={`line-${index}`}
                id={`line-${index}`}
                x1={star.x}
                y1={star.y}
                x2={nextStar.x}
                y2={nextStar.y}
                stroke={COLORS.accent.rose}
                strokeWidth="1"
                opacity="0.4"
                strokeDasharray={Math.sqrt(
                  Math.pow(nextStar.x - star.x, 2) + Math.pow(nextStar.y - star.y, 2)
                )}
              />
            );
          })}

          {/* Stars */}
          {constellation.map((star) => (
            <motion.circle
              key={`star-${star.id}`}
              id={`star-${star.id}`}
              cx={star.x}
              cy={star.y}
              r="6"
              fill={COLORS.accent.gold}
              style={{
                filter: `drop-shadow(0 0 8px ${COLORS.accent.gold})`,
                cursor: 'pointer',
              }}
              onClick={() => setSelectedMemory(star.memory)}
              whileHover={{ r: 8 }}
              className="hover:opacity-100 opacity-80 transition-opacity"
            />
          ))}
        </svg>
      </div>

      {/* Memory display */}
      <AnimatePresence>
        {selectedMemory && (
          <MemoryCard
            memory={selectedMemory}
            index={0}
            onClose={() => setSelectedMemory(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
