'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
  variant?: 'dark' | 'light'
}

export function ProjectCard({ project, index, variant = 'light' }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0')
  const isDark = variant === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/projects#${project.id}`}
        className={`block group p-8 md:p-12 transition-all duration-300 ${isDark
            ? 'bg-white/5 hover:bg-white/10'
            : 'bg-black/5 hover:bg-black/10'
          }`}
      >
        {/* Top Row */}
        <div className="flex justify-between items-start mb-12">
          <span className={`text-display-lg ${isDark ? 'text-white/20' : 'text-black/20'}`}>
            {num}
          </span>
          <span className={`text-small ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            {project.category}
          </span>
        </div>

        {/* Content */}
        <h3 className={`text-display-md mb-4 group-hover:translate-x-2 transition-transform ${isDark ? 'text-white' : 'text-black'
          }`}>
          {project.title}
        </h3>

        <p className={`text-body-xl mb-8 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
          {project.tagline}
        </p>

        {/* Link */}
        <div className={`flex items-center gap-2 text-small ${isDark ? 'text-white' : 'text-black'
          }`}>
          <span>View Project</span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}
