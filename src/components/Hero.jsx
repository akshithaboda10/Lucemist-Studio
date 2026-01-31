import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative">
            {/* Soft background wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f6f4f1] to-transparent pointer-events-none" />

            <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
                <motion.h1
                    className="text-5xl md:text-6xl font-medium leading-tight mb-8"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Designing calm for everyday life.
                </motion.h1>

                <motion.p
                    className="text-base md:text-lg text-gray-600 leading-relaxed mb-12"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                >
                    Lucemist Studio is a quiet digital studio creating minimal, calming
                    planners and Canva templates to help people move through work and life
                    with clarity and intention.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Link
                        to="/collection"
                        className="inline-flex items-center gap-2 text-sm tracking-wide text-gray-800 hover:text-gray-900 transition"
                    >
                        Explore the collection
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
