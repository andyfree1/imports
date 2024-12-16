import React from 'react';
import { aiIntegrations } from '../../data/ai-integrations';

export default function AIIntegrationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiIntegrations.map((integration) => (
        <a
          key={integration.name}
          href={integration.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass p-6 rounded-xl hover-card group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src={integration.icon}
                alt={integration.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-light transition-colors">
                {integration.name}
              </h3>
              <p className="text-white/80 text-sm">
                {integration.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}