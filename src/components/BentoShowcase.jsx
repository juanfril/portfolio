import { useState } from 'react'
import { BentoCard } from './BentoCard'

function AgenticCoreVisual({ lang }) {
  const [phaseIdx, setPhaseIdx] = useState(0)
  const phases =
    lang === 'es'
      ? ['Orquestación Agéntica', 'Harness Corporativo', 'Ejecución de Tools', 'Evaluación & Guardrails']
      : ['Agentic Orchestration', 'Enterprise Harness', 'Tool Execution', 'Eval & Guardrails']

  return (
    <div
      onClick={() => setPhaseIdx(prev => (prev + 1) % phases.length)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setPhaseIdx(prev => (prev + 1) % phases.length)
        }
      }}
      className="relative w-full h-56 sm:h-60 flex flex-col items-center justify-center cursor-pointer select-none group"
      aria-label={phases[phaseIdx]}
    >
      {/* Volumetric cool-blue glow */}
      <div className="pointer-events-none absolute w-56 h-32 rounded-full bg-[#3b82f6]/25 blur-[58px] group-hover:bg-[#3b82f6]/35 transition-colors duration-500" />
      <div className="pointer-events-none absolute w-36 h-24 rounded-full bg-[#93c5fd]/20 blur-[36px] -translate-y-2" />

      <svg
        viewBox="0 0 460 190"
        className="relative w-full max-w-[440px] h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreCloudGrad" cx="46%" cy="32%" r="64%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#bfdbfe" />
            <stop offset="75%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="rayLeft" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="rayRight" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlowBlue" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Radiating neural / orchestration fiber rays */}
        <g strokeWidth="1" fill="none">
          <path d="M18 46 Q 92 66 155 86" stroke="url(#rayLeft)" />
          <path d="M8 92 L 146 95" stroke="url(#rayLeft)" />
          <path d="M24 142 Q 95 124 156 106" stroke="url(#rayLeft)" />
          <path d="M305 86 Q 368 66 442 46" stroke="url(#rayRight)" />
          <path d="M314 95 L 452 92" stroke="url(#rayRight)" />
          <path d="M304 106 Q 365 124 436 142" stroke="url(#rayRight)" />
        </g>

        {/* Animated light pulses along horizontal orchestration bus */}
        <path
          d="M12 92 L 448 92"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="animate-flow-dash"
          opacity="0.7"
        />

        {/* Volumetric sculpted cloud / multi-agent cluster */}
        <g className="animate-soft-float" filter="url(#softGlowBlue)">
          <path
            d="M168 128 C144 128 128 111 128 90 C128 71 142 56 161 54 C169 33 190 20 215 20 C244 20 268 40 273 66 C295 68 312 84 312 103 C312 118 299 128 281 128 Z"
            fill="url(#coreCloudGrad)"
          />
          {/* Subtle inner specular rim */}
          <path
            d="M168 126 C146 126 131 110 131 90 C131 73 144 58 163 56 C171 36 191 23 215 23 C242 23 265 42 270 68 C291 70 309 85 309 103 C309 116 297 126 280 126 Z"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
          {/* Subtle agent node geometry etched inside */}
          <g opacity="0.5" stroke="#0c1938" strokeWidth="1.4" fill="none">
            <circle cx="194" cy="82" r="5" fill="#ffffff" />
            <circle cx="235" cy="70" r="5" fill="#ffffff" />
            <circle cx="255" cy="98" r="5" fill="#ffffff" />
            <path d="M199 80 L230 72 M239 74 L252 94 M198 85 L250 97" />
          </g>
        </g>
      </svg>

      <div className="mt-1 inline-flex items-center gap-2 font-mono-tech text-[11px] text-[#98a2b3] group-hover:text-[#e6edf3] transition-colors">
        <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]" />
        <span>{phases[phaseIdx]}</span>
      </div>
    </div>
  )
}

