import React from 'react';
import AIIntegrationGrid from './AIIntegrationGrid';
import { useNavigate } from 'react-router-dom';

export default function AISection() {
  const handleBackToAll = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const allProjectsButton = Array.from(document.querySelectorAll('button')).find(
          button => button.textContent === 'All'
        ) as HTMLButtonElement;
        if (allProjectsButton) {
          allProjectsButton.click();
        }
      }, 500);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-white mb-4">
          AI Integration Expertise
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Request a demo for custom-made AI apps, web pages, and agents powered by cutting-edge artificial intelligence technologies.
        </p>
        <button
          onClick={handleBackToAll}
          className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
        >
          View All Projects
        </button>
      </div>
      <AIIntegrationGrid />
    </div>
  );
}