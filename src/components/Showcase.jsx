import { motion } from "framer-motion";
import { Calendar, Palette, FileText } from "lucide-react";

export default function Showcase() {
    const items = [
        {
            icon: Calendar,
            title: "Digital Planners",
            description:
                "Minimal daily, weekly, and wellness planners designed to bring gentle structure and clarity without pressure.",
        },
        {
            icon: Palette,
            title: "Printable Art & Affirmations",
            description:
                "Soft visual pieces and thoughtful words created to ground, comfort, and quietly uplift everyday spaces.",
        },
        {
            icon: FileText,
            title: "Canva Templates",
            description:
                "Calm, editable templates for creators and small brands who prefer human-centered, minimalist design.",
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl font-medium mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    What We Create
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="space-y-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <item.icon size={32} className="mx-auto text-gray-700" />

                            <h3 className="text-lg font-medium">{item.title}</h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
