import { motion } from "framer-motion";

export default function Showcase() {
    return (
        <section id="services" className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-semibold text-center mb-16">
                    What We Create
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border rounded-lg p-8 text-center hover:shadow-xl transition"
                    >
                        <div className="h-40 bg-gray-100 mb-6"></div>
                        <h3 className="text-lg font-medium mb-2">Digital Art Prints</h3>
                        <p className="text-sm text-gray-600">
                            Minimal digital artworks inspired by light, mist, and quiet moments of calm.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border rounded-lg p-8 text-center hover:shadow-xl transition"
                    >
                        <div className="h-40 bg-gray-100 mb-6"></div>
                        <h3 className="text-lg font-medium mb-2">Printable Affirmations</h3>
                        <p className="text-sm text-gray-600">
                            Thoughtfully designed affirmation cards created to bring clarity, peace, and softness into everyday life.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border rounded-lg p-8 text-center hover:shadow-xl transition"
                    >
                        <div className="h-40 bg-gray-100 mb-6"></div>
                        <h3 className="text-lg font-medium mb-2">Mindful Visual Design</h3>
                        <p className="text-sm text-gray-600">
                            Gentle, intentional visuals crafted for brands and spaces rooted in calm and simplicity.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
