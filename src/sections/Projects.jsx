import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";

export function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 flex justify-center"
    >
      <Container>
        <SectionHeading
          // eyebrow="Work"
          title="Projects"
          description="Here are some of the projects I’ve built to strengthen my frontend development skills. Each project reflects my learning journey and my ability to apply concepts in real-world scenarios."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
