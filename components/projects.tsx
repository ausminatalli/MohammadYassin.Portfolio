"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiAndroid,
  SiApple,
  SiCloudflare,
  SiExpo,
  SiGithubactions,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWhatsapp,
} from "react-icons/si";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const projectArt: Record<string, string> = {
  Thiqa: "/design/projects/sha8elni-world.png",
  MeaCash: "/design/projects/meacash-arcade.png",
  Ajams: "/design/projects/yabalesh-airship.png",
  "Mourad Valley": "/design/projects/mourad-valley-world.png",
  "Mido Delivery": "/design/projects/mido-delivery-world.png",
};

type TechItem = { label: string; Icon: IconType };

const projectTech: Record<string, TechItem[]> = {
  Thiqa: [
    { label: "Laravel", Icon: SiLaravel },
    { label: "React Native", Icon: SiReact },
    { label: "WebSockets", Icon: SiSocketdotio },
    { label: "Expo", Icon: SiExpo },
    { label: "Android", Icon: SiAndroid },
    { label: "iOS", Icon: SiApple },
  ],
  MeaCash: [
    { label: "Vue.js", Icon: SiVuedotjs },
    { label: "Laravel", Icon: SiLaravel },
    { label: "PostgreSQL", Icon: SiPostgresql },
    { label: "Node.js", Icon: SiNodedotjs },
    { label: "AWS", Icon: SiAmazonaws },
    { label: "MongoDB", Icon: SiMongodb },
  ],
  Ajams: [
    { label: "Next.js", Icon: SiNextdotjs },
    { label: "Supabase", Icon: SiSupabase },
    { label: "TypeScript", Icon: SiTypescript },
    { label: "WhatsApp", Icon: SiWhatsapp },
    { label: "Cloudflare", Icon: SiCloudflare },
  ],
  "Mourad Valley": [
    { label: "Laravel", Icon: SiLaravel },
    { label: "PostgreSQL", Icon: SiPostgresql },
    { label: "Supabase", Icon: SiSupabase },
    { label: "GitHub Actions", Icon: SiGithubactions },
  ],
  "Mido Delivery": [
    { label: "Next.js", Icon: SiNextdotjs },
    { label: "Tailwind CSS", Icon: SiTailwindcss },
    { label: "WhatsApp", Icon: SiWhatsapp },
    { label: "TypeScript", Icon: SiTypescript },
  ],
};

const confetti = Array.from({ length: 18 }, (_, index) => index + 1);

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.35);
  const [activeIndex, setActiveIndex] = useState(1);
  const count = projectsData.length;
  const previousIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;
  const activeProject = projectsData[activeIndex];
  const activeTech = projectTech[activeProject.title] ?? [];

  const changeProject = (direction: number) => {
    setActiveIndex((current) => (current + direction + count) % count);
  };

  return (
    <section ref={ref} id="projects" className="project-world scroll-mt-0">
      <div className="cosmos-layer project-nebula" aria-hidden="true" />
      <div className="cosmos-layer cosmos-stars project-stars" aria-hidden="true" />
      <div className="project-ribbons" aria-hidden="true" />
      <span className="space-planet planet-earth" aria-hidden="true" />
      <span className="space-planet planet-orange" aria-hidden="true" />
      <span className="space-planet planet-purple" aria-hidden="true" />
      <span className="space-planet planet-ringed" aria-hidden="true" />
      <span className="map-cloud map-cloud-one" aria-hidden="true" />
      <span className="map-cloud map-cloud-two" aria-hidden="true" />

      <div className="project-heading">
        <span aria-hidden="true">✦</span>
        <h2>Project World Map</h2>
        <span aria-hidden="true">✦</span>
      </div>

      <button
        type="button"
        className="project-arrow project-arrow-left"
        onClick={() => changeProject(-1)}
        aria-label="Previous project"
      >
        <HiChevronLeft />
      </button>
      <button
        type="button"
        className="project-arrow project-arrow-right"
        onClick={() => changeProject(1)}
        aria-label="Next project"
      >
        <HiChevronRight />
      </button>

      <div className="project-galaxy" aria-live="polite">
        <button
          key={`previous-${previousIndex}`}
          type="button"
          className="project-landmark project-landmark-side project-landmark-left"
          onClick={() => setActiveIndex(previousIndex)}
          aria-label={`Feature ${projectsData[previousIndex].title}`}
        >
          <span className="landmark-art">
            <Image
              src={projectArt[projectsData[previousIndex].title]}
              alt=""
              width={360}
              height={360}
              sizes="(max-width: 900px) 1px, 28vw"
            />
          </span>
          <strong>{projectsData[previousIndex].title}</strong>
        </button>

        <article key={activeProject.title} className="project-landmark project-landmark-featured">
          <div className="featured-sparkle-field" aria-hidden="true">
            {confetti.map((piece) => (
              <span key={piece} className={`confetti confetti-${piece}`} />
            ))}
          </div>

          <div className="tech-orbit" aria-label="Featured technology stack">
            {activeTech.map(({ label, Icon }, index) => (
              <span key={label} className={`tech-orb tech-orb-${index + 1}`} title={label}>
                <Icon aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </div>

          <div className="featured-art landmark-art">
            <span className="featured-glow" aria-hidden="true" />
            <Image
              src={projectArt[activeProject.title]}
              alt={`${activeProject.title} illustrated project world`}
              width={500}
              height={500}
              priority
              sizes="(max-width: 600px) 82vw, (max-width: 900px) 56vw, 34vw"
            />
          </div>

          <h3>{activeProject.title}</h3>
          <p className="sr-only">{activeProject.description}</p>

          <div className="project-console">
            <span className="console-cloud console-cloud-left" aria-hidden="true" />
            <span className="console-cloud console-cloud-right" aria-hidden="true" />
            <div className="project-actions">
              {activeProject.demo ? (
                <a href={activeProject.demo} target="_blank" rel="noreferrer" className="mini-candy mini-green">
                  Explore Project
                </a>
              ) : (
                <Link href="#contact" className="mini-candy mini-green">
                  Explore Project
                </Link>
              )}
              <Link href="#skills" className="mini-candy mini-purple">
                View Tech Stack
              </Link>
            </div>
          </div>
        </article>

        <button
          key={`next-${nextIndex}`}
          type="button"
          className="project-landmark project-landmark-side project-landmark-right"
          onClick={() => setActiveIndex(nextIndex)}
          aria-label={`Feature ${projectsData[nextIndex].title}`}
        >
          <span className="landmark-art">
            <Image
              src={projectArt[projectsData[nextIndex].title]}
              alt=""
              width={360}
              height={360}
              sizes="(max-width: 900px) 1px, 28vw"
            />
          </span>
          <strong>{projectsData[nextIndex].title}</strong>
        </button>
      </div>
    </section>
  );
}
