"use client";

import React, { useState, useCallback } from "react";
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

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Preloader onComplete={handlePreloaderComplete} />
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <GrainOverlay />
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
