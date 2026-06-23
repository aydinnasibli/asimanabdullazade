import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { getPhotographySeries } from "@/lib/actions/photography";

export const metadata: Metadata = {
  title: "Photography",
  description: "Medium-format landscapes, architectural studies, and portrait work by Asiman Abdullazade.",
};


export default async function Photography() {
  const series = await getPhotographySeries();

  return (
    <div className="page-animate" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        <Reveal>
          <div style={{ marginBottom: 64, borderBottom: "1px solid var(--rule)", paddingBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 16 }}>01 — Discipline</p>
              <h1 className="font-display" style={{ fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.9, fontStyle: "italic", color: "var(--ink)" }}>
                Photography
              </h1>
            </div>
            <p style={{ maxWidth: 300, fontSize: 13, lineHeight: 1.8, color: "var(--ink-mid)", textAlign: "right" }}>
              Medium-format landscapes, architectural studies, and portrait work. Shot primarily on film with archival inkjet printing.
            </p>
          </div>
        </Reveal>

        {series.map((s: { _id: string; title: string; year: string; count: string; format: string; images: string[] }, i: number) => {
          const imgs = s.images.length >= 2
            ? (i % 2 === 0 ? [s.images[0], s.images[1]] : [s.images[1], s.images[0]])
            : s.images;
          return (
            <Reveal key={s._id} delay={i * 80}>
              <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "5fr 3fr" : "3fr 5fr", gap: 20, marginBottom: 56 }}>
                {imgs.map((img: string, j: number) => (
                  <div key={j} className="img-zoom-hover" style={{ position: "relative", paddingBottom: j === 0 ? "66%" : "90%", background: "var(--bg-warm)" }}>
                    <Image
                      fill
                      src={img}
                      alt={s.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ filter: "grayscale(100%) brightness(0.9)" }}
                    />
                  </div>
                ))}
                <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 8, flexWrap: "wrap", gap: 8 }}>
                  <span className="font-display" style={{ fontSize: 22, fontWeight: 300, letterSpacing: "-0.01em", color: "var(--ink)" }}>{s.title}</span>
                  <div style={{ display: "flex", gap: 24 }}>
                    <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-light)" }}>{s.count}</span>
                    <span style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{s.format}</span>
                    <span style={{ fontSize: 9, color: "var(--ink-faint)" }}>{s.year}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}

        {series.length === 0 && (
          <p style={{ fontSize: 14, color: "var(--ink-faint)", textAlign: "center", padding: "80px 0" }}>
            No photography series yet.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
