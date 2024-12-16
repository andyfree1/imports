import React from 'react';

export default function HeroTitle() {
  return (
    <h1 className="text-7xl lg:text-8xl font-bold mb-6 text-white">
      <span className="relative inline-block">
        Andrew Freeman
        <span className="absolute -inset-1 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 blur-sm animate-shimmer" />
      </span>
    </h1>
  );
}