export default function About() {
    return (
        <section className="mist-violet py-40">
            <div className="max-w-2xl mx-auto px-6 text-center">

                {/* Heading */}
                <h1 className="font-serif text-4xl text-[var(--text-primary)] mb-8">
                    About Lucemist Studio
                </h1>

                {/* Intro */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-20">
                    A quiet digital studio rooted in calm, intention,
                    and the beauty of slowing down.
                </p>

                {/* Story */}
                <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">

                    <p>
                        Lucemist Studio is a minimalist digital art brand inspired by the serenity of light and mist. We create soft artworks, printable affirmations, and minimalist digital planners designed to bring calm, clarity, and gentle beauty into everyday spaces.
                    </p>

                    <p>
                        Rooted in emotional well-being and mindful living, our work is intentionally simple—crafted to feel quiet, human, and quietly uplifting. Lucemist Studio exists to make room for stillness, reflection, and emotional ease in a fast-moving world.
                    </p>

                </div>

            </div>
        </section>
    );
}
