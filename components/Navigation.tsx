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
      <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/70 backdrop-blur-md flex justify-between items-center px-6 md:px-12 py-8">
        <div className="font-headline font-bold text-2xl tracking-widest text-black uppercase">
          ASIMAN ABDULLAZADE
        </div>
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-headline italic text-lg tracking-tight transition-colors active:scale-95 duration-300 ${
                pathname === link.href
                  ? "text-black border-b border-black pb-1"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
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

      {/* Mobile Menu Overlay */}
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
