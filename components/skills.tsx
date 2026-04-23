"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories: Record<string, string[]> = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "PHP",
    "Python",
    "Java",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Tailwind CSS",
    "Blade",
    "Shadcn/ui",
    "Swagger/OpenAPI",
  ],
  Mobile: ["React Native", "Expo", "FCM Push Notifications"],
  Backend: [
    "Node.js",
    "Express.js",
    "Fastify",
    "Laravel",
    "Django",
    "Flask",
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Supabase",
    "Redis",
    "Prisma",
    "Sequelize",
    "AWS S3",
    "Cloudflare R2",
  ],
  "DevOps & Tools": [
    "Docker",
    "GitHub Actions",
    "CI/CD pipelines",
    "AWS",
    "AWS CloudFront",
    "Cloudflare CDN",
    "Cloudflare DNS",
    "DigitalOcean",
    "Hetzner",
    "Linux server administration",
    "Git",
  ],
  "APIs & Testing": [
    "REST API design",
    "GraphQL",
    "WebSockets",
    "JWT",
    "RBAC",
    "n8n workflow automation",
    "LLM API integration",
    "OpenAI",
    "Anthropic",
    "Jest",
    "Supertest",
    "Postman",
    "Agile/Scrum",
    "TDD",
    "PII data handling",
  ],
};

// Fibonacci sphere for 3D tag cloud
function getSphericalPositions(count: number, radius: number) {
  const positions: { x: number; y: number; z: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    positions.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    });
  }

  return positions;
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.2);
  const [activeTab, setActiveTab] = useState("Languages");
  const [isMobile, setIsMobile] = useState(false);
  const [cloudRadius, setCloudRadius] = useState(220);
  const barsRef = useRef<HTMLDivElement>(null);

  const tagCloudSkills = useMemo(() => {
    const allSkills = skillsData.map((s) => s.name);
    return isMobile ? allSkills.slice(0, 20) : allSkills;
  }, [isMobile]);

  const positions = useMemo(
    () => getSphericalPositions(tagCloudSkills.length, cloudRadius),
    [tagCloudSkills.length, cloudRadius]
  );

  const activeSkills = useMemo(() => {
    const names = skillCategories[activeTab] || [];
    return skillsData.filter((s) => names.includes(s.name));
  }, [activeTab]);

  // Animate proficiency bars on tab change
  useEffect(() => {
    if (!barsRef.current) return;
    const bars = barsRef.current.querySelectorAll(".skill-bar-fill");
    gsap.fromTo(
      bars,
      { scaleX: 0 },
      {
        scaleX: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, [activeTab]);

  useEffect(() => {
    const updateCloudRadius = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (window.innerWidth < 400) {
        setCloudRadius(110);
        return;
      }
      if (mobile) {
        setCloudRadius(130);
        return;
      }
      setCloudRadius(220);
    };

    updateCloudRadius();
    window.addEventListener("resize", updateCloudRadius);
    return () => window.removeEventListener("resize", updateCloudRadius);
  }, []);

  return (
    <section ref={ref} id="skills" className="scroll-mt-16 py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section label */}
        <div className="mb-20">
          <span className="text-mono text-text-muted">03</span>
          <h2 className="heading-display heading-lg mt-2">SKILLS</h2>
        </div>

        {/* 3D Tag Cloud (desktop) / Lightweight chips (mobile) */}
        {isMobile ? (
          <div className="mb-20 flex flex-wrap justify-center gap-2">
            {tagCloudSkills.map((skill) => (
              <span
                key={skill}
                className="text-mono text-[10px] px-3 py-1 border border-[var(--border-light)] text-text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <div className="tag-cloud-container mx-auto mb-24">
            <div className="tag-cloud">
              {tagCloudSkills.map((skill, i) => {
                const pos = positions[i];
                // Calculate perspective-aware opacity and scale
                const depthRange = cloudRadius * 2;
                const scale = ((pos.z + cloudRadius) / depthRange) * 0.6 + 0.4;
                const opacity = ((pos.z + cloudRadius) / depthRange) * 0.7 + 0.3;

                return (
                  <span
                    key={skill}
                    className="tag-item"
                    style={{
                      transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
                      opacity,
                      fontSize: `${11 + scale * 4}px`,
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`text-mono px-6 py-3 rounded-none border transition-all duration-300 ${
                activeTab === category
                  ? "bg-accent text-bg-primary border-accent"
                  : "bg-transparent text-text-muted border-[var(--border-light)] hover:border-accent hover:text-accent"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={barsRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded border border-[var(--border)] bg-bg-secondary hover:border-accent/30 transition-all"
                >
                  <span className="font-body text-sm text-text-primary flex-shrink-0 w-28">
                    {skill.name}
                  </span>
                  <div className="skill-bar flex-1">
                    <div
                      className="skill-bar-fill"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
