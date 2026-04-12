"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -200, mouseY = -200;
    let curX = -200, curY = -200;
    let rafId: number;
    let visible = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        curX = mouseX;
        curY = mouseY;
        visible = true;
        cursor.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      visible = false;
      cursor.style.opacity = "0";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isImg = target.tagName === "IMG";
      const isLink =
        !isImg &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          !!target.closest("a") ||
          !!target.closest("button"));

      if (isImg) {
        cursor.style.width = "64px";
        cursor.style.height = "64px";
      } else if (isLink) {
        cursor.style.width = "48px";
        cursor.style.height = "48px";
      } else {
        cursor.style.width = "28px";
        cursor.style.height = "28px";
      }
    };

    const animate = () => {
      curX = lerp(curX, mouseX, 0.1);
      curY = lerp(curY, mouseY, 0.1);
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
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
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none rounded-full bg-white -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300 ease-out"
      style={{
        top: 0,
        left: 0,
        width: "28px",
        height: "28px",
        opacity: 0,
        mixBlendMode: "difference",
      }}
    />
  );
}
