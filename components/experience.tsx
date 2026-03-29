"use client";

import React, { useEffect, useRef } from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        gsap.set(".timeline-line-fill", { scaleY: 1 });
        const entries = gsap.utils.toArray<HTMLElement>(".timeline-entry");
        gsap.fromTo(
          entries,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
        return;
      }

      // Draw center line
      gsap.fromTo(
        ".timeline-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );

      // Animate entries
      const entries = gsap.utils.toArray<HTMLElement>(".timeline-entry");
      entries.forEach((entry, i) => {
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          entry,
          {
            x: isLeft ? -60 : 60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(node) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      id="experience"
      className="scroll-mt-16 py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section label */}
        <div className="mb-20">
          <span className="text-mono text-text-muted">04</span>
          <h2 className="heading-display heading-lg mt-2">EXPERIENCE</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Center line */}
          <div className="timeline-line hidden md:block">
            <div className="timeline-line-fill" />
          </div>

          {/* Mobile line */}
          <div className="timeline-line md:hidden" style={{ left: "20px" }}>
            <div className="timeline-line-fill" />
          </div>

          {/* Entries */}
          <div className="space-y-16">
            {experiencesData.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="timeline-entry relative">
                  {/* Node */}
                  <div
                    className="timeline-node hidden md:block"
                    style={{ top: "24px" }}
                  />
                  <div
                    className="timeline-node md:hidden"
                    style={{ top: "4px", left: "20px" }}
                  />

                  {/* Content card */}
                  <div
                    className={`
                      md:w-[calc(50%-40px)] 
                      ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}
                      pl-12 md:pl-0
                    `}
                  >
                    <div className="p-6 rounded bg-bg-secondary border border-[var(--border)] hover:border-accent/20 transition-all">
                      {/* Date */}
                      <span className="text-mono text-accent text-[10px]">
                        {item.date}
                      </span>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg text-text-primary mt-2">
                        {item.title}
                      </h3>

                      {/* Location */}
                      <p className="text-mono text-text-muted text-[10px] mt-1">
                        {item.location}
                      </p>

                      {/* Description */}
                      <p className="text-body text-sm mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
