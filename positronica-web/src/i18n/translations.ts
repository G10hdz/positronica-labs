export type Lang = 'en' | 'es'

const translations = {
  en: {
    nav: {
      research: 'Research',
      projects: 'Projects',
      ethics: 'Ethics',
      team: 'Team',
      connect: 'Connect',
    },
    index: {
      heroSubtitle: '> AGENTIC_OPERATIONS',
      heroTitle: 'AI OPERATING SYSTEMS FOR REAL-WORLD FRICTION',
      heroDesc: '> APPLIED AGENTIC AI LAB FOR HIGH-FRICTION OPERATING SYSTEMS IN LATIN AMERICA.',
      discoveryBtn: 'Book a Discovery Call',
      exploreBtn: 'See Proof Paths',
      ethicsBtn: 'View Trust Model',
      projectsLabel: 'PROOF PATHS',
      projectsHeading: 'From fragmented workflows to trustable AI operations',
      missionLabel: '> CORE_MISSION',
      missionHeading: 'The Laboratory',
      missionBody:
        'Positronica Labs builds closed-loop AI workflows for messy operations where context, trust, and measurable capability matter.',
      statsProjects: 'ACTIVE PROJECTS',
      statsFounders: 'FOUNDERS',
      ctaHeading: 'READY TO EXPLORE?',
      ctaBody: 'Dive deeper into our ethical framework or meet the team behind the research.',
      ctaEthics: 'View Ethics',
      ctaTeam: 'Meet the Team',
    },
    ethics: {
      heroSubtitle: '> ETHICS.md',
      heroTitle: 'ETHICS & RESPONSIBILITY',
      heroDesc: '> SIX PRINCIPLES THAT GOVERN HOW WE BUILD',
      principlesLabel: 'Operational Protocol',
      principlesHeading: 'The Six Principles',
      quote: 'AI should serve humanity, not the reverse.',
      quoteHighlight: 'humanity',
      quoteUnderline: 'reverse',
      ctaHeading: 'BUILDING BEYOND THE HORIZON',
      ctaBody:
        'Our principles are grounded in genuine friction — each one born from a real problem we hit building tools for Mexico and LatAm.',
      ctaBtn: 'Download Ethics Charter',
    },
    team: {
      heroSubtitle: '> TEAM.log',
      heroTitle: 'THE MINDS BEHIND THE LAB',
      heroDesc: '> BUILT BY WOMEN, FOR EVERYONE',
      focusHeading: 'CURRENT_FOCUS',
      focusLabel: '2026 SYSTEM LOGS',
      journeyHeading: 'OUR JOURNEY',
      journeyBody:
        'From a hackathon inflection point to a laboratory of emerging technologies. We document every mutation, every breakthrough.',
      repoHeading: 'LAB_REPOSITORY_STATUS',
      ctaHeading: 'JOIN THE EXPERIMENT',
      ctaBody:
        "We are constantly seeking brilliant minds to join our collaborative research sessions. If you're passionate about ethics and technology, let's connect.",
      ctaBtn: 'INITIATE_CONTACT',
    },
    projects: {
      viewDemo: 'View Demo',
      repo: 'Repo',
    },
    footer: {
      rights: '© 2026 Positronica Labs. All rights reserved.',
      ethicsUpdated: 'Our Ethics Charter — Last Updated: April 2026',
    },
  },

  es: {
    nav: {
      research: 'Inicio',
      projects: 'Proyectos',
      ethics: 'Ética',
      team: 'Equipo',
      connect: 'Contacto',
    },
    index: {
      heroSubtitle: '> OPERACIONES_AGENTICAS',
      heroTitle: 'SISTEMAS OPERATIVOS DE IA PARA FRICCIÓN REAL',
      heroDesc: '> LABORATORIO DE IA AGENTICA APLICADA PARA SISTEMAS OPERATIVOS DE ALTA FRICCIÓN EN LATINOAMÉRICA.',
      discoveryBtn: 'Agendar Llamada de Descubrimiento',
      exploreBtn: 'Ver Rutas de Prueba',
      ethicsBtn: 'Ver modelo de confianza',
      projectsLabel: 'RUTAS DE PRUEBA',
      projectsHeading: 'De workflows fragmentados a operaciones de IA confiables',
      missionLabel: '> MISIÓN_PRINCIPAL',
      missionHeading: 'El Laboratorio',
      missionBody:
        'Positronica Labs construye workflows cerrados de IA para operaciones complejas donde importan el contexto, la confianza y la capacidad medible.',
      statsProjects: 'PROYECTOS ACTIVOS',
      statsFounders: 'FUNDADORAS',
      ctaHeading: '¿LISTA PARA EXPLORAR?',
      ctaBody: 'Conoce nuestro marco ético o al equipo detrás de la investigación.',
      ctaEthics: 'Ver Ética',
      ctaTeam: 'Conocer al Equipo',
    },
    ethics: {
      heroSubtitle: '> ETHICS.md',
      heroTitle: 'ÉTICA Y RESPONSABILIDAD',
      heroDesc: '> SEIS PRINCIPIOS QUE RIGEN CÓMO CONSTRUIMOS',
      principlesLabel: 'Protocolo Operativo',
      principlesHeading: 'Los Seis Principios',
      quote: 'La IA debe servir a la humanidad, no al revés.',
      quoteHighlight: 'humanidad',
      quoteUnderline: 'revés',
      ctaHeading: 'CONSTRUYENDO MÁS ALLÁ DEL HORIZONTE',
      ctaBody:
        'Nuestros principios nacen de la fricción genuina — cada uno surge de un problema real que enfrentamos construyendo herramientas para México y LatAm.',
      ctaBtn: 'Descargar Carta Ética',
    },
    team: {
      heroSubtitle: '> TEAM.log',
      heroTitle: 'LAS MENTES DETRÁS DEL LAB',
      heroDesc: '> CONSTRUIDO POR MUJERES, PARA TODOS',
      focusHeading: 'ENFOQUE_ACTUAL',
      focusLabel: 'REGISTROS DEL SISTEMA 2026',
      journeyHeading: 'NUESTRO RECORRIDO',
      journeyBody:
        'Desde un hackathon que fue punto de inflexión hasta un laboratorio de tecnologías emergentes. Documentamos cada avance y cada pivote.',
      repoHeading: 'ESTADO_DEL_REPOSITORIO',
      ctaHeading: 'ÚNETE AL EXPERIMENTO',
      ctaBody:
        'Buscamos mentes brillantes para nuestras sesiones de investigación colaborativa. Si te apasiona la intersección entre ética y tecnología, conectemos.',
      ctaBtn: 'INICIAR_CONTACTO',
    },
    projects: {
      viewDemo: 'Ver Demo',
      repo: 'Repo',
    },
    footer: {
      rights: '© 2026 Positronica Labs. Todos los derechos reservados.',
      ethicsUpdated: 'Nuestra Carta Ética — Última actualización: Abril 2026',
    },
  },
} as const

export default translations
export type TranslationKeys = typeof translations.en
