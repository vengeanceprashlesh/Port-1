'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Nova Finance',
        category: 'Web Design / Development',
        image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    },
    {
        id: 2,
        title: 'MOMA Expansion',
        category: 'Brand Identity / UI',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Aesop Redesign',
        category: 'E-commerce / UX',
        image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
    },
    {
        id: 4,
        title: 'Brutal Form',
        category: 'Portfolio / Interaction',
        image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
    },
]

export function PortfolioCarousel() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const [currentScroll, setCurrentScroll] = useState(0)
    const [currentProgress, setCurrentProgress] = useState(0)

    useEffect(() => {
        let targetScroll = 0
        let targetProgress = 0
        let animationScroll = 0
        let animationProgress = 0
        const ease = 0.08

        const animate = () => {
            animationScroll += (targetScroll - animationScroll) * ease
            animationProgress += (targetProgress - animationProgress) * ease

            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(${animationScroll}px)`
            }
            if (progressRef.current) {
                progressRef.current.style.width = `${animationProgress * 100}%`
            }

            requestAnimationFrame(animate)
        }

        const handleScroll = () => {
            if (!sectionRef.current || !trackRef.current) return

            const workRect = sectionRef.current.getBoundingClientRect()
            const trackWidth = trackRef.current.scrollWidth
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            const scrollableHeight = sectionRef.current.offsetHeight - windowHeight
            const workScrolled = -workRect.top

            if (workRect.top <= 0 && workRect.bottom >= 0) {
                const percentage = Math.min(Math.max(workScrolled / scrollableHeight, 0), 1)
                targetScroll = -(trackWidth - windowWidth) * percentage
                targetProgress = percentage
            } else if (workRect.top > 0) {
                targetScroll = 0
                targetProgress = 0
            } else if (workRect.bottom < 0) {
                targetScroll = -(trackWidth - windowWidth)
                targetProgress = 1
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)

        handleScroll()
        animate()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return (
        <section ref={sectionRef} className="bg-[#fcfbf9] h-[calc(100vh+100vw)] relative" id="portfolio">
            <div className="sticky overflow-hidden flex flex-col bg-[#fcfbf9] w-full h-screen top-0 justify-center">
                <div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-8 md:pt-12 flex justify-between items-center z-10 pointer-events-none">
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-900">
                        Selected Works
                    </h2>
                    <span className="text-xs font-medium tracking-widest uppercase text-neutral-400">
                        2023 — 2024
                    </span>
                </div>

                <div
                    ref={trackRef}
                    className="flex items-center gap-6 md:gap-12 pl-6 md:pl-12 w-max will-change-transform"
                    style={{ transform: 'translateX(0px)' }}
                >
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`group relative w-[85vw] md:w-[40vw] shrink-0 cursor-pointer ${index === projects.length - 1 ? 'pr-12 md:pr-24' : ''
                                }`}
                        >
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-neutral-200 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="mt-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 mt-2">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 transition-all">
                                    <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="absolute bottom-8 left-6 md:left-12 w-48 h-px bg-neutral-200 overflow-hidden">
                    <div ref={progressRef} className="h-full bg-neutral-900 w-0"></div>
                </div>
            </div>
        </section>
    )
}
