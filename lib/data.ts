import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Ecommerce from "@/public/ecommerce.png";
import Transportation from "@/public/transportation.png";
import Hr from "@/public/hr.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Beirut, Lebanon",
    description:
      "I graduated after 4 years of studying. I worked as a freelance for quite sometime.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Beirut, Lebanon",
    description:
      "I worked as a front-end developer and IT technician for 7 month for ESA(French college). I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer Bootcamp",
    location: "Nabatye, Lebanon",
    description:
      "I studied and worked on multiple project during a 5 month period and gained two certifcates.",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
] as const;

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
    imageUrl: Transportation,
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
    imageUrl: Hr,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "Postman",
  "Cloudinary",
  "PDFLib",
  "Stripe",
  "Python",
  "Sequlize(ORM)",
] as const;
