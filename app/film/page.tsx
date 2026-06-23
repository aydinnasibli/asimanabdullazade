import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { getFilms } from "@/lib/actions/film";

export const metadata: Metadata = {
  title: "Film",
  description: "Short films, documentaries and experimental work by Asiman Abdullazade.",
};


export default async function Film() {
  const films = await getFilms();
  const showreel = films.find((f: { type: string }) => f.type.toLowerCase() === "showreel");
  const otherFilms = films.filter((f: { type: string }) => f.type.toLowerCase() !== "showreel");

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
        {showreel && showreel.youtubeUrl && (
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <YouTubePlayer
                url={showreel.youtubeUrl}
                thumbnailUrl={showreel.thumbnailUrl}
                title="Showreel"
              />
            </div>
          </Reveal>
        )}

        {/* Film list */}
        {otherFilms.map((film: { _id: string; title: string; year: string; duration: string; type: string; description: string; thumbnailUrl: string; youtubeUrl: string }, i: number) => (
          <Reveal key={film._id} delay={i * 70}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 40, paddingBottom: 48, marginBottom: 48, borderBottom: "1px solid var(--rule)" }}>
              <div style={{ position: "relative" }}>
                {film.youtubeUrl ? (
                  <YouTubePlayer
                    url={film.youtubeUrl}
                    thumbnailUrl={film.thumbnailUrl}
                    title={film.title}
                  />
                ) : film.thumbnailUrl ? (
                  <div className="img-zoom-hover" style={{ position: "relative", paddingBottom: "56%", background: "var(--bg-warm)" }}>
                    <Image
                      fill
                      src={film.thumbnailUrl}
                      alt={film.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ filter: "grayscale(100%) brightness(0.6)" }}
                    />
                  </div>
                ) : null}
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--ink-light)", border: "1px solid var(--rule)", padding: "3px 8px" }}>{film.type}</span>
                  <span style={{ fontSize: 8, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>{film.duration}</span>
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.1, color: "var(--ink)" }}>{film.title}</h2>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-mid)" }}>{film.description}</p>
                <span style={{ fontSize: 9, color: "var(--ink-faint)" }}>{film.year}</span>
              </div>
            </div>
          </Reveal>
        ))}

        {films.length === 0 && (
          <p style={{ fontSize: 14, color: "var(--ink-faint)", textAlign: "center", padding: "80px 0" }}>
            No films yet.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
