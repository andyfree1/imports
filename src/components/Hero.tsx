import React, { useEffect, useRef } from 'react';
import { Bot, Code } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = '#A5D7E8';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 215, 232, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(165, 215, 232, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, #0B2447, #19376D, #576CBC)' }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 via-transparent to-primary-dark/50" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Glowing circle behind the title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[100px] animate-pulse-slow" />
          
          <div className="text-center relative">
            <h1 className="text-7xl lg:text-8xl font-bold mb-6 text-white relative">
              <span className="relative inline-block">
                Andrew Freeman
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 blur-sm animate-shimmer" />
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-[#A5D7E8] font-light max-w-2xl mx-auto leading-relaxed">
              Pioneering the intersection of Sales, Technology, and Entertainment through
              <span className="relative inline-block px-2">
                AI Innovation
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A5D7E8]/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center mt-12">
              <a
                href="#portfolio"
                className="group px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Code className="w-5 h-5" />
                <span className="relative z-10">View Portfolio</span>
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-3 bg-[#A5D7E8]/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-[#A5D7E8]/20 transition-all duration-300 flex items-center gap-2 border border-[#A5D7E8]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#A5D7E8]/0 via-[#A5D7E8]/30 to-[#A5D7E8]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Bot className="w-5 h-5" />
                <span className="relative z-10">Chat with AI Assistant</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}