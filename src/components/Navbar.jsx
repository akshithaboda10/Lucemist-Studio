import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="px-8 py-6 flex justify-between items-center">
            <Link to="/" className="text-lg font-medium">
                Lucemist Studio
            </Link>

            <nav className="space-x-6 text-sm text-calm">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/collection">Collection</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}
