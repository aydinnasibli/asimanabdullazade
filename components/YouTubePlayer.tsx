"use client";

import { useState } from "react";
import Image from "next/image";

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

interface YouTubePlayerProps {
  url: string;
  thumbnailUrl?: string;
  title?: string;
}

export default function YouTubePlayer({
  url,
  thumbnailUrl,
  title = "Video",
}: YouTubePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = extractYouTubeId(url);

  if (!videoId) return null;

  const ytThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const poster = thumbnailUrl || ytThumbnail;

  if (playing) {
    return (
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=1&color=white`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setPlaying(true)}
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        background: "var(--bg-warm)",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <Image
        fill
        src={poster}
        alt={title}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
        style={{ filter: "grayscale(100%) brightness(0.5)" }}
      />
      {/* Play button */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.08)",
            transition: "background 0.2s, transform 0.2s",
          }}
        >
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
            <path d="M3 1L21 13L3 25V1Z" fill="white" opacity="0.9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
