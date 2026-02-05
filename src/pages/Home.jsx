export default function Home() {
    return (
        <main className="w-full overflow-hidden">

            {/* HERO */}
            <section className="mist-hero pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-6 text-center">

                    <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6 leading-tight">
                        Designing calm for everyday life
                    </h1>

                    <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-10 text-center">
                        Lucemist Studio creates minimalist digital products inspired by
                        light, clarity, and emotional well-being.
                    </p>

                    <a
                        href="/collection"
                        className="lucemist-button"
                    >
                        Explore the collection
                    </a>

                </div>
            </section>

            {/* WHAT WE CREATE */}
            <section className="mist-flow py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-16">
                        What Lucemist offers
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            {
                                title: "Digital Planners",
                                desc: "Calm, structured planners designed to support focus without pressure.",
                            },
                            {
                                title: "Templates",
                                desc: "Thoughtfully designed templates for creators and mindful professionals.",
                            },
                            {
                                title: "Visual Systems",
                                desc: "Minimal design systems that feel soft, modern, and emotionally balanced.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="mist-card rounded-3xl p-10">
                                <h3 className="text-[var(--text-primary)] font-medium mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}
