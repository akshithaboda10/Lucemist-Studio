import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="h-screen bg-black flex items-center justify-center">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white px-4"
            >
                <h2 className="text-6xl font-semibold mb-6">
                    Where light softens and mist drifts.
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Minimal digital art inspired by calm atmospheres, gentle transformation, and mindful beauty.
                </p>
                <button className="bg-white text-black px-10 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                    Wander Through Light
                </button>
            </motion.div>
        </section>
    );
}
