'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { projects } from '@/lib/data'

export function PortfolioCarousel() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    useLayoutEffect(() => {
        const section = sectionRef.current
        const track = trackRef.current

        if (!section || !track) return

        const ctx = gsap.context(() => {
            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${Math.abs(getScrollAmount())}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onUpdate: (self) => setScrollProgress(Math.round(self.progress * 100))
                }
            })

        }, section)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-[#fcfbf9] relative overflow-hidden h-screen" id="portfolio">

            {/* Header / Intro */}
            <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 pointer-events-none flex justify-between items-start">
                <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
                        Projects.
                    </h3>
                </div>
            </div>

            {/* Carousel Track */}
            <div ref={trackRef} className="flex h-full items-center pl-[5vw] pr-[8vw] gap-[5vw] md:pl-[20vw] md:pr-[15vw] md:gap-[10vw]">

                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 relative group flex items-center"
                    >
                        {/* Giant Number (Outline) */}
                        <div className="absolute -left-20 top-0 text-[12vw] font-bold text-transparent text-stroke clamp-text pointer-events-none z-10 leading-none select-none transition-all duration-700 opacity-20">
                            0{index + 1}
                        </div>

                        {/* Card Container */}
                        <div className="w-full h-full relative flex flex-col md:flex-row bg-white overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] z-10">

                            {/* Image Half */}
                            <div className="w-full md:w-3/5 h-full overflow-hidden relative">
                                <Link
                                    href={project.demo || project.github || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full"
                                >
                                    <div className="absolute inset-0 bg-neutral-900/10 z-10 hover:bg-transparent transition-all duration-500" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-contain ${project.imageAlignment || 'object-center'} grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100`}
                                    />
                                </Link>
                            </div>

                            {/* Info Half */}
                            <div className="w-full md:w-2/5 h-full p-8 md:p-12 flex flex-col justify-between bg-white relative z-20">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-[10px] font-mono uppercase border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[0.9] tracking-tight mb-4 whitespace-pre-line">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-xs">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between border-t border-neutral-100 pt-6 mt-6">
                                    <Link
                                        href={project.demo || project.github || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-900"
                                    >
                                        Open project
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                    </Link>
                                    <span className="text-xs font-mono text-neutral-300">{project.year}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                {/* End spacer - creates gap before footer */}
                <div className="w-[20vw] md:w-[25vw] flex-shrink-0" aria-hidden="true" />
            </div>

        </section>
    )
}
