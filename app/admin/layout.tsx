"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Photography", href: "/admin/photography" },
  { label: "Film", href: "/admin/film" },
  { label: "Design", href: "/admin/design" },
  { label: "About", href: "/admin/about" },
  { label: "Home Page", href: "/admin/home" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          borderRight: "1px solid var(--rule)",
          padding: "32px 0",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <div style={{ padding: "0 24px", marginBottom: 40 }}>
          <Link
            href="/"
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← Back to site
          </Link>
          <p
            className="font-display"
            style={{
              fontSize: 18,
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ink)",
              marginTop: 16,
            }}
          >
            Admin
          </p>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
          {sidebarLinks.map((link) => {
            const isActive =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "10px 24px",
                  fontSize: 13,
                  color: isActive ? "var(--ink)" : "var(--ink-mid)",
                  textDecoration: "none",
                  background: isActive ? "var(--bg-warm)" : "transparent",
                  borderRight: isActive ? "2px solid var(--ink)" : "2px solid transparent",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: "0 24px" }}>
          <button
            onClick={handleLogout}
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "32px 48px", maxWidth: 960, overflow: "auto" }}>
        {children}
      </main>
    </div>
  );
}
