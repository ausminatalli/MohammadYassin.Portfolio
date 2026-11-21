"use client";

import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import SmoothScroll from "@/components/smooth-scroll";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);

  const completeIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    // Never allow a failed or interrupted media transition to trap the page.
    const safetyTimer = window.setTimeout(completeIntro, 18000);
    return () => window.clearTimeout(safetyTimer);
  }, [completeIntro, showIntro]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    );
    if (!sections.length) return;

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "18% 0px 18%" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionContextProvider>
      {showIntro && <Preloader onComplete={completeIntro} />}
      <div>
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
          },
        }}
      />
    </ActiveSectionContextProvider>
  );
}
