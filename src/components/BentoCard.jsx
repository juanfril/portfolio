import { useRef } from 'react'

export function BentoCard({
  children,
  className = '',
  interactive = false,
  onClick,
  as = 'div'
}) {
  const cardRef = useRef(null)

  const handleMouseMove = event => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }

  const Component = as

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`bento-card ${interactive ? 'bento-card-interactive' : ''} ${className}`}
    >
      {children}
    </Component>
  )
}
