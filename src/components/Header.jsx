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
        <h1 className="text-3xl sm:text-6xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-200 bg-clip-text text-transparent">
          Juan Fco. Losa
        </h1>
        <p className="lg:text-lg md:text-sm sm:text-sm">
          Full Stack Developer focused on building amazing digital products.
        </p>
      </section>

      <div className="flex flex-col md:items-end space-y-4 mt-4 md:mt-0">
        <div className="flex space-x-4">
          <a
            href={`${import.meta.env.BASE_URL}Resume-Juan-Fco-Losa.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 text-slate-400 transition-colors duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="w-8 h-8 md:w-8"
            >
              <path d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8m4 18V9h-5V4H6v16h12m-6-1l-4-4h2.5v-3h3v3H16l-4 4z" />
            </svg>
          </a>
          <a
            href="https://github.com/juanfril"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 text-slate-400 transition-colors duration-200"
          >
            <svg
              class="w-8 h-8 md:w-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-fco-losa-marquez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 text-slate-400 transition-colors duration-200"
          >
            <svg
              class="w-8 h-8 md:w-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clip-rule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>
        </div>
        <nav className="hidden sm:block" aria-label="In-page jump links">
          <ul className="flex justify-center md:justify-end space-x-6 sm:space-x-0">
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
      </div>
    </header>
  )
}
