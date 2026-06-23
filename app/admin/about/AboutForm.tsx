"use client";

import { useState } from "react";
import { updateAbout } from "@/lib/actions/about";
import ImageUploader from "@/components/admin/ImageUploader";

interface AboutData {
  portrait: string;
  tagline: string;
  bio: string[];
  recognition: { title: string; detail: string }[];
  email: string;
  location: string;
  roles: string;
}

export default function AboutForm({
  initialData,
}: {
  initialData: AboutData | null;
}) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [portrait, setPortrait] = useState(initialData?.portrait ?? "");
  const [tagline, setTagline] = useState(initialData?.tagline ?? "");
  const [bio, setBio] = useState(initialData?.bio?.join("\n\n") ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [location, setLocation] = useState(initialData?.location ?? "");
  const [roles, setRoles] = useState(initialData?.roles ?? "");
  const [recognition, setRecognition] = useState(
    initialData?.recognition ?? []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await updateAbout({
      portrait,
      tagline,
      bio: bio.split("\n\n").filter(Boolean),
      recognition,
      email,
      location,
      roles,
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addRecognition = () => {
    setRecognition([...recognition, { title: "", detail: "" }]);
  };

  const updateRecognitionItem = (
    index: number,
    field: "title" | "detail",
    value: string
  ) => {
    const updated = [...recognition];
    updated[index] = { ...updated[index], [field]: value };
    setRecognition(updated);
  };

  const removeRecognition = (index: number) => {
    setRecognition(recognition.filter((_, i) => i !== index));
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
      style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 600 }}
    >
      <div>
        <label style={labelStyle}>Portrait Photo</label>
        <ImageUploader
          images={portrait ? [portrait] : []}
          onChange={(imgs) => setPortrait(imgs[0] ?? "")}
          multiple={false}
        />
      </div>

      <div>
        <label style={labelStyle}>Tagline</label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          placeholder="I work at the intersection of image, time, and mark."
          style={fieldStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Roles</label>
        <input
          type="text"
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
          placeholder="Photographer · Filmmaker · Designer"
          style={fieldStyle}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Baku, Azerbaijan"
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Bio (separate paragraphs with blank lines)</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={8}
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>

      {/* Recognition */}
      <div>
        <label style={labelStyle}>Recognition / Exhibitions</label>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {recognition.map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: 8, alignItems: "start" }}
            >
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateRecognitionItem(i, "title", e.target.value)}
                placeholder="Title"
                style={{ ...fieldStyle, flex: 1 }}
              />
              <input
                type="text"
                value={item.detail}
                onChange={(e) => updateRecognitionItem(i, "detail", e.target.value)}
                placeholder="Detail"
                style={{ ...fieldStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={() => removeRecognition(i)}
                style={{
                  fontSize: 16,
                  color: "#c44",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addRecognition}
            style={{
              fontSize: 11,
              color: "var(--ink-mid)",
              background: "none",
              border: "1px dashed var(--rule)",
              cursor: "pointer",
              padding: "8px 16px",
              alignSelf: "flex-start",
            }}
          >
            + Add Recognition
          </button>
        </div>
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
