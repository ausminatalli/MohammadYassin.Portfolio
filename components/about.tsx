"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A highly motivated and hardworking{" "}
        <span className="font-medium">Computer Science professional</span> with
        over <span className="font-medium">3 years of hands-on experience</span>{" "}
        and a strong academic background in{" "}
        <span className="font-medium">Math and Computer Science</span>. I
        graduated from{" "}
        <span className="font-medium">Lebanese International University</span>{" "}
        in 2021 and have since been dedicated to continuous learning and
        professional growth. I've earned certifications from{" "}
        <span className="font-medium">ESIEE-IT and ESA Coding Lab</span>,
        completing intensive full-stack development programs.
      </p>

      <p className="mb-3">
        Currently working as a{" "}
        <span className="font-medium">Full-stack Developer at Pixel38</span>, I
        specialize in building scalable web applications using modern
        technologies like{" "}
        <span className="font-medium">
          React.js, Next.js, Laravel, and cloud solutions
        </span>
        . My expertise spans across{" "}
        <span className="font-medium">
          JavaScript, PHP, Python, Java, and C#
        </span>
        , with extensive experience in both{" "}
        <span className="font-medium">frontend and backend development</span>.
      </p>

      <p>
        I am passionate about{" "}
        <span className="font-medium">
          system maintenance, coding, and technical problem-solving
        </span>
        , with a{" "}
        <span className="font-medium">
          passion for continuous learning and innovation
        </span>
        . My long-term aspiration is to{" "}
        <span className="font-medium">transition into project management</span>{" "}
        and lead high-impact technical teams, combining my technical expertise
        with leadership skills.
      </p>
    </motion.section>
  );
}
