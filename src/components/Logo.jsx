import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link
            to="/"
            className="flex items-center gap-3 text-gray-900 hover:text-gray-700 transition-colors"
        >
            {/* mist dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />

            <span className="text-sm tracking-wide font-medium">
                Lucemist Studio
            </span>
        </Link>
    );
}
