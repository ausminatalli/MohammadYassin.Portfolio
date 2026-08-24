"use client";

import Image from "next/image";
import { useEffect, useRef, type MutableRefObject } from "react";
import { SiAmazonaws, SiLaravel, SiPython, SiReact } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionInView } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_STATS = [
  {
    value: 5,
    suffix: "+",
    label: "Years Exp",
    sound: "Pow",
    Icon: SiReact,
    className: "react",
  },
  {
    value: 5,
    suffix: "+",
    label: "Projects",
    sound: "",
    Icon: SiPython,
    className: "python",
  },
  {
    value: 25,
    suffix: "+",
    label: "Technologies",
    sound: "Pow",
    Icon: SiLaravel,
    className: "laravel",
  },
  {
    value: 3,
    suffix: "+",
    label: "Countries",
    sound: "Wham",
    Icon: SiAmazonaws,
    className: "aws",
  },
] as const;

export default function About() {
  const { ref } = useSectionInView("About", 0.3);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        section.querySelectorAll<HTMLElement>("[data-stat-value]").forEach((node) => {
          node.textContent = node.dataset.statValue ?? "";
        });
        return;
      }

      const reveal = gsap.timeline({
        defaults: { ease: "back.out(1.25)" },
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          toggleActions: "play none none reverse",
        },
      });

      reveal
        .fromTo(
          ".comic-about-title",
          { x: -90, rotate: -8, autoAlpha: 0 },
          { x: 0, rotate: -2, autoAlpha: 1, duration: 0.75 }
        )
        .fromTo(
          ".comic-tv-burst",
          { scale: 0.35, rotate: -12, autoAlpha: 0 },
          { scale: 1, rotate: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.38"
        )
        .fromTo(
          ".comic-tv",
          { y: 65, rotate: -8, autoAlpha: 0 },
          { y: 0, rotate: -2, autoAlpha: 1, duration: 0.7 },
          "-=0.48"
        )
        .fromTo(
          ".comic-bio",
          { x: 70, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.72 },
          "-=0.62"
        )
        .fromTo(
          ".comic-stat",
          { scale: 0.35, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.48, stagger: 0.1 },
          "-=0.45"
        );

      ABOUT_STATS.forEach((stat, index) => {
        const node = section.querySelector<HTMLElement>(`.stat-number-${index}`);
        if (!node) return;

        const counter = { value: 0 };
        gsap.to(counter, {
          value: stat.value,
          duration: 1.6,
          delay: 0.78 + index * 0.1,
          ease: "power2.out",
          onUpdate: () => {
            node.textContent = `${Math.round(counter.value)}${stat.suffix}`;
          },
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            toggleActions: "play none none reset",
          },
        });
      });

      gsap.to(".comic-divider-bolt", {
        backgroundPosition: "0 145%",
        duration: 1.8,
        repeat: -1,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(node) => {
        (sectionRef as MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) {
          (ref as MutableRefObject<HTMLElement | null>).current = node;
        }
      }}
      id="about"
      className="comic-about"
      aria-labelledby="about-title"
    >
      <div className="comic-panel comic-panel-left" aria-hidden="true" />
      <div className="comic-panel comic-panel-right" aria-hidden="true" />
      <div className="comic-circuit-board" aria-hidden="true" />
      <div className="comic-divider-outline" aria-hidden="true" />
      <div className="comic-divider-bolt" aria-hidden="true" />

      <div className="comic-left-content">
        <h2 id="about-title" className="comic-about-title">
          About Me
          <span className="comic-title-bolt" aria-hidden="true">
            ϟ
          </span>
        </h2>

        <span className="comic-star comic-star-orange star-one" aria-hidden="true">★</span>
        <span className="comic-star comic-star-blue star-two" aria-hidden="true">★</span>
        <span className="comic-star comic-star-purple star-three" aria-hidden="true">★</span>
        <span className="comic-star comic-star-orange star-four" aria-hidden="true">★</span>

        <div className="comic-tv-stage">
          <div className="comic-tv-burst" aria-hidden="true" />
          <div className="comic-tv">
            <div className="comic-tv-bezel">
              <div className="comic-tv-screen">
                <Image
                  src="/mohammadyassine.jpeg"
                  alt="Mohammad Yassine in a suit"
                  width={1600}
                  height={1574}
                  className="comic-profile-photo"
                  sizes="(max-width: 780px) 82vw, 34vw"
                  priority
                />
                <div className="comic-screen-glare" aria-hidden="true" />
              </div>
            </div>
            <div className="comic-tv-controls" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="comic-right-content">
        <p className="comic-bio">
          <strong>Full-Stack Hero!</strong>
          <span>5+ Years Designing &amp; Shipping</span>
          <span>Amazing Web <em>&amp;</em> Mobile Apps.</span>
          <span><em>Solo Architect</em> for International</span>
          <span>Startups. <em>Mentor</em> to Junior Devs.</span>
          <strong>Agile Warrior!</strong>
        </p>

        <div className="comic-stats" aria-label="Professional highlights">
          {ABOUT_STATS.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <div
                className={`comic-stat comic-stat-${index + 1}`}
                key={stat.label}
              >
                {stat.sound ? (
                  <span
                    className={`comic-sound comic-sound-${stat.sound.toLowerCase()}`}
                    aria-hidden="true"
                  >
                    {stat.sound}
                  </span>
                ) : null}
                <div className="comic-halftone" aria-hidden="true" />
                <div className="comic-speech">
                  <strong
                    className={`stat-number-${index}`}
                    data-stat-value={`${stat.value}${stat.suffix}`}
                  >
                    {stat.value}{stat.suffix}
                  </strong>
                  <span>{stat.label}</span>
                </div>
                <Icon
                  className={`comic-stat-icon icon-${stat.className}`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
