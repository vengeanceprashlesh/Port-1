'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react'
import { socials } from '@/lib/data'
import { useEffect, useState } from 'react'
import LightPillar from '@/components/ui/light-pillar'

const titles = [
  'Full-Stack Developer building modern web apps',
  'Blockchain Developer exploring Web3',
  'CS Student at Woxsen University',
  'Smart India Hackathon Participant',
]

export function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative min-h-screen">
      <div className="absolute inset-0 w-full h-full -z-10">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#916990"
          intensity={1.3}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          mixBlendMode="screen"
          interactive={false}
        />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Prashlesh</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-16 mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            {titles[currentTitle]}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Computer Science student at Woxsen University passionate about Full-Stack Development,
          Blockchain, and building products that matter. Currently working on AURA & HerbX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity neon-glow"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 glass-card font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={socials.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
            aria-label="Portfolio"
          >
            <ExternalLink className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#stats"
            className="inline-flex items-center text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
