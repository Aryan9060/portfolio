export function BlogCard({ post }) {
  return (
    <div className="group block rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md">

      {post.imageUrl ? (
        <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl border-b border-orange-200 bg-slate-100">
          <div className="aspect-[16/9]">
            <img
              src={post.imageUrl}
              alt=""
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 ">
          {post.title}
        </h3>
        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
          {post.source || 'Blog'}
        </span>
      </div>
      {post.description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {post.description}
        </p>
      ) : null}

      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="mt-4 text-sm font-semibold text-orange-600 ">
          <span className="hover:text-orange-700">Read article →</span>

        </div>
      </a>
    </div>
  )
}

