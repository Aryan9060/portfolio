import { Container } from "../components/Container";

export function Hero({ profile }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white flex justify-center"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-orange-100/70 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-16 sm:py-20 min-h-dvh">
        <div className="mx-auto max-w-3xl text-center">
          {profile.imageUrl ? (
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
                  loading="lazy"
                />
              </div>
            </div>
          ) : null}
          <p className="text-sm font-semibold tracking-wider text-orange-600">
            {profile.title} · {profile.location}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Hi, I’m {profile.name}.
          </h1>
          <p className="mt-5 py-10 text-base leading-7 text-slate-600 sm:text-lg">
            {profile.summary}
          </p>
         

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 hover:shadow"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-orange-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-orange-400 hover:bg-orange-50 dark:hover:text-black"
            >
              Contact me
            </a>
          </div>

          {profile.highlights?.length ? (
            <ul className="mt-10 grid gap-3 text-left sm:grid-cols-3">
              {profile.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-2xl border border-orange-200 bg-white/70 p-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {h}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
