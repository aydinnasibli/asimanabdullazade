"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/admin/ImageUploader";

interface PhotographyFormProps {
  initialData?: {
    _id?: string;
    title: string;
    year: string;
    count: string;
    format: string;
    description: string;
    images: string[];
  };
  onSave: (data: {
    title: string;
    year: string;
    count: string;
    format: string;
    description: string;
    images: string[];
  }) => Promise<unknown>;
}

export default function PhotographyForm({
  initialData,
  onSave,
}: PhotographyFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [year, setYear] = useState(initialData?.year ?? "");
  const [count, setCount] = useState(initialData?.count ?? "");
  const [format, setFormat] = useState(initialData?.format ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [images, setImages] = useState<string[]>(initialData?.images ?? []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await onSave({ title, year, count, format, description, images });
    router.push("/admin/photography");
  };

  const fieldStyle = {
    width: "100%",
    padding: "10px 14px",
    fontSize: 13,
    border: "1px solid var(--rule)",
    background: "transparent",
    color: "var(--ink)",
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle = {
    fontSize: 9,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "var(--ink-light)",
    display: "block",
    marginBottom: 8,
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 600 }}
    >
      <div>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={fieldStyle}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Count</label>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
            placeholder="12 photographs"
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Format</label>
          <input
            type="text"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            required
            placeholder="35mm Archival Ink"
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>

      <div>
        <label style={labelStyle}>Images</label>
        <ImageUploader images={images} onChange={setImages} />
      </div>

      <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
        <button
          type="submit"
          disabled={saving}
          style={{
            padding: "12px 28px",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "var(--ink)",
            color: "var(--bg)",
            border: "none",
            cursor: saving ? "wait" : "pointer",
            opacity: saving ? 0.6 : 1,
          }}
        >
          {saving ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          style={{
            padding: "12px 28px",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "transparent",
            color: "var(--ink-mid)",
            border: "1px solid var(--rule)",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
