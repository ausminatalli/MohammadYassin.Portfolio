"use client";

import React from "react";
import Header from "@/components/header";
import SmoothScroll from "@/components/smooth-scroll";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <SmoothScroll>
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
