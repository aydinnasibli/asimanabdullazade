import dbConnect from "@/lib/mongodb";
import Photography from "@/models/Photography";
import Film from "@/models/Film";
import Design from "@/models/Design";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getCounts() {
  await dbConnect();
  const [photo, film, design] = await Promise.all([
    Photography.countDocuments(),
    Film.countDocuments(),
    Design.countDocuments(),
  ]);
  return { photo, film, design };
}

export default async function AdminDashboard() {
  const counts = await getCounts();

  const cards = [
    { label: "Photography Series", count: counts.photo, href: "/admin/photography" },
    { label: "Films", count: counts.film, href: "/admin/film" },
    { label: "Design Projects", count: counts.design, href: "/admin/design" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <p
          style={{
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--ink-light)",
            marginBottom: 12,
          }}
        >
          Overview
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: "2.4rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
          }}
        >
          Dashboard
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            style={{
              padding: "32px 24px",
              border: "1px solid var(--rule)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              {card.count}
            </span>
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-mid)",
              }}
            >
              {card.label}
            </span>
          </Link>
        ))}
      </div>

      <div
        style={{
          marginTop: 48,
          padding: "24px 0",
          borderTop: "1px solid var(--rule)",
          display: "flex",
          gap: 24,
        }}
      >
        <Link
          href="/admin/about"
          style={{
            fontSize: 13,
            color: "var(--ink-mid)",
            textDecoration: "none",
            borderBottom: "1px solid var(--rule)",
            paddingBottom: 2,
          }}
        >
          Edit About Page
        </Link>
        <Link
          href="/admin/home"
          style={{
            fontSize: 13,
            color: "var(--ink-mid)",
            textDecoration: "none",
            borderBottom: "1px solid var(--rule)",
            paddingBottom: 2,
          }}
        >
          Edit Home Page
        </Link>
      </div>
    </div>
  );
}
