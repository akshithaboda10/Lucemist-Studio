export default function Contact() {
    return (
        <section className="px-8 py-24 max-w-xl mx-auto">
            <h1 className="font-serif text-3xl text-center mb-6">Get in touch</h1>

            <form className="space-y-4">
                <input placeholder="Name" className="w-full border p-2" />
                <input placeholder="Email" className="w-full border p-2" />
                <textarea placeholder="Message" className="w-full border p-2 h-32" />
                <button className="underline text-sm">Send message</button>
            </form>
        </section>
    );
}
