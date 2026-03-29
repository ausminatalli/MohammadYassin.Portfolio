"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { ref } = useSectionInView("About", 0.3);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const bioText =
    "Full-Stack Software Engineer with 5+ years of experience designing and shipping scalable web and mobile applications using React, Next.js, React Native, Laravel, Node.js, TypeScript, and Vue.js. Proven ability to own features end-to-end — from database schema design and REST/GraphQL API architecture to cloud deployment and CI/CD automation. Experienced with PostgreSQL/MySQL optimization, Redis caching, Docker-based workflows, AWS, and unit/integration testing. Comfortable mentoring junior developers, conducting code reviews, and working in Agile/Scrum teams to scale platforms and improve performance.";

  const stats = [
    { value: 5, suffix: "+", label: "Years Exp" },
    { value: 9, suffix: "+", label: "Projects" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 3, suffix: "+", label: "Countries" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
      });

      // Photo slide in
      gsap.fromTo(
        ".about-photo",
        { x: -100, opacity: 0, filter: "grayscale(1)" },
        {
          x: 0,
          opacity: 1,
          filter: "grayscale(0)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: 1.2,
          },
        }
      );

      // Word by word reveal
      gsap.fromTo(
        ".bio-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            end: "+=100%",
            scrub: 1,
          },
        }
      );

      // Stats counter animation
      stats.forEach((stat, i) => {
        const el = document.querySelector(`.stat-number-${i}`);
        if (!el) return;

        gsap.fromTo(
          { val: 0 },
          { val: 0 },
          {
            val: stat.value,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              if (el) {
                el.textContent = Math.round(this.targets()[0].val) + stat.suffix;
              }
            },
            scrollTrigger: {
              trigger: statsRef.current,
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
        // Combine refs
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      id="about"
      className="min-h-screen flex items-center scroll-mt-16"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-24 w-full">
        {/* Section label */}
        <div className="mb-16">
          <span className="text-mono text-text-muted">01</span>
          <h2 className="heading-display heading-lg mt-2">ABOUT</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Photo */}
          <div className="about-photo lg:w-[40%] relative">
            <div
              className="relative overflow-hidden"
              style={{
                transform: "skewX(-1deg)",
                borderRight: "2px solid var(--accent)",
                borderBottom: "2px solid var(--accent)",
              }}
            >
              <Image
                src="/Mohammadyassine.jpeg"
                alt="Mohammad Yassine"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:w-[60%]">
            <p className="text-2xl md:text-3xl font-body font-light leading-relaxed">
              {bioText.split(" ").map((word, i) => (
                <span key={i} className="bio-word inline-block mr-[0.3em]">
                  {word}
                </span>
              ))}
            </p>

            {/* Stats Row */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-[var(--border)]"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <span
                    className={`stat-number-${i} text-4xl md:text-5xl font-display font-bold text-accent`}
                  >
                    0
                  </span>
                  <p className="text-mono text-text-muted mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
