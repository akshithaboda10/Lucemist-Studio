import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#f6f4f1] text-gray-800">
            {/* Header */}
            <header className="w-full">
                <div className="max-w-6xl mx-auto px-6">
                    <Navbar />
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="w-full">
                <div className="max-w-6xl mx-auto px-6">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
