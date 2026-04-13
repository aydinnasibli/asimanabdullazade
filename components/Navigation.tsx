"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { index: "01", name: "PROJECTS", href: "/" },
  { index: "02", name: "ARCHIVE", href: "/archive" },
  { index: "03", name: "ABOUT", href: "/about" },
  { index: "04", name: "INQUIRY", href: "/inquiry" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Top Bar (all breakpoints) ───────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 h-14 z-50 bg-[#f9f9f9]/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline font-bold text-[11px] tracking-[0.3em] uppercase text-black hover:opacity-60 transition-opacity"
        >
          ASIMAN ABDULLAZADE
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative flex flex-col items-center gap-[3px]"
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
              {pathname === link.href && (
                <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black" />
              )}
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
