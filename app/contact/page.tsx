'use client'

import { motion } from 'framer-motion'
import { Send, ArrowUpRight, ArrowLeft } from 'lucide-react'
import { socials } from '@/lib/data'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      setLocalTime(time)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:${socials.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <main className="md:px-12 max-w-[1400px] mr-auto ml-auto pt-40 pr-6 pl-6 pb-20 bg-neutral-950 min-h-screen">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-12 transition-colors animate-fade-in"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Contact</p>
          <h1 className="md:text-8xl leading-[0.95] text-6xl font-medium text-white tracking-tight">
            Let's Talk
          </h1>
        </motion.section>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left - Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111] rounded-[2rem] p-8 card-hover"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-4">Email</p>
              <a
                href={`mailto:${socials.email}`}
                className="text-2xl md:text-3xl font-medium text-white hover:text-neutral-300 transition-colors"
              >
                {socials.email}
              </a>
            </motion.div>

            {/* Location & Time */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#111] rounded-[2rem] p-8 card-hover"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-4">Location</p>
                <p className="text-xl font-medium text-white">India</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#111] rounded-[2rem] p-8 card-hover"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-4">Local Time</p>
                <p className="text-xl font-medium text-white font-mono">{localTime || '--:--'}</p>
              </motion.div>
            </div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#111] rounded-[2rem] p-8 card-hover"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Socials</p>
              <div className="flex flex-col gap-4">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg text-white hover:text-neutral-300 transition-colors"
                >
                  GitHub <ArrowUpRight className="h-5 w-5" />
                </a>
                <div className="h-px bg-neutral-800"></div>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg text-white hover:text-neutral-300 transition-colors"
                >
                  LinkedIn <ArrowUpRight className="h-5 w-5" />
                </a>
                <div className="h-px bg-neutral-800"></div>
                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg text-white hover:text-neutral-300 transition-colors"
                >
                  LeetCode <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#111] rounded-[2rem] p-8 md:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-8">Send a Message</p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-neutral-500 block mb-4">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-neutral-700 py-4 text-lg text-white focus:border-white focus:outline-none transition-colors placeholder:text-neutral-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-neutral-500 block mb-4">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-neutral-700 py-4 text-lg text-white focus:border-white focus:outline-none transition-colors placeholder:text-neutral-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-neutral-500 block mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-neutral-700 py-4 text-lg text-white focus:border-white focus:outline-none transition-colors resize-none placeholder:text-neutral-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  )
}
