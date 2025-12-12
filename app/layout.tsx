import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CSE Undergrad Portfolio | AI/ML Developer',
  description: 'Portfolio of a 2nd-year CSE student specializing in AI/ML security, LLM development, and full-stack web applications. Building secure AI systems daily.',
  keywords: ['CSE', 'AI', 'ML', 'LLM Security', 'Next.js', 'Python', 'Portfolio', 'Internship'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'CSE Undergrad Portfolio | AI/ML Developer',
    description: 'Building secure AI systems and full-stack applications. 15+ GitHub repos, 5+ Fiverr gigs, 200+ DSA problems solved.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSE Undergrad Portfolio | AI/ML Developer',
    description: 'Building secure AI systems and full-stack applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
