import { useEffect, useState } from 'react'
import { Link } from './Link'

export function Header() {
  const [activeSection, setActiveSection] = useState('about')

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
      { threshold: 0.3 }
    )

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <header className="relative md:sticky md:top-0 flex flex-col md:flex-row lg:max-h-screen lg:w-full md:justify-between md:items-center md:py-4 backdrop-blur-md px-7 z-50">
      <section className="flex flex-col sm:mb-6">
        <h1 className="text-3xl sm:text-6xl md:text-4xl lg:text-6xl font-bold mb-4">
          Juan Fco. Losa
        </h1>
        <p className="lg:text-lg md:text-sm sm:text-sm">
          Full Stack Developer focused on building amazing digital products.
        </p>
      </section>

      <nav className="hidden sm:block" aria-label="In-page jump links">
        <ul className="flex justify-center md:justify-end space-x-6">
          <li>
            <Link href="about" activeSection={activeSection}>
              About
            </Link>
          </li>
          <li>
            <Link href="experience" activeSection={activeSection}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="projects" activeSection={activeSection}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
