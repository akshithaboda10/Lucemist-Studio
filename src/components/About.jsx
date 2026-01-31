import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function About() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Heart className="mx-auto mb-6 text-gray-700" />

                    <h1 className="text-4xl font-medium mb-4">
                        About Lucemist Studio
                    </h1>

                    <p className="text-gray-600 mb-16">
                        A quiet digital studio rooted in calm and intention.
                    </p>
                </motion.div>

                <div className="text-left space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Lucemist Studio was born from a simple longing — for calm in a world
                        that rarely slows down.
                    </p>
                    <p>
                        In the constant noise of modern life, we found ourselves drawn to
                        quiet moments: soft morning light, mist settling gently over familiar
                        places, and the stillness that exists between thoughts.
                    </p>
                    <p>
                        Lucemist Studio was created to preserve that feeling and turn it into
                        something you could return to every day.
                    </p>
                    <p>
                        Inspired by light, mist, and subtle beauty, we create minimalist
                        digital planners, templates, and visual pieces designed to support
                        clarity, reflection, and emotional ease.
                    </p>
                    <p>
                        Every creation is crafted with care and intention. We strip away
                        excess to leave room for breath, presence, and a gentler way of
                        moving through daily life.
                    </p>
                </div>
            </div>
        </section>
    );
}
