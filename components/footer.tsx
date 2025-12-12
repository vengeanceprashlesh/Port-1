import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { socials } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            <p>© 2025 CSE Undergrad Portfolio. Built with Next.js 15 & Tailwind CSS.</p>
            <p className="mt-1">Available for internships • IST timezone</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={socials.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Fiverr"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
