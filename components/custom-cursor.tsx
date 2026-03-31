"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

  const animate = useCallback(() => {
    pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
    pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const interactiveSelector = "a, button, [data-hover], .project-card";
    const setHoverState = (hovering: boolean) => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.toggle("hovering", hovering);
      if (!hovering) cursorRef.current.classList.remove("text-mode");
    };

    const handleMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      if (targetEl?.closest(interactiveSelector)) {
        setHoverState(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const nextEl = e.relatedTarget as HTMLElement | null;
      if (nextEl?.closest(interactiveSelector)) return;
      setHoverState(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return <div ref={cursorRef} className="custom-cursor" />;
}
