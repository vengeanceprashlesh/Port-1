import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/custom-cursor'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Navigation } from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Prashlesh Pratap Singh | Computer Science Student',
  description: 'Portfolio of Prashlesh Pratap Singh, a Computer Science student specializing in full-stack web development and blockchain.',
  keywords: ['Computer Science', 'Full Stack', 'Next.js', 'React', 'MERN', 'Blockchain', 'Solidity'],
  authors: [{ name: 'Prashlesh Pratap Singh' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen overflow-x-clip">
        <CustomCursor />
        <Navigation />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
