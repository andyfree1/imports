import React from 'react';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroActions from './HeroActions';

interface HeroContentProps {
  onChatClick: () => void;
}

export default function HeroContent({ onChatClick }: HeroContentProps) {
  return (
    <div className="container relative z-10 mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        {/* Glowing background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[100px] animate-pulse-slow" />
        
        {/* Content container */}
        <div className="text-center relative">
          <HeroTitle />
          <HeroDescription />
          <HeroActions onChatClick={onChatClick} />
        </div>
      </div>
    </div>
  );
}