import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.h1
                    className="text-4xl font-medium mb-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Get in touch
                </motion.h1>

                <p className="text-gray-600 mb-20">
                    Thoughtful connections are always welcome.
                </p>

                <form className="space-y-6 text-left">
                    <input
                        placeholder="Name"
                        className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                    />
                    <input
                        placeholder="Email"
                        className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                    />

                    <button className="pt-6 text-sm hover:underline">
                        Send message
                    </button>
                </form>

                <div className="mt-16 space-y-3 text-sm text-gray-600">
                    <p className="flex justify-center items-center gap-2">
                        <Mail size={16} /> hello@lucemiststudio.com
                    </p>
                    <p className="flex justify-center items-center gap-2">
                        <MapPin size={16} /> Based online, working globally
                    </p>
                </div>
            </div>
        </section>
    );
}
