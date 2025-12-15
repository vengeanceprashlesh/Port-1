export function ProfileSection() {
    return (
        <section className="md:py-32 md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="me">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="w-full md:w-1/3">
                    <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                        Profile
                    </span>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight mt-6 leading-tight text-neutral-900">
                        Bridging the gap between aesthetic purity and technical performance.
                    </h3>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:text-lg leading-relaxed text-base text-neutral-600 w-full">
                    <p>
                        With over 8 years of experience in the digital space, I specialize in crafting digital
                        products that aren't just visually stunning but are built on solid, scalable
                        foundations. My approach is holistic—considering the user journey from the first pixel
                        to the final line of code.
                    </p>
                    <div className="flex flex-col gap-6">
                        <p>
                            Currently available for freelance projects and open to long-term partnerships with
                            forward-thinking brands.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Open to new opportunities
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
