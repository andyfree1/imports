import React from 'react';
import { Project } from '../../types/portfolio';
import VideoPlayer from '../video/VideoPlayer';

interface ProjectCardProps {
  project: Project;
  onAIProjectClick?: () => void;
}

export default function ProjectCard({ project, onAIProjectClick }: ProjectCardProps) {
  const handleClick = () => {
    if (project.title === 'Custom AI Solutions' && onAIProjectClick) {
      onAIProjectClick();
    }
  };

  return (
    <div 
      className={`group glass rounded-xl overflow-hidden hover-card ${
        project.title === 'Custom AI Solutions' ? 'cursor-pointer' : ''
      }`}
      onClick={handleClick}
    >
      {'videoId' in project ? (
        <VideoPlayer videoId={project.videoId} title={project.title} />
      ) : (
        <div className="aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-white/80">{project.description}</p>
      </div>
    </div>
  );
}