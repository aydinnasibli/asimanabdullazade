import { createFilm } from "@/lib/actions/film";
import FilmForm from "../FilmForm";

export default function NewFilm() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--ink-light)",
            marginBottom: 12,
          }}
        >
          Film
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: "2rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
          }}
        >
          New Film
        </h1>
      </div>
      <FilmForm onSave={createFilm} />
    </div>
  );
}
