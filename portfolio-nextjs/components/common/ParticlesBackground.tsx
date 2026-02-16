'use client';

import { useTheme } from '@/context/ThemeContext';
import Particles from './Particles';

const LIGHT_COLORS = ['#6366f1', '#8b5cf6', '#a78bfa'];
const DARK_COLORS = ['#ffffff', '#c4b5fd', '#a78bfa'];

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Particles
        key={theme}
        particleCount={1000}
        particleSpread={10}
        speed={0.1}
        particleColors={colors}
        moveParticlesOnHover
        particleHoverFactor={1}
        alphaParticles
        particleBaseSize={100}
        sizeRandomness={1}
        cameraDistance={20}
      />
    </div>
  );
}
