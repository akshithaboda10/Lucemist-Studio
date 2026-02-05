export default function Collection() {
    return (
        <section className="mist-flow py-32">
            <div className="max-w-6xl mx-auto px-6">

                <header className="text-center mb-20">
                    <h1 className="font-serif text-4xl text-[var(--text-primary)] mb-4">
                        Collection
                    </h1>
                    <p className="text-[var(--text-secondary)]">
                        A curated space for calm, intentional digital pieces.
                    </p>
                </header>

                <div className="collection-grid">
                    {[
                        {
                            title: "Daily Planner",
                            price: "$15",
                            desc: "A minimalist daily planner designed to support clarity and a gentler pace.",
                        },
                        {
                            title: "Wellness Tracker",
                            price: "$12",
                            desc: "A calm space to track habits, emotions, and moments of care.",
                        },
                        {
                            title: "Canva Social Kit",
                            price: "$20",
                            desc: "Editable templates for mindful branding and soft visual identity.",
                        },
                    ].map((item, i) => (
                        <article key={i} className="collection-card">
                            <h3 className="text-[var(--text-primary)] text-lg font-medium mb-1">
                                {item.title}
                            </h3>

                            <p className="price text-sm mb-4">
                                {item.price}
                            </p>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                                {item.desc}
                            </p>
                            <a href="#" className="card-link">
                                View details →
                            </a>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
