'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'

export function PortfolioCarousel() {
    return (
        <section className="bg-[#fcfbf9] relative w-full pt-32 pb-48" id="portfolio">

            {/* Header / Intro */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
                <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-4">
                    Selected Work
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.15] max-w-2xl">
                    Production-grade platforms and intelligent systems built for scale.
                </h3>
            </div>

            {/* Vertical Sticky Stack */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 relative">
                {projects.map((project, index) => {
                    // Calculate top sticky offset so they cascade down nicely
                    const stickyTop = `calc(15vh + ${index * 40}px)`

                    return (
                        <div
                            key={project.id}
                            className="w-full h-auto md:h-[70vh] flex-shrink-0 relative group flex items-center shadow-2xl shadow-neutral-900/10 rounded-[2rem] overflow-hidden bg-white border border-neutral-100"
                            style={{
                                position: 'sticky',
                                top: stickyTop,
                            }}
                        >
                            {/* Giant Number (Outline) */}
                            <div className="absolute right-8 top-8 text-[8vw] md:text-[6vw] font-bold text-transparent text-stroke clamp-text pointer-events-none z-10 leading-none select-none opacity-20">
                                0{index + 1}
                            </div>

                            {/* Card Container */}
                            <div className="w-full h-full relative flex flex-col md:flex-row">

                                {/* Image Half */}
                                <div className="w-full h-[40vh] md:w-3/5 md:h-full overflow-hidden relative border-b md:border-b-0 md:border-r border-neutral-100">
                                    <Link
                                        href={project.demo || project.github || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full h-full bg-[#f8f7f5]"
                                    >
                                        <div className="absolute inset-0 bg-neutral-900/5 z-10 hover:bg-transparent transition-all duration-500" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-contain p-8 md:p-12 ${project.imageAlignment || 'object-center'} grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105`}
                                        />
                                    </Link>
                                </div>

                                {/* Info Half */}
                                <div className="w-full md:w-2/5 h-full p-8 md:p-12 flex flex-col justify-between relative z-20 bg-white">
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="text-[10px] font-mono uppercase border border-neutral-200 px-2.5 py-1 rounded-sm text-neutral-500 bg-neutral-50">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-6 whitespace-pre-line">
                                            {project.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-sm">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-neutral-100 pt-6 mt-12 md:mt-0">
                                        <Link
                                            href={project.demo || project.github || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-900"
                                        >
                                            Open project
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                        </Link>
                                        <span className="text-xs font-mono text-neutral-400">{project.year}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
