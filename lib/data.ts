import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdDataUsage } from "react-icons/md";

import css from "../public/css-3.svg";
import html from "../public/html.svg";
import aws from "../public/aws.svg";
import bootstrap from "../public/bootstrap.svg";
import cloudinary from "../public/cloudinary.svg";
import github from "../public/github.svg";
import javascript from "../public/javascript.svg";
import mongodb from "../public/mongodb.svg";
import mysql from "../public/mysql.svg";
import nextjs from "../public/nextjs.svg";
import nodejs from "../public/nodejs.svg";
import php from "../public/php.svg";
import postman from "../public/postman.svg";
import prisma from "../public/prisma.svg";
import laravel from "../public/laravel.svg";
import python from "../public/python.svg";
import react from "../public/react.svg";
import tailwind from "../public/tailwind.svg";
import typescript from "../public/typescript.svg";
import postgresql from "../public/postgresql.svg";
import sass from "../public/sass-1.svg";
import java from "../public/java.svg";
import swagger from "../public/swagger.svg";
import graphql from "../public/graphql.svg";

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
    title: "Software Engineer",
    location: "Broadstark — Remote",
    description:
      "Owned features end-to-end and delivered 3+ full-stack web and mobile applications for international clients using React.js, Next.js, React Native, Laravel, Node.js, and PostgreSQL. Built RESTful APIs and GraphQL endpoints; deployed on Hetzner, Cloudflare (CDN, R2), DigitalOcean, and AWS (S3, CloudFront) with CI/CD via GitHub Actions. Built AI-powered automation workflows with n8n and integrated LLM APIs (OpenAI, Anthropic).",
    icon: React.createElement(FaReact),
    date: "Oct 2025 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Pixel38 — On site / Lebanon",
    description:
      "Built and maintained 5+ client-facing web applications using React.js, Next.js, TypeScript, Node.js/Express.js, and Laravel, serving hundreds of active users. Designed relational and non-relational database schemas with MySQL, PostgreSQL, and MongoDB using Sequelize and Prisma ORMs, reducing latency by around 35%. Implemented Auth.js/JWT authentication, RBAC, Swagger/OpenAPI documentation, and automated testing with Postman, Newman, Jest, and Supertest.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Dec 2025",
  },
  {
    title: "IT & Full-Stack Developer",
    location: "ESA — Ecole Superieure des Affaires (Beirut, Lebanon)",
    description:
      "Sole developer of a multi-major student registration platform (Next.js, MySQL) supporting 12 academic programs and processing 500+ applicants with zero data integrity issues. Automated 4+ administrative workflows through internal tooling, reducing manual processing time by about 60%. Maintained Linux infrastructure, networks, and hardware with 99%+ uptime for academic operations.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Oct 2023",
  },
  {
    title: "Data Entry & Verification Assistant",
    location: "Sawa Li Lubnan — Lebanese National Elections",
    description:
      "Verified and processed voter registration data for the 2022 Lebanese national elections across large datasets, maintaining 100% accuracy compliance. Applied data validation procedures to detect and resolve inconsistencies.",
    icon: React.createElement(MdDataUsage),
    date: "Jan 2022 - May 2023",
  },
  {
    title: "Web Developer — Freelance",
    location: "Self-Employed — Lebanon",
    description:
      "Designed and developed websites, landing pages, and full-stack web applications for clients across multiple industries. Built and customized e-commerce stores end-to-end, from UI/UX implementation to backend integration, while delivering iterative improvements and ongoing maintenance.",
    icon: React.createElement(FaReact),
    date: "Aug 2020 - Sep 2022",
  },
  {
    title: "Bachelor of Science in Computer Science",
    location: "Lebanese International University — Beirut, Lebanon",
    description:
      "Built a strong foundation in computer science and software engineering fundamentals, with an emphasis on analytical problem-solving and practical system design.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Full-Stack Developer Certifications",
    location: "ESIEE-IT, ESA Coding Lab & Global Mentorship Initiative",
    description:
      "Completed Full-Stack Developer programs at ESIEE-IT and ESA Coding Lab, plus the GMI Business Mentorship Program, with a focus on practical delivery, collaboration, and production-oriented engineering workflows.",
    icon: React.createElement(FaLaptopCode),
    date: "Apr 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Mido TV",
    description:
      "Built a full-scale IPTV platform serving 8,000+ live channels, 20,000+ movies, and 10,000+ series in 4K with bilingual Arabic/English responsive UI, dynamic pricing, and WhatsApp-integrated subscriptions.",
    tags: ["Next.js", "Tailwind CSS", "IPTV", "4K Streaming", "WhatsApp"],
    imageUrl: "/midotv.png",
    githubrepo: "",
    demo: "https://midotv.com/",
  },
  {
    title: "Mido Delivery",
    description:
      "Founded and engineered a Beirut-based delivery platform with order placement, real-time tracking, and WhatsApp-integrated workflows, while managing development and day-to-day operations.",
    tags: ["Next.js", "Tailwind CSS", "Real-Time Tracking", "WhatsApp"],
    imageUrl: "/midodelivery.png",
    githubrepo: "",
    demo: "https://midodelivery.com/",
  },
  {
    title: "HR Management System",
    description:
      "Built a full-featured HRMS with RBAC, JWT authentication, employee request workflows, secure document upload, PII-aware access controls, and PDF generation with PDFLib.",
    tags: ["Next.js", "TypeScript", "MySQL", "Prisma", "Auth.js", "Cloudinary", "PDFLib", "RBAC"],
    imageUrl: "/hr.PNG",
    githubrepo: "",
    demo: "",
  },
  {
    title: "Student Registration Platform — ESA",
    description:
      "Sole backend developer for a registration platform supporting 12 academic majors and 500+ applications with zero data integrity issues across two admission cycles.",
    tags: ["Next.js", "MySQL2", "Cloudinary", "Tailwind", "Database Design"],
    imageUrl: "/online-esa.png",
    githubrepo: "",
    demo: "https://onlineapplication.esa.edu.lb/",
  },
  {
    title: "Sha8elni",
    description:
      "Full-stack development of a Lebanese job marketplace with iOS and Android mobile apps using Laravel backend and React Native frontend.",
    tags: ["Laravel", "React Native", "Job Platform", "Mobile App"],
    imageUrl: "https://i.ibb.co/P0VdH9n/Screenshot-2026-01-30-at-11-47-37.png",
    githubrepo: "",
    demo: "https://sha8elni.com/en/",
  },
  {
    title: "Marblearth",
    description:
      "Developed a full-featured web platform using React.js and Node.js with extensive AWS integration including CloudFront CDN for optimized performance and scalability.",
    tags: ["React.js", "Node.js", "AWS S3", "CloudFront"],
    imageUrl: "/marblearth.png",
    githubrepo: "",
    demo: "",
  },
  {
    title: "Mourad Valley",
    description:
      "Designed and developed a Laravel-based informative website; responsible for full backend architecture, routing, and deployment.",
    tags: ["Laravel", "PHP", "Informative Website"],
    imageUrl: "https://i.ibb.co/gLL2tXVq/Screenshot-2026-01-30-at-11-12-34.png",
    githubrepo: "",
    demo: "https://mouradvalley.com/",
  },
];

