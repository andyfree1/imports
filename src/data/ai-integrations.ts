export interface AIIntegration {
  name: string;
  description: string;
  icon: string;
  url: string;
}

export const aiIntegrations: AIIntegration[] = [
  {
    name: 'ChatGPT',
    description: 'Advanced language model integration for natural conversations and content generation',
    icon: 'https://images.unsplash.com/photo-1676299081847-824916de7933?auto=format&fit=crop&w=200&q=80',
    url: 'https://openai.com/chatgpt'
  },
  {
    name: 'Anthropic',
    description: 'Constitutional AI for safe and ethical artificial intelligence solutions',
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&q=80',
    url: 'https://www.anthropic.com'
  },
  {
    name: 'Google Gemini',
    description: 'Multimodal AI for advanced reasoning and problem-solving',
    icon: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=200&q=80',
    url: 'https://deepmind.google/technologies/gemini/'
  },
  {
    name: 'NVIDIA AI',
    description: 'GPU-accelerated AI solutions for high-performance computing',
    icon: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200&q=80',
    url: 'https://www.nvidia.com/en-us/ai-data-science/'
  },
  {
    name: 'Runway ML',
    description: 'Creative AI tools for video and content generation',
    icon: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=200&q=80',
    url: 'https://runwayml.com'
  },
  {
    name: 'DALL-E',
    description: 'AI image generation for creative and commercial applications',
    icon: 'https://images.unsplash.com/photo-1686191128892-3261c56e2883?auto=format&fit=crop&w=200&q=80',
    url: 'https://openai.com/dall-e-3'
  },
  {
    name: 'SORA',
    description: 'Text-to-video AI for dynamic content creation',
    icon: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=200&q=80',
    url: 'https://openai.com/sora'
  },
  {
    name: 'MidJourney',
    description: 'AI-powered image generation for creative projects',
    icon: 'https://images.unsplash.com/photo-1686191128892-3261c56e2883?auto=format&fit=crop&w=200&q=80',
    url: 'https://www.midjourney.com'
  },
  {
    name: 'Zapier AI',
    description: 'Workflow automation with intelligent processing',
    icon: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=200&q=80',
    url: 'https://zapier.com/ai'
  },
  {
    name: 'Jasper',
    description: 'AI content generation and optimization platform',
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&q=80',
    url: 'https://www.jasper.ai'
  },
  {
    name: 'Quantum Computing',
    description: 'Next-generation computing for advanced AI applications',
    icon: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200&q=80',
    url: 'https://quantumai.google'
  }
];