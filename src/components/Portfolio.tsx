import React, { useState } from 'react';
import { ProjectCategory } from '../types/portfolio';
import { portfolioProjects } from '../data/portfolio-data';
import ProjectGrid from './Portfolio/ProjectGrid';
import CategoryFilter from './Portfolio/CategoryFilter';
import AISection from './Portfolio/AISection';

const categories: ProjectCategory[] = ['All', 'Video Production', 'AI Projects', 'Sales'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const handleAIProjectClick = () => {
    setActiveCategory('AI Projects');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] animate-gradient" />
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {activeCategory === 'AI Projects' ? (
          <AISection />
        ) : (
          <ProjectGrid
            projects={portfolioProjects}
            category={activeCategory}
            onAIProjectClick={handleAIProjectClick}
          />
        )}
      </div>
    </section>
  );
}