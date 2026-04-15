import type { BilingualText } from './projects'

export interface TeamMember {
  id: string
  name: string
  initials: string
  role: BilingualText
  title: BilingualText
  bio: BilingualText
  linkedin: string
  github: string
  gradient: string
  focus: BilingualText[]
}

export interface TimelineEvent {
  date: string
  title: BilingualText
  description: BilingualText
  color: string
}

export interface RepoStatus {
  name: string
  tagline: BilingualText
  status: 'LIVE' | 'ACTIVE' | 'NEW' | 'BETA'
  icon: string
  progress: number
  color: string
}

export const founders: TeamMember[] = [
  {
    id: 'gio',
    name: 'Mayte Giovanna Hernández Ríos',
    initials: 'GH',
    role: { en: 'CO-FOUNDER', es: 'COFUNDADORA' },
    title: { en: 'CLOUD & AUTOMATION ENGINEER', es: 'INGENIERÍA CLOUD Y AUTOMATIZACIÓN' },
    bio: {
      en: 'Math undergrad at UNAM turned Cloud & Automation Engineer. Led AWS Cloud Support, now Infra Analyst III at Santander Global Tech. Builds the infrastructure and AI orchestration layer of Positronica.',
      es: 'Matemática de la UNAM convertida en Cloud & Automation Engineer. Lideró soporte cloud en AWS, ahora Analista de Infraestructura III en Santander Global Tech. Construye la capa de infraestructura y orquestación de IA de Positronica.',
    },
    linkedin: 'https://linkedin.com/in/maytegiovanna',
    github: 'https://github.com/G10hdz',
    gradient: 'from-primary to-primary-container',
    focus: [
      { en: 'AWS / INFRASTRUCTURE / MLOPS', es: 'AWS / INFRAESTRUCTURA / MLOPS' },
      { en: 'LANGGRAPH + LOCAL RAG (ROCm)', es: 'LANGGRAPH + RAG LOCAL (ROCm)' },
      { en: 'METIS / ERGANE / ECHO', es: 'METIS / ERGANE / ECHO' },
      { en: 'HYPATIA / FAIRHIRE', es: 'HYPATIA / FAIRHIRE' },
    ],
  },
  {
    id: 'jeaneth',
    name: 'Jeaneth S. Hernández Ríos',
    initials: 'JH',
    role: { en: 'CO-FOUNDER', es: 'COFUNDADORA' },
    title: { en: 'FULL-STACK DEVELOPER', es: 'DESARROLLADORA FULL-STACK' },
    bio: {
      en: 'Full-stack developer and frontend specialist. Leads product design and visual narrative across Positronica. Building Venus AI, a management platform for beauty studios and spas.',
      es: 'Desarrolladora full-stack y especialista en frontend. Lidera el diseño de producto y la narrativa visual en Positronica. Construye Venus AI, una plataforma de gestión para estudios de belleza y spas.',
    },
    linkedin: 'https://www.linkedin.com/in/jeaneth-s-hdz-rios/',
    github: 'https://github.com/jeanethS',
    gradient: 'from-secondary to-secondary-container',
    focus: [
      { en: 'REACT / .NET / TYPESCRIPT', es: 'REACT / .NET / TYPESCRIPT' },
      { en: 'PRODUCT & VISUAL DESIGN', es: 'DISEÑO DE PRODUCTO Y VISUAL' },
      { en: 'VENUS AI', es: 'VENUS AI' },
      { en: 'LANDING DESIGN SYSTEM', es: 'SISTEMA DE DISEÑO DEL LANDING' },
    ],
  },
]

export const collaborators: TeamMember[] = []

export const timeline: TimelineEvent[] = [
  {
    date: '2025.10',
    title: { en: 'FORMATION', es: 'FORMACIÓN' },
    description: {
      en: 'The RAG Prompt Optimizer hackathon (Kavak × OpenAI) becomes the inflection point that formalizes Positronica Labs.',
      es: 'El hackathon RAG Prompt Optimizer (Kavak × OpenAI) se convierte en el punto de inflexión que formaliza Positronica Labs.',
    },
    color: 'bg-primary',
  },
  {
    date: '2026.03',
    title: { en: 'QMANUS_MX', es: 'QMANUS_MX' },
    description: {
      en: 'Multi-tenant multi-agent platform for the Alibaba Cloud × TiDB hackathon. 15/15 security tests passed; lesson learned on git-history hygiene after API key exposure.',
      es: 'Plataforma multi-agente multi-tenant para el hackathon Alibaba Cloud × TiDB. 15/15 pruebas de seguridad aprobadas; lección aprendida sobre higiene del historial de git tras exposición de API keys.',
    },
    color: 'bg-secondary',
  },
  {
    date: '2026.04',
    title: { en: 'HYPATIA + LANDING LIVE', es: 'HYPATIA + LANDING EN VIVO' },
    description: {
      en: 'Hypatia ships to production on Netlify. Positronica Labs landing goes live with the Clinical Sublime design system.',
      es: 'Hypatia llega a producción en Netlify. El landing de Positronica Labs sale en vivo con el sistema de diseño Clinical Sublime.',
    },
    color: 'bg-on-surface',
  },
  {
    date: '2026.Q2-Q4',
    title: { en: 'SAAS LAUNCH WAVE', es: 'OLA DE LANZAMIENTOS SAAS' },
    description: {
      en: 'Hypatia, Ergane, Echo and Metis roll out freemium SaaS tiers. Target ~$5K MRR by month 6, ~$29K MRR by month 12.',
      es: 'Hypatia, Ergane, Echo y Metis lanzan sus planes freemium SaaS. Objetivo: ~$5K MRR en el mes 6, ~$29K MRR en el mes 12.',
    },
    color: 'bg-primary',
  },
]

export const repoStatuses: RepoStatus[] = [
  { name: 'Hypatia', tagline: { en: 'NEURODIVERGENT EXAM PREP', es: 'PREPARACIÓN NEURODIVERGENTE' }, status: 'LIVE', icon: 'psychology', progress: 100, color: 'bg-primary' },
  { name: 'FairHire', tagline: { en: 'PAY GAP & JOB-FIT ANALYZER', es: 'ANALIZADOR DE BRECHA SALARIAL' }, status: 'LIVE', icon: 'balance', progress: 100, color: 'bg-primary' },
  { name: 'Ergane', tagline: { en: 'JOB SEARCH AUTOMATION', es: 'AUTOMATIZACIÓN DE BÚSQUEDA' }, status: 'ACTIVE', icon: 'radar', progress: 80, color: 'bg-secondary' },
  { name: 'Metis', tagline: { en: 'LOCAL AI ORCHESTRATOR', es: 'ORQUESTADOR DE IA LOCAL' }, status: 'ACTIVE', icon: 'hub', progress: 70, color: 'bg-secondary' },
  { name: 'Echo', tagline: { en: 'LOCAL PRONUNCIATION PRACTICE', es: 'PRÁCTICA DE PRONUNCIACIÓN LOCAL' }, status: 'BETA', icon: 'graphic_eq', progress: 55, color: 'bg-tertiary' },
  { name: 'Venus AI', tagline: { en: 'BEAUTY & SPA PLATFORM', es: 'PLATAFORMA DE BELLEZA Y SPA' }, status: 'NEW', icon: 'spa', progress: 30, color: 'bg-on-surface' },
]
