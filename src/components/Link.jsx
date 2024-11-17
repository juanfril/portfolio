export function Link({ children, href, activeSection }) {
  return (
    <a
      className={`group flex flex-col items-center ${activeSection === href ? 'text-slate-200' : ''}`}
      href={`#${href}`}
    >
      <span className=" text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 transition-colors duration-200 group-focus-visible:text-slate-200">
        {children}
      </span>
      <span
        className={`h-px mt-1 mx-8 w-8 transition-all duration-200 ${
          activeSection === href
            ? 'w-16 bg-slate-200'
            : 'w-8 bg-slate-600 group-hover:w-12 group-hover:bg-slate-200'
        }`}
      />
    </a>
  )
}
