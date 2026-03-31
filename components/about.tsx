"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_STATS = [
  { value: 5, suffix: "+", label: "Years Exp" },
  { value: 8, suffix: "+", label: "Projects" },
  { value: 30, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "+", label: "Countries" },
] as const;

export default function About() {
  const { ref } = useSectionInView("About", 0.3);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  const bioText =
    "Full-Stack Software Engineer with 5+ years of experience designing and shipping scalable web and mobile applications using React, Next.js, React Native, Laravel, Node.js, TypeScript, and Vue.js. Proven ability to own features end-to-end, from database schema design and REST/GraphQL API architecture to cloud deployment and CI/CD automation. Experienced with React Native (iOS and Android), PostgreSQL/MySQL optimization, Redis caching, Docker-based workflows, Cloudflare, AWS (S3, CloudFront), and unit/integration testing (Jest, Supertest). Comfortable mentoring junior developers, conducting code reviews, and working in Agile/Scrum teams to scale platforms and improve performance.";

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const shouldPinSection = window.matchMedia("(min-width: 1024px)").matches;

      if (shouldPinSection) {
        // Pin the section on desktop only to keep scroll smooth on smaller devices.
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });
      }

      // Photo slide in
      gsap.fromTo(
        ".about-photo",
        { x: -60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: 0.8,
          },
        }
      );

      // Bio reveal
      if (bioRef.current) {
        gsap.fromTo(
          bioRef.current,
          { y: 18, autoAlpha: 0.2 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Stats counter animation
      ABOUT_STATS.forEach((stat, i) => {
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
                src="/MOHAMMADYASSINE.jpeg"
                alt="Mohammad Yassine"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:w-[60%]">
            <p
              ref={bioRef}
              className="text-2xl md:text-3xl font-body font-light leading-relaxed"
            >
              {bioText}
            </p>

            {/* Stats Row */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-[var(--border)]"
            >
              {ABOUT_STATS.map((stat, i) => (
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
