import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Asiman Abdullazade — photographer, filmmaker, and designer based in Baku, Azerbaijan.",
  alternates: { canonical: "https://asimanabdullazade.com/about" },
};

const portrait = "https://lh3.googleusercontent.com/aida-public/AB6AXuAUfLqr9UXzTlIzo010vtQKgl0z7cz-II2ttCOZelOAHvdqsD1MUShChYAw4eq0h1jmjqg3alpf6pDOHwRJi7Wo2wZ5nIg91usI6cp4exaN5G-nkM8jebVyo98-DrCCVxX1ahoLIsqdJZbnsHHFOyM7LoejgQKQbrXhYC71BIkFdc0954punm3FTqJ9qTI4HBkUg4AcquuMRT1CX0HXyGmVa8arv1gdGj2tA00jgAtCChhBD0pa9AH9n5Ps-j10X-n-ZGHWeqUfsvg";

const recognition = [
  { title: "The Weight of Light",    detail: "Group Exhibition — Yay Gallery, Baku 2024" },
  { title: "Monochrome Dialogues",   detail: "Solo Show — ArtTer, Tbilisi 2022" },
  { title: "Archival Silence",       detail: "Publication — Atlas of Contemporary Photography 2021" },
];

export default function About() {
  return (
    <div className="page-animate" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 72, alignItems: "start", marginBottom: 96 }}>

          {/* Portrait column */}
          <Reveal>
            <div style={{ position: "sticky", top: 80 }}>
              <div style={{ position: "relative", paddingBottom: "125%", overflow: "hidden", background: "var(--bg-warm)" }}>
                <Image
                  fill
                  src={portrait}
                  alt="Asiman Abdullazade"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 38vw"
                  style={{ filter: "grayscale(100%) brightness(0.9)" }}
                />
              </div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-mid)" }}>Asiman Abdullazade</span>
                <span style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-light)" }}>Photographer · Filmmaker · Designer</span>
                <span style={{ fontSize: 9, color: "var(--ink-faint)", marginTop: 4 }}>Based in Baku, Azerbaijan</span>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <div>
            <Reveal>
              <h1 className="font-display" style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: 40, fontStyle: "italic", color: "var(--ink)" }}>
                I work at the intersection of image, time, and mark.
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22, color: "var(--ink-mid)", fontSize: 14, lineHeight: 1.85 }}>
                <p>I grew up in Baku, where Soviet architecture and Caspian light collide in unexpected ways. That tension — between structure and softness, between permanence and flux — still runs through everything I make.</p>
                <p>I started shooting on a borrowed Zenit when I was sixteen. Later I studied graphic design, fell into filmmaking, and eventually realised these three practices aren't separate pursuits — they're a single way of looking.</p>
                <p>My photography focuses on landscapes and the built environment. My films are mostly short, observational — interested in the rhythm of everyday life. My design work is rooted in typography and the logic of print.</p>
                <p>I take on commissions that interest me: editorial projects, short film collaborations, brand identities for organisations doing considered work. I prefer long conversations to quick briefs.</p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--rule)" }}>
                <p style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 24 }}>Selected Recognition</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {recognition.map((r) => (
                    <div key={r.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20 }}>
                      <span style={{ fontSize: 13, letterSpacing: "-0.005em", color: "var(--ink)" }}>{r.title}</span>
                      <span style={{ fontSize: 9, color: "var(--ink-light)", textAlign: "right", letterSpacing: "0.05em" }}>{r.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--rule)" }}>
                <p style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 16 }}>Contact</p>
                <a
                  href="mailto:hello@asimanabdullazade.com"
                  className="font-display email-link"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)", fontWeight: 300, fontStyle: "italic", color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink-faint)", paddingBottom: 2, display: "inline-block" }}
                >
                  hello@asimanabdullazade.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
