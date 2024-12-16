import React from 'react';
import { ProjectCategory } from '../../types/portfolio';

interface CategoryFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all ${
            activeCategory === category
              ? 'bg-white text-[#1E3D59]'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}