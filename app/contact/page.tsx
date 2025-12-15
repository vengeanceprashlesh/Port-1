'use client'

import { motion } from 'framer-motion'
import { Send, ArrowUpRight } from 'lucide-react'
import { socials } from '@/lib/data'
import { useState, useEffect } from 'react'

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
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
            <p className="text-small text-white/60 mb-6">Contact</p>
            <h1 className="text-massive text-white">
              LET'S TALK
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO - WHITE */}
      <section className="section-light section-padding">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Email */}
              <div className="mb-12">
                <p className="text-small text-muted mb-4">Email</p>
                <a
                  href={`mailto:${socials.email}`}
                  className="text-display-md text-black link-underline"
                >
                  {socials.email}
                </a>
              </div>

              {/* Location & Time */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-small text-muted mb-4">Location</p>
                  <p className="text-title text-black">India</p>
                </div>
                <div>
                  <p className="text-small text-muted mb-4">Local Time</p>
                  <p className="text-title text-black font-mono">{localTime || '--:--'}</p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-small text-muted mb-6">Socials</p>
                <div className="flex flex-col gap-4">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-title text-black link-underline w-fit"
                  >
                    GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-title text-black link-underline w-fit"
                  >
                    LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-title text-black link-underline w-fit"
                  >
                    LeetCode <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="text-small text-muted block mb-4">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-black/20 py-4 text-title text-black focus:border-black focus:outline-none transition-colors placeholder:text-black/30"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-small text-muted block mb-4">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-black/20 py-4 text-title text-black focus:border-black focus:outline-none transition-colors placeholder:text-black/30"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-small text-muted block mb-4">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-black/20 py-4 text-title text-black focus:border-black focus:outline-none transition-colors resize-none placeholder:text-black/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-dark w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
