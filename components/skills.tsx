"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Categorize skills for better organization
const skillCategories = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "Java",
    "C#",
  ],
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
  ],
  "Backend Technologies": [
    "Node.js",
    "Express.js",
    "Laravel",
    "Spring Boot",
    "Django",
    "Flask",
    ".NET Core",
  ],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "DynamoDB"],
  "Tools & DevOps": [
    "Git",
    "GitHub",
    "GitLab",
    "AWS",
    "Vercel",
    "Postman",
    "Swagger/OpenAPI",
    "GraphQL",
  ],
  "Libraries & Frameworks": [
    "Sequelize",
    "Prisma",
    "WordPress",
    "Cloudinary",
    "Stripe",
    "Jest",
  ],
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const getSkillsByCategory = (category: string) => {
    const categorySkills =
      skillCategories[category as keyof typeof skillCategories];
    return skillsData.filter((skill) => categorySkills.includes(skill.name));
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Technical Skills</SectionHeading>

      <div className="space-y-8">
        {Object.entries(skillCategories).map(([category, _], categoryIndex) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white/90">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {getSkillsByCategory(category).map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-md hover:shadow-lg transition-all duration-300"
                  key={skill.name}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Image
                      src={skill.imageUrl}
                      width={40}
                      height={40}
                      alt={`${skill.name} logo`}
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                      {skill.name}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Additional Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-600 dark:text-white/70">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>RESTful API Design</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Cloud Architecture (AWS)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Database Design & Optimization</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span>Agile Development</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>CI/CD Pipelines</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>System Architecture</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
