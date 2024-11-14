export function Link({ children, href }) {
  return (
    <a href={href} className="text-teal-400 hover:text-teal-500 transition">
      {children}
    </a>
  )
}
