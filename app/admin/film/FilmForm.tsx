"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/admin/ImageUploader";
import YouTubePreview from "@/components/admin/YouTubePreview";

interface FilmFormProps {
  initialData?: {
    _id?: string;
    title: string;
    year: string;
    duration: string;
    type: string;
    description: string;
    thumbnailUrl: string;
    youtubeUrl: string;
  };
  onSave: (data: {
    title: string;
    year: string;
    duration: string;
    type: string;
    description: string;
    thumbnailUrl: string;
    youtubeUrl: string;
  }) => Promise<unknown>;
}

export default function FilmForm({ initialData, onSave }: FilmFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [year, setYear] = useState(initialData?.year ?? "");
  const [duration, setDuration] = useState(initialData?.duration ?? "");
  const [type, setType] = useState(initialData?.type ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [thumbnailUrl, setThumbnailUrl] = useState(initialData?.thumbnailUrl ?? "");
  const [youtubeUrl, setYoutubeUrl] = useState(initialData?.youtubeUrl ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await onSave({ title, year, duration, type, description, thumbnailUrl, youtubeUrl });
    router.push("/admin/film");
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
          <label style={labelStyle}>Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            placeholder="12 min"
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            placeholder="Short Film"
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
        <label style={labelStyle}>Thumbnail</label>
        <ImageUploader
          images={thumbnailUrl ? [thumbnailUrl] : []}
          onChange={(imgs) => setThumbnailUrl(imgs[0] ?? "")}
          multiple={false}
        />
      </div>

      <YouTubePreview url={youtubeUrl} onChange={setYoutubeUrl} />

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
