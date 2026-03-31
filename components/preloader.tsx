"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasCompletedRef = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let counterTween: gsap.core.Tween | null = null;
    let timeline: gsap.core.Timeline | null = null;

    const complete = () => {
      if (hasCompletedRef.current) return;
      hasCompletedRef.current = true;

      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
      }

      counterTween?.kill();
      timeline?.kill();
      document.body.style.overflow = previousOverflow;
      setCount(100);
      onComplete();
    };

    const ctx = gsap.context(() => {
      // Counter animation — 0 to 100
      const counter = { val: 0 };
      counterTween = gsap.to(counter, {
        val: 100,
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.round(counter.val)),
      });

      // Master timeline
      const tl = gsap.timeline({
        onComplete: complete,
      });
      timeline = tl;

      // Phase 1: Letter-by-letter name reveal with stagger
      tl.fromTo(
        ".pre-letter",
        { y: isMobile ? 28 : 80, opacity: 0, rotateX: isMobile ? 0 : -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: isMobile
            ? { each: 0.025, from: "center" }
            : { each: 0.06, from: "center" },
          duration: 0.42,
          ease: "back.out(1.7)",
          delay: 0.12,
        }
      );

      // Phase 2: Title slides up
      tl.fromTo(
        ".pre-title",
        { y: isMobile ? 14 : 30, opacity: 0 },
        { y: 0, opacity: 1, duration: isMobile ? 0.35 : 0.42, ease: "power3.out" },
        "-=0.12"
      );

      // Phase 3: Horizontal lines animate width
      tl.fromTo(
        ".pre-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          stagger: 0.1,
          duration: 0.32,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Phase 4: Hold
      tl.to({}, { duration: 0.18 });

      // Phase 5: Everything fades and slides up
      tl.to(".pre-content", {
        y: -40,
        opacity: 0,
        duration: 0.32,
        ease: "power3.in",
      });

      // Phase 6: Progress bar fills to completion
      tl.to(".pre-progress", {
        scaleX: 0,
        duration: 0.25,
        ease: "power2.in",
      });

      // Phase 7: Split screen wipe — two halves slide away
      tl.to(
        ".pre-panel-top",
        {
          yPercent: -100,
          duration: 0.55,
          ease: "power4.inOut",
        },
        "-=0.08"
      );
      tl.to(
        ".pre-panel-bottom",
        {
          yPercent: 100,
          duration: 0.55,
          ease: "power4.inOut",
        },
        "<"
      );
    }, overlayRef);

    // Failsafe: never let the preloader trap the page.
    const failsafeId = window.setTimeout(complete, 3200);

    return () => {
      window.clearTimeout(failsafeId);
      counterTween?.kill();
      timeline?.kill();
      ctx.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  const firstName = "MOHAMMAD";
  const lastName = "YASSINE";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden"
      style={{ perspective: "800px" }}
    >
      {/* Top panel */}
      <div
        className="pre-panel-top absolute top-0 left-0 w-full h-1/2"
        style={{ background: "var(--overlay-bg)" }}
      />
      {/* Bottom panel */}
      <div
        className="pre-panel-bottom absolute bottom-0 left-0 w-full h-1/2"
        style={{ background: "var(--overlay-bg)" }}
      />

      {/* Centered content */}
      <div className="pre-content absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Decorative lines above */}
        <div className="flex gap-3 mb-8">
          <div
            className="pre-line w-12 h-[1px] origin-left"
            style={{ background: "var(--accent)" }}
          />
          <div
            className="pre-line w-8 h-[1px] origin-left"
            style={{ background: "var(--border-medium)" }}
          />
          <div
            className="pre-line w-16 h-[1px] origin-left"
            style={{ background: "var(--accent-dim)" }}
          />
        </div>

        {/* Name — letter by letter */}
        <div className="flex flex-col items-center gap-1" style={{ perspective: "600px" }}>
          <div className="flex justify-center overflow-hidden">
            {firstName.split("").map((char, i) => (
              <span
                key={`f-${i}`}
                className="pre-letter inline-block text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                  transformOrigin: "bottom center",
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex justify-center overflow-hidden">
            {lastName.split("").map((char, i) => (
              <span
                key={`l-${i}`}
                className="pre-letter inline-block text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--accent)",
                  transformOrigin: "bottom center",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <p
          className="pre-title mt-6 text-[10px] sm:text-xs md:text-sm tracking-[0.18em] md:tracking-[0.3em] uppercase text-center px-4"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
          }}
        >
          Full-Stack Software Engineer
        </p>

        {/* Decorative lines below */}
        <div className="flex gap-3 mt-8">
          <div
            className="pre-line w-16 h-[1px] origin-right"
            style={{ background: "var(--border-light)" }}
          />
          <div
            className="pre-line w-10 h-[1px] origin-right"
            style={{ background: "var(--accent)" }}
          />
          <div
            className="pre-line w-6 h-[1px] origin-right"
            style={{ background: "var(--border-medium)" }}
          />
        </div>
      </div>

      {/* Bottom bar — counter + progress */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 z-10 flex items-center gap-3 sm:gap-4">
        <span
          className="text-xs tabular-nums"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            minWidth: "3ch",
          }}
        >
          {count}
        </span>
        <div
          className="flex-1 h-[1px] overflow-hidden"
          style={{ background: "var(--border)" }}
        >
          <div
            className="pre-progress h-full origin-left"
            style={{
              background: "linear-gradient(90deg, var(--accent), var(--accent-dim))",
              transform: `scaleX(${count / 100})`,
              transition: "transform 0.05s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
