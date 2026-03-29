"use client";

import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./project";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          end: () => "+=" + track.scrollWidth,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={(node) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      id="projects"
      className="scroll-mt-16 relative overflow-hidden"
      style={{ minHeight: isMobile ? "auto" : "100vh" }}
    >
      {/* Fixed section title */}
      <div
        className={`${
          isMobile ? "relative mb-12" : "absolute top-12 left-8"
        } z-10 px-6`}
      >
        <span className="text-mono text-text-muted">02</span>
        <h2 className="heading-display heading-lg mt-2">
          SELECTED
          <br />
          WORK
        </h2>
      </div>

      {/* Horizontal scroll track (desktop) / Vertical stack (mobile) */}
      <div
        ref={trackRef}
        className={`${
          isMobile
            ? "flex flex-col gap-8 px-6 pb-20"
            : "flex items-center gap-12 pl-[420px] py-12 pr-24"
        }`}
        style={isMobile ? {} : { width: "max-content", minHeight: "100vh" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
