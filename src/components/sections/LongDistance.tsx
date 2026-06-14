'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import { COLORS } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function LongDistance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connection line
      const startX = canvas.width * 0.2;
      const startY = canvas.height * 0.5;
      const endX = canvas.width * 0.8;
      const endY = canvas.height * 0.5;

      // Main beam
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, `${COLORS.accent.gold}00`);
      gradient.addColorStop(0.5, COLORS.accent.gold);
      gradient.addColorStop(1, `${COLORS.accent.gold}00`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Pulsing glow
      const pulse = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
      ctx.strokeStyle = `${COLORS.accent.gold}${Math.floor(pulse * 80).toString(16)}`;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Draw particles
      particlesRef.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          particlesRef.current.splice(index, 1);
          return;
        }

        ctx.fillStyle = `${COLORS.accent.rose}${Math.floor(p.life * 255).toString(16)}`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.life, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn new particles
      if (Math.random() > 0.7) {
        const newX = startX + (endX - startX) * Math.random();
        particlesRef.current.push({
          x: newX,
          y: startY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <Section id="long-distance" className="py-32">
      <div ref={containerRef} className="max-w-4xl mx-auto w-full px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-center mb-16"
          style={{ color: COLORS.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Long Distance
        </motion.h2>

        {/* Canvas for connection visualization */}
        <motion.div
          className="mb-12 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-64 md:h-80"
            style={{
              background: `linear-gradient(135deg, ${COLORS.night.deep}, ${COLORS.night.darker})`,
            }}
          />
        </motion.div>

        {/* Quote */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-display text-2xl md:text-3xl" style={{ color: COLORS.accent.rose }}>
            Distance measures miles.
          </p>
          <p className="font-display text-3xl md:text-4xl" style={{ color: COLORS.accent.gold }}>
            Not love.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
