import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valeriia Shchebetovska — Digital Designer',
  description: 'I build high-performing low-code websites that launch fast, look premium, and convert with impact.',
  keywords: ['Web Design', 'Development', 'UI/UX', 'Webflow', 'Framer', 'React'],
  authors: [{ name: 'Valeriia Shchebetovska' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
