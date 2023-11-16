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

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgb(0,0,0,0.2)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill.imageUrl}
              width={64}
              height={64}
              alt={`${skill.name} logo`}
              className="mb-2  cursor-pointer"
              // style={{ width: "50px", height: "50px" }}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
