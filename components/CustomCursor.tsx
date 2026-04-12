"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;
    let rafId: number;
    let state: "default" | "link" | "image" = "default";
    let visible = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        // Snap ring to cursor on first appearance
        ringX = mouseX;
        ringY = mouseY;
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isImg =
        target.tagName === "IMG" ||
        !!(target.closest(".group") && target.closest("[class*='overflow-hidden']"));
      const isLink =
        !isImg &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          !!target.closest("a") ||
          !!target.closest("button"));
      if (isImg) state = "image";
      else if (isLink) state = "link";
      else state = "default";
    };

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      if (state === "image") {
        ring.style.width = "72px";
        ring.style.height = "72px";
        ring.style.backgroundColor = "transparent";
        ring.style.borderColor = "rgba(0,0,0,0.6)";
        dot.style.transform = "translate(-50%, -50%) scale(1)";
      } else if (state === "link") {
        ring.style.width = "44px";
        ring.style.height = "44px";
        ring.style.backgroundColor = "black";
        ring.style.borderColor = "black";
        dot.style.transform = "translate(-50%, -50%) scale(0)";
      } else {
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.backgroundColor = "transparent";
        ring.style.borderColor = "black";
        dot.style.transform = "translate(-50%, -50%) scale(1)";
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precise dot — follows mouse exactly */}
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none"
        style={{ top: 0, left: 0, opacity: 0 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-black transition-transform duration-200"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Ring — follows with lerp delay, changes on hover context */}
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none rounded-full border border-black transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          opacity: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
