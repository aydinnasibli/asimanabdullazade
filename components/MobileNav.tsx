"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Photo",  href: "/photography", icon: "camera" },
  { name: "Film",   href: "/film",        icon: "movie" },
  { name: "Design", href: "/design",      icon: "palette" },
  { name: "About",  href: "/about",       icon: "person" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-4 border-t z-50"
      style={{
        background: "color-mix(in oklch, var(--bg) 92%, transparent)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--rule)",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            color: pathname === link.href ? "var(--ink)" : "var(--ink-faint)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 22, fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
          >
            {link.icon}
          </span>
          <span style={{ fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
