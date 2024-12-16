import React from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from './Background/ParticleCanvas';
import GradientOverlay from './Background/GradientOverlay';
import Title from './Content/Title';
import Description from './Content/Description';
import Actions from './Content/Actions';

interface HeroProps {
  onChatClick: () => void;
}

export default function Hero({ onChatClick }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <ParticleCanvas />
      <GradientOverlay />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[100px] animate-pulse-slow" />
          
          <div className="relative space-y-8">
            <Title />
            <Description />
            <Actions onChatClick={onChatClick} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}