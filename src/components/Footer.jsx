export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Brand */}
                <div className="text-white text-lg font-semibold mb-6 md:mb-0">
                    Lucemist Studio
                </div>

                {/* Links */}
                <div className="flex space-x-8 text-sm">
                    <span className="hover:text-white cursor-pointer">Home</span>
                    <span className="hover:text-white cursor-pointer">About</span>
                    <span className="hover:text-white cursor-pointer">Services</span>
                    <span className="hover:text-white cursor-pointer">Contact</span>
                </div>
            </div>

            {/* Bottom line */}
            <div className="text-center text-xs text-gray-500 mt-8">
                © {new Date().getFullYear()} Lucemist Studio. All rights reserved.
            </div>
        </footer>
    );
}
