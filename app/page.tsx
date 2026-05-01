"use client";

import Link from "next/link";
import { useRef } from "react";

const IMGS = {
  photo3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc",
  photo1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA",
  photo4: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k",
};

function FilmPanel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleEnter = () => {
    const video = videoRef.current;
    const img = imgRef.current;
    if (!video) return;
    video.style.opacity = "1";
    if (img) img.style.opacity = "0";
    video.play().catch(() => {
      video.style.opacity = "0";
      if (img) img.style.opacity = "1";
    });
  };

  const handleLeave = () => {
    const video = videoRef.current;
    const img = imgRef.current;
    if (!video) return;
    video.style.opacity = "0";
    if (img) img.style.opacity = "1";
    video.pause();
    video.currentTime = 0;
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
      <img
        ref={imgRef}
        src={IMGS.photo1}
        alt="Film"
        className="hero-panel-img"
        style={{ transition: "opacity 0.8s, transform 1.8s cubic-bezier(0.16,1,0.3,1)" }}
      />
      <video
        ref={videoRef}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        muted
        loop
        playsInline
        preload="auto"
        className="hero-panel-video"
      />
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

const panels = [
  { num: "01", title: "Photography", sub: "Landscape · Portrait · Documentary", img: IMGS.photo3, href: "/photography" },
  { num: "03", title: "Design",      sub: "Identity · Editorial · Art Direction", img: IMGS.photo4, href: "/design" },
];

export default function Home() {
  return (
    <div>
      <div className="hero-root">
        <div className="hero-split">
          {/* Photography panel */}
          <Link href={panels[0].href} className="hero-panel" style={{ textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={panels[0].img} alt={panels[0].title} className="hero-panel-img" />
            <div className="hero-panel-scrim" />
            <div className="hero-panel-ghost">{panels[0].title}</div>
            <div className="hero-panel-label">
              <div className="hero-panel-index">{panels[0].num}</div>
              <div className="hero-panel-title">{panels[0].title}</div>
              <div className="hero-panel-sub">{panels[0].sub}</div>
            </div>
            <div className="hero-panel-sliver">{panels[0].title}</div>
          </Link>

          {/* Film panel with video */}
          <FilmPanel />

          {/* Design panel */}
          <Link href={panels[1].href} className="hero-panel" style={{ textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={panels[1].img} alt={panels[1].title} className="hero-panel-img" />
            <div className="hero-panel-scrim" />
            <div className="hero-panel-ghost">{panels[1].title}</div>
            <div className="hero-panel-label">
              <div className="hero-panel-index">{panels[1].num}</div>
              <div className="hero-panel-title">{panels[1].title}</div>
              <div className="hero-panel-sub">{panels[1].sub}</div>
            </div>
            <div className="hero-panel-sliver">{panels[1].title}</div>
          </Link>
        </div>

        <div className="hero-strip">
          <span className="hero-strip-text">Baku, Azerbaijan — 2026</span>
          <Link href="/about" className="hero-strip-btn">
            About
            <span style={{ width: 20, height: 1, background: "currentColor", display: "inline-block" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
