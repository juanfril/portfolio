import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ItemCard } from '../components/ItemCard'
import { experiences } from '../../src/data/experience'
import { projects } from '../data/projects'

export function Layout() {
  return (
    <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-emerald-300 selection:text-emerald-900">
      <div id="__next">
        <div className="group/spotlight relative">
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
              background:
                'radial-gradient(600px at 1081px 1569px, rgba(29, 78, 216, 0.15), transparent 80%)'
            }}
          />
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <a
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </a>
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header />
              <Hero />
              <section id="experience" className="w-5/6 ">
                <h2 className="text-xl sm:text-4xl font-bold mb-8">
                  Experience
                </h2>
                {experiences.map((ex, index) => {
                  console.log(`ex: ${JSON.stringify(ex)}`)
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
              </section>
              <section id="projects" className="w-5/6 mt-4">
                <h2 className="text-xl sm:text-4xl font-bold mb-8">Projects</h2>
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
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
