import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ItemCard } from '../components/ItemCard'
import { experiences } from '../../src/data/experience'
import { projects } from '../data/projects'

export function Layout () {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-bl from-primary to-secondary'>
      <Header />
      <Hero />
      <section id='experience' className='w-5/6 text-white'>
        <h2 className='text-xl sm:text-4xl font-bold mb-8'>Experience</h2>
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
      <section id='projects' className='w-5/6 text-white mt-4'>
        <h2 className='text-xl sm:text-4xl font-bold mb-8'>Projects</h2>
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
  )
}
