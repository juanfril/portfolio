import { Tags } from './Tags'

export function ItemCard({ title, description, date, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center p-4 mb-4 rounded-lg border border-gray-200 hover:border-primary"
    >
      <p className="text-gray-400 mb-4">{date}</p>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <section className="flex flex-wrap gap-2 justify-center items-center p-3">
        {tags.map((tag, index) => {
          return <Tags key={index} tag={tag} />
        })}
      </section>
    </a>
  )
}
