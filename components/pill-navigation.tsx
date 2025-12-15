'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavItem {
    label: string
    link: string
}

interface PillNavigationProps {
    items?: NavItem[]
    className?: string
}

export function PillNavigation({
    items = [
        { label: 'Home', link: '/' },
        { label: 'Projects', link: '/projects' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' }
    ],
    className
}: PillNavigationProps) {
    const pathname = usePathname()
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

    // Animate values based on scroll
    const pillPadding = useTransform(scrollY, [0, 100], [24, 12])
    const pillGap = useTransform(scrollY, [0, 100], [32, 16])
    const fontSize = useTransform(scrollY, [0, 100], [14, 12])
    const pillOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95])

    if (!mounted) return null

    return (
        <motion.nav
            className={cn(
                'fixed top-6 left-1/2 z-50',
                className
            )}
            style={{
                x: '-50%'
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                className={cn(
                    'flex items-center justify-center rounded-full',
                    'backdrop-blur-xl border transition-all duration-300',
                    isScrolled
                        ? 'bg-black/80 border-white/10 shadow-lg shadow-black/20'
                        : 'bg-black/60 border-white/5'
                )}
                style={{
                    paddingLeft: pillPadding,
                    paddingRight: pillPadding,
                    paddingTop: useTransform(scrollY, [0, 100], [12, 8]),
                    paddingBottom: useTransform(scrollY, [0, 100], [12, 8]),
                    gap: pillGap,
                }}
                layout
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {items.map((item) => {
                    const isActive = pathname === item.link
                    return (
                        <Link
                            key={item.link}
                            href={item.link}
                            className="relative"
                        >
                            <motion.span
                                className={cn(
                                    'relative z-10 font-medium transition-colors duration-200',
                                    'hover:text-white',
                                    isActive ? 'text-white' : 'text-white/60'
                                )}
                                style={{
                                    fontSize: fontSize,
                                }}
                            >
                                {item.label}
                            </motion.span>

                            {/* Active indicator */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                                        layoutId="activeIndicator"
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        exit={{ opacity: 0, scaleX: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </AnimatePresence>
                        </Link>
                    )
                })}
            </motion.div>
        </motion.nav>
    )
}

export default PillNavigation
