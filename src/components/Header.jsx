import { Link } from './Link'

export function Header () {
  return (
    <header className='text-white text-center'>
      <section className='flex flex-col justify-start m-7'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Juan Fco. Losa</h1>
        <p className='text-lg sm:text-xl text-gray-400'>
          Full Stack Developer focused on building amazing digital experiences.
        </p>
      </section>
      <ul className='flex flex-row justify-center items-center list-none m-7'>
        <li className='mr-4'>
          <Link href='#about'>About</Link>
        </li>
        <li className='mr-4'>
          <Link href='#experience'>Experience</Link>
        </li>
        <li className='mr-4'>
          <Link href='#projects'>Projects</Link>
        </li>
      </ul>
    </header>
  )
}
