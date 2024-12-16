import { useState } from 'react';
import { SOUND_SETTINGS } from '../constants';

export function useSoundEffects(isMuted: boolean) {
  const [hoverSound] = useState(() => {
    const audio = new Audio(SOUND_SETTINGS.EFFECTS.HOVER.URL);
    audio.volume = SOUND_SETTINGS.EFFECTS.HOVER.VOLUME;
    return audio;
  });

  const [clickSound] = useState(() => {
    const audio = new Audio(SOUND_SETTINGS.EFFECTS.CLICK.URL);
    audio.volume = SOUND_SETTINGS.EFFECTS.CLICK.VOLUME;
    return audio;
  });

  const playSound = (sound: HTMLAudioElement) => {
    if (!isMuted) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  };

  return {
    playHover: () => playSound(hoverSound),
    playClick: () => playSound(clickSound)
  };
}