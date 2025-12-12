'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export function SkillsMatrix() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Technical Skills
        </h2>

        <div className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold">Domain</th>
                  <th className="px-6 py-4 text-left font-semibold">Skills</th>
                  <th className="px-6 py-4 text-left font-semibold">Level</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(skills).map(([domain, data], index) => (
                  <motion.tr
                    key={domain}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold">{domain}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {data.items.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-500 rounded-md font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          data.level === 'Advanced'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}
                      >
                        {data.level}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
