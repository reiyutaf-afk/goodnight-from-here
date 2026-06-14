# Goodnight, From Here - Development Guide

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project Structure Overview

### `/src/app`
- Main Next.js app directory
- `layout.tsx`: Root layout with metadata
- `page.tsx`: Main page that orchestrates all sections
- `globals.css`: Global styles and animations

### `/src/components/sections`
Each section is a self-contained component:
1. **NightOpens** - Initial starfield with parallax
2. **FilmMoment** - Video/memory placeholder
3. **ConstellationOfUs** - Interactive heart constellation
4. **TimeNeverStopped** - Live relationship counter
5. **LongDistance** - Canvas-based connection visualization
6. **LeaveALightOn** - Interactive light placement
7. **TheLetter** - Animated letter reveal
8. **Goodnight** - Finale with shooting star

### `/src/components/ui`
Reusable UI components:
- `Section.tsx` - Wrapper for each section
- `Star.tsx` - Interactive star particles
- `MemoryCard.tsx` - Modal for memory display
- `AudioToggle.tsx` - Audio player control
- `GlassCard.tsx` - Frosted glass effect container

### `/src/hooks`
- `useAudio.ts` - Manage audio playback
- `useLights.ts` - Manage persistent lights
- `useScrollAnimations.ts` - GSAP scroll triggers

### `/src/store`
Zustand state management:
- `audioStore.ts` - Audio state
- `lightsStore.ts` - Persistent lights storage

### `/src/utils`
- `constants.ts` - Colors, dates, memories, letter text
- `animations.ts` - Framer Motion configs

## Key Technologies

### Framer Motion
Used for:
- Component entrance animations
- Interactive hover states
- Scroll-triggered reveals

Example:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

### GSAP ScrollTrigger
Used for:
- Complex scroll-based animations
- Constellation drawing
- Parallax effects
- Timeline-based sequences

Example:
```typescript
gsap.fromTo(
  element,
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: container,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
    },
  }
);
```

### Canvas API
Used for:
- Particle effects in LongDistance
- Light visualization in LeaveALightOn
- Custom drawing that's more efficient than DOM

## Customization Guide

### Change Colors
Edit `src/utils/constants.ts`:
```typescript
export const COLORS = {
  night: {
    darker: '#070912', // Change these
    deep: '#0c0f1e',
  },
  // ...
};
```

### Update Relationship Date
```typescript
export const RELATIONSHIP_START = new Date('2024-08-23T00:00:00Z');
```

### Add/Edit Memories
```typescript
export const MEMORIES = [
  '✨ Your memory here',
  '✨ Another memory',
  // ...
];
```

### Change Letter Content
```typescript
export const LETTER_TEXT = `
Your letter here...
`;
```

## Performance Tips

1. **Lazy Load Assets**
   - Images are lazy-loaded by default
   - Audio loads on user interaction

2. **Optimize Animations**
   - Use `will-change` CSS for animated elements
   - Reduce particle count on mobile
   - Profile with Chrome DevTools

3. **Mobile Considerations**
   - Test scroll performance
   - Reduce canvas resolution on smaller screens
   - Keep touch targets at least 44x44px

## Testing

### Browser Compatibility
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Accessibility
- Ensure text contrast meets WCAG AA
- Test keyboard navigation
- Verify screen reader compatibility
- Test with reduced motion settings

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Build Locally
```bash
npm run build
npm run start
```

## Debugging

### Enable Debug Mode
Add `?debug=true` to URL for additional logging

### GSAP Debug
Use `markers: true` in ScrollTrigger config

### Performance Profiling
1. Open Chrome DevTools
2. Go to Performance tab
3. Record scroll interactions
4. Analyze frame rate

## Common Issues

### Audio Won't Play
- Check browser autoplay policy
- Ensure audio file exists at `/public/audio/ambient.mp3`
- Test with user interaction first

### Animations Stuttering
- Reduce particle count
- Use `will-change` CSS property
- Check DevTools Performance tab
- Consider using `transform` instead of `top`/`left`

### Canvas Not Rendering
- Check browser console for errors
- Verify canvas size is set correctly
- Test requestAnimationFrame support

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Docs](https://gsap.com/docs/v3/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)

## Support

For questions or issues:
1. Check existing GitHub issues
2. Create a new issue with details
3. Include browser/device information

---

Happy coding! Remember: this is an art project. Every line of code should serve the emotional narrative.
