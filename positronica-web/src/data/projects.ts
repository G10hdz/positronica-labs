export interface BilingualText {
  en: string
  es: string
}

export interface Project {
  id: string
  name: string
  tagline: BilingualText
  description: BilingualText
  status: 'LIVE' | 'ACTIVE' | 'BETA' | 'NEW'
  url?: string
  repo?: string
  visual: 'balance' | 'radar' | 'rings' | 'blob' | 'network'
}

export const projects: Project[] = [
  {
    id: 'fairhire',
    name: 'FAIRHIRE',
    tagline: {
      en: 'GENDER PAY GAP & JOB-FIT ANALYZER',
      es: 'ANALIZADOR DE BRECHA SALARIAL Y FIT LABORAL',
    },
    description: {
      en: 'Exposes the gender pay gap in Mexican tech and analyzes job fit with Claude API. Tailored cover letters, BYOK keys, INEGI/ENOE microdata on the roadmap.',
      es: 'Expone la brecha salarial de género en tech mexicano y analiza el fit laboral con la API de Claude. Cartas de presentación personalizadas, claves BYOK e integración con microdatos INEGI/ENOE en el roadmap.',
    },
    status: 'LIVE',
    url: 'https://fairfit-ai.netlify.app',
    repo: 'https://github.com/G10hdz/FairHire',
    visual: 'balance',
  },
  {
    id: 'ergane',
    name: 'ERGANE',
    tagline: {
      en: 'JOB SEARCH AUTOMATION ENGINE',
      es: 'MOTOR DE AUTOMATIZACIÓN DE BÚSQUEDA DE EMPLEO',
    },
    description: {
      en: 'Consolidates tech vacancies from 9+ sources with hybrid scoring (skills, rules, seniority, company fit) plus Telegram notifications and CV generation. 185 matched jobs per run.',
      es: 'Consolida vacantes tech de más de 9 fuentes con scoring híbrido (habilidades, reglas, seniority, fit de empresa) más notificaciones por Telegram y generación de CV. 185 empleos coincidentes por ejecución.',
    },
    status: 'ACTIVE',
    repo: 'https://github.com/G10hdz/Ergane',
    visual: 'radar',
  },
  {
    id: 'metis',
    name: 'METIS',
    tagline: {
      en: 'LOCAL PERSONAL AI ORCHESTRATOR',
      es: 'ORQUESTADOR DE IA LOCAL Y PERSONAL',
    },
    description: {
      en: 'Local-first agent that runs commands, manages files, processes PDFs and orchestrates RAG — via Telegram or Gradio. 5-level fallback ending in Ollama on-device.',
      es: 'Agente local que ejecuta comandos, gestiona archivos, procesa PDFs y orquesta RAG — vía Telegram o Gradio. Fallback de 5 niveles que termina en Ollama en el dispositivo.',
    },
    status: 'ACTIVE',
    repo: 'https://github.com/G10hdz/Metis',
    visual: 'rings',
  },
  {
    id: 'venus',
    name: 'VENUS AI',
    tagline: {
      en: 'BEAUTY & SPA MANAGEMENT PLATFORM',
      es: 'PLATAFORMA DE GESTIÓN PARA ESTÉTICAS Y SPAS',
    },
    description: {
      en: 'All-in-one booking, inventory and client management for beauty studios and spas. Built by co-founder Jeaneth on React + .NET with a narrative visual design.',
      es: 'Gestión integral de citas, inventario y clientes para estudios de belleza y spas. Desarrollada por la cofundadora Jeaneth en React + .NET con diseño visual narrativo.',
    },
    status: 'NEW',
    visual: 'blob',
  },
  {
    id: 'hypatia',
    name: 'HYPATIA',
    tagline: {
      en: 'ADAPTIVE LEARNING FOR NEURODIVERGENT MINDS',
      es: 'APRENDIZAJE ADAPTATIVO PARA MENTES NEURODIVERGENTES',
    },
    description: {
      en: 'Gamified simulator for the UNAM Área 1 entrance exam and adaptive learning for ADHD and visual learners. 9,296-question bank, 3h simulacrum mode, offline persistence.',
      es: 'Simulador gamificado para el examen de admisión UNAM Área 1 y aprendizaje adaptativo para TDAH y aprendices visuales. Banco de 9,296 preguntas, modo simulacro de 3h y persistencia offline.',
    },
    status: 'LIVE',
    url: 'https://hypatia-learning.netlify.app/',
    repo: 'https://github.com/G10hdz/Hypatia',
    visual: 'network',
  },
]
