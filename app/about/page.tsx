'use client'

import { motion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'
import { timeline, socials } from '@/lib/data'
import Link from 'next/link'

export default function AboutPage() {
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
            <p className="text-small text-white/60 mb-6">About</p>
            <h1 className="text-massive text-white mb-8">
              ABOUT ME
            </h1>
            <p className="text-body-xl text-white/70 max-w-2xl mb-10">
              I'm Prashlesh Pratap Singh, a Computer Science student at Woxsen University
              passionate about building modern web applications and blockchain solutions.
            </p>
            <a href="/resume.pdf" download className="btn btn-light">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* INFO GRID - WHITE */}
      <section className="section-light section-padding">
        <div className="container-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-black/5"
            >
              <p className="text-small text-muted mb-4">Location</p>
              <p className="text-display-md text-black">India</p>
              <p className="text-body text-muted mt-2">IST Timezone</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-black/5"
            >
              <p className="text-small text-muted mb-4">Status</p>
              <p className="text-display-md text-black">Available</p>
              <p className="text-body text-muted mt-2">Open for internships</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-black/5"
            >
              <p className="text-small text-muted mb-4">Education</p>
              <p className="text-display-md text-black">B.Tech</p>
              <p className="text-body text-muted mt-2">Computer Science</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY - BLACK */}
      <section className="section-dark section-padding">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-small text-white/60 mb-6">Story</p>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-body-xl text-white/80">
                My journey in tech started with curiosity about how websites work.
                Today, I build full-stack applications and explore blockchain technology
                to create solutions that matter.
              </p>
              <p className="text-body-xl text-white/80">
                Currently working on AURA - a modern e-commerce platform, and HerbX -
                a blockchain supply chain system. I participated in Smart India Hackathon
                and I'm certified in UX Design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE - WHITE */}
      <section className="section-light section-padding">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-small text-muted mb-4">Journey</p>
            <h2 className="text-display-lg text-black">Timeline</h2>
          </motion.div>

          <div className="border-t border-black/10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-4 gap-6 py-8 border-b border-black/10"
              >
                <p className="text-stat text-black/20">{item.year}</p>
                <div className="md:col-span-3">
                  <p className="text-title text-black mb-2">{item.title}</p>
                  <p className="text-body text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - BLACK */}
      <section className="section-dark section-padding">
        <div className="container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-small text-white/60 mb-6">Interested?</p>
            <Link href="/contact" className="text-display-lg text-white link-underline">
              Let's Connect <ArrowUpRight className="inline-block h-12 w-12" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
