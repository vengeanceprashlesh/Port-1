'use client'

import { ArrowUpRight, Check } from 'lucide-react'
import { useState } from 'react'

export function ContactFooter() {
    const [copied, setCopied] = useState(false)

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('iamprashlesh@gmail.com')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy email:', err)
        }
    }

    const handleEmailDirect = () => {
        window.location.href = 'mailto:iamprashlesh@gmail.com'
    }

    return (
        <footer
            id="contact"
            className="bg-neutral-950 text-[#fcfbf9] rounded-t-[3rem] pt-24 pb-12 overflow-hidden relative z-10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">
                            Contact
                        </span>
                        <h4 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[0.9]">
                            Let's build
                            <br />
                            something
                            <br />
                            <span className="text-neutral-500">intelligent.</span>
                        </h4>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                                    Email
                                </span>
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-xl md:text-2xl hover:text-neutral-400 transition-colors text-left group/email relative"
                                >
                                    iamprashlesh@gmail.com
                                    {copied && (
                                        <span className="absolute -top-8 left-0 bg-emerald-500 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1">
                                            <Check className="w-3 h-3" /> Copied!
                                        </span>
                                    )}
                                </button>
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                                    Socials
                                </span>
                                <div className="flex gap-6 text-xl md:text-2xl">
                                    <a href="https://linkedin.com/in/prashlesh" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/PrashleshPratapSingh" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleEmailDirect}
                        className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#fcfbf9] hover:text-neutral-950 transition-all duration-500 cursor-pointer"
                    >
                        <span className="text-sm font-medium uppercase tracking-widest group-hover:scale-110 transition-transform">
                            Say Hi
                        </span>
                        <ArrowUpRight
                            className="w-6 h-6 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </button>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-widest">
                    <span>© 2025 Prashlesh Pratap Singh</span>
                    <span className="mt-2 md:mt-0">Computer Science Student</span>
                </div>
            </div>
        </footer>
    )
}
