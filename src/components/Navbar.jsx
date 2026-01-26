export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">
                    Lucemist Studio
                </div>

                {/* Menu */}
                <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium text-gray-700 list-none m-0 p-0">
                    <li>
                        <a href="#home" className="hover:text-black no-underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-black no-underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-black no-underline">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-black no-underline">
                            Contact
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
