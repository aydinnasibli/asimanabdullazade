import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Photography",
  description: "Medium-format landscapes, architectural studies, and portrait work by Asiman Abdullazade.",
};

const IMGS = {
  photo6: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOWZGEznsK8kmmjEPAHzLuQ8FisQGoA0NhHU76ROPJYvGIiw1eW_XcfoNIx5Hc90eUqdvb9WR0zUVhRNK2aejZv4ikXLrQxrOiGltvUJF9qcZKjMeyNqXOCqPg_VfGIyE_Y9oVPaVl30K8E3Rtrxm68Qx64IgqSI4jfnp47bEggzwiFRVv0kyYxS-EbDVNJMbZpnn3c4e0PjjHqTzls7WypNjCu1jJzBGx5zAvtvmc5sOQL6QwzRbckqKZlibuqexoCd6k_Mb2zZY",
  photo3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc",
  photo1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA",
  photo4: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k",
  photo2: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM",
  photo5: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI",
};

const series = [
  { title: "Brutalist Silence",  year: "2024", count: "12 photographs", format: "35mm Archival Ink",       imgs: [IMGS.photo6, IMGS.photo3] },
  { title: "Fog & Pines",        year: "2023", count: "8 photographs",  format: "Medium Format Digital",   imgs: [IMGS.photo1, IMGS.photo4] },
  { title: "Concrete Rhythms",   year: "2022", count: "24 photographs", format: "Infrared Exposure",       imgs: [IMGS.photo2, IMGS.photo5] },
  { title: "Monolith Shadows",   year: "2021", count: "15 photographs", format: "Large Format Film",       imgs: [IMGS.photo3, IMGS.photo6] },
];

const equipment = [
  { label: "Primary",   value: "Phase One XF + IQ4 150MP" },
  { label: "Secondary", value: "35mm Leica M6 / Kodak Tri-X" },
  { label: "Print",     value: "Archival Inkjet, Hahnemühle Photo Rag" },
];

export default function Photography() {
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

        {series.map((s, i) => {
          const imgs = i % 2 === 0 ? s.imgs : [...s.imgs].reverse();
          return (
            <Reveal key={s.title} delay={i * 80}>
              <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "5fr 3fr" : "3fr 5fr", gap: 20, marginBottom: 56 }}>
                {imgs.map((img, j) => (
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

        <Reveal delay={200}>
          <div style={{ background: "var(--bg-warm)", padding: "40px 48px", marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginBottom: 20 }}>
            {equipment.map((eq) => (
              <div key={eq.label}>
                <p style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>{eq.label}</p>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink)" }}>{eq.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <Footer />
    </div>
  );
}
