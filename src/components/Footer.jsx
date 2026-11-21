import { BrandMark, GitHubIcon, LinkedInIcon, ResumeIcon } from './Icons'

export function Footer({ copy }) {
  const resumeHref = `${import.meta.env.BASE_URL}Resume-Juan-Fco-Losa.pdf?v=2025`

  return (
    <footer className="border-t border-white/[0.07] py-10 mt-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <BrandMark className="w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-[#f4f6fa]">Juan Fco. Losa</p>
            <p className="text-xs text-[#667085]">{copy.footer.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume PDF"
            className="text-[#8b949e] hover:text-white transition-colors"
          >
            <ResumeIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/juanfril"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#8b949e] hover:text-white transition-colors"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-fco-losa-marquez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#8b949e] hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <span className="h-4 w-px bg-white/[0.1]" aria-hidden="true" />
          <a
            href="#overview"
            className="font-mono-tech text-xs text-[#8b949e] hover:text-white transition-colors"
          >
            {copy.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
