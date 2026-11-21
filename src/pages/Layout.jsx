import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { BentoShowcase } from '../components/BentoShowcase'
import { InteractiveTimeline } from '../components/InteractiveTimeline'
import { SkillMap } from '../components/SkillMap'
import { ProjectsSection } from '../components/ProjectsSection'
import { Footer } from '../components/Footer'
import { uiCopy } from '../data/content'

function getInitialLang() {
  if (typeof window === 'undefined') return 'es'
  try {
    const saved = window.localStorage.getItem('portfolio_lang')
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // Ignore storage access errors in restricted/sandboxed contexts
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function Layout() {
  const [lang, setLang] = useState(getInitialLang)
  const [activeSection, setActiveSection] = useState('overview')
  const [activeExpId, setActiveExpId] = useState('vw-digital-hub')
  const [selectedSkillId, setSelectedSkillId] = useState('agentic')

  const copy = uiCopy[lang]

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio_lang', lang)
    } catch {
      // Ignore storage access errors in restricted/sandboxed contexts
    }
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0.05 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleSelectSkillFromTimeline = skillId => {
    setSelectedSkillId(skillId)
    const el = document.getElementById('skills')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleJumpToExperience = expId => {
    setActiveExpId(expId)
    const el = document.getElementById('timeline')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#06070a] text-[#e6edf3] obsidian-noise">
      <Navbar
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        copy={copy}
      />

      <main>
        <Hero copy={copy} />
        <BentoShowcase copy={copy} lang={lang} />
        <InteractiveTimeline
          lang={lang}
          copy={copy}
          activeExpId={activeExpId}
          setActiveExpId={setActiveExpId}
          onSelectSkill={handleSelectSkillFromTimeline}
        />
        <SkillMap
          lang={lang}
          copy={copy}
          selectedSkillId={selectedSkillId}
          setSelectedSkillId={setSelectedSkillId}
          onJumpToExperience={handleJumpToExperience}
        />
        <ProjectsSection lang={lang} copy={copy} />
      </main>

      <Footer copy={copy} />
    </div>
  )
}
