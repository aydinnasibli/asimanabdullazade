"use client";

import { useState, useEffect } from "react";

function applyTheme(tone: string) {
  const r = document.documentElement;
  if (tone === "warm") {
    r.style.setProperty("--bg", "oklch(0.97 0.008 80)");
    r.style.setProperty("--bg-warm", "oklch(0.94 0.010 75)");
    r.style.setProperty("--ink", "oklch(0.12 0.008 80)");
    r.style.setProperty("--ink-mid", "oklch(0.38 0.006 80)");
    r.style.setProperty("--ink-light", "oklch(0.60 0.005 80)");
    r.style.setProperty("--ink-faint", "oklch(0.82 0.004 80)");
    r.style.setProperty("--rule", "oklch(0.88 0.006 80)");
    r.style.setProperty("--hero-bg", "oklch(0.93 0.010 75)");
    r.style.setProperty("--hero-img-filter", "grayscale(70%) brightness(0.72) contrast(1.0) sepia(0.06)");
    r.style.setProperty("--hero-scrim", "linear-gradient(to top, rgba(240,232,220,0.72) 0%, rgba(240,232,220,0.08) 50%, transparent 100%)");
    r.style.setProperty("--hero-strip-border", "rgba(0,0,0,0.10)");
    r.style.setProperty("--hero-text", "rgba(20,16,12,0.40)");
    r.style.setProperty("--hero-ghost-color", "rgba(30,22,14,0.04)");
    r.style.setProperty("--hero-title-color", "rgba(20,14,8,0.82)");
    r.style.setProperty("--hero-index-color", "rgba(20,14,8,0.30)");
    r.style.setProperty("--hero-sliver-color", "rgba(20,14,8,0.22)");
    r.style.setProperty("--hero-sub-color", "rgba(20,14,8,0.38)");
  } else {
    r.style.setProperty("--bg", "oklch(0.10 0.006 80)");
    r.style.setProperty("--bg-warm", "oklch(0.15 0.006 80)");
    r.style.setProperty("--ink", "oklch(0.96 0.006 80)");
    r.style.setProperty("--ink-mid", "oklch(0.72 0.004 80)");
    r.style.setProperty("--ink-light", "oklch(0.52 0.004 80)");
    r.style.setProperty("--ink-faint", "oklch(0.30 0.004 80)");
    r.style.setProperty("--rule", "oklch(0.22 0.004 80)");
    r.style.setProperty("--hero-bg", "oklch(0.10 0.006 80)");
    r.style.setProperty("--hero-img-filter", "grayscale(100%) brightness(0.35) contrast(1.2)");
    r.style.setProperty("--hero-scrim", "linear-gradient(to top, rgba(8,6,5,0.92) 0%, rgba(8,6,5,0.12) 50%, transparent 100%)");
    r.style.setProperty("--hero-strip-border", "rgba(255,255,255,0.07)");
    r.style.setProperty("--hero-text", "rgba(255,255,255,0.2)");
    r.style.setProperty("--hero-ghost-color", "rgba(255,255,255,0.038)");
    r.style.setProperty("--hero-title-color", "rgba(255,255,255,0.80)");
    r.style.setProperty("--hero-index-color", "rgba(255,255,255,0.25)");
    r.style.setProperty("--hero-sliver-color", "rgba(255,255,255,0.20)");
    r.style.setProperty("--hero-sub-color", "rgba(255,255,255,0.38)");
  }
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "dark";
    setIsDark(saved === "dark");
    applyTheme(saved);
  }, []);

  function toggle() {
    const next = isDark ? "warm" : "dark";
    setIsDark(!isDark);
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  }

  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to warm" : "Switch to dark"}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 200,
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.10)"}`,
        background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)",
        backdropFilter: "blur(8px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
    >
      {isDark ? (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.3" />
          {([[8,1,8,3],[8,13,8,15],[1,8,3,8],[13,8,15,8],[2.93,2.93,4.34,4.34],[11.66,11.66,13.07,13.07],[2.93,13.07,4.34,11.66],[11.66,4.34,13.07,2.93]] as number[][]).map(([x1,y1,x2,y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.75)" strokeWidth="1.3" strokeLinecap="round" />
          ))}
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
          <path d="M12.5 9.5A5.5 5.5 0 0 1 5.5 2.5a5.5 5.5 0 1 0 7 7z" stroke="rgba(0,0,0,0.55)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
