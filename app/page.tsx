import { Hero } from '@/components/hero'
import { StatsRow } from '@/components/stats-row'
import { ProjectCard } from '@/components/project-card'
import { SkillsMatrix } from '@/components/skills-matrix'
import { GitHubWidget } from '@/components/github-widget'
import { projects } from '@/lib/data'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      <Hero />
      <StatsRow />

      {/* Featured Projects */}
      <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building AI security tools, full-stack applications, and ML models. 
            Every project ships with real metrics and production deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/projects"
            className="inline-block px-8 py-3 glass-card font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            View All Projects →
          </a>
        </div>
      </section>

      <SkillsMatrix />
      <GitHubWidget />
    </>
  )
}
