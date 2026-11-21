import { useState } from 'react'
import { BentoCard } from './BentoCard'
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from './Icons'
import { projects } from '../data/projects'

export function ProjectsSection({ lang, copy }) {
  const [filter, setFilter] = useState('all')

  const filterKeys = ['all', 'ai', 'fullstack', 'architecture']
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs tracking-[0.16em] uppercase text-[#4c8dff]">
              {copy.projects.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#f4f6fa]">
              {copy.projects.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#98a2b3] leading-relaxed">
              {copy.projects.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap shrink-0 gap-2" role="group" aria-label="Project filters">
            {filterKeys.map(key => {
              const isActive = filter === key
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-[#f4f6fa] text-[#090b10] border-transparent font-semibold'
                      : 'bg-white/[0.03] text-[#98a2b3] border-white/[0.08] hover:text-white hover:border-white/[0.18]'
                  }`}
                >
                  {copy.projects.filters[key]}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredProjects.map((project, index) => {
            const isWide =
              filter === 'all' && (index === 0 || index === 1)
            const spanClass = isWide
              ? 'md:col-span-2 lg:col-span-3'
              : 'md:col-span-1 lg:col-span-2'

            return (
              <BentoCard
                key={project.id}
                interactive
                className={`${spanClass} p-6 flex flex-col justify-between`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.1em] text-[#8b949e]">
                      {project.origin}
                    </span>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.06] border border-white/[0.1] text-[#e6edf3] hover:bg-white/[0.14] transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>{copy.projects.openSourceBadge}</span>
                        <ArrowUpRightIcon className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono-tech bg-white/[0.03] border border-white/[0.07] text-[#8b949e]">
                        <LockIcon className="w-3 h-3" />
                        {copy.projects.privateBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-[-0.02em] text-[#f4f6fa]">
                    {project.title[lang]}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#98a2b3]">
                    {project.description[lang]}
                  </p>

                  {!project.link && project.notAvailableReason && (
                    <p className="mt-3 font-mono-tech text-[11px] text-[#667085]">
                      {project.notAvailableReason[lang]}
                    </p>
                  )}
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-white/[0.04] text-[#cbd5e1] border border-white/[0.07]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </BentoCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
