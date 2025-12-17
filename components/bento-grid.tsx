'use client'

import { ArrowUpRight, Github, MapPin, Code2 } from 'lucide-react'

const techStacks = [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'TailwindCSS',
    'Node.js',
    'Git',
    'Figma',
]

export function BentoGrid() {
    return (
        <section className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* GitHub Card */}
                <a
                    href="https://github.com/prashlesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-neutral-950 rounded-2xl p-6 flex flex-col justify-between min-h-[180px] hover:scale-[1.02] transition-all duration-300"
                >
                    <div className="flex justify-between items-start">
                        <Github className="w-8 h-8 text-white" />
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-white">GitHub</h4>
                        <p className="text-neutral-500 text-sm">@prashlesh</p>
                    </div>
                </a>

                {/* Tech Stack */}
                <div className="md:col-span-2 bg-white border border-neutral-200 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Code2 className="w-5 h-5 text-neutral-600" />
                        <span className="text-sm font-medium text-neutral-600">Tech I Work With</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techStacks.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm text-neutral-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Location */}
                <div className="bg-neutral-100 rounded-2xl p-6 flex flex-col justify-between min-h-[140px]">
                    <MapPin className="w-5 h-5 text-neutral-500" />
                    <div>
                        <p className="text-sm text-neutral-500">Based in</p>
                        <p className="text-lg font-medium text-neutral-900">India</p>
                    </div>
                </div>

                {/* Status */}
                <div className="bg-emerald-50 rounded-2xl p-6 flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs text-emerald-700 font-medium">Available</span>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-600">Open for</p>
                        <p className="text-lg font-medium text-neutral-900">Internships & Projects</p>
                    </div>
                </div>

                {/* Currently Learning */}
                <div className="bg-violet-50 rounded-2xl p-6 flex flex-col justify-between min-h-[140px]">
                    <span className="text-xs text-violet-600 font-medium">Currently Learning</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white/70 rounded text-xs text-violet-700">System Design</span>
                        <span className="px-2 py-1 bg-white/70 rounded text-xs text-violet-700">DSA</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
