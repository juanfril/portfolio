import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from './Icons'

export function Hero({ copy }) {
  const resumeHref = `${import.meta.env.BASE_URL}Resume-Juan-Fco-Losa.pdf`

  return (
    <section
      id="overview"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Subtle dual-temperature horizon light inspired by GlassFlow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[960px] h-[420px] opacity-75"
      >
        <div className="absolute left-[10%] top-12 w-[380px] h-[260px] rounded-full bg-[#3b82f6]/15 blur-[110px]" />
        <div className="absolute right-[8%] top-20 w-[360px] h-[250px] rounded-full bg-[#ff8a4c]/18 blur-[115px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          <h1 className="text-[2.45rem] sm:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.038em] leading-[1.05] text-[#f4f6fa]">
            {copy.hero.headlineLine1}
            <span className="block text-[#d0d7e2] mt-1">
              {copy.hero.headlineLine2}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#98a2b3]">
            {copy.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#bento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f4f6fa] text-[#090b10] text-sm font-semibold hover:bg-white transition-colors"
            >
              {copy.hero.exploreCta}
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>

            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#e6edf3] text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.18] transition-colors"
            >
              <ResumeIcon className="w-4 h-4 text-[#ff944d]" />
              {copy.hero.resumeCta}
            </a>

            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href="https://github.com/juanfril"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[#98a2b3] hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-fco-losa-marquez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[#98a2b3] hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Clean metadata strip */}
        <div className="mt-12 pt-7 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-3 gap-6">
          {copy.hero.stats.map(stat => (
            <div key={stat.label} className="space-y-1">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#667085]">
                {stat.label}
              </p>
              <p className="text-sm sm:text-[15px] font-medium text-[#e6edf3]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
