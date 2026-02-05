export default function Contact() {
    return (
        <section className="mist-flow py-40">
            <div className="max-w-xl mx-auto px-6 text-center">

                <h1 className="font-serif text-4xl text-[var(--text-primary)] mb-6">
                    Get in touch
                </h1>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-16">
                    Thoughtful connections are always welcome.
                </p>

                <div className="mist-card rounded-3xl p-10 text-left">
                    <form className="space-y-8">

                        <div>
                            <label htmlFor="name" className="block text-sm mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-base)]
                                           border border-[var(--border-soft)]
                                           text-[var(--text-primary)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-base)]
                                           border border-[var(--border-soft)]
                                           text-[var(--text-primary)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full rounded-xl px-4 py-4 bg-[var(--bg-base)]
                                           border border-[var(--border-soft)]
                                           text-[var(--text-primary)] resize-none"
                            />
                        </div>

                        <div className="pt-4 text-center">
                            <button type="submit" className="lucemist-button">
                                Send message
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}
