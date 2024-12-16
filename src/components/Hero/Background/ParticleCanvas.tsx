import React, { useEffect, useRef } from 'react';
import { useParticleAnimation } from '../hooks/useParticleAnimation';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useParticleAnimation(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'linear-gradient(to bottom right, #0B2447, #19376D, #576CBC)' }}
    />
  );
}