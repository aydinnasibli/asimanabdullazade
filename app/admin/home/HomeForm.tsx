"use client";

import { useState } from "react";
import { updateHomeSettings } from "@/lib/actions/home";
import ImageUploader from "@/components/admin/ImageUploader";
import YouTubePreview from "@/components/admin/YouTubePreview";

interface HomeData {
  photographyHeroImage: string;
  filmHeroImage: string;
  filmHeroVideo: string;
  designHeroImage: string;
  stripText: string;
}

export default function HomeForm({
  initialData,
}: {
  initialData: HomeData | null;
}) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [photographyHeroImage, setPhotographyHeroImage] = useState(
    initialData?.photographyHeroImage ?? ""
  );
  const [filmHeroImage, setFilmHeroImage] = useState(
    initialData?.filmHeroImage ?? ""
  );
  const [filmHeroVideo, setFilmHeroVideo] = useState(
    initialData?.filmHeroVideo ?? ""
  );
  const [designHeroImage, setDesignHeroImage] = useState(
    initialData?.designHeroImage ?? ""
  );
  const [stripText, setStripText] = useState(
    initialData?.stripText ?? "Baku, Azerbaijan — 2026"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await updateHomeSettings({
      photographyHeroImage,
      filmHeroImage,
      filmHeroVideo,
      designHeroImage,
      stripText,
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const labelStyle = {
    fontSize: 9,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "var(--ink-light)",
    display: "block",
    marginBottom: 8,
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

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 600 }}
    >
      <div>
        <label style={labelStyle}>Photography Panel Image</label>
        <ImageUploader
          images={photographyHeroImage ? [photographyHeroImage] : []}
          onChange={(imgs) => setPhotographyHeroImage(imgs[0] ?? "")}
          multiple={false}
        />
      </div>

      <div>
        <label style={labelStyle}>Film Panel Image</label>
        <ImageUploader
          images={filmHeroImage ? [filmHeroImage] : []}
          onChange={(imgs) => setFilmHeroImage(imgs[0] ?? "")}
          multiple={false}
        />
      </div>

      <div>
        <label style={{ ...labelStyle, marginBottom: 12 }}>
          Film Panel Hover Video
        </label>
        <YouTubePreview url={filmHeroVideo} onChange={setFilmHeroVideo} />
      </div>

      <div>
        <label style={labelStyle}>Design Panel Image</label>
        <ImageUploader
          images={designHeroImage ? [designHeroImage] : []}
          onChange={(imgs) => setDesignHeroImage(imgs[0] ?? "")}
          multiple={false}
        />
      </div>

      <div>
        <label style={labelStyle}>Bottom Strip Text</label>
        <input
          type="text"
          value={stripText}
          onChange={(e) => setStripText(e.target.value)}
          style={fieldStyle}
        />
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 8 }}>
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
        {saved && (
          <span style={{ fontSize: 12, color: "var(--ink-mid)" }}>Saved!</span>
        )}
      </div>
    </form>
  );
}
