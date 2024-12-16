import React, { createContext, useContext, useState } from 'react';
import { useBackgroundMusic } from './hooks/useBackgroundMusic';
import { useSoundEffects } from './hooks/useSoundEffects';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  pauseBackgroundMusic: () => void;
  resumeBackgroundMusic: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const { pause: pauseMusic, resume: resumeMusic } = useBackgroundMusic(isMuted);
  const { playHover, playClick } = useSoundEffects(isMuted);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <SoundContext.Provider value={{ 
      isMuted, 
      toggleMute, 
      playHover, 
      playClick,
      pauseBackgroundMusic: pauseMusic,
      resumeBackgroundMusic: resumeMusic
    }}>
      {children}
    </SoundContext.Provider>
  );
}

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};