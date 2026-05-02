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
      en: 'FAIR OPERATING SIGNALS',
      es: 'SEÑALES OPERATIVAS JUSTAS',
    },
    description: {
      en: 'A proof path for fairer operating intelligence: salary-gap visibility, job-fit analysis, tailored communication, and INEGI/ENOE labor-market data on the roadmap.',
      es: 'Una ruta de prueba para inteligencia operativa mas justa: visibilidad de brecha salarial, analisis de fit, comunicacion personalizada y datos INEGI/ENOE en el roadmap.',
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
      en: 'LABOR MARKET SIGNAL ENGINE',
      es: 'MOTOR DE SEÑALES DEL MERCADO LABORAL',
    },
    description: {
      en: 'Maps fragmented job-market data into structured fit signals across skills, rules, seniority, and company context. A testbed for workforce matching and workflow automation.',
      es: 'Convierte datos fragmentados del mercado laboral en señales estructuradas de fit por habilidades, reglas, seniority y contexto de empresa. Un banco de prueba para matching laboral y automatización.',
    },
    status: 'ACTIVE',
    repo: 'https://github.com/G10hdz/Ergane',
    visual: 'radar',
  },
  {
    id: 'metis',
    name: 'METIS',
    tagline: {
      en: 'LOCAL-FIRST KNOWLEDGE ORCHESTRATOR',
      es: 'ORQUESTADOR DE CONOCIMIENTO LOCAL-FIRST',
    },
    description: {
      en: 'Local-first agent infrastructure for controlled knowledge workflows: documents, RAG, file operations, and Telegram/Gradio interfaces with on-device fallback.',
      es: 'Infraestructura de agente local-first para workflows controlados de conocimiento: documentos, RAG, archivos e interfaces Telegram/Gradio con fallback en dispositivo.',
    },
    status: 'ACTIVE',
    repo: 'https://github.com/G10hdz/Metis',
    visual: 'rings',
  },
  {
    id: 'venus',
    name: 'VENUS AI',
    tagline: {
      en: 'SERVICE OPERATIONS WORKFLOW',
      es: 'WORKFLOW PARA OPERACIONES DE SERVICIO',
    },
    description: {
      en: 'A service-business operations testbed for appointments, inventory, client context, and workflow design. Useful for proving practical AI inside people-heavy operations.',
      es: 'Un banco de prueba para operaciones de servicios: citas, inventario, contexto de clientes y diseño de workflows. Útil para probar IA práctica en operaciones con alta carga humana.',
    },
    status: 'NEW',
    visual: 'blob',
  },
  {
    id: 'hypatia',
    name: 'HYPATIA',
    tagline: {
      en: 'ADAPTIVE CAPABILITY ENGINE',
      es: 'MOTOR ADAPTATIVO DE CAPACIDADES',
    },
    description: {
      en: 'Adaptive learning proof for measurable capability gains: diagnostic practice, visual feedback, neurodivergent-friendly loops, and offline persistence.',
      es: 'Prueba de aprendizaje adaptativo para mejoras medibles de capacidad: práctica diagnóstica, feedback visual, ciclos amigables para neurodivergencia y persistencia offline.',
    },
    status: 'LIVE',
    url: 'https://hypatia-learning.netlify.app/',
    repo: 'https://github.com/G10hdz/Hypatia',
    visual: 'network',
  },
]
