import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Collection() {
    const products = [
        {
            id: 1,
            name: "Daily Planner Template",
            description:
                "A minimalist daily planner designed to bring gentle structure and clarity without pressure.",
            price: "$15",
        },
        {
            id: 2,
            name: "Wellness Tracker",
            description:
                "A calm space to track habits, moods, and emotional ease with thoughtful prompts.",
            price: "$12",
        },
        {
            id: 3,
            name: "Canva Social Media Kit",
            description:
                "Editable templates for creators and small brands who value human-centered, minimalist design.",
            price: "$20",
        },
    ];

    return (
        <section className="pt-32 pb-32">
            <div className="max-w-5xl mx-auto px-6">
                {/* Page intro */}
                <div className="text-center mb-24">
                    <h1 className="text-4xl font-medium mb-4">Collection</h1>
                    <p className="text-gray-600">
                        A curated space for calm, intentional digital pieces.
                    </p>
                </div>

                {/* Products */}
                <div className="space-y-20">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-t border-gray-200 pt-12"
                        >
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-medium mb-3">
                                    {product.name}
                                </h2>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex items-center gap-6">
                                    <span className="text-sm text-gray-800">
                                        {product.price}
                                    </span>

                                    <button className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-gray-900 transition">
                                        View details
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
