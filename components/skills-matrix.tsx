'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export function SkillsSection() {
  return (
    <section className="section-light section-padding border-t border-black/10">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-small text-muted mb-4">Expertise</p>
          <h2 className="text-display-lg text-black">Skills & Tools</h2>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([domain, data], index) => (
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-4 gap-6 py-8 border-t border-black/10"
            >
              <div>
                <p className="text-title text-black">{domain}</p>
                <p className="text-small text-muted mt-2">{data.level}</p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-3">
                {data.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 bg-black text-white text-small hover:bg-black/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
