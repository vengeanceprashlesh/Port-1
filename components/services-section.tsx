import { Layout, Code2, Rocket, Check } from 'lucide-react'

const services = [
    {
        icon: Layout,
        title: 'Web Design',
        description:
            'Creating memorable, user-centric interfaces that align with your brand identity and business goals.',
        items: ['UI/UX Design', 'Design Systems', 'Prototyping'],
        featured: false,
    },
    {
        icon: Code2,
        title: 'Development',
        description:
            'Implementing designs with clean, semantic code using modern frameworks and low-code solutions.',
        items: ['Webflow / Framer', 'Frontend (React)', 'Technical SEO'],
        featured: true,
    },
    {
        icon: Rocket,
        title: 'Strategy',
        description:
            'Helping you define your digital presence and optimize for conversion and user engagement.',
        items: ['Brand Strategy', 'Conversion Optimization', 'Analytics'],
        featured: false,
    },
]

export function ServicesSection() {
    return (
        <section className="z-20 md:pb-32 bg-[#fcfbf9] pb-24 relative" id="services">
            <div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="flex flex-col md:flex-row gap-8 mb-20 gap-x-8 gap-y-8 items-end justify-between">
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900">
                        Services
                    </h2>
                    <p className="text-base text-neutral-500 max-w-sm text-right md:text-left">
                        Comprehensive design and development solutions tailored for growth-stage startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className={`group p-8 rounded-2xl cursor-default ${service.featured
                                    ? 'bg-neutral-900 text-white shadow-xl transform md:-translate-y-4'
                                    : 'border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-colors'
                                    }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 ${service.featured
                                        ? 'bg-neutral-800 text-white'
                                        : 'bg-neutral-100 text-neutral-900'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 tracking-tight">{service.title}</h3>
                                <p
                                    className={`text-sm leading-relaxed mb-8 ${service.featured ? 'text-neutral-400' : 'text-neutral-500'
                                        }`}
                                >
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wide ${service.featured ? 'text-neutral-500' : 'text-neutral-400'
                                                }`}
                                        >
                                            <Check
                                                className={`w-3 h-3 ${service.featured ? 'text-white' : 'text-neutral-900'}`}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
