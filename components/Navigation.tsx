"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "PROJECTS", href: "/" },
    { name: "ARCHIVE", href: "/archive" },
    { name: "ABOUT", href: "/about" },
    { name: "INQUIRY", href: "/inquiry" },
  ];

  return (
    <>
      {/* ── Desktop: Vertical Left Sidebar ─────────────────── */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 z-50 bg-[#f9f9f9] border-r border-outline-variant flex-col items-center justify-between py-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline font-bold text-[9px] tracking-[0.25em] uppercase text-black hover:opacity-60 transition-opacity"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          ASIMAN ABDULLAZADE
        </Link>

        {/* Nav Links */}
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 ${
                pathname === link.href
                  ? "font-headline italic text-[10px] text-black"
                  : "font-label text-[9px] text-zinc-400 hover:text-black"
              }`}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <span
          className="font-label text-[9px] tracking-[0.2em] text-zinc-300 uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          © 2024
        </span>
      </nav>

      {/* ── Mobile: Top Bar ────────────────────────────────── */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 z-50 bg-[#f9f9f9]/85 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-6">
        <Link href="/" className="font-headline font-bold text-sm tracking-widest uppercase text-black">
          ASIMAN ABDULLAZADE
        </Link>
        <button
          className="text-black focus:outline-none"
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
