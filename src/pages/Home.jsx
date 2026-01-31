import { motion } from "framer-motion";
import { Calendar, Palette, FileText } from "lucide-react";

export default function Home() {
    return (
        <section className="px-8 py-24 text-center max-w-3xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl mb-6"
            >
                Designing calm for everyday life.
            </motion.h1>

            <p className="text-calm mb-10">
                Lucemist Studio creates minimalist digital planners and templates to help
                people move through life with clarity and intention.
            </p>

            <a
                href="/collection"
                className="text-accent text-sm underline underline-offset-4"
            >
                Explore the collection →
            </a>

            <div className="mt-24 space-y-14">
                <Feature icon={<Calendar />} title="Digital Planners" />
                <Feature icon={<Palette />} title="Printable Art & Affirmations" />
                <Feature icon={<FileText />} title="Canva Templates" />
            </div>
        </section>
    );
}

function Feature({ icon, title }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-calm">{icon}</div>
            <h3 className="font-serif">{title}</h3>
        </div>
    );
}
