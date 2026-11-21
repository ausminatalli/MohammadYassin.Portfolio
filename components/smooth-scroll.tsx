"use client";

import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scrollToPosition = (targetY: number) => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const destination = Math.min(maxScroll, Math.max(0, targetY));

      // Let the browser own the scroll animation so it stays interruptible and
      // does not run a JavaScript animation loop over the heaviest sections.
      window.scrollTo({
        top: destination,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const origin = event.target;
      if (!(origin instanceof Element)) return;

      const anchor = origin.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor || (anchor.target && anchor.target !== "_self")) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      if (targetId === "home") {
        scrollToPosition(0);
      } else {
        scrollToPosition(
          window.scrollY + target.getBoundingClientRect().top
        );
      }

      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
    };

    // Capture before Next.js Link handles hash navigation so the browser never
    // performs its own instant jump first.
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, []);

  return <>{children}</>;
}
