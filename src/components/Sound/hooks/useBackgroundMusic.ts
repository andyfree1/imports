import { useEffect } from 'react';
import { useAudioElement } from './useAudioElement';
import { SOUND_SETTINGS } from '../constants';

export function useBackgroundMusic(isMuted: boolean) {
  const bgMusicRef = useAudioElement({
    url: SOUND_SETTINGS.BACKGROUND_MUSIC.URL,
    volume: SOUND_SETTINGS.BACKGROUND_MUSIC.VOLUME,
    loop: true
  });

  useEffect(() => {
    const bgMusic = bgMusicRef.current;
    if (!bgMusic) return;

    const handleUserInteraction = () => {
      if (!isMuted) {
        bgMusic.play().catch(() => {});
      }
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    if (!isMuted) {
      bgMusic.play().catch(() => {
        // If autoplay fails, we'll wait for user interaction
        console.log('Waiting for user interaction to play audio...');
      });
    } else {
      bgMusic.pause();
    }

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [isMuted]);

  return {
    pause: () => bgMusicRef.current?.pause(),
    resume: () => {
      if (!isMuted) {
        bgMusicRef.current?.play().catch(() => {});
      }
    }
  };
}