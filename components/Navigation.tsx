"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { index: "01", name: "WORK", href: "/" },
  { index: "02", name: "ARCHIVE", href: "/archive" },
  { index: "03", name: "ABOUT", href: "/about" },
  { index: "04", name: "INQUIRY", href: "/inquiry" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll(); // set on mount in case page is already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Fixed shell ────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 transition-colors duration-500 ease-out ${
          scrolled
            ? "bg-[#f9f9f9]/85 backdrop-blur-md border-b border-outline-variant"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* ── LARGE centered identity — visible at top ──── */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
            scrolled
              ? "opacity-0 -translate-y-1 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <Link
            href="/"
            className="font-headline font-bold uppercase text-black tracking-[0.65em] text-[clamp(0.55rem,1.3vw,0.9rem)]"
          >
            ASIMAN ABDULLAZADE
          </Link>

          {/* Mobile hamburger anchored top-right in this layer */}
          <button
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              menu
            </span>
          </button>
        </div>

        {/* ── COMPACT bar — visible after scroll ──────── */}
        <div
          className={`h-full flex items-center justify-between px-6 md:px-10 transition-all duration-500 ease-out ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-headline font-bold text-[11px] tracking-[0.3em] uppercase text-black hover:opacity-60 transition-opacity"
          >
            ASIMAN ABDULLAZADE
          </Link>

          {/* Desktop links — stagger in from right */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex flex-col items-center gap-[3px] transition-all duration-300 ease-out ${
                  scrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: scrolled ? `${60 + i * 50}ms` : "0ms" }}
              >
                <span className="font-label text-[8px] tracking-[0.2em] text-outline">
                  {link.index}
                </span>
                <span
                  className={`font-label text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-black font-bold"
                      : "text-zinc-400 group-hover:text-black"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile: Full-Screen Overlay ────────────────────── */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#f9f9f9] flex flex-col items-center justify-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-headline italic text-4xl tracking-tight transition-colors ${
                pathname === link.href
                  ? "text-black border-b border-black pb-1"
                  : "text-zinc-400 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
