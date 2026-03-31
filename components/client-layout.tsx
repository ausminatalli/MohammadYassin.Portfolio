"use client";

import React, { useState, useCallback, useEffect } from "react";
import Header from "@/components/header";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";
import Preloader from "@/components/preloader";
import ScrollProgress from "@/components/scroll-progress";
import GrainOverlay from "@/components/grain-overlay";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [enableEnhancedFx, setEnableEnhancedFx] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveDataEnabled = connection?.saveData === true;

    const disableEnhancedFx =
      prefersReducedMotion || isTouchDevice || saveDataEnabled;
    setEnableEnhancedFx(!disableEnhancedFx);
    document.documentElement.classList.toggle("cursor-enhanced", !disableEnhancedFx);

    const hasSeenPreloader =
      window.sessionStorage.getItem("preloader_seen") === "1";
    const shouldSkipPreloader = disableEnhancedFx || hasSeenPreloader;

    if (shouldSkipPreloader) {
      setShowPreloader(false);
      setIsLoaded(true);
    } else {
      setShowPreloader(true);
    }

    return () => {
      document.documentElement.classList.remove("cursor-enhanced");
    };
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    window.sessionStorage.setItem("preloader_seen", "1");
    setIsLoaded(true);
    setShowPreloader(false);
  }, []);

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        {showPreloader && !isLoaded && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
        <SmoothScroll>
          {enableEnhancedFx && <CustomCursor />}
          <ScrollProgress />
          {enableEnhancedFx && <GrainOverlay />}
          <Header />
          {children}
        </SmoothScroll>
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
    </ThemeContextProvider>
  );
}
