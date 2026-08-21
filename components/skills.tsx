"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

type SkillCategory = {
  label: string;
  shortLabel: string;
  skills: { name: string; level: number }[];
  hotspot: { left: number; width: number };
};

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    shortLabel: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "PHP", level: 95 },
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
    ],
    hotspot: { left: 18.5, width: 8.5 },
  },
  {
    label: "Frontend",
    shortLabel: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 94 },
      { name: "Vue.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Blade", level: 90 },
    ],
    hotspot: { left: 27.75, width: 7.8 },
  },
  {
    label: "Mobile",
    shortLabel: "Mobile",
    skills: [
      { name: "React Native", level: 91 },
      { name: "Expo", level: 88 },
      { name: "FCM Push", level: 84 },
    ],
    hotspot: { left: 36.3, width: 6.7 },
  },
  {
    label: "Backend",
    shortLabel: "Backend",
    skills: [
      { name: "Node.js", level: 94 },
      { name: "Laravel", level: 95 },
      { name: "Express.js", level: 92 },
      { name: "Django", level: 87 },
      { name: "Fastify", level: 86 },
    ],
    hotspot: { left: 43.7, width: 7.3 },
  },
  {
    label: "Databases",
    shortLabel: "Databases",
    skills: [
      { name: "PostgreSQL", level: 94 },
      { name: "MySQL", level: 93 },
      { name: "MongoDB", level: 89 },
      { name: "Supabase", level: 91 },
      { name: "Redis", level: 85 },
    ],
    hotspot: { left: 51.7, width: 8.4 },
  },
  {
    label: "DevOps & Tools",
    shortLabel: "DevOps",
    skills: [
      { name: "Docker", level: 91 },
      { name: "GitHub Actions", level: 89 },
      { name: "AWS", level: 87 },
      { name: "Cloudflare", level: 88 },
      { name: "Linux", level: 90 },
    ],
    hotspot: { left: 60.7, width: 10.5 },
  },
  {
    label: "APIs & Testing",
    shortLabel: "APIs & Testing",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 89 },
      { name: "WebSockets", level: 91 },
      { name: "Jest", level: 88 },
      { name: "Postman", level: 93 },
    ],
    hotspot: { left: 71.8, width: 9.7 },
  },
];

const tubeEffects = [
  { left: 22.45, color: "#7cff91", delay: "0s" },
  { left: 36.25, color: "#58eaff", delay: "-.72s" },
  { left: 50, color: "#70dcff", delay: "-1.44s" },
  { left: 63.85, color: "#63ffe0", delay: "-2.16s" },
  { left: 77.65, color: "#8dff82", delay: "-2.88s" },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);
  const [activeCategory, setActiveCategory] = useState(0);
  const active = skillCategories[activeCategory];

  return (
    <section
      ref={ref}
      id="skills"
      className="skills-lab scroll-mt-0"
      aria-labelledby="skills-lab-title"
    >
      <h2 id="skills-lab-title" className="sr-only">
        Skills — Vibrant Skill Lab
      </h2>

      <div className="skills-lab-frame">
        <Image
          className="skills-lab-art"
          src="/design/skills-vibrant-pixar-skill-lab-hd.webp"
          alt="A vibrant futuristic laboratory with a glowing sphere of technology icons, a friendly robot, and illuminated skill capsules."
          width={3440}
          height={1920}
          draggable={false}
          priority
          unoptimized
        />

        <div className="skills-tube-effects" aria-hidden="true">
          {tubeEffects.map((tube, index) => (
            <span
              key={tube.left}
              className="skills-tube-effect"
              style={
                {
                  "--tube-left": `${tube.left}%`,
                  "--tube-color": tube.color,
                  "--tube-delay": tube.delay,
                } as CSSProperties
              }
            >
              <span className="skills-tube-ring" />
              <span className="skills-tube-glass" />
              <span className="skills-tube-liquid" />
              <span className="skills-tube-particles">
                {[0, 1, 2, 3].map((particle) => (
                  <i key={`${index}-${particle}`} />
                ))}
              </span>
            </span>
          ))}
        </div>

        <div className="skills-lab-hotspots" aria-label="Skill categories">
          {skillCategories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              className="skills-lab-hotspot"
              style={
                {
                  "--hotspot-left": `${category.hotspot.left}%`,
                  "--hotspot-width": `${category.hotspot.width}%`,
                } as CSSProperties
              }
              aria-label={`Show ${category.label} skills`}
              aria-pressed={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {activeCategory !== 0 && (
          <div
            className="skills-lab-readout"
            data-count={active.skills.length}
            aria-live="polite"
          >
            {active.skills.map((skill) => (
              <div className="skills-lab-reading" key={skill.name}>
                <span className="skills-lab-percent">{skill.level}%</span>
                <span className="skills-lab-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="skills-lab-mobile-ui">
        <p className="skills-lab-mobile-kicker">Skills</p>
        <h3>Vibrant Skill Lab</h3>

        <div className="skills-lab-mobile-tabs" aria-label="Skill categories">
          {skillCategories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              className={activeCategory === index ? "is-active" : ""}
              aria-pressed={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            >
              {category.shortLabel}
            </button>
          ))}
        </div>

        <div className="skills-lab-mobile-readout" aria-live="polite">
          <p>{active.label}</p>
          <div>
            {active.skills.map((skill) => (
              <span key={skill.name}>
                {skill.name} <b>{skill.level}%</b>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
