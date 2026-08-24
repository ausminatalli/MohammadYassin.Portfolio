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
