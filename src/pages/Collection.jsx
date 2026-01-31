export default function Collection() {
    return (
        <section className="px-8 py-24 max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl text-center mb-12">Collection</h1>

            <div className="grid gap-12 sm:grid-cols-2">
                <Product title="Daily Planner" price="$15" />
                <Product title="Wellness Tracker" price="$12" />
                <Product title="Canva Social Kit" price="$20" />
            </div>
        </section>
    );
}

function Product({ title, price }) {
    return (
        <div className="border border-gray-200 p-6 rounded-xl">
            <h3 className="font-serif mb-2">{title}</h3>
            <p className="text-calm mb-4">{price}</p>
            <button className="text-sm underline">Buy now</button>
        </div>
    );
}
