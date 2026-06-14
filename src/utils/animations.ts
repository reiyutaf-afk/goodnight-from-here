export const easeConfigs = {
  smooth: { type: 'spring', damping: 30, stiffness: 100 },
  gentle: { duration: 0.8, ease: 'easeInOut' },
  snappy: { duration: 0.3, ease: 'easeOut' },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
