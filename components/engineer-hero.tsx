'use client'

import React, { useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { ArrowRight } from 'lucide-react'

export function EngineerHero() {
    const cardRef = useRef<HTMLDivElement>(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        // Max rotation = 10 degrees
        setRotateX(yPct * -10)
        setRotateY(xPct * 10)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <section
            id="home"
            className="min-h-screen w-full bg-[#fcfbf9] text-neutral-900 flex items-center justify-center px-6 md:px-12 py-12 md:py-24 overflow-hidden"
        >
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left: Typography & Actions */}
                <div className="flex flex-col justify-center order-2 lg:order-1 z-10">
                    <div className="mb-8">
                        <h2 className="text-xs md:text-sm font-bold tracking-[0.1em] text-neutral-500 uppercase mb-6 flex flex-wrap gap-x-2 gap-y-1">
                            <span>CS Student @ Woxsen</span>
                            <span className="text-neutral-300">•</span>
                            <span>Software Engineer</span>
                            <span className="text-neutral-300">•</span>
                            <span>Open to Internships</span>
                        </h2>

                        <div className="flex flex-col mb-4">
                            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-black leading-[1.05] mb-4">
                                Full-Stack Developer
                            </h1>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-400 max-w-2xl leading-snug">
                                specializing in <span className="text-neutral-800">AI-powered</span> web applications.
                            </h2>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-lg mb-10 font-medium">
                        I build production-grade apps with Next.js, Node.js, and LLM integrations — from idea to deployment.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <ScrollLink
                            to="portfolio"
                            smooth={true}
                            duration={800}
                            className="cursor-pointer bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black transition-transform hover:-translate-y-1 duration-300 flex items-center gap-2"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </ScrollLink>

                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={800}
                            className="cursor-pointer px-8 py-4 rounded-full border border-neutral-200 text-neutral-900 text-sm font-bold tracking-wide hover:bg-neutral-50 transition-colors"
                        >
                            Contact Me
                        </ScrollLink>
                    </div>
                </div>

                {/* Right: The Portrait (3D Tilt) */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                        className="relative w-full max-w-md aspect-[3/4] bg-neutral-100 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 shadow-2xl shadow-neutral-200/50 cursor-pointer"
                    >
                        {/* Image */}
                        <img
                            src="/updated.png"
                            alt="Prashlesh Pratap Singh"
                            className="w-full h-full object-cover object-top pointer-events-none"
                        />

                        {/* Highlights/Sheen Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                transform: `translateX(${rotateY * 2}px) translateY(${rotateX * 2}px)`
                            }}
                        />

                        {/* Depth Shadow Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    )
}
