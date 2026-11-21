import { useMemo, useState } from 'react'
import { BentoCard } from './BentoCard'
import { ArrowUpRightIcon } from './Icons'
import { experiences } from '../data/experience'
import { skillDomains, skillNodes } from '../data/skills'

const DOMAIN_COLORS = {
  ai: {
    stroke: '#ff944d',
    glow: 'rgba(255, 148, 77, 0.35)',
    fill: '#241710',
    badge: 'text-[#ffb37b] bg-[#ff944d]/12 border-[#ff944d]/25'
  },
  frontend: {
    stroke: '#4c8dff',
    glow: 'rgba(76, 141, 255, 0.35)',
    fill: '#101b30',
    badge: 'text-[#93c5fd] bg-[#4c8dff]/12 border-[#4c8dff]/25'
  },
  backend: {
    stroke: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.32)',
    fill: '#111b2a',
    badge: 'text-[#bfdbfe] bg-[#60a5fa]/12 border-[#60a5fa]/25'
  },
  devops: {
    stroke: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.3)',
    fill: '#211a0f',
    badge: 'text-[#fde68a] bg-[#fbbf24]/12 border-[#fbbf24]/25'
  }
}

const NODE_RADII = {
  xl: 14,
  lg: 11,
  md: 9,
  sm: 7.5
}

