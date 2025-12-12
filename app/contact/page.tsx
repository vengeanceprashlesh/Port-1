'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ExternalLink, Send, MapPin, Clock } from 'lucide-react'
import { socials } from '@/lib/data'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setStatus('success')
    setTimeout(() => {
      setStatus('idle')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 gradient-text">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          Looking for internships, freelance work, or collaboration opportunities. 
          Let's build something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-cyan-500 mr-3 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href={`mailto:${socials.email}`}
                    className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
                  >
                    {socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-500 mr-3 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">India</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-cyan-500 mr-3 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Timezone</p>
                  <p className="text-sm text-muted-foreground">IST (GMT+5:30)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold mb-6">Social Links</h2>
            
            <div className="space-y-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5 mr-3 text-cyan-500" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-3 text-cyan-500" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-3 text-cyan-500" />
                <span className="font-medium">Fiverr</span>
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-3 text-cyan-500" />
                <span className="font-medium">LeetCode</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent rounded-lg border border-border focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent rounded-lg border border-border focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent rounded-lg border border-border focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-accent rounded-lg border border-border focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity neon-glow flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
