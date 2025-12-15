import { Hero } from '@/components/hero'
import { StatsSection } from '@/components/stats-row'
import { ProjectCard } from '@/components/project-card'
import { SkillsSection } from '@/components/skills-matrix'
import { projects } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      {/* SECTION 1: Hero - BLACK */}
      <Hero />

      {/* SECTION 2: Stats - WHITE */}
      <StatsSection />

      {/* SECTION 3: Featured Projects - BLACK */}
      <section className="section-dark section-padding">
        <div className="container-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-small text-white/60 mb-4">Selected Work</p>
              <h2 className="text-display-lg text-white">Projects</h2>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-small text-white link-underline"
            >
              All Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Skills - WHITE */}
      <SkillsSection />

      {/* SECTION 5: CTA - BLACK */}
      <section className="section-dark section-padding">
        <div className="container-lg text-center">
          <p className="text-small text-white/60 mb-6">Ready to collaborate?</p>
          <h2 className="text-display-lg text-white mb-8">
            Let's Work<br />Together
          </h2>
          <Link href="/contact" className="btn btn-light">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
