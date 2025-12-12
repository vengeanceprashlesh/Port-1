'use client'

import { motion } from 'framer-motion'
import { Github, GitFork, Star } from 'lucide-react'
import { socials } from '@/lib/data'

export function GitHubWidget() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          GitHub Activity
        </h2>

        <div className="glass-card rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Info */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center mb-4">
                <Github className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">@yourusername</h3>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline text-sm"
              >
                View Profile →
              </a>
            </div>

            {/* Stats Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
              <div className="text-center p-4 bg-accent/50 rounded-lg">
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-sm text-muted-foreground">Repositories</p>
              </div>
              <div className="text-center p-4 bg-accent/50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <p className="text-3xl font-bold gradient-text">50+</p>
                </div>
                <p className="text-sm text-muted-foreground">Stars Earned</p>
              </div>
              <div className="text-center p-4 bg-accent/50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <GitFork className="h-5 w-5 text-cyan-500 mr-1" />
                  <p className="text-3xl font-bold gradient-text">20+</p>
                </div>
                <p className="text-sm text-muted-foreground">Forks</p>
              </div>
              <div className="text-center p-4 bg-accent/50 rounded-lg col-span-2 md:col-span-3">
                <p className="text-2xl font-bold gradient-text mb-1">
                  100+ Day Streak 🔥
                </p>
                <p className="text-sm text-muted-foreground">
                  Consistent contributions • Daily DSA practice
                </p>
              </div>
            </div>
          </div>

          {/* Contribution Graph Placeholder */}
          <div className="mt-8 p-6 bg-accent/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">Recent Contributions</p>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="space-y-1">
                  {Array.from({ length: 7 }).map((_, day) => {
                    // Deterministic pattern based on week and day to avoid hydration mismatch
                    const seed = (week * 7 + day) % 10
                    const intensity = seed > 6 ? 3 : seed > 3 ? 2 : seed > 1 ? 1 : 0
                    return (
                      <div
                        key={day}
                        className={`w-3 h-3 rounded-sm ${intensity === 3
                            ? 'bg-cyan-500'
                            : intensity === 2
                              ? 'bg-cyan-500/60'
                              : intensity === 1
                                ? 'bg-cyan-500/30'
                                : 'bg-accent'
                          }`}
                        title={`${intensity * 3} contributions`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
