import { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function Contact({ profile }) {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const toEmail = profile?.links?.email || ''
  const canMail = useMemo(() => Boolean(toEmail), [toEmail])

  function onChange(e) {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()

    if (!form.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' })
      return
    }
    if (!isEmail(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' })
      return
    }
    if (form.message.trim().length < 10) {
      setStatus({
        type: 'error',
        message: 'Message should be at least 10 characters.',
      })
      return
    }

    setStatus({
      type: 'success',
      message: canMail
        ? 'Opening your email app…'
        : 'Saved! (Add your email in src/data/portfolio.js to enable mailto.)',
    })

    if (canMail) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      )
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
    }

    setForm({ name: '', email: '', message: '' })
  }

  const statusStyles =
    status.type === 'error'
      ? 'border-rose-200 bg-rose-50 text-rose-800'
      : status.type === 'success'
        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
        : 'hidden'

  return (
    <section id="contact" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 flex justify-center">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          description="Send a message and I’ll get back to you soon."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Quick links
              </h3>
              <div className="mt-4 space-y-3 text-sm">
              <a
                  className="block font-semibold text-slate-700 hover:text-orange-600"
                  href={profile.links.X}
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>
                <a
                  className="block font-semibold text-slate-700 hover:text-orange-600"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="block font-semibold text-slate-700 hover:text-orange-600"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="block font-semibold text-slate-700 hover:text-orange-600"
                  href={`tel:${profile.links.mobile}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Call Me :  {profile.links.mobile}
                </a>
                
                
                {toEmail ? (
                  <a
                    className="block font-semibold text-slate-700 hover:text-orange-600"
                    href={`mailto:${toEmail}`}
                  >
                    {toEmail}
                  </a>
                ) : (
                  <p className="text-slate-500">
                    Add your email in <code>src/data/portfolio.js</code>.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="h-11 rounded-xl border border-orange-300 bg-white px-3 text-slate-900 outline-none ring-orange-500/30 placeholder:text-slate-400 focus:ring-4"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="h-11 rounded-xl border border-orange-300 bg-white px-3 text-slate-900 outline-none ring-orange-500/30 placeholder:text-slate-400 focus:ring-4"
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="resize-none rounded-xl border border-orange-300 bg-white px-3 py-2 text-slate-900 outline-none ring-orange-500/30 placeholder:text-slate-400 focus:ring-4"
                  placeholder="Tell me about your project…"
                />
              </label>

              <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p
                  className={`rounded-xl border px-3 py-2 text-sm ${statusStyles}`}
                  role="status"
                >
                  {status.message}
                </p>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 hover:shadow"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