export function SkillMap({
  lang,
  copy,
  selectedSkillId,
  setSelectedSkillId,
  onJumpToExperience
}) {
  const [domainFilter, setDomainFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState(null)

  const activeId = hoveredId || selectedSkillId || 'python'
  const nodeMap = useMemo(
    () => Object.fromEntries(skillNodes.map(node => [node.id, node])),
    []
  )
  const expMap = useMemo(
    () => Object.fromEntries(experiences.map(exp => [exp.id, exp])),
    []
  )

  const activeNode = nodeMap[activeId] || skillNodes[0]

  // Build unique undirected edges
  const edges = useMemo(() => {
    const seen = new Set()
    const list = []
    skillNodes.forEach(node => {
      node.connections.forEach(targetId => {
        if (!nodeMap[targetId]) return
        const key = [node.id, targetId].sort().join('--')
        if (!seen.has(key)) {
          seen.add(key)
          list.push({ from: node, to: nodeMap[targetId], key })
        }
      })
    })
    return list
  }, [nodeMap])

  const connectedSet = useMemo(
    () => new Set([activeNode.id, ...activeNode.connections]),
    [activeNode]
  )

  const domainOptions = ['all', ...skillDomains.map(d => d.id)]

  return (
    <section id="skills" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs tracking-[0.16em] uppercase text-[#ff944d]">
              {copy.skills.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#f4f6fa]">
              {copy.skills.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#98a2b3] leading-relaxed">
              {copy.skills.subtitle}
            </p>
          </div>

          {/* Domain filter pills */}
          <div className="flex flex-wrap lg:flex-nowrap shrink-0 gap-2" role="group" aria-label="Skill domain filters">
            {domainOptions.map(domain => {
              const isCurrent = domainFilter === domain
              return (
                <button
                  key={domain}
                  type="button"
                  onClick={() => setDomainFilter(domain)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                    isCurrent
                      ? 'bg-[#f4f6fa] text-[#090b10] border-transparent font-semibold'
                      : 'bg-white/[0.03] text-[#98a2b3] border-white/[0.08] hover:text-white hover:border-white/[0.18]'
                  }`}
                >
                  {copy.skills.domains[domain]}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Interactive Constellation SVG Map */}
          <BentoCard className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between">
            <div className="pointer-events-none absolute left-10 top-10 w-52 h-52 rounded-full bg-[#ff944d]/10 blur-[85px]" />
            <div className="pointer-events-none absolute right-10 bottom-10 w-56 h-56 rounded-full bg-[#4c8dff]/12 blur-[90px]" />

            <div className="relative z-10 w-full overflow-x-auto">
              <svg
                viewBox="0 0 920 515"
                className="w-full min-w-[540px] h-auto select-none"
                role="img"
                aria-label={copy.skills.title}
              >
                <defs>
                  <filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Subtle cluster labels */}
                <text x="86" y="40" fill="#ff944d" opacity="0.55" fontSize="11" className="font-mono-tech">
                  AI &amp; AGENTS
                </text>
                <text x="735" y="40" fill="#4c8dff" opacity="0.55" fontSize="11" className="font-mono-tech">
                  FRONTEND
                </text>
                <text x="86" y="498" fill="#60a5fa" opacity="0.45" fontSize="11" className="font-mono-tech">
                  BACKEND &amp; DATA
                </text>
                <text x="730" y="498" fill="#fbbf24" opacity="0.45" fontSize="11" className="font-mono-tech">
                  CLOUD &amp; DEVEX
                </text>

                {/* Connection fiber lines */}
                {edges.map(({ from, to, key }) => {
                  const isHighlighted =
                    (from.id === activeNode.id || to.id === activeNode.id) &&
                    (domainFilter === 'all' ||
                      from.domain === domainFilter ||
                      to.domain === domainFilter)
                  const matchesDomain =
                    domainFilter === 'all' ||
                    (from.domain === domainFilter && to.domain === domainFilter)
                  const color =
                    from.domain === 'ai' || to.domain === 'ai'
                      ? '#ff944d'
                      : '#4c8dff'

                  return (
                    <line
                      key={key}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={isHighlighted ? color : 'rgba(255,255,255,0.12)'}
                      strokeWidth={isHighlighted ? 2 : 1}
                      opacity={
                        isHighlighted
                          ? 0.85
                          : matchesDomain
                            ? 0.25
                            : 0.08
                      }
                      className="transition-all duration-300"
                    />
                  )
                })}

                {/* Skill nodes */}
                {skillNodes.map(node => {
                  const style = DOMAIN_COLORS[node.domain]
                  const radius = NODE_RADII[node.size]
                  const isActive = node.id === activeNode.id
                  const isConnected = connectedSet.has(node.id)
                  const matchesFilter =
                    domainFilter === 'all' || node.domain === domainFilter
                  const nodeOpacity = !matchesFilter
                    ? 0.2
                    : isActive || isConnected
                      ? 1
                      : 0.55

                  return (
                    <g
                      key={node.id}
                      transform={`translate(${node.x}, ${node.y})`}
                      onClick={() => setSelectedSkillId(node.id)}
                      onMouseEnter={() => setHoveredId(node.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      role="button"
                      tabIndex={0}
                      aria-label={node.label}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setSelectedSkillId(node.id)
                        }
                      }}
                      style={{ cursor: 'pointer', opacity: nodeOpacity }}
                      className="transition-opacity duration-300 outline-none"
                    >
                      {isActive && (
                        <circle
                          r={radius + 11}
                          fill="none"
                          stroke={style.stroke}
                          strokeWidth="1.4"
                          opacity="0.65"
                          className="animate-pulse-ring"
                        />
                      )}

                      <circle
                        r={radius + 4}
                        fill={style.fill}
                        stroke={isActive ? style.stroke : 'rgba(255,255,255,0.16)'}
                        strokeWidth={isActive ? 1.8 : 1}
                        filter={isActive ? 'url(#nodeGlow)' : undefined}
                      />

                      <circle
                        r={Math.max(4, radius - 3)}
                        fill={style.stroke}
                        opacity={isActive ? 1 : 0.78}
                      />

                      <text
                        y={radius + 20}
                        textAnchor="middle"
                        fill={isActive ? '#ffffff' : '#cbd5e1'}
                        fontSize={node.size === 'xl' ? 13 : 11.5}
                        fontWeight={isActive || node.size === 'xl' ? 600 : 500}
                      >
                        {node.label}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="relative z-10 mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech text-[#667085]">
              <span>{copy.skills.inspector.hint}</span>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff944d]" />
                  {copy.skills.domains.ai}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4c8dff]" />
                  {copy.skills.domains.frontend} / {copy.skills.domains.backend}
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Context Inspector Panel */}
          <BentoCard className="lg:col-span-4 p-6 flex flex-col justify-between">
            <div key={activeNode.id} className="relative z-10 animate-fade-slide">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech border ${
                    DOMAIN_COLORS[activeNode.domain].badge
                  }`}
                >
                  {copy.skills.domains[activeNode.domain]}
                </span>
                <span className="font-mono-tech text-[11px] text-[#667085]">
                  {activeNode.connections.length} links
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-[#f4f6fa]">
                {activeNode.label}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#98a2b3]">
                {activeNode.detail[lang]}
              </p>

              {/* Connected skills */}
              <div className="mt-6">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#667085] mb-2.5">
                  {copy.skills.inspector.connectedTo}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.connections.map(connId => {
                    const target = nodeMap[connId]
                    if (!target) return null
                    return (
                      <button
                        key={connId}
                        type="button"
                        onClick={() => setSelectedSkillId(connId)}
                        className="px-2.5 py-1 rounded-lg text-xs bg-white/[0.04] border border-white/[0.08] text-[#d0d7e2] hover:bg-white/[0.1] hover:text-white transition-colors"
                      >
                        {target.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Production usage cross-links to Timeline */}
            <div className="relative z-10 mt-6 pt-5 border-t border-white/[0.07]">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#667085] mb-2.5">
                {copy.skills.inspector.usedAt}
              </p>
              <div className="space-y-2">
                {activeNode.experiences.map(expId => {
                  const exp = expMap[expId]
                  if (!exp) return null
                  return (
                    <button
                      key={expId}
                      type="button"
                      onClick={() => onJumpToExperience(expId)}
                      className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.035] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.16] transition-all text-left group"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#f4f6fa]">
                          {exp.company}
                        </p>
                        <p className="font-mono-tech text-[11px] text-[#8b949e]">
                          {exp.shortDate}
                        </p>
                      </div>
                      <ArrowUpRightIcon className="w-4 h-4 text-[#8b949e] group-hover:text-[#ff944d] transition-colors shrink-0" />
                    </button>
                  )
                })}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
