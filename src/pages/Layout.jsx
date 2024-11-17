import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ItemCard } from '../components/ItemCard'
import { experiences } from '../../src/data/experience'
import { projects } from '../data/projects'

export function Layout() {
  return (
    <div className="leading-relaxed text-slate-400 antialiased selection:bg-emerald-300 selection:text-emerald-900">
      <div className="lg:flex lg:flex-col g:justify-between lg:gap-4">
        <Header />
        <main className="flex flex-col max-w-screen-md mx-auto">
          <Hero />
          <section id="experience" className="w-full px-4 scroll-mt-24">
            <h2 className="text-xl sm:text-4xl font-bold mt-12 mb-6">
              Experience
            </h2>
            {experiences.map((ex, index) => {
              return (
                <ItemCard
                  key={index}
                  title={ex.title}
                  date={ex.date}
                  description={ex.description}
                  tags={ex.tags}
                  link={ex.link}
                />
              )
            })}
            <a
              href="/Resume-Juan-Fco-Losa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-center text-xl sm:text-2xl font-bold text-emerald-600 hover:text-emerald-300 transition-colors duration-200"
            >
              View my resume -{'>'}
            </a>
          </section>
          <section id="projects" className="w-full px-4 scroll-mt-24">
            <h2 className="text-xl sm:text-4xl font-bold mt-12 mb-6">
              Projects
            </h2>
            {projects.map((project, index) => {
              return (
                <ItemCard
                  key={index}
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                />
              )
            })}
          </section>
        </main>
      </div>
    </div>
  )
}
