import { Container } from "./Container";

export function Footer({ name = "Your Name" }) {
  return (
    <footer className="border-t border-orange-200 bg-white flex justify-center">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <a className="text-slate-700 hover:text-slate-900" href="#top">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
