"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiCloudflare,
  SiDjango,
  SiDocker,
  SiExpo,
  SiFastify,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
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
  level: number;
  icon: IconType;
  color: string;
  status: string;
  tags: string[];
};

type SkillCategory = {
  label: string;
  shortLabel: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    label: "Core Systems",
    shortLabel: "All",
    skills: [
      { name: "React", level: 95, icon: SiReact, color: "#62e6ff", status: "Expert", tags: ["Frontend", "RSC", "Motion"] },
      { name: "TypeScript", level: 95, icon: SiTypescript, color: "#63a9ff", status: "Expert", tags: ["Typed", "Scalable", "Safe"] },
      { name: "Node.js", level: 94, icon: SiNodedotjs, color: "#7fe178", status: "Production Ready", tags: ["Services", "Streams", "APIs"] },
      { name: "Laravel", level: 95, icon: SiLaravel, color: "#ff6c75", status: "Expert", tags: ["Backend", "Queues", "SaaS"] },
      { name: "PostgreSQL", level: 94, icon: SiPostgresql, color: "#70b9ff", status: "Expert", tags: ["SQL", "Indexes", "Scale"] },
    ],
  },
  {
    label: "Languages",
    shortLabel: "Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: SiJavascript, color: "#ffe36d", status: "Advanced", tags: ["ES6+", "Async", "Web"] },
      { name: "TypeScript", level: 95, icon: SiTypescript, color: "#55b7ff", status: "Expert", tags: ["Typed", "Scalable", "Safe"] },
      { name: "PHP", level: 95, icon: SiPhp, color: "#9ba8ff", status: "Expert", tags: ["OOP", "APIs", "Laravel"] },
      { name: "Python", level: 90, icon: SiPython, color: "#ffe06a", status: "Advanced", tags: ["Django", "Data", "APIs"] },
    ],
  },
  {
    label: "Frontend Systems",
    shortLabel: "Frontend",
    skills: [
      { name: "React", level: 95, icon: SiReact, color: "#62e6ff", status: "Expert", tags: ["Hooks", "RSC", "Motion"] },
      { name: "TypeScript", level: 95, icon: SiTypescript, color: "#63a9ff", status: "Expert", tags: ["Types", "DX", "Scale"] },
      { name: "Next.js", level: 94, icon: SiNextdotjs, color: "#f4f7ff", status: "Production Ready", tags: ["SSR", "App Router", "Performance"] },
      { name: "Vue.js", level: 88, icon: SiVuedotjs, color: "#58e6ad", status: "Advanced", tags: ["Composition", "Pinia", "Vite"] },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#5ce5f7", status: "Expert", tags: ["Systems", "Responsive", "UI"] },
    ],
  },
  {
    label: "Mobile",
    shortLabel: "Mobile",
    skills: [
      { name: "React Native", level: 91, icon: SiReact, color: "#67e5ff", status: "Advanced", tags: ["Native", "Expo", "Apps"] },
      { name: "Expo", level: 88, icon: SiExpo, color: "#f3f4ff", status: "Advanced", tags: ["EAS", "OTA", "Builds"] },
      { name: "Push Systems", level: 84, icon: SiCloudflare, color: "#ffb04f", status: "Production Ready", tags: ["FCM", "Events", "Queues"] },
    ],
  },
  {
    label: "Backend Systems",
    shortLabel: "Backend",
    skills: [
      { name: "Node.js", level: 94, icon: SiNodedotjs, color: "#7fe178", status: "Expert", tags: ["Services", "Streams", "APIs"] },
      { name: "Laravel", level: 95, icon: SiLaravel, color: "#ff6c75", status: "Expert", tags: ["Queues", "Events", "SaaS"] },
      { name: "Django", level: 87, icon: SiDjango, color: "#66d6a8", status: "Advanced", tags: ["REST", "ORM", "Admin"] },
      { name: "Fastify", level: 86, icon: SiFastify, color: "#f4f7ff", status: "Advanced", tags: ["Fast", "Schema", "Node"] },
    ],
  },
  {
    label: "Databases",
    shortLabel: "Databases",
    skills: [
      { name: "PostgreSQL", level: 94, icon: SiPostgresql, color: "#70b9ff", status: "Expert", tags: ["SQL", "Indexes", "Scale"] },
      { name: "MySQL", level: 93, icon: SiMysql, color: "#66d7ff", status: "Expert", tags: ["Schema", "Query", "Data"] },
      { name: "MongoDB", level: 89, icon: SiMongodb, color: "#74ec8b", status: "Advanced", tags: ["Atlas", "NoSQL", "Aggregation"] },
      { name: "Supabase", level: 91, icon: SiSupabase, color: "#6affb4", status: "Advanced", tags: ["Realtime", "Auth", "Edge"] },
      { name: "Redis", level: 85, icon: SiRedis, color: "#ff6e79", status: "Advanced", tags: ["Cache", "Queues", "Pub/Sub"] },
    ],
  },
  {
    label: "DevOps & Tools",
    shortLabel: "DevOps",
    skills: [
      { name: "Docker", level: 91, icon: SiDocker, color: "#65c8ff", status: "Advanced", tags: ["Images", "Compose", "CI"] },
      { name: "GitHub Actions", level: 89, icon: SiGithubactions, color: "#86b7ff", status: "Advanced", tags: ["CI/CD", "Tests", "Deploy"] },
      { name: "AWS", level: 87, icon: SiAmazonaws, color: "#ffbd5b", status: "Advanced", tags: ["Cloud", "S3", "Compute"] },
      { name: "Cloudflare", level: 88, icon: SiCloudflare, color: "#ff9b55", status: "Advanced", tags: ["Edge", "DNS", "Workers"] },
      { name: "Linux", level: 90, icon: SiLinux, color: "#ffe676", status: "Advanced", tags: ["Servers", "Shell", "Ops"] },
    ],
  },
  {
    label: "APIs & Testing",
    shortLabel: "APIs",
    skills: [
      { name: "REST APIs", level: 95, icon: SiPostman, color: "#ff8157", status: "Expert", tags: ["Design", "Auth", "Docs"] },
      { name: "GraphQL", level: 89, icon: SiGraphql, color: "#ff6bda", status: "Advanced", tags: ["Schema", "Apollo", "Types"] },
      { name: "Realtime", level: 91, icon: SiNodedotjs, color: "#79e789", status: "Advanced", tags: ["Sockets", "Events", "Live"] },
      { name: "Jest", level: 88, icon: SiJest, color: "#ff7d92", status: "Advanced", tags: ["Unit", "Mocks", "Coverage"] },
    ],
  },
];

