import { create } from 'zustand';

interface Light {
  id: string;
  x: number;
  y: number;
  timestamp: number;
}

interface LightsStore {
  lights: Light[];
  addLight: (x: number, y: number) => void;
  loadLights: () => void;
  saveLights: () => void;
}

export const useLightsStore = create<LightsStore>((set, get) => ({
  lights: [],
  
  addLight: (x: number, y: number) => {
    const newLight: Light = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      timestamp: Date.now(),
    };
    set((state) => ({ lights: [...state.lights, newLight] }));
    get().saveLights();
  },
  
  loadLights: () => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('goodnight_lights');
      if (stored) {
        const lights = JSON.parse(stored);
        set({ lights });
      }
    } catch (error) {
      console.error('Failed to load lights:', error);
    }
  },
  
  saveLights: () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('goodnight_lights', JSON.stringify(get().lights));
    } catch (error) {
      console.error('Failed to save lights:', error);
    }
  },
}));
