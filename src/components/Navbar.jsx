import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [mode, setMode] = useState(
        () => localStorage.getItem("theme") || "day"
    );

    useEffect(() => {
        localStorage.setItem("theme", mode);
        document.documentElement.classList.toggle("dark", mode === "night");
    }, [mode]);

    return (
        <header className="w-full bg-[var(--bg-base)] border-b border-[var(--border-soft)]">
            <nav
                className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4"
                aria-label="Main navigation"
            >

                {/* Brand */}
                <Link
                    to="/"
                    className="text-lg font-medium tracking-wide text-[var(--text-primary)]"
                >
                    Lucemist Studio
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-10 text-sm">

                    {["/", "/about", "/collection", "/contact"].map((path, index) => {
                        const labels = ["Home", "About", "Collection", "Contact"];

                        return (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `relative transition-colors
                                     text-[var(--text-secondary)]
                                     hover:text-[var(--text-primary)]
                                     after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                                     after:w-full after:bg-[var(--text-primary)]
                                     after:transition-opacity
                                     ${isActive
                                        ? "after:opacity-100 text-[var(--text-primary)]"
                                        : "after:opacity-0"}`
                                }
                            >
                                {labels[index]}
                            </NavLink>
                        );
                    })}

                    {/* Theme Toggle */}
                    <button
                        onClick={() =>
                            setMode(mode === "day" ? "night" : "day")
                        }
                        aria-label="Toggle dark mode"
                        aria-pressed={mode === "night"}
                        className="relative w-12 h-6 rounded-full
                                   border border-[var(--border-soft)]
                                   bg-[var(--bg-soft)]
                                   transition-colors"
                    >
                        <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full
                                        bg-[var(--text-primary)]
                                        transition-transform
                                        ${mode === "night" ? "translate-x-6" : ""}`}
                        />
                    </button>

                </div>
            </nav>
        </header>
    );
}

