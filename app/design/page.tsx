import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { getDesignProjects } from "@/lib/actions/design";

export const metadata: Metadata = {
  title: "Design",
  description: "Brand identity, editorial systems, and art direction by Asiman Abdullazade.",
};

export const dynamic = "force-dynamic";

export default async function Design() {
  const projects = await getDesignProjects();

  return (
    <div className="page-animate" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        <Reveal>
          <div style={{ marginBottom: 64, borderBottom: "1px solid var(--rule)", paddingBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 16 }}>03 — Discipline</p>
              <h1 className="font-display" style={{ fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.9, fontStyle: "italic", color: "var(--ink)" }}>
                Design
              </h1>
            </div>
            <p style={{ maxWidth: 300, fontSize: 13, lineHeight: 1.8, color: "var(--ink-mid)", textAlign: "right" }}>
              Brand identity, editorial systems, and art direction. Rooted in typography and the logic of print.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
          {projects.map((p: { _id: string; title: string; year: string; category: string; description: string; images: string[] }, i: number) => (
            <Reveal key={p._id} delay={i * 80}>
              <div className="img-zoom-hover" style={{ cursor: "pointer" }}>
                {p.images[0] && (
                  <div style={{ position: "relative", paddingBottom: "65%", background: "var(--bg-warm)", marginBottom: 16 }}>
                    <Image
                      fill
                      src={p.images[0]}
                      alt={p.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ filter: "grayscale(100%) brightness(0.88)" }}
                    />
                    <div style={{ position: "absolute", top: 16, left: 16, zIndex: 1 }}>
                      <span style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", background: "rgba(255,255,255,0.9)", padding: "4px 10px", color: "oklch(0.12 0.008 80)" }}>{p.category}</span>
                    </div>
                  </div>
                )}
                <h2 className="font-display" style={{ fontSize: 22, fontWeight: 300, letterSpacing: "-0.01em", marginBottom: 8, color: "var(--ink)" }}>{p.title}</h2>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--ink-mid)", marginBottom: 8 }}>{p.description}</p>
                <span style={{ fontSize: 9, color: "var(--ink-faint)" }}>{p.year}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {projects.length === 0 && (
          <p style={{ fontSize: 14, color: "var(--ink-faint)", textAlign: "center", padding: "80px 0" }}>
            No design projects yet.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
