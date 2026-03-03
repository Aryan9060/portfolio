import { useEffect, useMemo, useState } from "react";
import { Container } from "./Container";

export function Navbar({ name = "Portfolio" }) {
  const links = useMemo(
    () => [
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#blog", label: "Blog" },
      { href: "#contact", label: "Contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-200/80 bg-white/80 backdrop-blur flex justify-center">
      <Container className="flex h-16 mx-5 items-center justify-between ">
        <a href="#top" className="font-semibold tracking-tight text-slate-900">
          {name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 hover:shadow"
          >
            Let’s talk
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-orange-50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-slate-900/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 right-0 z-50 border-b border-orange-200 bg-white">
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-orange-50"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-1 rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 hover:shadow"
                  onClick={() => setOpen(false)}
                >
                  Let’s talk
                </a>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
