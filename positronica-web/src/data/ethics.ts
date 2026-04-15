import type { BilingualText } from './projects'

export interface EthicsPrinciple {
  id: string
  title: BilingualText
  description: BilingualText
  icon: string
}

export const coreValues: EthicsPrinciple[] = [
  {
    id: 'close-gaps',
    title: { en: 'CLOSE GAPS, NOT WIDEN THEM', es: 'CERRAR BRECHAS, NO AMPLIARLAS' },
    description: {
      en: 'Every tool we ship starts from a genuine friction in Mexico and LatAm — pay gaps, inaccessible exams, language barriers — never from technical vanity.',
      es: 'Cada herramienta que lanzamos nace de una fricción real en México y LatAm — brechas salariales, exámenes inaccesibles, barreras de idioma — nunca de vanidad técnica.',
    },
    icon: 'diversity_3',
  },
  {
    id: 'human-roots',
    title: { en: 'HUMAN ROOTS', es: 'RAÍCES HUMANAS' },
    description: {
      en: 'Intelligent infrastructure with human roots. Built by women for everyone, respecting cognitive load, neurodivergence, and the lived experience of our users.',
      es: 'Infraestructura inteligente con raíces humanas. Construida por mujeres para todos, respetando la carga cognitiva, la neurodivergencia y la experiencia vivida de nuestros usuarios.',
    },
    icon: 'favorite',
  },
  {
    id: 'local-sovereignty',
    title: { en: 'TECHNICAL SOVEREIGNTY', es: 'SOBERANÍA TÉCNICA' },
    description: {
      en: 'Local-first by default. Ollama, Whisper and Kokoro on-device before any cloud API. Your data stays on your machine unless you explicitly opt in.',
      es: 'Local por defecto. Ollama, Whisper y Kokoro en el dispositivo antes que cualquier API en la nube. Tus datos se quedan en tu máquina a menos que elijas lo contrario.',
    },
    icon: 'lock',
  },
]

export const principles: EthicsPrinciple[] = [
  {
    id: 'vibe-coding',
    title: { en: 'VIBE CODING + NEURODIVERGENCE', es: 'VIBE CODING + NEURODIVERGENCIA' },
    description: {
      en: 'ADHD hyperfocus is a feature, not a bug. We design interfaces that respect cognitive load: gamification, instant feedback, and the right visual stimuli for how our minds actually work.',
      es: 'El hiperfoco del TDAH es una característica, no un error. Diseñamos interfaces que respetan la carga cognitiva: gamificación, retroalimentación instantánea y los estímulos visuales correctos para cómo funcionan nuestras mentes.',
    },
    icon: 'auto_awesome',
  },
  {
    id: 'local-first',
    title: { en: 'LOCAL-FIRST SOVEREIGNTY', es: 'SOBERANÍA LOCAL-FIRST' },
    description: {
      en: 'Strict preference for local models (Ollama, Whisper, Kokoro) before calling a cloud API. All development on Pop!_OS. ROCm-optimized to run 30B+ models on 12GB of VRAM.',
      es: 'Preferencia estricta por modelos locales (Ollama, Whisper, Kokoro) antes de llamar a una API en la nube. Todo el desarrollo en Pop!_OS. Optimizado con ROCm para correr modelos de 30B+ en 12GB de VRAM.',
    },
    icon: 'dns',
  },
  {
    id: 'rigor-intuition',
    title: { en: 'RIGOR + INTUITION', es: 'RIGOR + INTUICIÓN' },
    description: {
      en: 'Strategic decisions combine mathematical analysis (UNAM), infrastructure metrics (AWS / Santander), and introspective frameworks — not superstition, pattern recognition.',
      es: 'Las decisiones estratégicas combinan análisis matemático (UNAM), métricas de infraestructura (AWS / Santander) y marcos introspectivos — no superstición, sino reconocimiento de patrones.',
    },
    icon: 'insights',
  },
  {
    id: 'genuine-friction',
    title: { en: 'BUILT FROM GENUINE FRICTION', es: 'CONSTRUIDO DESDE LA FRICCIÓN GENUINA' },
    description: {
      en: 'No vanity projects. Every tool exists because the founders hit a wall: Mexican job boards are a mess (Ergane), the pay gap is measurable (FairHire), no platform adapts to ADHD in the MX school system (Hypatia).',
      es: 'Sin proyectos de vanidad. Cada herramienta existe porque las fundadoras chocaron contra una pared: los job boards mexicanos son un desastre (Ergane), la brecha salarial es medible (FairHire), ninguna plataforma se adapta al TDAH en el sistema escolar mexicano (Hypatia).',
    },
    icon: 'construction',
  },
  {
    id: 'no-reinvent',
    title: { en: 'DON\'T REINVENT THE NON-CORE', es: 'NO REINVENTAMOS LO NO ESENCIAL' },
    description: {
      en: 'Perfectionism traps solo founders. If it isn\'t core to closing gaps, someone else\'s solution is probably good enough. Focus is an ethical stance.',
      es: 'El perfeccionismo atrapa a los fundadores en solitario. Si no es fundamental para cerrar brechas, la solución de otra persona probablemente es suficientemente buena. El enfoque es una postura ética.',
    },
    icon: 'filter_center_focus',
  },
  {
    id: 'transparency',
    title: { en: 'RADICAL TRANSPARENCY', es: 'TRANSPARENCIA RADICAL' },
    description: {
      en: 'Public repos, public datasets (HuggingFace `gio5464/benchmarks`), public post-mortems. Security lessons from QMANUS_mx documented openly so others don\'t repeat them.',
      es: 'Repos públicos, datasets públicos (HuggingFace `gio5464/benchmarks`), post-mortems públicos. Las lecciones de seguridad de QMANUS_mx documentadas abiertamente para que otros no las repitan.',
    },
    icon: 'visibility',
  },
]