export const skillsData = [
  { name: "HTML", imageUrl: html },
  { name: "CSS", imageUrl: css },
  { name: "JavaScript", imageUrl: javascript },
  { name: "TypeScript", imageUrl: typescript },
  { name: "PHP", imageUrl: php },
  { name: "Python", imageUrl: python },
  { name: "Java", imageUrl: java },
  { name: "Node.js", imageUrl: nodejs },
  { name: "React.js", imageUrl: react },
  { name: "Next.js", imageUrl: nextjs },
  { name: "React Native", imageUrl: react },
  { name: "Vue.js", imageUrl: javascript },
  { name: "Angular.js", imageUrl: javascript },
  { name: "Tailwind CSS", imageUrl: tailwind },
  { name: "Bootstrap", imageUrl: bootstrap },
  { name: "Sass", imageUrl: sass },
  { name: "Cloudinary", imageUrl: cloudinary },
  { name: "Laravel", imageUrl: laravel },
  { name: "Laravel Blade", imageUrl: laravel },
  { name: "Express.js", imageUrl: nodejs },
  { name: "Fastify", imageUrl: nodejs },
  { name: "Django", imageUrl: python },
  { name: "Flask", imageUrl: python },
  { name: "MySQL", imageUrl: mysql },
  { name: "MongoDB", imageUrl: mongodb },
  { name: "PostgreSQL", imageUrl: postgresql },
  { name: "Prisma", imageUrl: prisma },
  { name: "Sequelize", imageUrl: nodejs },
  { name: "Redis", imageUrl: nodejs },
  { name: "RabbitMQ", imageUrl: nodejs },
  { name: "CDN Caching", imageUrl: aws },
  { name: "In-memory Caching", imageUrl: aws },
  { name: "AWS SQS", imageUrl: aws },
  { name: "Socket.io", imageUrl: nodejs },
  { name: "Reverb", imageUrl: nodejs },
  { name: "REST API Design", imageUrl: swagger },
  { name: "GraphQL", imageUrl: graphql },
  { name: "Docker", imageUrl: aws },
  { name: "Linux", imageUrl: aws },
  { name: "Git", imageUrl: github },
  { name: "GitHub", imageUrl: github },
  { name: "GitHub Actions", imageUrl: github },
  { name: "GitLab", imageUrl: github },
  { name: "CI/CD", imageUrl: github },
  { name: "AWS", imageUrl: aws },
  { name: "Cloudflare", imageUrl: aws },
  { name: "DigitalOcean", imageUrl: aws },
  { name: "Hetzner", imageUrl: aws },
  { name: "Postman", imageUrl: postman },
  { name: "Swagger/OpenAPI", imageUrl: swagger },
  { name: "Jest", imageUrl: nodejs },
  { name: "Supertest", imageUrl: nodejs },
  { name: "Auth.js", imageUrl: nodejs },
  { name: "JWT", imageUrl: nodejs },
  { name: "RBAC", imageUrl: nodejs },
  { name: "Agile/Scrum", imageUrl: github },
  { name: "TDD", imageUrl: github },
  { name: "n8n", imageUrl: nodejs },
  { name: "LLM API Integration", imageUrl: nodejs },
  { name: "OpenAI API", imageUrl: nodejs },
  { name: "Anthropic API", imageUrl: nodejs },
] as const;
