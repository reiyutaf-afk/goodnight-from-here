'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import { COLORS } from '@/utils/constants';
import { useLights } from '@/hooks/useLights';

export default function LeaveALightOn() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { lights, addLight } = useLights();
  const [showMessage, setShowMessage] = useState(false);
  const [canvasLights, setCanvasLights] = useState<{ x: number; y: number }[]>([]);

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

    // Convert stored lights to canvas coordinates
    const convertedLights = lights.map((light) => ({
      x: (light.x / window.innerWidth) * canvas.width,
      y: (light.y / window.innerHeight) * canvas.height,
    }));
    setCanvasLights(convertedLights);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sky
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, COLORS.night.deep);
      gradient.addColorStop(1, COLORS.night.darker);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stored lights
      canvasLights.forEach((light, index) => {
        const pulse = Math.sin((Date.now() * 0.002) + index) * 0.3 + 0.7;
        ctx.fillStyle = `${COLORS.accent.gold}${Math.floor(pulse * 200).toString(16)}`;
        ctx.beginPath();
        ctx.arc(light.x, light.y, 8 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.fillStyle = `${COLORS.accent.gold}40`;
        ctx.beginPath();
        ctx.arc(light.x, light.y, 20 * pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasLights]);

  const handleLeaveLight = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.2;

    addLight(x, y);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <Section id="leave-a-light-on" className="py-32 flex flex-col items-center justify-center">
      <div ref={containerRef} className="max-w-4xl mx-auto w-full px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-center mb-12"
          style={{ color: COLORS.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Leave a Light On
        </motion.h2>

        {/* Canvas showing lights */}
        <motion.div
          className="mb-12 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-64 md:h-80"
          />
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={handleLeaveLight}
            className="px-8 py-4 rounded-lg font-display text-lg transition-all duration-300"
            style={{
              color: COLORS.night.darker,
              backgroundColor: COLORS.accent.gold,
              border: `2px solid ${COLORS.accent.gold}`,
            }}
            whileHover={{
              boxShadow: `0 0 20px ${COLORS.accent.gold}`,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Leave a Light On
          </motion.button>

          {/* Confirmation message */}
          <AnimatePresence>
            {showMessage && (
              <motion.p
                className="text-center text-sm md:text-base"
                style={{ color: COLORS.accent.rose }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✦ Light stored on this device
              </motion.p>
            )}
          </AnimatePresence>

          {/* Explanation */}
          <motion.p
            className="text-center text-sm md:text-base max-w-md"
            style={{ color: COLORS.text.secondary }}
          >
            This light is stored only on this device,
            <br />
            but tonight that feels close enough.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
