'use client';

import { useEffect } from 'react';
import { useLightsStore } from '@/store/lightsStore';

export const useLights = () => {
  const { lights, loadLights, addLight } = useLightsStore();

  useEffect(() => {
    loadLights();
  }, [loadLights]);

  return {
    lights,
    addLight,
  };
};
