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
        In 2021, I graduated with a{" "}
        <span className="font-medium">Computer Science degree</span>. Currently,
        I've successfully completed the{" "}
        <span className="font-medium">ESA Coding Lab</span>, sponsored by ESA
        and the French Embassy in Lebanon, earning a{" "}
        <span className="font-medium">degree from Esiee Paris</span> expected in
        September 2023. I dedicated{" "}
        <span className="font-medium">7 months</span> to an{" "}
        <span className="font-medium">
          IT internship at ESA École Supérieure des Affaires
        </span>
        , specializing in <span className="font-medium">Next.js</span> for web
        development. In addition to the internship, I earned a{" "}
        <span className="font-medium">certificate from ESA Coding Lab</span>{" "}
        following a{" "}
        <span className="font-medium">
          5-month full-stack development program
        </span>
        , completing{" "}
        <span className="font-medium">three distinct projects</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        chess, watching series, and learning new technologies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and networking</span>. I'm also
        learning how to play the flute.
      </p>
    </motion.section>
  );
}
