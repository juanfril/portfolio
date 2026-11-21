import { BentoCard } from './BentoCard'
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LockIcon
} from './Icons'
import { experiences } from '../data/experience'

export function InteractiveTimeline({
  lang,
  copy,
  activeExpId,
  setActiveExpId,
  onSelectSkill
}) {
  const activeIndex = Math.max(
    0,
    experiences.findIndex(exp => exp.id === activeExpId)
  )
  const activeExp = experiences[activeIndex]

  const goPrev = () => {
    const nextIdx = (activeIndex - 1 + experiences.length) % experiences.length
    setActiveExpId(experiences[nextIdx].id)
  }

  const goNext = () => {
    const nextIdx = (activeIndex + 1) % experiences.length
    setActiveExpId(experiences[nextIdx].id)
  }

  const handleKeyDown = event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      goNext()
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      goPrev()
    }
  }

  const progressPercent =
    experiences.length > 1
      ? (activeIndex / (experiences.length - 1)) * 100
      : 100

  return (
    <section
      id="timeline"
      className="py-16 sm:py-24 scroll-mt-20"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs tracking-[0.16em] uppercase text-[#4c8dff]">
              {copy.timeline.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#f4f6fa]">
              {copy.timeline.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#98a2b3] leading-relaxed">
              {copy.timeline.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="font-mono-tech text-xs text-[#667085] mr-2">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(experiences.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={goPrev}
              aria-label={copy.timeline.prev}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[#d0d5dd] hover:bg-white/[0.09] hover:text-white transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={copy.timeline.next}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[#d0d5dd] hover:bg-white/[0.09] hover:text-white transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Interactive Vertical Timeline Rail */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Luminous rail line (desktop) */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute left-[23px] top-8 bottom-8 w-[2px] bg-white/[0.07] rounded-full overflow-hidden"
              >
                <div
                  className="w-full bg-gradient-to-b from-[#4c8dff] via-[#93c5fd] to-[#ff944d] transition-all duration-500 ease-out"
                  style={{ height: `${Math.max(12, progressPercent)}%` }}
                />
              </div>

              <div className="flex flex-col gap-2.5" role="tablist" aria-label="Career milestones">
              {experiences.map((exp, idx) => {
                const isSelected = exp.id === activeExp.id
                const isAmber = exp.accent === 'amber'
                return (
                  <button
                    key={exp.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveExpId(exp.id)}
                    className={`relative text-left rounded-2xl p-4 sm:pl-14 transition-all duration-250 border ${
                      isSelected
                        ? 'bg-white/[0.06] border-white/[0.18] shadow-[0_14px_34px_-18px_rgba(0,0,0,0.9)]'
                        : 'bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.11]'
                    }`}
                  >
                    {/* Milestone node dot */}
                    <span
                      aria-hidden="true"
                      className={`hidden sm:flex absolute left-[16px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? isAmber
                            ? 'bg-[#ff944d]/25 ring-2 ring-[#ff944d]'
                            : 'bg-[#4c8dff]/25 ring-2 ring-[#4c8dff]'
                          : idx < activeIndex
                            ? 'bg-white/20 ring-1 ring-white/30'
                            : 'bg-[#0e1118] ring-1 ring-white/15'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected
                            ? isAmber
                              ? 'bg-[#ff944d]'
                              : 'bg-[#4c8dff]'
                            : 'bg-white/40'
                        }`}
                      />
                    </span>

                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`font-semibold text-[15px] transition-colors ${
                          isSelected ? 'text-[#f4f6fa]' : 'text-[#c4cdd9]'
                        }`}
                      >
                        {exp.company}
                      </span>
                      <span className="font-mono-tech text-[11px] text-[#8b949e] shrink-0">
                        {exp.shortDate}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#8b949e]">{exp.role[lang]}</p>
                  </button>
                )
              })}
              </div>
            </div>
          </div>

          {/* Interactive Detail Bento Spotlight */}
          <BentoCard className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            {/* Ambient accent light */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-[90px] transition-colors duration-500 ${
                activeExp.accent === 'amber' ? 'bg-[#ff944d]/18' : 'bg-[#4c8dff]/18'
              }`}
            />

            <div key={activeExp.id} className="relative z-10 animate-fade-slide">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono-tech text-xs tracking-[0.12em] uppercase text-[#98a2b3]">
                  {activeExp.date[lang]}
                </span>

                {activeExp.link ? (
                  <a
                    href={activeExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e6edf3] hover:text-[#ff944d] transition-colors"
                  >
                    {copy.timeline.visitCompany}
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] text-[#667085]">
                    <LockIcon className="w-3.5 h-3.5" />
                    {activeExp.notAvailableReason[lang]}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#f4f6fa]">
                {activeExp.company}
              </h3>
              <p className="mt-1 text-sm sm:text-base font-medium text-[#c4cdd9]">
                {activeExp.role[lang]}
              </p>

              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#98a2b3]">
                {activeExp.summary[lang]}
              </p>

              <div className="mt-6">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#667085] mb-3">
                  {copy.timeline.highlightsLabel}
                </p>
                <ul className="space-y-3">
                  {activeExp.highlights[lang].map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#d0d7e2]"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                          activeExp.accent === 'amber'
                            ? 'bg-[#ff944d]'
                            : 'bg-[#4c8dff]'
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.07]">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#667085] mb-3">
                {copy.timeline.stackLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeExp.tags.map(tag => (
                  <button
                    key={tag.label}
                    type="button"
                    onClick={() => onSelectSkill(tag.skillId)}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.09] text-[#d0d7e2] hover:bg-white/[0.11] hover:border-white/[0.22] hover:text-white transition-all"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