function LangGraphRagVisual() {
  return (
    <div className="relative w-full h-56 sm:h-60 flex items-center justify-center overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute right-8 bottom-8 w-32 h-32 rounded-full bg-[#ff944d]/22 blur-[48px]" />
      <div className="pointer-events-none absolute left-10 top-10 w-24 h-24 rounded-full bg-[#3b82f6]/20 blur-[40px]" />

      <svg viewBox="25 25 210 185" className="relative w-full max-w-[270px] h-auto" aria-hidden="true">
        <defs>
          <linearGradient id="ragLink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff944d" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="amberNodeBg" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#3a2314" />
            <stop offset="100%" stopColor="#12141c" />
          </radialGradient>
          <radialGradient id="blueNodeBg" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#172b52" />
            <stop offset="100%" stopColor="#10141f" />
          </radialGradient>
        </defs>

        {/* Connection fibers */}
        <line x1="88" y1="84" x2="152" y2="142" stroke="url(#ragLink)" strokeWidth="1.5" />
        <line x1="88" y1="84" x2="162" y2="62" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="76" y1="154" x2="152" y2="142" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* Subtle satellite depth nodes */}
        <circle cx="164" cy="62" r="14" fill="#12151e" stroke="rgba(255,255,255,0.08)" />
        <circle cx="72" cy="154" r="15" fill="#12151e" stroke="rgba(255,255,255,0.08)" />

        {/* Top-left BOE RAG Document Node */}
        <g>
          <circle cx="88" cy="84" r="28" fill="url(#blueNodeBg)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.2" />
          <circle cx="88" cy="84" r="20" fill="rgba(59,130,246,0.12)" stroke="rgba(147,197,253,0.28)" />
          <rect x="79" y="74" width="18" height="20" rx="3" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
          <line x1="83" y1="80" x2="93" y2="80" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="83" y1="85" x2="93" y2="85" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="83" y1="90" x2="89" y2="90" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" />
          <text x="88" y="47" textAnchor="middle" fill="#8bb4f8" fontSize="9.5" className="font-mono-tech">
            BOE RAG
          </text>
        </g>

        {/* Bottom-right Primary Python + LangGraph Node */}
        <g>
          <circle
            cx="158"
            cy="146"
            r="46"
            fill="none"
            stroke="rgba(255,148,77,0.22)"
            strokeWidth="1"
            className="animate-pulse-ring"
          />
          <circle cx="158" cy="146" r="38" fill="url(#amberNodeBg)" stroke="rgba(255,148,77,0.52)" strokeWidth="1.3" />
          <circle cx="158" cy="146" r="28" fill="rgba(255,148,77,0.08)" stroke="rgba(255,180,120,0.22)" />
          {/* Stylized Python / Graph loop mark */}
          <path
            d="M157 131c-6.2 0-5.8 2.7-5.8 2.7v3.3h6v1h-8.4s-4-.45-4 5.9c0 6.35 3.5 6.1 3.5 6.1h2.1v-3s-.1-3.5 3.4-3.5h5.8s3.3.05 3.3-3.2v-5.4s.5-3.9-5.9-3.9Zm-3.1 2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
            fill="#ffb074"
          />
          <path
            d="M159 161c6.2 0 5.8-2.7 5.8-2.7v-3.3h-6v-1h8.4s4 .45 4-5.9c0-6.35-3.5-6.1-3.5-6.1h-2.1v3s.1 3.5-3.4 3.5h-5.8s-3.3-.05-3.3 3.2v5.4s-.5 3.9 5.9 3.9Zm3.1-2.2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z"
            fill="#f97316"
          />
        </g>
      </svg>
    </div>
  )
}

