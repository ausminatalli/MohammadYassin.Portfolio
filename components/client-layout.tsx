"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const siteRef = useRef<HTMLDivElement>(null);
  const completeIntro = useCallback(() => setShowIntro(false), []);

  useEffect(() => {
    if (siteRef.current) siteRef.current.inert = showIntro;
  }, [showIntro]);

  return (
    <ActiveSectionContextProvider>
      {showIntro && <Preloader onComplete={completeIntro} />}
      <div ref={siteRef} aria-hidden={showIntro || undefined}>
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
