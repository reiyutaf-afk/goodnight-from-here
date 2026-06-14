import { create } from 'zustand';

interface AudioStore {
  isPlaying: boolean;
  volume: number;
  toggleAudio: () => void;
  setVolume: (volume: number) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  isPlaying: false,
  volume: 0.3,
  toggleAudio: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
}));
