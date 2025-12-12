'use client'

import { motion } from 'framer-motion'
import { Github, Shield, Briefcase, Code } from 'lucide-react'
import { stats } from '@/lib/data'

const iconMap = {
  github: Github,
  shield: Shield,
  briefcase: Briefcase,
  code: Code,
}

export function StatsRow() {
  return (
    <section id="stats" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center rounded-xl hover:scale-105 transition-transform"
            >
              <Icon className="h-8 w-8 mx-auto mb-3 text-cyan-500" />
              <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
