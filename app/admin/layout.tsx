"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: "◫" },
  { label: "Photography", href: "/admin/photography", icon: "◻" },
  { label: "Film", href: "/admin/film", icon: "▷" },
  { label: "Design", href: "/admin/design", icon: "◇" },
  { label: "About", href: "/admin/about", icon: "○" },
  { label: "Home Page", href: "/admin/home", icon: "⌂" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
      {/* Mobile header bar */}
      <div
        className="admin-mobile-header"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 52,
          background: "var(--bg)",
          borderBottom: "1px solid var(--rule)",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          zIndex: 200,
        }}
      >
        <p
          className="font-display"
          style={{ fontSize: 16, fontWeight: 300, fontStyle: "italic", color: "var(--ink)" }}
        >
          Admin
        </p>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--ink)",
            cursor: "pointer",
            padding: 4,
            fontSize: 20,
          }}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="admin-sidebar-overlay"
          style={{
            display: "none",
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 299,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}
        style={{
          width: 240,
          borderRight: "1px solid var(--rule)",
          padding: "28px 0",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          background: "var(--bg)",
          zIndex: 300,
        }}
      >
        {/* Header */}
        <div style={{ padding: "0 24px", marginBottom: 36 }}>
          <p
            className="font-display"
            style={{
              fontSize: 20,
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ink)",
              marginBottom: 4,
            }}
          >
            Admin Panel
          </p>
          <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
            Asiman Abdullazade
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
          {sidebarLinks.map((link) => {
            const isActive =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                style={{
                  padding: "11px 24px",
                  fontSize: 13,
                  color: isActive ? "var(--ink)" : "var(--ink-mid)",
                  textDecoration: "none",
                  background: isActive ? "var(--bg-warm)" : "transparent",
                  borderLeft: isActive ? "2px solid var(--ink)" : "2px solid transparent",
                  fontWeight: isActive ? 500 : 400,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "background 0.1s",
                }}
              >
                <span style={{ fontSize: 12, opacity: 0.5, width: 16, textAlign: "center" }}>{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          <Link
            href="/"
            target="_blank"
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink-mid)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ↗ View Live Site
          </Link>
          <button
            onClick={handleLogout}
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textAlign: "left",
            }}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="admin-main" style={{ flex: 1, padding: "32px 48px", maxWidth: 960, overflow: "auto" }}>
        {children}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .admin-mobile-header { display: flex !important; }
          .admin-sidebar-overlay { display: block !important; }
          .admin-sidebar {
            position: fixed !important;
            top: 0; bottom: 0; left: 0;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
          }
          .admin-sidebar.open { transform: translateX(0); }
          .admin-main { padding: 20px !important; padding-top: 72px !important; }
        }
      `}</style>
    </div>
  );
}
