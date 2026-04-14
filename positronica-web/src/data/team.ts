export interface TeamMember {
  id: string
  name: string
  initials: string
  role: string
  title: string
  bio: string
  linkedin: string
  github: string
  gradient: string
  focus: string[]
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  color: string
}

export interface RepoStatus {
  name: string
  tagline: string
  status: 'LIVE' | 'ACTIVE' | 'NEW'
  icon: string
  progress: number
  color: string
}

export const founders: TeamMember[] = [
  {
    id: 'mayte',
    name: 'Mayte Giovanna Hernández Ríos',
    initials: 'MH',
    role: 'CO-FOUNDER',
    title: 'PRINCIPAL ARCHITECT',
    bio: 'Leading the architectural vision of Positronica with a focus on full-stack excellence and ethical AI implementation.',
    linkedin: 'https://www.linkedin.com/in/mayte-giovanna-hernandez-rios/?locale=en',
    github: 'https://github.com/G10hdz',
    gradient: 'from-primary to-primary-container',
    focus: ['FULL-STACK DEVELOPMENT', 'FAIRHIRE ECOSYSTEM', 'VENUS AI INTERFACE'],
  },
  {
    id: 'jeaneth',
    name: 'Jeaneth S. Hdz Ríos',
    initials: 'JH',
    role: 'CO-FOUNDER',
    title: 'CORE RESEARCH',
    bio: 'Specializing in the intersection of human psychology and autonomous systems. Driving the Hypatia framework forward.',
    linkedin: 'https://www.linkedin.com/in/jeaneth-s-hdz-rios/',
    github: 'https://github.com/jeanethS',
    gradient: 'from-secondary to-secondary-container',
    focus: ['FULL-STACK ARCHITECTURE', 'HYPATIA PROTOCOLS'],
  },
]

export const collaborators: TeamMember[] = [
  {
    id: 'gio',
    name: 'Gio',
    initials: 'G',
    role: 'COLLABORATOR',
    title: 'CLOUD & AI INFRASTRUCTURE',
    bio: 'Cloud & Automation Engineer building the infrastructure that powers Metis, Ergane, and Echo.',
    linkedin: '',
    github: 'https://github.com/G10hdz',
    gradient: 'from-tertiary to-tertiary-container',
    focus: ['CLOUD INFRASTRUCTURE', 'AI ORCHESTRATION', 'METIS / ERGANE / ECHO'],
  },
]

export const timeline: TimelineEvent[] = [
  {
    date: '2022.Q1',
    title: 'INCUBATION',
    description: 'Formation of Positronica core principles. Initial research into decentralized bias correction.',
    color: 'bg-primary',
  },
  {
    date: '2023.Q3',
    title: 'FAIRHIRE BETA',
    description: 'The first public-facing implementation of our ethical AI hiring algorithms.',
    color: 'bg-secondary',
  },
  {
    date: '2024.PRESENT',
    title: 'HYPATIA INTEGRATION',
    description: 'Scaling neural infrastructure and expanding the collaborative ecosystem.',
    color: 'bg-on-surface',
  },
]

export const repoStatuses: RepoStatus[] = [
  { name: 'FairHire', tagline: 'EQUITABLE RECRUITMENT ENGINE', status: 'LIVE', icon: 'verified', progress: 100, color: 'bg-primary' },
  { name: 'Ergane', tagline: 'AUTONOMOUS RESEARCH AGENT', status: 'ACTIVE', icon: 'settings_slow_motion', progress: 75, color: 'bg-secondary' },
  { name: 'Metis', tagline: 'COGNITIVE BIAS ANALYZER', status: 'ACTIVE', icon: 'psychology', progress: 50, color: 'bg-secondary' },
  { name: 'Echo', tagline: 'NEURAL SYNTHESIS MODULE', status: 'NEW', icon: 'podcasts', progress: 25, color: 'bg-on-surface' },
]
