import Link from "next/link";
import { getFilms, deleteFilm, reorderFilms } from "@/lib/actions/film";
import FilmList from "./FilmList";

export const dynamic = "force-dynamic";

export default async function AdminFilm() {
  const films = await getFilms();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 32,
        }}
      >
        <div>
          <p
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
              marginBottom: 12,
            }}
          >
            Manage
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
            Film
          </h1>
        </div>
        <Link
          href="/admin/film/new"
          style={{
            padding: "10px 20px",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "var(--ink)",
            color: "var(--bg)",
            textDecoration: "none",
          }}
        >
          + Add New
        </Link>
      </div>

      <FilmList
        items={films}
        onReorder={reorderFilms}
        onDelete={deleteFilm}
      />
    </div>
  );
}
