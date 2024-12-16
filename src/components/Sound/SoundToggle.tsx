import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from './SoundContext';

export default function SoundToggle() {
  const { isMuted, toggleMute, playHover, playClick } = useSound();

  const handleClick = () => {
    playClick();
    toggleMute();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={playHover}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 group"
      aria-label={isMuted ? 'Enable sound' : 'Disable sound'}
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isMuted ? 'Enable sound' : 'Disable sound'}
      </div>
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-white" />
      ) : (
        <Volume2 className="w-6 h-6 text-white animate-pulse-slow" />
      )}
    </button>
  );
}