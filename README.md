# Goodnight, From Here

A deeply emotional, cinematic, interactive love-letter website that feels like a quiet night shared between two people despite being separated by distance.

## 🌙 Overview

This is not a traditional website—it's a journey through memories, emotions, time, and distance. The entire experience happens within one continuous nighttime world where the user scrolls through an intimate, elegant, and heartfelt narrative.

## ✨ Features

- **Interactive Storytelling**: 8 beautifully crafted sections that unfold as you scroll
- **Cinematic Animations**: Smooth, intentional animations powered by Framer Motion and GSAP
- **Responsive Design**: Mobile-first optimization with full responsiveness
- **Persistent Lights**: Leave a light on that persists using localStorage
- **Relationship Timer**: Real-time counter showing time together
- **Constellation Memory Map**: Interactive heart-shaped constellation with clickable memories
- **Ambient Soundtrack**: Optional background audio for immersion
- **Premium Typography**: Editorial design with Cormorant Garamond, Inter, and JetBrains Mono

## 📋 Sections

1. **The Night Opens** - Stars fade into view with an opening message
2. **The Film Moment** - A cinematic memory unfolds
3. **The Constellation of Us** - Interactive heart-shaped constellation with memories
4. **Time Never Stopped** - Real-time relationship counter
5. **Long Distance** - Animated connection visualization
6. **Leave a Light On** - Interactive light placement on canvas
7. **The Letter** - A heartfelt handwritten message
8. **Goodnight** - Shooting star finale with anniversary message

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Animation**: Framer Motion, GSAP with ScrollTrigger
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Typography**: Custom fonts (Cormorant Garamond, Inter, JetBrains Mono)
- **Canvas**: HTML5 Canvas for particle effects
- **Storage**: localStorage for persistent lights

## 🎨 Design System

### Colors
- **Background**: `#070912`, `#0c0f1e` (midnight tones)
- **Text**: `#efe9dd` (warm parchment)
- **Accent Rose**: `#d9a9a1` (dusty rose)
- **Accent Gold**: `#f0d9a8` (soft gold)
- **Accent Sage**: `#9caf96` (muted sage)

### Typography
- **Display**: Cormorant Garamond (serif, editorial)
- **Body**: Inter Light (clean, readable)
- **Data**: JetBrains Mono (technical elements)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/reiyutaf-afk/goodnight-from-here.git

# Install dependencies
cd goodnight-from-here
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # 8 section components
│   │   ├── NightOpens.tsx
│   │   ├── FilmMoment.tsx
│   │   ├── ConstellationOfUs.tsx
│   │   ├── TimeNeverStopped.tsx
│   │   ├── LongDistance.tsx
│   │   ├── LeaveALightOn.tsx
│   │   ├── TheLetter.tsx
│   │   └── Goodnight.tsx
│   └── ui/                 # Reusable UI components
│       ├── AudioToggle.tsx
│       ├── Star.tsx
│       ├── MemoryCard.tsx
│       ├── Section.tsx
│       └── GlassCard.tsx
├── hooks/                  # Custom React hooks
│   ├── useAudio.ts
│   ├── useLights.ts
│   └── useScrollAnimations.ts
├── store/                  # Zustand state management
│   ├── audioStore.ts
│   └── lightsStore.ts
└── utils/                  # Utilities
    ├── constants.ts        # Colors, dates, text
    └── animations.ts       # Animation configs
```

## 🎬 Animation Details

- **Parallax Stars**: Interactive stars that react to mouse movement
- **Scroll-Triggered Animations**: Constellation draws itself as you scroll
- **Particle Effects**: Animated particles along the distance connection
- **Canvas Animations**: Custom canvas rendering for lights and connections
- **Smooth Transitions**: Fade masks and vignettes for blending

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- **Lighthouse Score**: Target 90+
- **Lazy Loading**: Assets optimized for fast loading
- **Smooth Scrolling**: 60 FPS animations
- **Optimized Canvas**: Efficient particle rendering
- **Responsive Images**: Optimized for all devices

## 📱 Mobile Optimization

- Mobile-first design approach
- Touch-friendly interactions
- Optimized font sizes and spacing
- Responsive canvas elements
- Efficient animations for lower-end devices

## 🔒 Privacy

- Lights are stored only on device via localStorage
- No external tracking or analytics
- All data remains local

## 📝 Customization

### Update Relationship Start Date
Edit `src/utils/constants.ts`:
```typescript
export const RELATIONSHIP_START = new Date('2024-08-23T00:00:00Z');
```

### Update Memories
Edit `src/utils/constants.ts` `MEMORIES` array

### Update Letter Text
Edit `src/utils/constants.ts` `LETTER_TEXT`

### Change Colors
Update the `COLORS` object in `src/utils/constants.ts` or Tailwind theme in `tailwind.config.js`

## 🎵 Audio

Place your ambient soundtrack at `public/audio/ambient.mp3`. The audio toggle in the top-right allows users to play/pause.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to any platform supporting Next.js (Netlify, AWS Amplify, etc.)

## 💡 Best Practices

- Keep animations smooth and intentional
- Test on mobile devices before deployment
- Monitor performance with Lighthouse
- Use the provided component structure for consistency
- Follow the color palette for visual harmony

## 📄 License

Private project

## 💝 Credits

Built with love using modern web technologies. Inspired by award-winning interactive design and cinematic storytelling.

---

**Made with ❤️ for those separated by distance but connected by love.**
