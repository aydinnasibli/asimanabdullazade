import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { getAbout } from "@/lib/actions/about";

export const metadata: Metadata = {
  title: "About",
  description: "Asiman Abdullazade — photographer, filmmaker, and designer based in Baku, Azerbaijan.",
  alternates: { canonical: "https://asimanabdullazade.com/about" },
};


export default async function About() {
  const about = await getAbout();

  if (!about) {
    return (
      <div className="page-animate" style={{ paddingTop: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px", textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "var(--ink-faint)" }}>About page content not set up yet.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-animate" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 72, alignItems: "start", marginBottom: 96 }}>

          {/* Portrait column */}
          <Reveal>
            <div style={{ position: "sticky", top: 80 }}>
              {about.portrait && (
                <div style={{ position: "relative", paddingBottom: "125%", overflow: "hidden", background: "var(--bg-warm)" }}>
                  <Image
                    fill
                    src={about.portrait}
                    alt="Asiman Abdullazade"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 38vw"
                    style={{ filter: "grayscale(100%) brightness(0.9)" }}
                  />
                </div>
              )}
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-mid)" }}>Asiman Abdullazade</span>
                <span style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-light)" }}>
                  {about.roles || "Photographer · Filmmaker · Designer"}
                </span>
                <span style={{ fontSize: 9, color: "var(--ink-faint)", marginTop: 4 }}>
                  {about.location ? `Based in ${about.location}` : "Based in Baku, Azerbaijan"}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <div>
            {about.tagline && (
              <Reveal>
                <h1 className="font-display" style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: 40, fontStyle: "italic", color: "var(--ink)" }}>
                  {about.tagline}
                </h1>
              </Reveal>
            )}

            <Reveal delay={80}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22, color: "var(--ink-mid)", fontSize: 14, lineHeight: 1.85 }}>
                {about.bio?.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {about.recognition && about.recognition.length > 0 && (
              <Reveal delay={160}>
                <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--rule)" }}>
                  <p style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 24 }}>Selected Recognition</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {about.recognition.map((r: { title: string; detail: string }, i: number) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20 }}>
                        <span style={{ fontSize: 13, letterSpacing: "-0.005em", color: "var(--ink)" }}>{r.title}</span>
                        <span style={{ fontSize: 9, color: "var(--ink-light)", textAlign: "right", letterSpacing: "0.05em" }}>{r.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {about.email && (
              <Reveal delay={200}>
                <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--rule)" }}>
                  <p style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 16 }}>Contact</p>
                  <a
                    href={`mailto:${about.email}`}
                    className="font-display email-link"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)", fontWeight: 300, fontStyle: "italic", color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink-faint)", paddingBottom: 2, display: "inline-block" }}
                  >
                    {about.email}
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
