import React, { useState, useCallback } from 'react';
import VideoContainer from './VideoContainer';
import VideoControls from './VideoControls';
import VideoError from './VideoError';
import VideoLoading from './VideoLoading';
import { useVideoData } from '../../../hooks/useVideoData';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const { data, loading, error, retry } = useVideoData(videoId);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleRetry = useCallback(() => {
    setIsPlaying(false);
    retry();
  }, [retry]);

  if (loading) {
    return <VideoLoading />;
  }

  if (error) {
    return <VideoError message={error} onRetry={handleRetry} />;
  }

  return (
    <VideoContainer>
      {!isPlaying ? (
        <VideoControls
          thumbnailUrl={data?.thumbnail_large}
          title={title}
          onPlay={handlePlay}
        />
      ) : (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}
    </VideoContainer>
  );
}