'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, GitFork, Star, GitCommit, Calendar, Code2, ExternalLink, Activity, ArrowUpRight } from 'lucide-react'
import { socials } from '@/lib/data'
import { useState, useEffect, useMemo } from 'react'

// Generate realistic GitHub contribution data for the last year
const generateContributionData = () => {
  const data: number[][] = []

  for (let week = 0; week < 52; week++) {
    const weekData: number[] = []
    for (let day = 0; day < 7; day++) {
      const dayOfWeek = day
      const weekFactor = Math.sin((week / 52) * Math.PI * 2) * 0.3 + 0.7
      const dayFactor = dayOfWeek >= 1 && dayOfWeek <= 5 ? 1 : 0.3

      const seed = (week * 7 + day + 42) % 100
      const random = (seed * 9301 + 49297) % 233280 / 233280

      const baseActivity = random * weekFactor * dayFactor
      const contributions = baseActivity > 0.7 ? Math.floor(random * 12) + 5 :
        baseActivity > 0.4 ? Math.floor(random * 6) + 2 :
          baseActivity > 0.2 ? Math.floor(random * 3) + 1 : 0

      weekData.push(contributions)
    }
    data.push(weekData)
  }
  return data
}

// Mock recent activity data
const recentActivity = [
  { type: 'commit', repo: 'AURA', message: 'feat: Add 3D product viewer', time: '2 hours ago', icon: GitCommit },
  { type: 'star', repo: 'HerbX', message: 'Someone starred your repository', time: '5 hours ago', icon: Star },
  { type: 'commit', repo: 'ClarityFlow', message: 'fix: Resolve timer sync issue', time: '1 day ago', icon: GitCommit },
  { type: 'fork', repo: 'AURA', message: 'Repository was forked', time: '2 days ago', icon: GitFork },
  { type: 'commit', repo: 'HerbX', message: 'refactor: Optimize smart contracts', time: '3 days ago', icon: GitCommit },
]

// Programming languages with usage percentages
const languages = [
  { name: 'TypeScript', percentage: 45 },
  { name: 'JavaScript', percentage: 25 },
  { name: 'Solidity', percentage: 15 },
  { name: 'Python', percentage: 10 },
  { name: 'CSS', percentage: 5 },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function GitHubWidget() {
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number } | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<'contributions' | 'activity' | 'languages'>('contributions')

  const contributionData = useMemo(() => generateContributionData(), [])

  const totalContributions = useMemo(() => {
    return contributionData.flat().reduce((sum, val) => sum + val, 0)
  }, [contributionData])

  const currentStreak = useMemo(() => {
    let streak = 0
    for (let week = 51; week >= 0; week--) {
      for (let day = 6; day >= 0; day--) {
        if (contributionData[week][day] > 0) {
          streak++
        } else if (streak > 0) {
          return streak
        }
      }
    }
    return streak
  }, [contributionData])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-muted'
    if (count <= 2) return 'bg-foreground/20'
    if (count <= 5) return 'bg-foreground/40'
    if (count <= 8) return 'bg-foreground/60'
    return 'bg-foreground/80'
  }

  return (
    <section id="github" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="heading-lg mb-4">GitHub Activity</h2>
              <p className="body-lg max-w-xl">
                Building in public, one commit at a time.
              </p>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              View Profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-border rounded-lg">
              <p className="stat-number">{totalContributions}</p>
              <p className="stat-label">Contributions</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <p className="stat-number">{currentStreak}</p>
              <p className="stat-label">Day Streak</p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <p className="stat-number">17+</p>
              <p className="stat-label">Repositories</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-8 mb-8 border-b border-border">
            {[
              { id: 'contributions' as const, label: 'Contribution Graph', icon: Calendar },
              { id: 'activity' as const, label: 'Recent Activity', icon: Activity },
              { id: 'languages' as const, label: 'Languages', icon: Code2 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 text-sm font-medium transition-all border-b-2 -mb-px ${activeTab === tab.id
                    ? 'border-foreground text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'contributions' && (
              <motion.div
                key="contributions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Contribution Graph */}
                <div className="overflow-x-auto hide-scrollbar">
                  <div className="min-w-[800px] p-6 border border-border rounded-lg">
                    {/* Month labels */}
                    <div className="flex mb-2 ml-10">
                      {months.map((month, i) => (
                        <div key={month} className="flex-1 text-xs text-muted-foreground">
                          {i % 2 === 0 ? month : ''}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-1">
                      {/* Day labels */}
                      <div className="flex flex-col gap-1 mr-2">
                        {days.map((day, i) => (
                          <div
                            key={day}
                            className="h-3 text-xs text-muted-foreground flex items-center justify-end w-8"
                          >
                            {i % 2 === 1 ? day : ''}
                          </div>
                        ))}
                      </div>

                      {/* Contribution cells */}
                      {contributionData.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                          {week.map((count, dayIndex) => (
                            <motion.div
                              key={`${weekIndex}-${dayIndex}`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: isLoaded ? (weekIndex * 7 + dayIndex) * 0.001 : 0,
                                duration: 0.2
                              }}
                              onMouseEnter={() => setHoveredCell({ week: weekIndex, day: dayIndex })}
                              onMouseLeave={() => setHoveredCell(null)}
                              className={`w-3 h-3 rounded-sm ${getContributionColor(count)} cursor-pointer transition-all duration-200 hover:ring-1 hover:ring-foreground`}
                              title={`${count} contributions`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{totalContributions}</span> contributions in the last year
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Less</span>
                        <div className="flex gap-1">
                          {[0, 1, 3, 6, 10].map((level) => (
                            <div key={level} className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`} />
                          ))}
                        </div>
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'activity' && (
              <motion.div
                key="activity"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      <activity.icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{activity.message}</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">{activity.repo}</span>
                          <span className="mx-2">•</span>
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'languages' && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6 border border-border rounded-lg">
                  {/* Language bar */}
                  <div className="h-3 rounded-full overflow-hidden flex bg-muted mb-8">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.percentage}%` }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="h-full bg-foreground"
                        style={{ opacity: 1 - (index * 0.15) }}
                      />
                    ))}
                  </div>

                  {/* Language legend */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className="w-3 h-3 rounded-full bg-foreground"
                          style={{ opacity: 1 - (index * 0.15) }}
                        />
                        <div>
                          <p className="font-medium text-sm">{lang.name}</p>
                          <p className="text-xs text-muted-foreground">{lang.percentage}%</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
