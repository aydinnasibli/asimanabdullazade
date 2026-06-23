"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function LayoutShell() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <>
      <Navigation />
      <div style={{ height: 56 }} />
      <ThemeToggle />
    </>
  );
}
