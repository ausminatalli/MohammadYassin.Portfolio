"use client";

import React from "react";
import SectionHeading from "./section-heading";
// import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Ecommerce from "../public/ecommerce.png";
// import Transportation from "../public/ecommerce.png";
// import Hr from "../public/ecommerce.png";
export const projectsData = [
  {
    title: "E-commerce",
    description:
      "The website is an e-commerce platform dedicated to shoes. It was built using React JS and incorporates several essential components, including a product management system, administrative integration, Stripe payment processing, viewer tracking, and a comprehensive logging system.",
    tags: [
      "Reactjs",
      "Nodejs",
      "Expressjs",
      "Tailwind",
      "Redux",
      "Strip",
      "SaaS",
      "Cloudinary",
    ],
    imageUrl: Ecommerce,
  },
  {
    title: "Transportation Management System",
    description:
      "I developed an efficient bus transportation system with secure payment capabilities. Admins have the power to manage stations, buses, and travel schedules, while users can securely book tickets. Additionally, drivers can register to work as bus drivers.",
    tags: [
      "HTML",
      "CSS",
      "Vanillajs",
      "Bootstrap",
      "mysql",
      "PHP",
      "Strip",
      "Cloudinary",
    ],
    imageUrl: Ecommerce,
  },
  {
    title: "HR Management System",
    description:
      "Created a web-based HR Management System to facilitate efficient employee-HR interactions, enabling employees to submit requests, HR to respond promptly, and facilitating secure document uploads.",
    tags: [
      "Next.js",
      "Typescrypt",
      "Tailwind",
      "Cloudinary",
      "PDFLib",
      "Auth.js",
      "Sequlize",
    ],
    imageUrl: Ecommerce,
  },
] as const;
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
