export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  status: 'LIVE' | 'ACTIVE' | 'BETA' | 'NEW'
  url?: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'fairhire',
    name: 'FAIRHIRE',
    tagline: 'GENDER PAY GAP & JOB FIT ANALYZER',
    description: 'AI-powered tool that helps women in Mexico identify pay gaps and analyze job fit. Built with i18n support and expanding to INEI/ENOE data integration.',
    status: 'LIVE',
    url: 'https://fairfit-ai.netlify.app',
    icon: 'balance',
  },
  {
    id: 'ergane',
    name: 'ERGANE',
    tagline: 'JOB SEARCH AUTOMATION ENGINE',
    description: 'Automates job search across 9+ boards with AI-powered matching, tailored CV generation, and Telegram notifications.',
    status: 'ACTIVE',
    icon: 'radar',
  },
  {
    id: 'metis',
    name: 'METIS',
    tagline: 'LOCAL PERSONAL AI AGENT',
    description: 'Local-first AI orchestrator with multi-tool routing (RAG, code, web search, file ops) running entirely on your machine via Ollama.',
    status: 'ACTIVE',
    icon: 'hub',
  },
  {
    id: 'venus',
    name: 'VENUS AI',
    tagline: 'BEAUTY & SPA MANAGEMENT PLATFORM',
    description: 'All-in-one booking, inventory, and client management platform for beauty and spa businesses.',
    status: 'BETA',
    icon: 'spa',
  },
  {
    id: 'hypatia',
    name: 'HYPATIA',
    tagline: 'ADAPTIVE LEARNING FOR NEURODIVERGENT MINDS',
    description: 'ADHD-friendly study platform with AI-powered explanations, exam simulators (UNAM, AWS), and gamified learning paths.',
    status: 'LIVE',
    url: 'https://hypatia-learning.netlify.app/',
    icon: 'psychology',
  },
]
