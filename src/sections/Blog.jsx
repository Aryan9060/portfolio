import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { BlogCard } from '../components/BlogCard'

export function Blog({ posts }) {
  return (
    <section
      id="blog"
      className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 flex justify-center"
    >
      <Container>
        <SectionHeading
          // eyebrow="Writing"
          title="Blog"
          description="Notes and articles I’ve written while learning and building."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.url} post={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}

