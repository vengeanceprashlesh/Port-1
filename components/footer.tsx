import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { socials } from '@/lib/data'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-light border-t border-black/10">
      <div className="container-lg section-padding-sm">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-display-md text-black mb-4">PRASHLESH</p>
            <p className="text-body text-muted max-w-sm">
              Full-Stack Developer & Blockchain Engineer based in India.
              Creating digital experiences that matter.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-small text-muted mb-6">Pages</p>
            <ul className="space-y-3">
              <li><Link href="/" className="text-title text-black link-underline">Home</Link></li>
              <li><Link href="/about" className="text-title text-black link-underline">About</Link></li>
              <li><Link href="/projects" className="text-title text-black link-underline">Work</Link></li>
              <li><Link href="/contact" className="text-title text-black link-underline">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-small text-muted mb-6">Connect</p>
            <ul className="space-y-3">
              <li>
                <a 
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-title text-black link-underline"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a 
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-title text-black link-underline"
                >
                  LinkedIn <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${socials.email}`}
                  className="text-title text-black link-underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-black/10">
          <p className="text-small text-muted">
            © {currentYear} Prashlesh Pratap Singh
          </p>
          <p className="text-small text-muted mt-2 md:mt-0">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
