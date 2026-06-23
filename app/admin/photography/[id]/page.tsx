import { notFound } from "next/navigation";
import { getPhotographyById, updatePhotography } from "@/lib/actions/photography";
import PhotographyForm from "../PhotographyForm";

export const dynamic = "force-dynamic";

export default async function EditPhotography({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getPhotographyById(id);
  if (!item) notFound();

  const handleSave = async (data: {
    title: string;
    year: string;
    count: string;
    format: string;
    description: string;
    images: string[];
  }) => {
    "use server";
    return updatePhotography(id, data);
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
          Photography
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
          Edit Series
        </h1>
      </div>
      <PhotographyForm initialData={item} onSave={handleSave} />
    </div>
  );
}
