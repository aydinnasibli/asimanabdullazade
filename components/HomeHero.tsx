"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

interface HomeData {
  photographyHeroImage: string;
  filmHeroImage: string;
  filmHeroVideo: string;
  designHeroImage: string;
  stripText: string;
}

const fallback: HomeData = {
  photographyHeroImage: "",
  filmHeroImage: "",
  filmHeroVideo: "",
  designHeroImage: "",
  stripText: "Baku, Azerbaijan — 2026",
};

function FilmPanel({ img, video }: { img: string; video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleEnter = () => {
    const v = videoRef.current;
    const im = imgRef.current;
    if (!v) return;
    v.style.opacity = "1";
    if (im) im.style.opacity = "0";
    v.play().catch(() => {
      v.style.opacity = "0";
      if (im) im.style.opacity = "1";
    });
  };

  const handleLeave = () => {
    const v = videoRef.current;
    const im = imgRef.current;
    if (!v) return;
    v.style.opacity = "0";
    if (im) im.style.opacity = "1";
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Link
      href="/film"
      className="hero-panel"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ textDecoration: "none" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {img && (
        <img
          ref={imgRef}
          src={img}
          alt="Film"
          className="hero-panel-img"
          style={{ transition: "opacity 0.8s, transform 1.8s cubic-bezier(0.16,1,0.3,1)" }}
        />
      )}
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="auto"
          className="hero-panel-video"
        />
      )}
      <div className="hero-panel-scrim" style={{ zIndex: 2 }} />
      <div className="hero-panel-ghost" style={{ zIndex: 3 }}>Film</div>
      <div className="hero-panel-label" style={{ zIndex: 6 }}>
        <div className="hero-panel-index">02</div>
        <div className="hero-panel-title">Film</div>
        <div className="hero-panel-sub">Short Film · Documentary · Experimental</div>
      </div>
      <div className="hero-panel-sliver" style={{ zIndex: 6 }}>Film</div>
    </Link>
  );
}

export default function HomeHero() {
  const [data, setData] = useState<HomeData>(fallback);

  useEffect(() => {
    fetch("/api/home-public")
      .then((r) => r.json())
      .then((d) => {
        if (d && !d.error) setData(d);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="hero-root">
      <div className="hero-split">
        <Link href="/photography" className="hero-panel" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {data.photographyHeroImage && (
            <img src={data.photographyHeroImage} alt="Photography" className="hero-panel-img" />
          )}
          <div className="hero-panel-scrim" />
          <div className="hero-panel-ghost">Photography</div>
          <div className="hero-panel-label">
            <div className="hero-panel-index">01</div>
            <div className="hero-panel-title">Photography</div>
            <div className="hero-panel-sub">Landscape · Portrait · Documentary</div>
          </div>
          <div className="hero-panel-sliver">Photography</div>
        </Link>

        <FilmPanel img={data.filmHeroImage} video={data.filmHeroVideo} />

        <Link href="/design" className="hero-panel" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {data.designHeroImage && (
            <img src={data.designHeroImage} alt="Design" className="hero-panel-img" />
          )}
          <div className="hero-panel-scrim" />
          <div className="hero-panel-ghost">Design</div>
          <div className="hero-panel-label">
            <div className="hero-panel-index">03</div>
            <div className="hero-panel-title">Design</div>
            <div className="hero-panel-sub">Identity · Editorial · Art Direction</div>
          </div>
          <div className="hero-panel-sliver">Design</div>
        </Link>
      </div>

      <div className="hero-strip">
        <span className="hero-strip-text">{data.stripText}</span>
        <Link href="/about" className="hero-strip-btn">
          About
          <span style={{ width: 20, height: 1, background: "currentColor", display: "inline-block" }} />
        </Link>
      </div>
    </div>
  );
}
