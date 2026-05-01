import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Film",
  description: "Short films, documentaries and experimental work by Asiman Abdullazade.",
};

const IMGS = {
  photo5: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI",
  photo1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA",
  photo3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc",
  photo4: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k",
};

const films = [
  {
    title: "The Commute",
    year: "2024",
    duration: "12 min",
    type: "Short Film",
    img: IMGS.photo5,
    desc: "A meditation on urban solitude. Follows a figure through the daily rhythm of Baku at dawn.",
  },
  {
    title: "Tidal Light",
    year: "2022",
    duration: "24 min",
    type: "Documentary",
    img: IMGS.photo1,
    desc: "Caspian fishermen and the ancient relationship between community and water.",
  },
  {
    title: "Still Frame",
    year: "2021",
    duration: "6 min",
    type: "Experimental",
    img: IMGS.photo3,
    desc: "A single location, twelve hours, no cuts. Sound design by Narmin Hasanova.",
  },
];

export default function Film() {
  return (
    <div className="page-animate" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        <Reveal>
          <div style={{ marginBottom: 64, borderBottom: "1px solid var(--rule)", paddingBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 16 }}>02 — Discipline</p>
              <h1 className="font-display" style={{ fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.9, fontStyle: "italic", color: "var(--ink)" }}>
                Film
              </h1>
            </div>
            <p style={{ maxWidth: 300, fontSize: 13, lineHeight: 1.8, color: "var(--ink-mid)", textAlign: "right" }}>
              Short films, documentaries and experimental work. Edited in Final Cut Pro, shot primarily on Sony FX3 and Bolex 16mm.
            </p>
          </div>
        </Reveal>

        {/* Showreel */}
        <Reveal>
          <div style={{ position: "relative", paddingBottom: "42%", background: "var(--bg-warm)", marginBottom: 64, overflow: "hidden", cursor: "pointer" }}>
            <Image
              fill
              src={IMGS.photo4}
              alt="Showreel"
              className="object-cover"
              sizes="100vw"
              style={{ filter: "grayscale(100%) brightness(0.4)" }}
            />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)" }}>
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                  <path d="M3 1L21 13L3 25V1Z" fill="white" opacity="0.9" />
                </svg>
              </div>
              <p style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
                [ Showreel 2024 — drop Vimeo embed here ]
              </p>
            </div>
          </div>
        </Reveal>

        {/* Film list */}
        {films.map((film, i) => (
          <Reveal key={film.title} delay={i * 70}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 40, paddingBottom: 48, marginBottom: 48, borderBottom: "1px solid var(--rule)" }}>
              <div className="img-zoom-hover" style={{ position: "relative", paddingBottom: "56%", background: "var(--bg-warm)", cursor: "pointer" }}>
                <Image
                  fill
                  src={film.img}
                  alt={film.title}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ filter: "grayscale(100%) brightness(0.6)" }}
                />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M2 1L15 9L2 17V1Z" fill="white" opacity="0.9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", border: "1px solid var(--rule)", padding: "3px 8px" }}>{film.type}</span>
                  <span style={{ fontSize: 8, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>{film.duration}</span>
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.1, color: "var(--ink)" }}>{film.title}</h2>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-mid)" }}>{film.desc}</p>
                <span style={{ fontSize: 9, color: "var(--ink-faint)" }}>{film.year}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Footer />
    </div>
  );
}