const orbitSkills = [
  { icon: SiReact, color: "#66edff", className: "orbit-one" },
  { icon: SiTypescript, color: "#72b8ff", className: "orbit-two" },
  { icon: SiNodedotjs, color: "#88ef7d", className: "orbit-three" },
  { icon: SiAmazonaws, color: "#ffc66e", className: "orbit-four" },
];

const categoryDisplayOrder = [0, 2, 4, 3, 1, 5, 6, 7];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);
  const [activeCategory, setActiveCategory] = useState(2);
  const active = categories[activeCategory];
  const totalSkills = useMemo(() => categories.slice(1).reduce((total, category) => total + category.skills.length, 0), []);

  return (
    <section ref={ref} id="skills" className="skills-lab scroll-mt-0" aria-labelledby="skills-lab-title">
      <div className="skills-lab-ambient" aria-hidden="true" />

      <div className="skills-lab-shell">
        <header className="skills-lab-heading">
          <span>Skills</span>
          <h2 id="skills-lab-title">Vibrant Skill Lab</h2>
          <p>{totalSkills} tools powering real products</p>
        </header>

        <div className="skills-reactor" aria-label="Animated core technology reactor">
          <div className="skills-reactor-image">
            <Image
              src="/design/skills-reactor-v2.png"
              alt="A cinematic glowing technology reactor with a friendly robot presenting an energy sphere."
              fill
              sizes="(max-width: 700px) 92vw, 1080px"
              quality={100}
              priority
              unoptimized
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

          <div className="skills-reactor-status" aria-hidden="true"><i /> Reactor online</div>
        </div>

        <div className="skills-category-rail" role="tablist" aria-label="Skill categories">
          {categoryDisplayOrder.map((index) => {
            const category = categories[index];
            return (
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
            );
          })}
        </div>

        <div className="skills-systems-bar">
          <div><span>Selected system</span><h3>{active.label}</h3></div>
          <p><b>{active.skills.length}</b> skills</p>
        </div>

        <div id="skills-panel" className="skills-card-grid" role="tabpanel" key={active.label}>
          {active.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <article className={`skills-card ${index === 2 ? "skills-card-featured" : ""}`} key={skill.name}>
                <div className="skills-card-icon" style={{ "--skill-color": skill.color } as CSSProperties}><Icon /></div>

                <div className="skills-card-copy">
                  <div className="skills-card-title-row">
                    <div>
                      <h4>{skill.name}</h4>
                      <span className="skills-card-status"><i /> {skill.status}</span>
                    </div>
                    <div className="skills-progress-ring" style={{ "--progress": skill.level, "--skill-color": skill.color } as CSSProperties} aria-label={`${skill.level}% proficiency`}>
                      <span>{skill.level}<small>%</small></span>
                    </div>
                  </div>

                  <div className="skills-card-tags" aria-label={`${skill.name} strengths`}>
                    {skill.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>

                  {index === 2 && <div className="skills-card-meter" aria-hidden="true"><i style={{ width: `${skill.level}%` }} /></div>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
