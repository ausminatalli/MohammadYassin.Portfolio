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
        over <span className="font-medium">5 years of hands-on experience</span>{" "}
        and a strong academic background in{" "}
        <span className="font-medium">Math and Computer Science</span>. Skilled
        in{" "}
        <span className="font-medium">
          system maintenance, coding, and technical problem-solving
        </span>
        , with a passion for{" "}
        <span className="font-medium">continuous learning and innovation</span>.
      </p>

      <p>
        Committed to{" "}
        <span className="font-medium">professional growth</span> with a
        long-term aspiration to{" "}
        <span className="font-medium">transition into project management</span>{" "}
        and lead high-impact technical teams.
      </p>
    </motion.section>
  );
}
