'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <>
      {/* HERO - BLACK */}
      <section className="section-dark section-padding">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-small text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Link>
            <p className="text-small text-white/60 mb-6">Work</p>
            <h1 className="text-massive text-white">
              PROJECTS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS - ALTERNATING */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0
        const num = String(index + 1).padStart(2, '0')

        return (
          <section
            key={project.id}
            id={project.id}
            className={`${isEven ? 'section-light' : 'section-dark'} section-padding`}
          >
            <div className="container-lg">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Header */}
                <div className="grid lg:grid-cols-4 gap-8 mb-12">
                  <div>
                    <span className={`text-display-lg ${isEven ? 'text-black/20' : 'text-white/20'}`}>
                      {num}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className={`text-small ${isEven ? 'text-muted' : 'text-white/60'}`}>
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className={`text-small px-3 py-1 ${isEven ? 'bg-black text-white' : 'bg-white text-black'
                          }`}>
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className={`text-display-lg mb-4 ${isEven ? 'text-black' : 'text-white'}`}>
                      {project.title}
                    </h2>
                    <p className={`text-body-xl mb-8 ${isEven ? 'text-black/70' : 'text-white/70'}`}>
                      {project.tagline}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${isEven ? 'btn-outline-dark' : 'btn-outline-light'}`}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${isEven ? 'btn-dark' : 'btn-light'}`}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="grid lg:grid-cols-4 gap-8 mb-12">
                  <p className={`text-small ${isEven ? 'text-muted' : 'text-white/60'}`}>About</p>
                  <p className={`lg:col-span-3 text-body-xl ${isEven ? 'text-black/80' : 'text-white/80'}`}>
                    {project.longDescription}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid lg:grid-cols-4 gap-8 mb-12">
                  <p className={`text-small ${isEven ? 'text-muted' : 'text-white/60'}`}>Metrics</p>
                  <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className={`text-stat text-3xl ${isEven ? 'text-black' : 'text-white'}`}>
                          {metric.value}
                        </p>
                        <p className={`text-small mt-2 ${isEven ? 'text-muted' : 'text-white/60'}`}>
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="grid lg:grid-cols-4 gap-8">
                  <p className={`text-small ${isEven ? 'text-muted' : 'text-white/60'}`}>Stack</p>
                  <div className="lg:col-span-3 flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 text-small ${isEven
                            ? 'bg-black text-white'
                            : 'bg-white text-black'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}
    </>
  )
}
