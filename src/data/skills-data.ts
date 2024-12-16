import { Brain, Code, Video, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Technology {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: LucideIcon;
  color: string;
  gradient: string;
  technologies: Technology[];
}

export const skills: Skill[] = [
  {
    name: 'AI Integration',
    percentage: 95,
    icon: Brain,
    color: '#4A90E2',
    gradient: 'from-[#4A90E2]/20 to-[#4A90E2]/5',
    technologies: [
      { name: 'Chat GPT', url: 'https://chat.openai.com' },
      { name: 'Anthropic', url: 'https://www.anthropic.com' },
      { name: 'Gemini', url: 'https://deepmind.google/technologies/gemini/' },
      { name: 'NVIDIA', url: 'https://www.nvidia.com/en-us/ai-data-science/' },
      { name: 'Runway ML', url: 'https://runwayml.com' },
      { name: 'DALL-E', url: 'https://openai.com/dall-e-3' },
      { name: 'SORA', url: 'https://openai.com/sora' },
      { name: 'MidJourney', url: 'https://www.midjourney.com' },
      { name: 'Zapier', url: 'https://zapier.com/ai' },
      { name: 'Jasper', url: 'https://www.jasper.ai' },
      { name: 'Quantum Computing', url: 'https://quantumai.google' }
    ]
  },
  {
    name: 'Sales Leadership',
    percentage: 90,
    icon: TrendingUp,
    color: '#50E3C2',
    gradient: 'from-[#50E3C2]/20 to-[#50E3C2]/5',
    technologies: [
      { name: 'Projects with Tony Robbins', url: 'https://www.tonyrobbins.com' },
      { name: 'Projects with Jordan Belfort', url: 'https://jordanbelfort.com' },
      { name: 'Projects with Joe Verde', url: 'https://www.joeverde.com' },
      { name: 'Projects with Tom Hopkins', url: 'https://www.tomhopkins.com' },
      { name: 'AI-powered CRM Systems', url: 'https://www.salesforce.com/products/einstein/overview/' },
      { name: 'SRM Systems Development', url: 'https://www.oracle.com/cx/sales/' }
    ]
  },
  {
    name: 'Video Production',
    percentage: 85,
    icon: Video,
    color: '#F5A623',
    gradient: 'from-[#F5A623]/20 to-[#F5A623]/5',
    technologies: [
      { name: 'Adobe Creative Suite', url: 'https://www.adobe.com/creativecloud.html' },
      { name: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
      { name: 'FCP X', url: 'https://www.apple.com/final-cut-pro' },
      { name: 'RED', url: 'https://www.red.com' },
      { name: 'ARRI', url: 'https://www.arri.com' },
      { name: '4k & 8k workflows', url: 'https://www.blackmagicdesign.com/products/blackmagicraw' }
    ]
  },
  {
    name: 'Technical Expertise',
    percentage: 88,
    icon: Code,
    color: '#E23E57',
    gradient: 'from-[#E23E57]/20 to-[#E23E57]/5',
    technologies: [
      { name: 'Apple Certified T3 Trainer', url: 'https://training.apple.com/us/en/recognition' },
      { name: 'Lighting Systems Installation', url: 'https://www.lutron.com/en-US/Pages/default.aspx' },
      { name: 'Audio Systems Programming', url: 'https://www.avid.com/pro-tools' },
      { name: 'Professional Equipment Setup', url: 'https://pro.sony/ue_US/' },
      { name: 'System Integration', url: 'https://www.extron.com' },
      { name: 'Technical Training', url: 'https://www.pluralsight.com' }
    ]
  }
];