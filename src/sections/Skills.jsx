import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { SkillPill } from '../components/SkillPill'

export function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-20 bg-white py-16 sm:py-20 flex justify-center">
      <Container>
        <SectionHeading
          // eyebrow="Toolkit"
          title="Skills"
          // description="Core technologies I use to build modern, responsive interfaces."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <SkillPill key={s}>{s}</SkillPill>
          ))}
        </div>
      </Container>
    </section>
  )
}

