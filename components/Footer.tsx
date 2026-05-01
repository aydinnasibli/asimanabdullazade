import Link from "next/link";

const footerLinks = [
  { label: "Photography", href: "/photography" },
  { label: "Film",        href: "/film" },
  { label: "Design",      href: "/design" },
  { label: "About",       href: "/about" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-name">Asiman Abdullazade</span>
      <div className="footer-links">
        {footerLinks.map((l) => (
          <Link key={l.label} href={l.href} className="footer-link">
            {l.label}
          </Link>
        ))}
      </div>
      <span className="footer-copy">© 2026 — Baku, Azerbaijan</span>
    </footer>
  );
}