function VwDataCoreVisual() {
  return (
    <div className="relative w-full h-56 sm:h-60 flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute w-36 h-36 rounded-full bg-[#3b82f6]/24 blur-[52px]" />

      {/* Sculpted metallic ice-blue wheel/data vault tile */}
      <div className="relative w-32 h-32 rounded-[26px] glass-tile flex items-center justify-center shadow-[0_24px_48px_-14px_rgba(37,99,235,0.45)] group">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-[#60a5fa]/22 via-transparent to-[#1d4ed8]/18 pointer-events-none"
        />
        <svg viewBox="0 0 100 100" className="relative w-20 h-20" aria-hidden="true">
          <defs>
            <linearGradient id="rimMetal" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="48%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="36" fill="rgba(15,23,42,0.75)" stroke="url(#rimMetal)" strokeWidth="4.5" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(147,197,253,0.42)" strokeWidth="1.6" />
          <circle cx="50" cy="50" r="9" fill="#0f172a" stroke="#bfdbfe" strokeWidth="2.5" />
          {/* Precision wheel spokes */}
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <line
              key={angle}
              x1="50"
              y1="50"
              x2={50 + 28 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 28 * Math.sin((angle * Math.PI) / 180)}
              stroke="url(#rimMetal)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          ))}
          <circle cx="50" cy="50" r="4" fill="#e0f2fe" />
        </svg>
      </div>
    </div>
  )
}

function ExtensionVoiceVisual() {
  return (
    <div className="relative w-full h-52 sm:h-56 flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute w-36 h-36 rounded-full bg-[#ff8a4c]/22 blur-[50px]" />

      {/* Subtle circuit traces left & right */}
      <svg
        viewBox="0 0 260 150"
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path d="M12 75 H74" stroke="rgba(255,148,77,0.32)" strokeWidth="1" />
        <path d="M26 98 H56 L72 84" stroke="rgba(255,148,77,0.22)" strokeWidth="1" fill="none" />
        <path d="M186 75 H248" stroke="rgba(255,148,77,0.32)" strokeWidth="1" />
        <path d="M188 84 L204 98 H234" stroke="rgba(255,148,77,0.22)" strokeWidth="1" fill="none" />
        <circle cx="24" cy="98" r="2" fill="#ff944d" opacity="0.7" />
        <circle cx="236" cy="98" r="2" fill="#ff944d" opacity="0.7" />
      </svg>

      {/* Warm amber metallic GlassFlow tile */}
      <div className="relative w-28 h-28 rounded-2xl glass-tile flex flex-col items-center justify-center shadow-[0_22px_44px_-12px_rgba(249,115,22,0.38)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff944d]/20 via-transparent to-[#f97316]/12 pointer-events-none"
        />
        {/* Stylized voice/agent bars */}
        <svg viewBox="0 0 64 48" className="relative w-14 h-11" aria-hidden="true">
          <defs>
            <linearGradient id="amberBars" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd0a1" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="44" height="8" rx="4" fill="url(#amberBars)" />
          <rect x="14" y="20" width="38" height="8" rx="4" fill="url(#amberBars)" opacity="0.88" />
          <rect x="8" y="32" width="28" height="8" rx="4" fill="url(#amberBars)" opacity="0.72" />
        </svg>
        <span className="mt-1.5 font-mono-tech text-[9.5px] tracking-wider uppercase text-[#ffbe8a]/90">
          EXT · VOICE
        </span>
      </div>
    </div>
  )
}

function MetricsToastVisual({ lang }) {
  const [idx, setIdx] = useState(0)
  const items =
    lang === 'es'
      ? [
          {
            title: 'Métricas del equipo',
            body: 'Plugin activo en todo el squad · telemetría en tiempo real.'
          },
          {
            title: 'Harness Agéntico',
            body: 'Paquete corporativo desplegado · ejecuciones estables.'
          },
          {
            title: 'Estado del pipeline',
            body: 'Eventos sincronizados sin pérdidas en producción.'
          }
        ]
      : [
          {
            title: 'Team telemetry',
            body: 'Metrics plugin live across the full engineering squad.'
          },
          {
            title: 'Agent Harness',
            body: 'Enterprise package deployed · reproducible agent runs.'
          },
          {
            title: 'Pipeline status',
            body: 'All operational signals streamed with zero drops.'
          }
        ]

  const current = items[idx]

  return (
    <div
      onClick={() => setIdx(prev => (prev + 1) % items.length)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIdx(prev => (prev + 1) % items.length)
        }
      }}
      className="relative w-full h-52 sm:h-56 flex items-center justify-center px-3 cursor-pointer select-none group"
      aria-label={current.title}
    >
      <div className="pointer-events-none absolute -left-4 bottom-6 w-28 h-28 rounded-full bg-[#ff8a4c]/22 blur-[46px]" />
      <div className="pointer-events-none absolute -right-4 top-8 w-28 h-28 rounded-full bg-[#3b82f6]/20 blur-[46px]" />

      {/* Stacked depth layers behind the primary toast */}
      <div className="relative w-full max-w-[260px]">
        <div
          aria-hidden="true"
          className="absolute inset-x-4 -bottom-4 h-12 rounded-xl bg-white/[0.025] border border-white/[0.05]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-2 -bottom-2 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07]"
        />

        <div className="relative glass-toast rounded-xl p-4 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff944d]/20 text-[#ffb074] text-xs font-bold">
              !
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#f4f6fa]">{current.title}</p>
              <p className="mt-1 text-[11.5px] leading-snug text-[#cbd5e1]/85">
                {current.body}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-1">
              {items.map((item, i) => (
                <span
                  key={item.title}
                  className={`h-1 rounded-full transition-all ${
                    i === idx ? 'w-5 bg-[#ff944d]' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono-tech text-[10px] text-[#98a2b3]">
              {lang === 'es' ? 'clic ↻' : 'click ↻'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DistributedInfinityVisual() {
  return (
    <div className="relative w-full h-52 sm:h-56 flex flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute left-[24%] top-1/2 -translate-y-1/2 w-40 h-28 rounded-full bg-[#3b82f6]/24 blur-[56px]" />
      <div className="pointer-events-none absolute right-[24%] top-1/2 -translate-y-1/2 w-40 h-28 rounded-full bg-[#ff8a4c]/24 blur-[56px]" />

      <svg
        viewBox="0 0 460 175"
        className="relative w-full max-w-[430px] h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="infinityGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="32%" stopColor="#93c5fd" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="68%" stopColor="#ffb36b" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <filter id="infinityGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base luminous figure-8 loop */}
        <path
          d="M 230 88 C 192 26, 92 26, 92 88 C 92 150, 192 150, 230 88 C 268 26, 368 26, 368 88 C 368 150, 268 150, 230 88 Z"
          fill="none"
          stroke="url(#infinityGrad)"
          strokeWidth="3.2"
          opacity="0.32"
          filter="url(#infinityGlow)"
        />
        <path
          d="M 230 88 C 192 26, 92 26, 92 88 C 92 150, 192 150, 230 88 C 268 26, 368 26, 368 88 C 368 150, 268 150, 230 88 Z"
          fill="none"
          stroke="url(#infinityGrad)"
          strokeWidth="2.2"
          opacity="0.9"
        />
        {/* Animated energy pulse flowing along the loop */}
        <path
          d="M 230 88 C 192 26, 92 26, 92 88 C 92 150, 192 150, 230 88 C 268 26, 368 26, 368 88 C 368 150, 268 150, 230 88 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#infinityGlow)"
          className="animate-flow-dash-slow"
        />
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono-tech text-[11px] text-[#8b949e]">
        <span>90% Migration</span>
        <span className="text-white/20">·</span>
        <span>-40% API Errors</span>
        <span className="text-white/20">·</span>
        <span>80% Coverage</span>
      </div>
    </div>
  )
}

export function BentoShowcase({ copy, lang }) {
  const cards = copy.bento.cards

  return (
    <section id="bento" className="py-14 sm:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          <p className="font-mono-tech text-xs tracking-[0.16em] uppercase text-[#ff944d]">
            {copy.bento.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#f4f6fa]">
            {copy.bento.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#98a2b3] leading-relaxed">
            {copy.bento.subtitle}
          </p>
        </div>

        {/* Asymmetric 2-row GlassFlow Bento Grid: [6, 3, 3] / [3, 3, 6] */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 1: Span 6 (Top Left) */}
          <BentoCard className="md:col-span-6 lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-[15px] leading-relaxed">
                <span className="font-semibold text-[#f4f6fa]">{cards[0].lead}</span>{' '}
                <span className="text-[#8b949e]">{cards[0].body}</span>
              </p>
            </div>
            <div className="relative z-10 mt-3">
              <AgenticCoreVisual lang={lang} />
            </div>
          </BentoCard>

          {/* Card 2: Span 3 (Top Mid) */}
          <BentoCard className="md:col-span-3 lg:col-span-3 p-6 flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-[14.5px] leading-relaxed">
                <span className="font-semibold text-[#f4f6fa]">{cards[1].lead}</span>{' '}
                <span className="text-[#8b949e]">{cards[1].body}</span>
              </p>
            </div>
            <div className="relative z-10 mt-2">
              <LangGraphRagVisual />
            </div>
          </BentoCard>

          {/* Card 3: Span 3 (Top Right) */}
          <BentoCard className="md:col-span-3 lg:col-span-3 p-6 flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-[14.5px] leading-relaxed">
                <span className="font-semibold text-[#f4f6fa]">{cards[2].lead}</span>{' '}
                <span className="text-[#8b949e]">{cards[2].body}</span>
              </p>
            </div>
            <div className="relative z-10 mt-2">
              <VwDataCoreVisual />
            </div>
          </BentoCard>

          {/* Card 4: Span 3 (Bottom Left) */}
          <BentoCard className="md:col-span-3 lg:col-span-3 p-6 flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-[14.5px] leading-relaxed">
                <span className="font-semibold text-[#f4f6fa]">{cards[3].lead}</span>{' '}
                <span className="text-[#8b949e]">{cards[3].body}</span>
              </p>
            </div>
            <div className="relative z-10 mt-2">
              <ExtensionVoiceVisual />
            </div>
          </BentoCard>

          {/* Card 5: Span 3 (Bottom Mid) */}
          <BentoCard className="md:col-span-3 lg:col-span-3 p-6 flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-[14.5px] leading-relaxed">
                <span className="font-semibold text-[#f4f6fa]">{cards[4].lead}</span>{' '}
                <span className="text-[#8b949e]">{cards[4].body}</span>
              </p>
            </div>
            <div className="relative z-10 mt-2">
              <MetricsToastVisual lang={lang} />
            </div>
          </BentoCard>

          {/* Card 6: Span 6 (Bottom Right) */}
          <BentoCard className="md:col-span-6 lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-[15px] leading-relaxed">
                <span className="font-semibold text-[#f4f6fa]">{cards[5].lead}</span>{' '}
                <span className="text-[#8b949e]">{cards[5].body}</span>
              </p>
            </div>
            <div className="relative z-10 mt-3">
              <DistributedInfinityVisual />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
