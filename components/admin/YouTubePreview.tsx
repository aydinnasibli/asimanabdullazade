"use client";

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

interface YouTubePreviewProps {
  url: string;
  onChange: (url: string) => void;
}

export default function YouTubePreview({ url, onChange }: YouTubePreviewProps) {
  const videoId = url ? extractYouTubeId(url) : null;

  return (
    <div>
      <label
        style={{
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--ink-light)",
          display: "block",
          marginBottom: 8,
        }}
      >
        YouTube URL
      </label>
      <input
        type="text"
        value={url}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://youtube.com/watch?v=..."
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: 13,
          border: "1px solid var(--rule)",
          background: "transparent",
          color: "var(--ink)",
          outline: "none",
          fontFamily: "inherit",
          marginBottom: videoId ? 12 : 0,
        }}
      />
      {videoId && (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            background: "#000",
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
