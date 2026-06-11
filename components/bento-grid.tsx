'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, Github, Code2, GraduationCap, Sparkles, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const techStacks = [
    'Next.js', 'TypeScript', 'Python', 'LangGraph', 'AI/ML Agents', 'Node.js', 'React', 'MongoDB', 'TailwindCSS', 'C++', 'Figma'
]

export function BentoGrid() {
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!cardsRef.current) return

        const cards = cardsRef.current.children

        gsap.fromTo(cards,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section id="stack" ref={sectionRef} className="pb-16 pt-12 md:pb-24 md:pt-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
                <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-4">
                    Core Competencies
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
                    Technical Expertise.
                </h3>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
                {/* GitHub Card - Featured */}
                <a
                    href="https://github.com/PrashleshPratapSingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group col-span-1 md:col-span-1 md:row-span-2 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-7 flex flex-col justify-between min-h-[280px] github-glow relative overflow-hidden"
                >
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-[1px] bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-pink-500/20 rounded-3xl" />
                    </div>

                    <div className="flex justify-between items-start relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                            <Github className="w-6 h-6 text-white" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <div className="relative z-10 mt-auto">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex -space-x-1">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                <div className="w-2 h-2 rounded-full bg-violet-400" />
                            </div>
                            <span className="text-xs text-neutral-400">Active</span>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-1">GitHub</h4>
                        <p className="text-neutral-400 text-sm mb-3">@PrashleshPratapSingh</p>
                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                            <span className="flex items-center gap-1">
                                <Star className="w-3 h-3" /> Repos
                            </span>
                            <span className="flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> Open Source
                            </span>
                        </div>
                    </div>
                </a>

                {/* Tech Stack */}
                <div className="col-span-1 md:col-span-2 bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-7 card-hover">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center">
                            <Code2 className="w-4 h-4 text-neutral-600" />
                        </div>
                        <span className="text-sm font-semibold text-neutral-800">Tech I Work With</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techStacks.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:border-neutral-200 transition-all duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Certifications Card */}
                <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 rounded-3xl p-6 flex flex-col justify-between min-h-[130px] card-hover group/cert">
                    <div className="flex justify-between items-start">
                        <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center group-hover/cert:bg-blue-600 transition-colors duration-300">
                            {/* Use star or award icon */}
                            <Star className="w-4 h-4 text-neutral-500 group-hover/cert:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 opacity-0 group-hover/cert:opacity-100 transition-opacity">VERIFIED</span>
                    </div>
                    <div>
                        <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Certifications</p>
                        <p className="text-sm font-semibold text-neutral-900 mt-1 leading-tight">Google UX Design<br /><span className="text-neutral-400 font-normal">& More...</span></p>
                    </div>
                </div>

                {/* Status - Available */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100/80 rounded-3xl p-6 flex flex-col justify-between min-h-[130px] card-hover">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] text-emerald-700 font-semibold uppercase tracking-wider">Available</span>
                    </div>
                    <div>
                        <p className="text-[11px] text-neutral-500 uppercase tracking-wider font-medium">Open for</p>
                        <p className="text-base font-semibold text-neutral-900 mt-0.5">Freelance & Projects</p>
                    </div>
                </div>

                {/* Currently Learning */}
                <div className="col-span-1 bg-gradient-to-br from-violet-50 to-purple-50/50 border border-violet-100/80 rounded-3xl p-6 flex flex-col justify-between min-h-[130px] card-hover">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/80 shadow-sm flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-violet-600" />
                        </div>
                        <span className="text-[11px] text-violet-700 font-semibold uppercase tracking-wider">Learning</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        <span className="px-2.5 py-1 bg-white/80 border border-violet-100 rounded-lg text-xs font-medium text-violet-700">
                            Agent-based Systems
                        </span>
                        <span className="px-2.5 py-1 bg-white/80 border border-violet-100 rounded-lg text-xs font-medium text-violet-700">
                            System Design
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
