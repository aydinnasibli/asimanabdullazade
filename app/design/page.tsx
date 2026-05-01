import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Design",
  description: "Brand identity, editorial systems, and art direction by Asiman Abdullazade.",
};

const IMGS = {
  photo2: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM",
  studio1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvaAIyifPSlH5g9kAhk_vqOg2HAkgWw9v4DAlah9Ak_uJ11pXVI6GTcMYEcOzSJ1Ueje8y_0H7-BVrAp0L3QJO5UIoWBeXe1DdmKXQDrxLeNVxqC7VMDBuT2wXIK7W-qhLUPf1gYdrjlFwqDgdVVr7KC4Pjq2kPRLh3ht_E-6edWn0UN9Obpm9N3oogRxdsmkABVe3ErXFg82m4bvrkQSMR6-Zim11l1eBEKiwzInHGaYVBdzNBc5TJqv-5jHvl5KTKPJ9tFciFXU",
  photo6: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOWZGEznsK8kmmjEPAHzLuQ8FisQGoA0NhHU76ROPJYvGIiw1eW_XcfoNIx5Hc90eUqdvb9WR0zUVhRNK2aejZv4ikXLrQxrOiGltvUJF9qcZKjMeyNqXOCqPg_VfGIyE_Y9oVPaVl30K8E3Rtrxm68Qx64IgqSI4jfnp47bEggzwiFRVv0kyYxS-EbDVNJMbZpnn3c4e0PjjHqTzls7WypNjCu1jJzBGx5zAvtvmc5sOQL6QwzRbckqKZlibuqexoCd6k_Mb2zZY",
  photo3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc",
};

const projects = [
  { title: "Studio Identity",    year: "2023", category: "Brand Identity",   img: IMGS.photo2,  desc: "Visual identity for a Baku architecture studio. Wordmark, palette, and stationery system." },
  { title: "Type Systems",       year: "2022", category: "Editorial Design", img: IMGS.studio1, desc: "Annual report design and custom type pairing for a Caucasus cultural foundation." },
  { title: "Archive Catalogue",  year: "2022", category: "Print Design",     img: IMGS.photo6,  desc: "Exhibition catalogue for a group photography show. 120pp, Hahnemühle uncoated." },
  { title: "Wayfinding",         year: "2021", category: "Signage System",   img: IMGS.photo3,  desc: "Environmental graphics for a contemporary art museum in Tbilisi." },
];

export default function Design() {
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
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="img-zoom-hover" style={{ cursor: "pointer" }}>
                <div style={{ position: "relative", paddingBottom: "65%", background: "var(--bg-warm)", marginBottom: 16 }}>
                  <Image
                    fill
                    src={p.img}
                    alt={p.title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ filter: "grayscale(100%) brightness(0.88)" }}
                  />
                  <div style={{ position: "absolute", top: 16, left: 16, zIndex: 1 }}>
                    <span style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", background: "rgba(255,255,255,0.9)", padding: "4px 10px", color: "oklch(0.12 0.008 80)" }}>{p.category}</span>
                  </div>
                </div>
                <h2 className="font-display" style={{ fontSize: 22, fontWeight: 300, letterSpacing: "-0.01em", marginBottom: 8, color: "var(--ink)" }}>{p.title}</h2>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--ink-mid)", marginBottom: 8 }}>{p.desc}</p>
                <span style={{ fontSize: 9, color: "var(--ink-faint)" }}>{p.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
