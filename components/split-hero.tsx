'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

interface SplitHeroProps {
    onNavigate?: (section: string) => void
}

export function SplitHero({ onNavigate }: SplitHeroProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="min-h-screen flex flex-col md:flex-row w-full relative" id="home">
            {/* Left Panel (Dark) */}
            <div className="md:w-1/2 md:h-screen overflow-hidden group bg-neutral-950 w-full h-[50vh] relative">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
                    alt="Portrait"
                    className="transition-transform duration-1000 group-hover:scale-105 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale"
                />

                <div className="flex flex-col md:p-10 z-10 h-full pt-6 pr-6 pb-6 pl-6 relative justify-between">
                    {/* Giant Text Part 1 */}
                    <h1 className="giant-text uppercase md:mt-0 reveal-text font-semibold text-white tracking-tighter mt-0">
                        Digital
                    </h1>

                    {/* Hero Navigation (Bottom Right of Left Panel) */}
                    <nav className="flex flex-col gap-2 reveal-text delay-200 md:pb-8 text-right pb-4 items-end">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="hover:text-white md:text-xl transition-colors cursor-pointer text-lg font-medium text-white/60 tracking-tight"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('me')}
                            className="hover:text-white md:text-xl transition-colors cursor-pointer text-lg font-medium text-white/60 tracking-tight"
                        >
                            Me
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="text-white/60 hover:text-white text-lg md:text-xl font-medium tracking-tight transition-colors cursor-pointer"
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="hover:text-white md:text-xl transition-colors cursor-pointer text-lg font-medium text-white/60 tracking-tight"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-white md:text-xl transition-colors cursor-pointer text-lg font-medium text-white/60 tracking-tight"
                        >
                            Get in touch
                        </button>
                    </nav>
                </div>
            </div>

            {/* Right Panel (Light) */}
            <div className="md:w-1/2 md:h-screen flex flex-col md:p-10 bg-[#fcfbf9] w-full h-[50vh] pt-6 pr-6 pb-6 pl-6 relative">
                {/* Giant Text Part 2 */}
                <div className="w-full relative">
                    <h1 className="giant-text font-semibold tracking-tighter text-neutral-950 uppercase -ml-1 md:-ml-2 reveal-text delay-100">
                        Designer
                    </h1>
                    <div className="text-right w-full mt-2 md:mt-4 reveal-text delay-200">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-950 uppercase">
                            &amp; Developer
                        </h2>
                    </div>
                </div>

                {/* Intro Block */}
                <div className="flex-grow flex md:justify-center md:items-center md:mt-0 mt-8 items-center justify-end">
                    <div className="max-w-xs md:max-w-sm mr-auto md:mr-0 md:ml-20 relative reveal-text delay-300">
                        {/* Pink Dot decoration */}
                        <div className="absolute -left-16 top-2 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
                        </div>

                        <p className="text-base font-normal text-neutral-500 leading-relaxed">
                            I'm <span className="text-neutral-900 font-medium">Valeriia Shchebetovska</span>.
                            I build high-performing low-code websites that launch fast, look premium, and convert with impact.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="md:bottom-10 md:right-10 animate-bounce hidden md:block absolute right-6 bottom-6">
                    <ArrowDown className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
                </div>
            </div>
        </header>
    )
}
