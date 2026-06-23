import { notFound } from "next/navigation";
import { getFilmById, updateFilm } from "@/lib/actions/film";
import FilmForm from "../FilmForm";

export const dynamic = "force-dynamic";

export default async function EditFilm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getFilmById(id);
  if (!item) notFound();

  const handleSave = async (data: {
    title: string;
    year: string;
    duration: string;
    type: string;
    description: string;
    thumbnailUrl: string;
    youtubeUrl: string;
  }) => {
    "use server";
    return updateFilm(id, data);
  };

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
          Edit Film
        </h1>
      </div>
      <FilmForm initialData={item} onSave={handleSave} />
    </div>
  );
}
