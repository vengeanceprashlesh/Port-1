import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500']
})

export const metadata: Metadata = {
  title: 'Prashlesh Pratap Singh | Full-Stack & Blockchain Developer',
  description: 'Portfolio of a CSE student at Woxsen University specializing in Full-Stack Development, Blockchain, and modern web applications.',
  keywords: ['Full-Stack', 'Blockchain', 'Next.js', 'React', 'Solidity', 'Portfolio'],
  authors: [{ name: 'Prashlesh Pratap Singh' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
