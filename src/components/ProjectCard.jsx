export function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {project.title}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          {project.liveUrl ? (
            <a
              className="text-sm font-semibold text-orange-600 hover:text-orange-700"
              href={project.liveUrl}
              target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
              rel={
                project.liveUrl.startsWith('http')
                  ? 'noreferrer'
                  : undefined
              }
            >
              Live
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              href={project.sourceUrl}
              target={
                project.sourceUrl.startsWith('http') ? '_blank' : undefined
              }
              rel={
                project.sourceUrl.startsWith('http')
                  ? 'noreferrer'
                  : undefined
              }
            >
              Code
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {project.description}
      </p>

      {project.tags?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

