import type { Project } from '@/data/projects'

export function ProjectVisual({ visual }: { visual: Project['visual'] }) {
  switch (visual) {
    case 'balance':
      return (
        <div className="balance-scale relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-20 h-0.5 bg-on-surface/60 rotate-0" />
          <div className="absolute -bottom-2 w-4 h-4 bg-primary rounded-full" />
          <div className="absolute -left-2 -top-2 w-3 h-3 bg-accent-gold rounded-full" />
          <div className="absolute -right-2 -top-2 w-3 h-3 bg-secondary-container rounded-full" />
        </div>
      )
    case 'radar':
      return (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full" />
            ))}
          </div>
          <div className="radar-sweep absolute inset-0 rounded-full border border-primary/40" />
        </div>
      )
    case 'rings':
      return (
        <div className="relative w-20 h-20">
          <div className="expanding-ring absolute inset-0 border border-primary rounded-full" style={{ animationDelay: '0s' }} />
          <div className="expanding-ring absolute inset-0 border border-primary rounded-full" style={{ animationDelay: '1s' }} />
          <div className="expanding-ring absolute inset-0 border border-primary rounded-full" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-[35%] bg-primary rounded-full" />
        </div>
      )
    case 'blob':
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="morphing-blob w-32 h-32 bg-gradient-to-br from-secondary-container via-primary-container to-accent-gold/60 blur-md opacity-70" />
          <div className="morphing-blob absolute w-24 h-24 border border-white/40" style={{ animationDelay: '-2s' }} />
        </div>
      )
    case 'network':
      return (
        <div className="node-network relative w-32 h-20">
          <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full" />
          <div className="absolute top-10 right-4 w-2 h-2 bg-secondary-container rounded-full" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-0 left-12 w-2.5 h-2.5 bg-accent-gold rounded-full" style={{ animationDelay: '1.2s' }} />
          <svg className="absolute inset-0 w-full h-full text-on-surface/10" preserveAspectRatio="none">
            <line stroke="currentColor" strokeWidth="0.5" x1="10%" x2="90%" y1="10%" y2="50%" />
            <line stroke="currentColor" strokeWidth="0.5" x1="90%" x2="40%" y1="50%" y2="90%" />
            <line stroke="currentColor" strokeWidth="0.5" x1="40%" x2="10%" y1="90%" y2="10%" />
          </svg>
        </div>
      )
  }
}
