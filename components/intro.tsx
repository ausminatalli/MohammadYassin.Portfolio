"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import dynamic from "next/dynamic";
import Marquee from "./marquee";
import gsap from "gsap";

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => null,
});

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 });

      // Eyebrow
      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      // Words curtain reveal
      tl.from(
        ".hero-word",
        {
          y: "100%",
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // Sub line
      tl.from(
        ".hero-subline",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // CTAs
      tl.from(
        ".hero-cta",
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Scene fade in
      tl.from(
        ".hero-scene",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className="scroll-mt-16">
      <div
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center px-6 max-w-[1400px] mx-auto pt-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          {/* LEFT COLUMN — Text */}
          <div className="lg:w-[60%] flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-3">
              <div className="pulsing-dot" />
              <span className="text-mono text-accent">AVAILABLE FOR WORK</span>
            </div>

            {/* Main headline */}
            <div>
              <div className="hero-word-mask">
                <h1 className="hero-word heading-display heading-xl">
                  SOFTWARE
                </h1>
              </div>
              <div className="hero-word-mask">
                <h1 className="hero-word heading-display heading-xl">
                  ENGINEER
                </h1>
              </div>
            </div>

            {/* Subline */}
            <p className="hero-subline text-body text-lg max-w-[500px]">
              Building products people love — from Beirut to the world
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#projects"
                className="hero-cta magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg-primary font-display font-bold text-sm tracking-wide rounded-none hover:bg-[#b8ea4f] transition-colors"
                onClick={() => {
                  setActiveSection("Projects");
                  setTimeOfLastClick(Date.now());
                }}
              >
                View Work
              </Link>

              <a
                href="/MohammadYassineCV.pdf"
                download
                className="hero-cta magnetic-btn inline-flex items-center gap-2 px-8 py-4 border border-[var(--border-medium)] text-text-primary font-display font-medium text-sm tracking-wide rounded-none hover:border-accent hover:text-accent transition-all"
              >
                Download CV
                <HiDownload className="text-sm" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Three.js Canvas (all screens) */}
          <div className="hero-scene lg:w-[40%] w-full h-[350px] md:h-[400px] lg:h-[500px]">
            <HeroScene />
          </div>
        </div>

        {/* Marquee strip */}
        <Marquee />
      </div>
    </section>
  );
}
