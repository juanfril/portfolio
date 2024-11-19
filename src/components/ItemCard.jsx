import { Tags } from './Tags'

export function ItemCard({
  title,
  description,
  date,
  tags,
  link,
  notAvailableReason
}) {
  return (
    <a
      href={link ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center p-4 mb-4 border-none rounded-2xl hover:bg-slate-900/80 duration-200"
    >
      <p className="text-gray-500 mb-4">{date}</p>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      {!link && <p className="text-amber-400 mb-4">{notAvailableReason}</p>}
      <section className="flex flex-wrap gap-2 justify-center items-center p-3">
        {tags.map((tag, index) => {
          return <Tags key={index} tag={tag} />
        })}
      </section>
    </a>
  )
}
