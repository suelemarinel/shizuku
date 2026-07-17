"use client";

import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-300 ${
        scrolled
          ? "border-b border-paper/10 bg-ink/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#" className="font-display text-xl tracking-wide text-paper">
          Shizuku
        </a>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-8 text-sm tracking-[0.15em] text-paper-muted">
            <li className="hidden sm:block">
              <a href="#concept" className="transition-colors hover:text-paper">
                Le concept
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#menu" className="transition-colors hover:text-paper">
                Le menu
              </a>
            </li>
            <li>
              <a
                href="#reservation"
                className=" rounded-lg border border-laque px-5 py-2 text-paper transition-colors hover:bg-laque"
              >
                Réserver
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;