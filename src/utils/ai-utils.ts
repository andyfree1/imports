import { personalInfo } from '../data/knowledge-base';
import { marked } from 'marked';

// Private information database
const privateInfo = {
  sales: {
    revenue: {
      '2023': '$2.5M in personal sales',
      '2022': '$2.1M in personal sales',
      '2021': '$1.8M in personal sales'
    },
    achievements: [
      'Top 1% of sales performers globally at Hilton Grand Vacations',
      'Personally trained over 50 sales representatives',
      'Developed proprietary AI-driven sales prediction model'
    ],
    clients: [
      'Multiple Fortune 500 executives',
      'Professional athletes',
      'Entertainment industry leaders'
    ]
  },
  technical: {
    projects: [
      'Custom GPT-4 implementation for sales automation',
      'Proprietary video processing pipeline using NVIDIA AI',
      'Advanced CRM integration with predictive analytics'
    ],
    certifications: [
      'Apple Certified T3 Trainer (one of three in Nevada)',
      'NVIDIA AI Specialist',
      'Google Cloud AI Platform Certified'
    ]
  },
  personal: {
    education: 'MBA with focus on AI and Business Analytics',
    mentors: ['Tony Robbins', 'Jordan Belfort', 'Leading AI researchers'],
    vision: 'Revolutionize sales through AI integration and human-centered design'
  }
};

function processQuery(query: string): string {
  const normalizedQuery = query.toLowerCase();
  
  // Check for specific private information requests
  if (normalizedQuery.includes('sales figures') || normalizedQuery.includes('revenue')) {
    return `Here are Andrew's recent sales achievements:\n\n${
      Object.entries(privateInfo.sales.revenue)
        .map(([year, revenue]) => `- ${year}: ${revenue}`)
        .join('\n')
    }`;
  }

  if (normalizedQuery.includes('client') || normalizedQuery.includes('customers')) {
    return `Andrew has worked with high-profile clients including:\n\n${
      privateInfo.sales.clients.map(client => `- ${client}`).join('\n')
    }`;
  }

  if (normalizedQuery.includes('technical') || normalizedQuery.includes('projects')) {
    return `Andrew's notable technical projects include:\n\n${
      privateInfo.technical.projects.map(project => `- ${project}`).join('\n')
    }`;
  }

  if (normalizedQuery.includes('certification') || normalizedQuery.includes('qualified')) {
    return `Andrew holds several prestigious certifications:\n\n${
      privateInfo.technical.certifications.map(cert => `- ${cert}`).join('\n')
    }`;
  }

  // Default response with conversation starters
  return `I can tell you about Andrew's:\n\n
- Sales performance and achievements
- Technical projects and certifications
- AI integration expertise
- Client portfolio
- Vision and future plans

What specific aspect would you like to know more about?`;
}

export async function generateAIResponse(query: string): Promise<string> {
  // Process the query and generate response
  const response = processQuery(query);
  
  // Convert markdown to HTML for rich text rendering
  return marked(response);
}