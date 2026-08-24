"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiAndroid,
  SiApple,
  SiCloudflare,
  SiDjango,
  SiDocker,
  SiExpo,
  SiFastify,
  SiFirebase,
  SiGithubactions,
  SiGraphql,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  tags: string[];
};

type SkillCategory = {
  label: string;
  shortLabel: string;
  description: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    label: "Frontend Systems",
    shortLabel: "Frontend",
    description: "Accessible, responsive product interfaces built for real users.",
    skills: [
      { name: "React", icon: SiReact, color: "#62e6ff", tags: ["Hooks", "RSC", "Motion"] },
      { name: "TypeScript", icon: SiTypescript, color: "#63a9ff", tags: ["Types", "DX", "Scale"] },
      { name: "Next.js", icon: SiNextdotjs, color: "#f4f7ff", tags: ["SSR", "App Router", "Performance"] },
      { name: "Vue.js", icon: SiVuedotjs, color: "#58e6ad", tags: ["Composition", "Pinia", "Vite"] },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#5ce5f7", tags: ["Design systems", "Responsive", "UI"] },
    ],
  },
  {
    label: "Backend & APIs",
    shortLabel: "Backend",
    description: "Reliable services, integrations, authentication, and realtime flows.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#7fe178", tags: ["Services", "Streams", "APIs"] },
      { name: "Laravel", icon: SiLaravel, color: "#ff6c75", tags: ["Queues", "Events", "SaaS"] },
      { name: "Django", icon: SiDjango, color: "#66d6a8", tags: ["REST", "ORM", "Admin"] },
      { name: "Fastify", icon: SiFastify, color: "#f4f7ff", tags: ["Schema", "Validation", "Node"] },
      { name: "GraphQL", icon: SiGraphql, color: "#ff6bda", tags: ["Schema", "Apollo", "Types"] },
      { name: "REST APIs", icon: SiPostman, color: "#ff8157", tags: ["Design", "Auth", "OpenAPI"] },
    ],
  },
  {
    label: "Mobile Delivery",
    shortLabel: "Mobile",
    description: "Cross-platform apps carried from feature build through release.",
    skills: [
      { name: "React Native", icon: SiReact, color: "#67e5ff", tags: ["Native UI", "Navigation", "Apps"] },
      { name: "Expo", icon: SiExpo, color: "#f3f4ff", tags: ["EAS", "OTA", "Builds"] },
      { name: "FCM", icon: SiFirebase, color: "#ffca55", tags: ["Push", "Events", "Delivery"] },
      { name: "Android", icon: SiAndroid, color: "#8fe47a", tags: ["Release", "Devices", "QA"] },
      { name: "iOS", icon: SiApple, color: "#dceaff", tags: ["Release", "Devices", "QA"] },
    ],
  },
  {
    label: "Data Systems",
    shortLabel: "Data",
    description: "Practical data models, query performance, storage, and realtime state.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#70b9ff", tags: ["SQL", "Indexes", "Scale"] },
      { name: "MySQL", icon: SiMysql, color: "#66d7ff", tags: ["Schema", "Queries", "Data"] },
      { name: "MongoDB", icon: SiMongodb, color: "#74ec8b", tags: ["Atlas", "NoSQL", "Aggregation"] },
      { name: "Supabase", icon: SiSupabase, color: "#6affb4", tags: ["Realtime", "Auth", "Storage"] },
      { name: "Redis", icon: SiRedis, color: "#ff6e79", tags: ["Cache", "Queues", "Pub/Sub"] },
    ],
  },
  {
    label: "Cloud & Delivery",
    shortLabel: "DevOps",
    description: "Repeatable deployments, observable infrastructure, and dependable operations.",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#65c8ff", tags: ["Images", "Compose", "CI"] },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#86b7ff", tags: ["CI/CD", "Tests", "Deploy"] },
      { name: "AWS", icon: SiAmazonaws, color: "#ffbd5b", tags: ["S3", "CloudFront", "Compute"] },
      { name: "Cloudflare", icon: SiCloudflare, color: "#ff9b55", tags: ["Edge", "DNS", "R2"] },
      { name: "Linux", icon: SiLinux, color: "#ffe676", tags: ["Servers", "Shell", "Operations"] },
    ],
  },
];

const orbitSkills = [
  { icon: SiReact, color: "#66edff", className: "orbit-one" },
  { icon: SiTypescript, color: "#72b8ff", className: "orbit-two" },
  { icon: SiNodedotjs, color: "#88ef7d", className: "orbit-three" },
  { icon: SiAmazonaws, color: "#ffc66e", className: "orbit-four" },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);
  const [activeCategory, setActiveCategory] = useState(0);
  const active = categories[activeCategory];

  return (
    <section ref={ref} id="skills" className="skills-lab scroll-mt-0" aria-labelledby="skills-lab-title">
      <div className="skills-lab-ambient" aria-hidden="true" />

      <div className="skills-lab-shell">
        <header className="skills-lab-heading">
          <span>Skills</span>
          <h2 id="skills-lab-title">Production Skill Lab</h2>
          <p>A focused toolkit, grouped by where it creates value.</p>
        </header>

        <div className="skills-reactor" aria-label="Core technology stack">
          <div className="skills-reactor-image">
            <Image
              src="/design/skills-reactor-v2.png"
              alt="A glowing technology reactor with a friendly robot presenting an energy sphere."
              fill
              sizes="(max-width: 700px) 92vw, 1080px"
              quality={85}
            />
          </div>

          <div className="skills-reactor-vignette" aria-hidden="true" />
          <div className="skills-reactor-pulse" aria-hidden="true" />

          <div className="skills-reactor-orbit" aria-hidden="true">
            {orbitSkills.map(({ icon: Icon, color, className }) => (
              <span key={className} className={`skills-orbit-bubble ${className}`} style={{ "--orbit-color": color } as CSSProperties}>
                <Icon />
              </span>
            ))}
          </div>

          <div className="skills-core-stack">
            <span>Core stack</span>
            <strong>React · TypeScript · Node.js</strong>
          </div>

          <div className="skills-reactor-status" aria-hidden="true"><i /> Production stack</div>
        </div>

        <div className="skills-category-rail" role="tablist" aria-label="Skill categories">
          {categories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              role="tab"
              aria-selected={activeCategory === index}
              aria-controls="skills-panel"
              className={activeCategory === index ? "is-active" : ""}
              onClick={() => setActiveCategory(index)}
            >
              {category.shortLabel}
            </button>
          ))}
        </div>

        <div className="skills-systems-bar">
          <div><span>Selected discipline</span><h3>{active.label}</h3></div>
          <p>{active.description}</p>
        </div>

        <div id="skills-panel" className="skills-card-grid" role="tabpanel" key={active.label}>
          {active.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article className="skills-card" key={skill.name}>
                <div className="skills-card-icon" style={{ "--skill-color": skill.color } as CSSProperties}><Icon /></div>

                <div className="skills-card-copy">
                  <div className="skills-card-title-row"><h4>{skill.name}</h4></div>
                  <div className="skills-card-tags" aria-label={`${skill.name} strengths`}>
                    {skill.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
