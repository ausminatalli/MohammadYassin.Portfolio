"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubrepo,
  demo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="project-box bg-white dark:bg-white/10 max-w-[42rem] border border-black/5 dark:border-white/10 rounded-lg overflow-hidden sm:pr-8 relative h-[18rem] md:h-[24rem] hover:bg-gray-50 dark:hover:bg-white/20 transition sm:group-even:pl-8 shadow-lg hover:shadow-xl">
        {/* Project Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200/50 dark:border-white/10">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubrepo && (
              <a
                href={githubrepo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <FaGithub className="text-sm text-gray-700 dark:text-white" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300"
              >
                <FaExternalLinkAlt className="text-sm text-blue-600 dark:text-blue-400" />
              </a>
            )}
          </div>
        </div>

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-0 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>

          {/* Technology Tags */}
          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img
          src={imageUrl}
          width={320}
          height={320}
          alt={`${title} project screenshot`}
          className="absolute hidden sm:block top-14 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
