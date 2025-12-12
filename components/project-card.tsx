'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center">
        <p className="text-4xl font-bold text-white/20 font-mono">
          {project.title.split(' ').map(word => word[0]).join('')}
        </p>
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-semibold rounded-full mb-3">
          {project.category}
        </div>

        <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {project.tagline}
        </p>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-4 mb-4">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <p className="text-xl font-bold text-cyan-500">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-accent rounded-md font-mono"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs px-2 py-1 bg-accent rounded-md font-mono">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <Link
            href={`/projects#${project.id}`}
            className="flex items-center text-cyan-500 hover:underline text-sm font-semibold"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-500 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
