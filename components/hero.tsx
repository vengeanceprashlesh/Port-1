'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { socials } from '@/lib/data'

export function Hero() {
  return (
    <section className="section-dark min-h-screen flex flex-col">
      {/* Header */}
      <header className="container-lg py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-small text-white/60 hover:text-white transition-colors">
            Prashlesh © 2025
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-small text-white link-underline">Home</Link>
            <Link href="/about" className="text-small text-white/60 hover:text-white link-underline">About</Link>
            <Link href="/projects" className="text-small text-white/60 hover:text-white link-underline">Work</Link>
            <Link href="/contact" className="text-small text-white/60 hover:text-white link-underline">Contact</Link>
          </nav>
          <a 
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-white/60 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-small text-white/60 mb-6">Full-Stack Developer</p>
              <h1 className="text-massive text-white mb-8">
                PRASHLESH
              </h1>
              <p className="text-body-xl text-white/70 max-w-md mb-10">
                Building modern web applications and blockchain solutions. 
                CS student at Woxsen University.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="btn btn-light">
                  View Work
                </Link>
                <Link href="/contact" className="btn btn-outline-light">
                  Contact
                </Link>
              </div>
            </motion.div>

            {/* Right - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] bg-white/5 overflow-hidden"
            >
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-small text-white/30">Your Photo</p>
              </div>
              {/*
              <Image 
                src="/your-photo.jpg"
                alt="Prashlesh"
                fill
                className="object-cover grayscale"
              />
              */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="container-lg py-8"
      >
        <div className="flex justify-between items-center text-white/40">
          <p className="text-small">Based in India</p>
          <p className="text-small">Scroll to explore</p>
        </div>
      </motion.div>
    </section>
  )
}
