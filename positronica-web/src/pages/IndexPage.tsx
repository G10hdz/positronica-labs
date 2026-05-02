import { HeroSection } from '@/components/sections/HeroSection'
import { ValueGrid } from '@/components/sections/ValueCard'
import { ProjectCards } from '@/components/sections/ProjectCards'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { PrincipleGrid } from '@/components/sections/PrincipleGrid'
import { OrbitalScene } from '@/components/sections/OrbitalScene'
import { coreValues, principles } from '@/data/ethics'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/nav'
import { useLang } from '@/i18n/useLang'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function IndexPage() {
  const { t, lang } = useLang()
  const i = t.index

  const heroTitle = (
    <span>
      <span className="block">{lang === 'en' ? 'AGENTIC' : 'OPERACIONES'}</span>
      <span className="block">{lang === 'en' ? 'OPERATIONS' : 'AGENTICAS'}</span>
    </span>
  )

  const projectCount = projects.length
  const repoCount = projects.filter((project) => project.repo).length
  const heroProjects = projects.slice(0, 5)
  const [featuredProject, ...supportingProjects] = heroProjects

  return (
    <div className="dot-grid min-h-screen overflow-hidden">
      <HeroSection
        subtitle={i.heroSubtitle}
        title={heroTitle}
        description={
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
            <div>
              <p className="max-w-2xl text-[clamp(1rem,1.6vw,1.18rem)] leading-relaxed text-on-surface-variant">
                {lang === 'en'
                  ? 'For nearshoring manufacturers, training operators, and service teams: we turn knowledge transfer bottlenecks, skill gaps, and scattered SOPs into closed-loop AI workflows with full human review.'
                  : 'Para fabricantes nearshoring, equipos de formación y operaciones de servicio: convertimos cuellos de botella de transferencia de conocimiento, brechas de habilidades y SOPs dispersos en workflows de IA de ciclo cerrado con revisión humana completa.'}
              </p>
              <p className="mt-4 font-technical text-[11px] tracking-[0.24em] text-on-surface-variant/82 uppercase">
                {i.heroDesc}
              </p>
            </div>

            <div className="hero-signal-card border border-outline-variant/30 p-4 md:p-5">
              <div className="font-technical text-[10px] tracking-[0.25em] text-on-surface-variant uppercase">
                {lang === 'en' ? '90-day focus' : 'Foco 90 días'}
              </div>
              <div className="mt-4 grid gap-4">
                <div>
                  <div className="font-signal text-[2.35rem] leading-none tracking-[0.05em] text-on-surface">
                    {String(projectCount).padStart(2, '0')}
                  </div>
                  <div className="mt-2 font-technical text-[10px] tracking-[0.22em] text-on-surface-variant uppercase">
                    {lang === 'en' ? 'Proof paths' : 'Rutas de prueba'}
                  </div>
                </div>
                <div className="h-px bg-outline-variant/45" />
                <div>
                  <div className="font-signal text-[2.35rem] leading-none tracking-[0.05em] text-on-surface">
                    {String(repoCount).padStart(2, '0')}
                  </div>
                  <div className="mt-2 font-technical text-[10px] tracking-[0.22em] text-on-surface-variant uppercase">
                    {lang === 'en' ? 'Proof assets' : 'Activos de prueba'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        visual={<OrbitalScene />}
        actions={
          <>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta"
              aria-label={lang === 'en' ? 'Book a discovery call — opens LinkedIn in new tab' : 'Agendar llamada de descubrimiento — abre LinkedIn en nueva pestaña'}
            >
              {i.discoveryBtn}
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="secondary-cta"
            >
              {i.exploreBtn}
            </button>
          </>
        }
      />

      {/* Built-for buyer personas */}
      <section className="border-y border-outline-variant/20 bg-surface-container-lowest/60 px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-technical text-[10px] tracking-[0.28em] text-on-surface-variant/42 uppercase select-none">— ——</span>
            <span className="font-technical text-[10px] tracking-[0.24em] text-primary uppercase">
              {lang === 'en' ? 'Who this is for' : 'Para quién es esto'}
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                segment: lang === 'en' ? 'Nearshoring Manufacturers' : 'Manufactura Nearshoring',
                problem: lang === 'en' ? 'Knowledge transfer bottleneck' : 'Cuello de botella en transferencia de conocimiento',
                outcome: lang === 'en' ? 'SOP extraction → workflow observation → quality recommendations with human sign-off' : 'Extracción de SOPs → observación de workflows → recomendaciones de calidad con aprobación humana',
              },
              {
                segment: lang === 'en' ? 'Training & Workforce Teams' : 'Equipos de Formación y Fuerza Laboral',
                problem: lang === 'en' ? 'Skill visibility gap' : 'Brecha de visibilidad de habilidades',
                outcome: lang === 'en' ? 'Capability diagnostics → adaptive learning design → performance proof by role' : 'Diagnóstico de capacidades → diseño de aprendizaje adaptivo → prueba de desempeño por rol',
              },
              {
                segment: lang === 'en' ? 'Service Operations' : 'Operaciones de Servicio',
                problem: lang === 'en' ? 'Scattered workflows, no instrumentation' : 'Workflows dispersos, sin instrumentación',
                outcome: lang === 'en' ? 'Process capture → pattern detection → supervisor support tools with audit logs' : 'Captura de procesos → detección de patrones → herramientas de supervisión con registros de auditoría',
              },
            ].map(({ segment, problem, outcome }, idx) => (
              <motion.div
                key={segment}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 border border-outline-variant/30 bg-surface/80 p-6"
              >
                <div>
                  <div className="font-technical text-[9px] tracking-[0.26em] text-primary uppercase mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="font-technical text-[11px] tracking-[0.18em] text-on-surface uppercase leading-tight">
                    {segment}
                  </div>
                </div>
                <div className="h-px bg-outline-variant/30" />
                <div>
                  <div className="font-technical text-[9px] tracking-[0.2em] text-on-surface-variant/60 uppercase mb-1">
                    {lang === 'en' ? 'Problem' : 'Problema'}
                  </div>
                  <p className="text-sm text-on-surface-variant">{problem}</p>
                </div>
                <div>
                  <div className="font-technical text-[9px] tracking-[0.2em] text-on-surface-variant/60 uppercase mb-1">
                    {lang === 'en' ? 'What we build' : 'Qué construimos'}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{outcome}</p>
                </div>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto font-technical text-[10px] tracking-[0.2em] text-primary uppercase hover:text-primary/70 transition-colors"
                  aria-label={lang === 'en' ? `Book a pilot for ${segment} — opens LinkedIn in new tab` : `Agendar piloto para ${segment} — abre LinkedIn en nueva pestaña`}
                >
                  {lang === 'en' ? 'Book a Pilot →' : 'Agendar Piloto →'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-18 md:px-12 md:pb-24">
        <div className="hero-product-strip mx-auto max-w-7xl">
          <div className="mb-6 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="text-sm font-medium text-on-surface md:text-[15px]">
                {lang === 'en' ? 'Selected proof paths behind one thesis: closed-loop AI for work, learning, service operations, and local-first automation.' : 'Rutas de prueba detrás de una tesis: IA de ciclo cerrado para trabajo, aprendizaje, operaciones de servicio y automatización local-first.'}
              </p>
            </div>
            <div className="hidden font-technical text-[10px] tracking-[0.2em] text-on-surface-variant uppercase md:block">
              {lang === 'en' ? 'Featured work' : 'Trabajo destacado'}
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.24fr)_minmax(320px,0.76fr)] lg:gap-4">
            {featuredProject && (
              <motion.a
                href={featuredProject.url ?? featuredProject.repo ?? '#projects'}
                target={featuredProject.url || featuredProject.repo ? '_blank' : undefined}
                rel={featuredProject.url || featuredProject.repo ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="hero-product-card hero-product-feature group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 font-technical text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                      {lang === 'en' ? 'Featured product' : 'Producto destacado'}
                    </div>
                    <div className="font-brand text-[clamp(1.85rem,4vw,3.3rem)] leading-[0.92] tracking-[-0.03em] uppercase text-on-surface">
                      {featuredProject.name}
                    </div>
                  </div>
                  <span className="font-technical text-[10px] tracking-[0.18em] text-primary uppercase">
                    {featuredProject.status}
                  </span>
                </div>

                <p className="mt-5 max-w-xl font-technical text-[10px] tracking-[0.2em] text-on-surface-variant uppercase leading-relaxed">
                  {featuredProject.tagline[lang]}
                </p>
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-on-surface-variant md:text-base">
                  {featuredProject.description[lang]}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-outline-variant/40 pt-5">
                  {featuredProject.url && (
                    <span className="font-technical text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                      {lang === 'en' ? 'Live product' : 'Producto en vivo'}
                    </span>
                  )}
                  {featuredProject.repo && (
                    <span className="font-technical text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                      GitHub
                    </span>
                  )}
                </div>
              </motion.a>
            )}

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2">
              {supportingProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url ?? project.repo ?? '#projects'}
                  target={project.url || project.repo ? '_blank' : undefined}
                  rel={project.url || project.repo ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="hero-product-card group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-brand text-base tracking-[0.02em] uppercase text-on-surface md:text-[1.05rem]">
                      {project.name}
                    </div>
                    <span className="font-technical text-[10px] tracking-[0.16em] text-primary uppercase">
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-3 font-technical text-[10px] tracking-[0.16em] text-on-surface-variant uppercase leading-relaxed">
                    {project.tagline[lang]}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-5">
            <span className="font-signal text-[10px] tracking-[0.28em] text-on-surface-variant/42 uppercase select-none">
              01 ——
            </span>
            <p className="text-sm font-medium text-on-surface-variant">
              {lang === 'en' ? 'Why the work matters' : 'Por qué importa este trabajo'}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="p-1 md:p-2"
            >
              <p className="max-w-3xl text-[clamp(1.18rem,2.2vw,1.7rem)] leading-[1.46] text-on-surface">
                {lang === 'en'
                  ? 'The work is technical, but the thesis is operational: the next AI companies will not just answer questions. They will observe, decide, act, learn, and stay accountable.'
                  : 'El trabajo es técnico, pero la tesis es operativa: las próximas empresas de IA no solo responderán preguntas. Van a observar, decidir, actuar, aprender y rendir cuentas.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between gap-6 border border-outline-variant/34 bg-surface-container-lowest/78 p-6 md:p-7"
            >
              <p className="text-sm font-medium text-on-surface">
                {lang === 'en' ? 'Built for pilot proof, local context, and real-world constraints.' : 'Construido para pruebas piloto, contexto local y restricciones reales.'}
              </p>
              <div className="grid gap-4">
                {[
                  {
                    title: lang === 'en' ? 'Local-first infrastructure' : 'Infraestructura local-first',
                    detail: lang === 'en' ? 'Designed around clear data boundaries and deployment constraints, not ideal demo conditions.' : 'Diseñada alrededor de límites claros de datos y restricciones de despliegue, no condiciones ideales de demo.',
                  },
                  {
                    title: lang === 'en' ? 'Human review by design' : 'Revisión humana por diseño',
                    detail: lang === 'en' ? 'AI suggestions stay bounded by explicit approval, correction, and audit flows.' : 'Las sugerencias de IA se mantienen dentro de flujos explícitos de aprobación, corrección y auditoría.',
                  },
                  {
                    title: lang === 'en' ? 'Mexico and LatAm grounded' : 'Arraigado en Mexico y LatAm',
                    detail: lang === 'en' ? 'Workflows are shaped by regional labor, training, service, and institutional realities.' : 'Los workflows nacen de realidades regionales de trabajo, capacitacion, servicios e instituciones.',
                  },
                ].map(({ title, detail }, itemIndex) => (
                  <div key={title} className="border-b border-outline-variant/24 pb-4 last:border-0 last:pb-0">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="font-signal text-[10px] tracking-[0.18em] text-primary uppercase">
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="font-technical text-[11px] tracking-[0.18em] text-on-surface uppercase">
                        {title}
                      </span>
                    </div>
                    <p className="pl-8 text-sm leading-relaxed text-on-surface-variant">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee strip — editorial motion element */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-y border-outline-variant/14 bg-surface-container-lowest/72 py-3"
      >
        <div className="marquee-track">
          <div className="marquee-inner">
            {[
              'AGENTIC OPERATIONS',
              'KNOWLEDGE TRANSFER',
              'HUMAN REVIEW',
              'MEXICO & LATAM',
              'TRUST-BY-DESIGN',
              'NEARSHORING ERA',
              'AGENTIC OPERATIONS',
              'KNOWLEDGE TRANSFER',
              'HUMAN REVIEW',
              'MEXICO & LATAM',
              'TRUST-BY-DESIGN',
              'NEARSHORING ERA',
            ].map((item, i) => (
              <span
                key={i}
                className="mx-7 font-technical text-[10px] tracking-[0.28em] text-on-surface-variant/55 uppercase"
              >
                {item}
                <span className="mx-6 text-primary opacity-60">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectCards />

      <section className="relative bg-white/70 py-28 dark:bg-surface md:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-8 select-none font-signal text-[clamp(6rem,16vw,14rem)] font-black leading-none text-primary opacity-[0.045] md:right-12"
        >
          02
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 md:px-12 xl:grid-cols-[minmax(0,0.98fr)_minmax(320px,1.02fr)] xl:items-end">
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-5">
              <span className="font-signal text-[10px] tracking-[0.28em] text-on-surface-variant/42 uppercase select-none">
                02 ——
              </span>
              <span className="section-kicker">{i.missionLabel}</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 max-w-[8.2ch] font-brand text-[clamp(2.8rem,5.8vw,5.6rem)] font-black uppercase leading-[0.88] tracking-[0.06em] text-balance"
            >
              {i.missionHeading}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-2xl text-[clamp(1.05rem,1.8vw,1.35rem)] font-light leading-[1.6] text-on-surface-variant xl:justify-self-end"
          >
            {i.missionBody}
          </motion.p>
        </div>
      </section>

      <ValueGrid values={coreValues} />

      <QuoteSection
        quote={t.ethics.quote}
        highlight={t.ethics.quoteHighlight}
        underline={t.ethics.quoteUnderline}
      />

      <PrincipleGrid principles={principles} />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 py-32 md:px-12 md:py-40"
      >
        <div className="home-cta-panel mx-auto max-w-7xl border border-white/8 p-8 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div>
              <div className="mb-4 font-technical text-[10px] tracking-[0.2em] text-inverse-on-surface/62 uppercase">
                {lang === 'en' ? 'Continue exploring' : 'Seguir explorando'}
              </div>
              <h2 className="mb-5 font-brand text-[clamp(2.3rem,5vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-inverse-on-surface">
                {i.ctaHeading}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-inverse-on-surface/76 md:text-lg">
                {i.ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/ethics" className="primary-cta">
                {i.ctaEthics}
              </Link>
              <Link to="/team" className="secondary-cta secondary-cta--inverse">
                {i.ctaTeam}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
