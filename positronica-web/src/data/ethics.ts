export interface EthicsPrinciple {
  id: string
  title: string
  description: string
  icon: string
}

export const coreValues = [
  {
    id: 'transparency',
    title: 'TRANSPARENCY',
    description: 'Absolute clarity in data sourcing, model architecture, and decision-making logic. No black boxes, only glass.',
    icon: 'visibility',
  },
  {
    id: 'fairness',
    title: 'FAIRNESS',
    description: 'Rigorous multi-stage auditing to neutralize bias across socio-economic, racial, and cultural dimensions.',
    icon: 'balance',
  },
  {
    id: 'privacy',
    title: 'PRIVACY',
    description: 'Data is ephemeral. Our systems operate on a zero-persistence policy for personal identifiable information.',
    icon: 'enhanced_encryption',
  },
]

export const principles: EthicsPrinciple[] = [
  {
    id: 'accountability',
    title: 'ACCOUNTABILITY',
    description: 'Human oversight is integrated at every critical junction of model iteration and deployment.',
    icon: 'verified_user',
  },
  {
    id: 'bias-mitigation',
    title: 'BIAS MITIGATION',
    description: 'Continuous red-teaming of datasets to identify and neutralize latent stereotypical patterns.',
    icon: 'auto_awesome_motion',
  },
  {
    id: 'open-research',
    title: 'OPEN RESEARCH',
    description: 'Regular publication of safety methodologies to advance the global AI alignment collective.',
    icon: 'science',
  },
  {
    id: 'community-input',
    title: 'COMMUNITY INPUT',
    description: 'Open forums and democratic voting on high-level alignment objectives for public-facing models.',
    icon: 'groups',
  },
  {
    id: 'continuous-audit',
    title: 'CONTINUOUS AUDIT',
    description: 'Real-time monitoring systems that trigger instant shutdown if safety thresholds are breached.',
    icon: 'query_stats',
  },
  {
    id: 'public-benefit',
    title: 'PUBLIC BENEFIT',
    description: 'A mandatory portion of compute power is reserved for solving non-commercial climate and health crises.',
    icon: 'public',
  },
]
