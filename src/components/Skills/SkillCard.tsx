import React from 'react';
import type { Skill } from '../../data/skills-data';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl blur-xl animate-pulse-glow`} />
      
      <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-card">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: skill.color }}
          >
            <skill.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="font-semibold mb-2 text-white group-hover:text-primary-light transition-colors">
            {skill.name}
          </h3>
          <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden mb-4">
            <div
              className="h-2.5 rounded-full transition-all duration-1000 animate-shimmer"
              style={{
                width: `${skill.percentage}%`,
                backgroundColor: skill.color
              }}
            />
          </div>
          <div className="text-sm text-white/80 mt-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {skill.technologies.map((tech, index) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer hover:text-white"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(tech.url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}