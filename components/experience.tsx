"use client";

import React, { useEffect, useRef } from "react";
import { FaAws, FaDocker, FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiDotnet, SiKubernetes } from "react-icons/si";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardTones = ["green", "purple", "coral", "blue"] as const;

const satellites = [
  { Icon: FaReact, className: "experience-tech-react", label: "React" },
  { Icon: FaPython, className: "experience-tech-python", label: "Python" },
  { Icon: FaAws, className: "experience-tech-aws", label: "AWS" },
  { Icon: FaJava, className: "experience-tech-java", label: "Java" },
  { Icon: FaDocker, className: "experience-tech-docker", label: "Docker" },
  {
    Icon: SiKubernetes,
    className: "experience-tech-kubernetes",
    label: "Kubernetes",
  },
  { Icon: SiDotnet, className: "experience-tech-dotnet", label: ".NET" },
] as const;

function splitLocation(location: string) {
  const [company, ...place] = location.split(" — ");
  return {
    company,
    place: place.join(" — "),
  };
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.06);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".experience-level, .experience-scene-title", {
          clearProps: "all",
        });
        return;
      }

      gsap.fromTo(
        ".experience-scene-title",
        { y: 28, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.5)" }
      );

      gsap.utils.toArray<HTMLElement>(".experience-level").forEach((entry) => {
        gsap.fromTo(
          entry,
          { y: 54, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.35)",
            scrollTrigger: {
              trigger: entry,
              start: "top 86%",
              once: true,
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
      className="experience-game"
      aria-labelledby="experience-title"
    >
      <div className="experience-sky" aria-hidden="true" />
      <div className="experience-vignette" aria-hidden="true" />

      <div className="experience-satellites" aria-hidden="true">
        {satellites.map(({ Icon, className, label }) => (
          <span key={label} className={`experience-tech ${className}`}>
            <Icon />
          </span>
        ))}
      </div>

      <header className="experience-scene-title">
        <h2 id="experience-title" data-text="EXPERIENCE" aria-label="Experience">
          EXPERIENCE
        </h2>
      </header>

      <div className="experience-route" aria-label="Professional experience timeline">
        <svg
          className="experience-route-line"
          viewBox="0 0 1000 4300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="experience-road-shadow"
            d="M500 0 C900 150 900 420 500 520 C100 620 100 900 500 1000 C900 1100 900 1380 500 1480 C100 1580 100 1860 500 1960 C900 2060 900 2340 500 2440 C100 2540 100 2820 500 2920 C900 3020 900 3300 500 3400 C100 3500 100 3780 500 3880 C760 3945 820 4110 500 4300"
          />
          <path
            className="experience-road"
            d="M500 0 C900 150 900 420 500 520 C100 620 100 900 500 1000 C900 1100 900 1380 500 1480 C100 1580 100 1860 500 1960 C900 2060 900 2340 500 2440 C100 2540 100 2820 500 2920 C900 3020 900 3300 500 3400 C100 3500 100 3780 500 3880 C760 3945 820 4110 500 4300"
          />
          <path
            className="experience-road-energy"
            d="M500 0 C900 150 900 420 500 520 C100 620 100 900 500 1000 C900 1100 900 1380 500 1480 C100 1580 100 1860 500 1960 C900 2060 900 2340 500 2440 C100 2540 100 2820 500 2920 C900 3020 900 3300 500 3400 C100 3500 100 3780 500 3880 C760 3945 820 4110 500 4300"
          />
        </svg>

        {experiencesData.map((item, index) => {
          const { company, place } = splitLocation(item.location);
          const level = String(index + 1).padStart(2, "0");

          return (
            <article
              key={`${item.title}-${item.location}`}
              className={`experience-level experience-level-${
                index % 2 === 0 ? "left" : "right"
              } experience-card-${cardTones[index % cardTones.length]}`}
            >
              <span className="experience-checkpoint" aria-hidden="true">
                <span>⚡</span>
              </span>

              <div className="experience-level-shell">
                <div className="experience-level-banner">
                  <span>LEVEL CLEAR!</span>
                </div>

                <div className="experience-card-copy">
                  <div className="experience-card-meta">
                    <time>{item.date || "Completed"}</time>
                    <span className="experience-company">
                      <strong>{company}</strong>
                      {place ? <small>{place}</small> : null}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="experience-score" aria-label={`Career level ${level}`}>
                    <span className="experience-level-number">LVL {level}</span>
                    <span className="experience-stars" aria-hidden="true">
                      <i>★</i><i>★</i><i>★</i><i>★</i><i>★</i>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
