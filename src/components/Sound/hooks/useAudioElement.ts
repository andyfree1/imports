import { useEffect, useRef } from 'react';

interface AudioConfig {
  url: string;
  volume: number;
  loop?: boolean;
}

export function useAudioElement({ url, volume, loop = false }: AudioConfig) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.loop = loop;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [url, volume, loop]);

  return audioRef;
}