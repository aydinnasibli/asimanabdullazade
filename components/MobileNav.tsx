"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const links = [
    { name: "PROJECTS", href: "/", icon: "grid_view" },
    { name: "ARCHIVE", href: "/archive", icon: "inventory_2" },
    { name: "ABOUT", href: "/about", icon: "person" },
    { name: "INQUIRY", href: "/inquiry", icon: "mail" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg flex justify-around items-center py-4 border-t border-outline-variant z-50">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`flex flex-col items-center transition-colors ${
            pathname === link.href ? "text-black" : "text-zinc-400 hover:text-zinc-600"
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>
            {link.icon}
          </span>
          <span className="text-[8px] tracking-widest mt-1 font-label uppercase">
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
