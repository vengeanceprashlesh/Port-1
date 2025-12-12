'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft, Check, AlertCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-cyan-500 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-5xl font-bold mb-4 gradient-text">All Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Detailed case studies of my work in AI/ML security, full-stack development, and client projects.
          Each project includes architecture diagrams, metrics, challenges, and learnings.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-lg text-muted-foreground">{project.tagline}</p>
                </div>
                <div className="flex items-center space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glass rounded-lg hover:bg-accent transition-colors flex items-center"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="bg-accent/50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-cyan-500 mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-1 h-5 bg-cyan-500 mr-3 rounded"></span>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent rounded-lg font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-1 h-5 bg-cyan-500 mr-3 rounded"></span>
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-1 h-5 bg-cyan-500 mr-3 rounded"></span>
                  Challenges & Solutions
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-1 h-5 bg-cyan-500 mr-3 rounded"></span>
                  Key Learnings
                </h3>
                <ul className="space-y-2">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
