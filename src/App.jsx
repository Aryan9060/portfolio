import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { blogs, profile, projects, skills } from './data/portfolio'
import { Contact } from './sections/Contact'
import { Blog } from './sections/Blog'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <div className="min-h-dvh bg-white  text-slate-900">
      <Navbar name={profile.name} />
      <main className='px-10'>
        <Hero profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Blog posts={blogs} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </div>
  )
}
