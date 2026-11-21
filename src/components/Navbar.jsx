import { useState } from 'react'
import { BrandMark } from './Icons'

export function Navbar({ lang, setLang, activeSection, copy }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const resumeHref = `${import.meta.env.BASE_URL}Resume-Juan-Fco-Losa.pdf?v=2025`

  const navItems = [
    { id: 'overview', label: copy.nav.overview },
    { id: 'bento', label: copy.nav.bento },
    { id: 'timeline', label: copy.nav.timeline },
    { id: 'skills', label: copy.nav.skills },
    { id: 'projects', label: copy.nav.projects }
  ]

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#overview"
          className="flex items-center gap-2.5 text-[#f4f6fa] hover:opacity-90 transition-opacity shrink-0"
        >
          <BrandMark className="w-6 h-6" />
          <span className="font-semibold tracking-tight text-[15px]">
            Juan Fco. Losa
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navItems.map(item => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-[#f4f6fa] bg-white/[0.08]'
                    : 'text-[#98a2b3] hover:text-[#f4f6fa]'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center p-0.5 rounded-full bg-white/[0.05] border border-white/[0.09]"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                lang === 'en'
                  ? 'bg-white/[0.14] text-white'
                  : 'text-[#8b949e] hover:text-white'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                lang === 'es'
                  ? 'bg-white/[0.14] text-white'
                  : 'text-[#8b949e] hover:text-white'
              }`}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-[#f4f6fa] text-[#090b10] text-sm font-semibold hover:bg-white transition-colors"
          >
            {copy.nav.resume}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.1] text-[#d0d5dd] hover:bg-white/[0.06]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#080a0f]/95 px-5 py-4 space-y-1">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm ${
                activeSection === item.id
                  ? 'bg-white/[0.08] text-white font-medium'
                  : 'text-[#98a2b3] hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block text-center px-4 py-2 rounded-lg bg-[#f4f6fa] text-[#090b10] text-sm font-semibold"
          >
            {copy.nav.resume}
          </a>
        </div>
      )}
    </header>
  )
}
