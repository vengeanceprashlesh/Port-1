'use client'

import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'me' },
    { name: 'Stack', to: 'stack' },
    { name: 'Projects', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
]

export function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (pathname !== '/') return null

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-center w-full">
                <div className={`flex items-center gap-1 md:gap-2 px-4 py-2 rounded-full transition-all duration-500 border overflow-x-auto no-scrollbar max-w-full ${scrolled ? 'bg-white/80 backdrop-blur-md border-neutral-200 shadow-lg shadow-neutral-900/5' : 'bg-transparent border-transparent'}`}>
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={800}
                            className="cursor-pointer text-xs md:text-sm font-semibold tracking-wide text-neutral-500 hover:text-neutral-900 px-4 py-2 rounded-full transition-colors"
                            activeClass="!text-neutral-900 bg-neutral-100"
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                </div>
            </div>
        </motion.nav>
    )
}
