'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

export function StatsSection() {
  return (
    <section className="section-light section-padding">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-small text-muted mb-4">Numbers</p>
          <h2 className="text-display-lg text-black">At a Glance</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-black/10 pt-8"
            >
              <p className="text-stat text-black">{stat.value}</p>
              <p className="text-small text-muted mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
