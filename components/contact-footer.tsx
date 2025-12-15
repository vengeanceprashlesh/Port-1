import { ArrowUpRight } from 'lucide-react'

export function ContactFooter() {
    return (
        <footer
            id="contact"
            className="bg-neutral-950 text-[#fcfbf9] rounded-t-[3rem] pt-24 pb-12 mt-12 overflow-hidden"
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
                            <span className="text-neutral-500">iconic.</span>
                        </h4>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                                    Email
                                </span>
                                <a
                                    href="mailto:hello@valeriia.dev"
                                    className="text-xl md:text-2xl hover:text-neutral-400 transition-colors"
                                >
                                    hello@valeriia.dev
                                </a>
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
                                    Socials
                                </span>
                                <div className="flex gap-6 text-xl md:text-2xl">
                                    <a href="#" className="hover:text-neutral-400 transition-colors">
                                        LinkedIn
                                    </a>
                                    <a href="#" className="hover:text-neutral-400 transition-colors">
                                        Twitter
                                    </a>
                                    <a href="#" className="hover:text-neutral-400 transition-colors">
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        href="mailto:hello@valeriia.dev"
                        className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#fcfbf9] hover:text-neutral-950 transition-all duration-500"
                    >
                        <span className="text-sm font-medium uppercase tracking-widest group-hover:scale-110 transition-transform">
                            Say Hi
                        </span>
                        <ArrowUpRight
                            className="w-6 h-6 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </a>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-widest">
                    <span>© 2024 Valeriia Shchebetovska</span>
                    <span className="mt-2 md:mt-0">Design &amp; Development</span>
                </div>
            </div>
        </footer>
    )
}
