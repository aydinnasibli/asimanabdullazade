"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
  multiple?: boolean;
}

export default function ImageUploader({
  images,
  onChange,
  multiple = true,
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFiles = async (files: FileList | File[]) => {
    setUploading(true);
    const newUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const { url } = await res.json();
        newUrls.push(url);
      }
    }

    if (multiple) {
      onChange([...images, ...newUrls]);
    } else {
      onChange(newUrls.length > 0 ? [newUrls[0]] : images);
    }
    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      uploadFiles(e.dataTransfer.files);
    }
  };

  const removeImage = async (index: number) => {
    const url = images[index];
    await fetch("/api/upload", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Upload zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        style={{
          border: `2px dashed ${dragOver ? "var(--ink)" : "var(--rule)"}`,
          padding: "32px 24px",
          textAlign: "center",
          cursor: "pointer",
          background: dragOver ? "var(--bg-warm)" : "transparent",
          marginBottom: images.length > 0 ? 16 : 0,
          transition: "all 0.15s",
        }}
      >
        <p style={{ fontSize: 12, color: "var(--ink-mid)" }}>
          {uploading
            ? "Uploading…"
            : "Drop images here or click to upload"}
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={(e) => e.target.files && uploadFiles(e.target.files)}
          style={{ display: "none" }}
        />
      </div>

      {/* Preview grid */}
      {images.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 12,
          }}
        >
          {images.map((url, i) => (
            <div
              key={url}
              style={{
                position: "relative",
                paddingBottom: "75%",
                background: "var(--bg-warm)",
              }}
            >
              <Image
                fill
                src={url}
                alt={`Upload ${i + 1}`}
                className="object-cover"
                sizes="120px"
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
