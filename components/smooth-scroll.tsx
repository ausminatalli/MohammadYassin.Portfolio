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
    let anchorAnimationFrame: number | null = null;

    const cancelAnchorAnimation = () => {
      if (anchorAnimationFrame !== null) {
        window.cancelAnimationFrame(anchorAnimationFrame);
        anchorAnimationFrame = null;
      }
    };

    const scrollToPosition = (targetY: number) => {
      cancelAnchorAnimation();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const destination = Math.min(maxScroll, Math.max(0, targetY));
      const startY = window.scrollY;
      const distance = destination - startY;

      if (prefersReducedMotion || Math.abs(distance) < 2) {
        window.scrollTo(0, destination);
        return;
      }

      const duration = Math.min(1000, Math.max(560, Math.abs(distance) * 0.12));
      const startedAt = window.performance.now();

      const animate = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          anchorAnimationFrame = window.requestAnimationFrame(animate);
        } else {
          anchorAnimationFrame = null;
        }
      };

      anchorAnimationFrame = window.requestAnimationFrame(animate);
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

    window.addEventListener("wheel", cancelAnchorAnimation, { passive: true });
    window.addEventListener("touchstart", cancelAnchorAnimation, {
      passive: true,
    });
    // Capture before Next.js Link handles hash navigation so the browser never
    // performs its own instant jump first.
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      window.removeEventListener("wheel", cancelAnchorAnimation);
      window.removeEventListener("touchstart", cancelAnchorAnimation);
      document.removeEventListener("click", handleAnchorClick, true);
      cancelAnchorAnimation();
    };
  }, []);

  return <>{children}</>;
}
