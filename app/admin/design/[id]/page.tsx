import { notFound } from "next/navigation";
import { getDesignById, updateDesign } from "@/lib/actions/design";
import DesignForm from "../DesignForm";

export const dynamic = "force-dynamic";

export default async function EditDesign({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getDesignById(id);
  if (!item) notFound();

  const handleSave = async (data: {
    title: string;
    year: string;
    category: string;
    description: string;
    images: string[];
  }) => {
    "use server";
    return updateDesign(id, data);
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
          Design
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
          Edit Project
        </h1>
      </div>
      <DesignForm initialData={item} onSave={handleSave} />
    </div>
  );
}
