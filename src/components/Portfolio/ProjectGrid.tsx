import React from 'react';
import { Project, ProjectCategory } from '../../types/portfolio';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  category: ProjectCategory;
  onAIProjectClick: () => void;
}

export default function ProjectGrid({ projects, category, onAIProjectClick }: ProjectGridProps) {
  const filteredProjects = projects.filter(
    project => category === 'All' || project.category === category
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {filteredProjects.map((project, index) => (
        <ProjectCard 
          key={`${project.title}-${index}`} 
          project={project}
          onAIProjectClick={onAIProjectClick}
        />
      ))}
    </div>
  );
}