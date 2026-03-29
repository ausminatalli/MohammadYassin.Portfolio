import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdDataUsage, MdComputer } from "react-icons/md";

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
import strip from "../public/strip.svg";
import tailwind from "../public/tailwind.svg";
import dynamodb from "../public/dynamodb.svg";
import typescript from "../public/typescript.svg";
import wordpress from "../public/wordpress.svg";
import postgresql from "../public/postgresql.svg";
import sass from "../public/sass-1.svg";
import java from "../public/java.svg";
import dotnet from "../public/dotnet.svg";
import springboot from "../public/spring-boot.svg";
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
    title: "Software Engineer — Freelance",
    location: "Broadstark — Worldwide / Remote",
    description:
      "Owned features end-to-end and delivered 3+ full-stack web and mobile applications for international clients using React.js, Next.js, React Native, Laravel, Node.js, and PostgreSQL. Built RESTful APIs and GraphQL endpoints; deployed on Hetzner, Cloudflare, DigitalOcean and AWS with CI/CD via GitHub Actions. Built AI-powered automation workflows using n8n, integrating LLM APIs (OpenAI/Anthropic). Containerized services using Docker.",
    icon: React.createElement(FaReact),
    date: "Dec 2025 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Pixel38 — Remote / Lebanon",
    description:
      "Built and maintained 5+ client-facing web applications using React.js, Next.js, TypeScript, Node.js/Express.js, and Laravel serving hundreds of active users. Designed relational and non-relational database schemas with MySQL, PostgreSQL, and MongoDB using Sequelize and Prisma ORMs; query indexing reduced latency by ~35%. Led code reviews, enforced Git branching standards, and mentored junior developers across a 5-developer team.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Dec 2025",
  },
  {
    title: "IT & Full-Stack Developer",
    location: "ESA (Ecole Superieure des Affaires) — Beirut, Lebanon",
    description:
      "Sole developer of a multi-major student registration platform (Next.js, MySQL) supporting 12 academic programs and processing 500+ applicants with zero data integrity errors. Automated 4+ administrative workflows by building internal web tools, reducing manual processing time by ~60%. Maintained Linux server infrastructure with 99%+ uptime.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Jan 2024",
  },
  {
    title: "Full-Stack Developer Certification",
    location: "ESIEE-IT & ESA Coding Lab",
    description:
      "Completed intensive full-stack development programs, earning certifications from both ESIEE-IT and ESA Coding Lab. Also completed the GMI Business Mentorship Program. Mastered modern web development technologies and frameworks.",
    icon: React.createElement(FaLaptopCode),
    date: "Apr 2023 - Sep 2023",
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
    title: "Bachelor in Computer Science",
    location: "Lebanese International University, Beirut",
    description:
      "Graduated with a strong foundation in Computer Science and Mathematics. Developed technical problem-solving skills and passion for innovation.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Freelance IT Technician",
    location: "Self-Employed — Lebanon",
    description:
      "Provided PC hardware/software maintenance, network configuration, and troubleshooting for individual and SME clients. Configured satellite, TV over internet, and broadband internet systems for residential and commercial customers.",
    icon: React.createElement(MdComputer),
    date: "Aug 2020 - Present",
  },
] as const;

export const projectsData = [
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
    title: "Mido TV",
    description:
      "Built a full-scale IPTV platform serving 8,000+ live channels, 20,000+ movies, and 10,000+ series in 4K with bilingual (Arabic/English) responsive UI. Implemented dynamic pricing flows, WhatsApp-integrated subscriptions, and APK distribution for Smart TV, Android, iOS, MAG Box, Firestick, and Apple TV.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "i18n",
      "WhatsApp API",
      "Vercel",
    ],
    imageUrl: "/midotv.png",
    githubrepo: "",
    demo: "https://midotv.com/",
  },
  {
    title: "Mido Delivery",
    description:
      "Founded and engineered a Beirut-based delivery service web platform with order placement, real-time tracking, and WhatsApp-integrated workflows. Managed full product lifecycle: development, driver coordination, client onboarding, and customer support operations.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "i18n",
      "WhatsApp API",
      "Vercel",
    ],
    imageUrl: "/midodelivery.png",
    githubrepo: "",
    demo: "https://midodelivery.com/",
  },
  {
    title: "HR Management System",
    description:
      "Built a full-featured HRMS with RBAC, JWT authentication, employee request flows, secure document upload, PII-aware access controls, and document processing pipelines with PDF generation via PDFLib.",
    tags: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Prisma",
      "Cloudinary",
      "PDFLib",
      "Auth.js",
    ],
    imageUrl: "https://i.ibb.co/z43NWKz/hr.png",
    githubrepo: "",
    demo: "",
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
    title: "Student Registration Forms",
    description:
      "Sole backend developer; built a registration system supporting 12 academic majors, processing 500+ applications with zero data integrity issues across two admission cycles.",
    tags: ["Next.js", "MySQL2", "Cloudinary", "Tailwind", "Database Design"],
    imageUrl: "https://i.ibb.co/m1qVpZ1/Screenshot-2026-03-29-at-16-15-16.png",
    githubrepo: "",
    demo: "https://onlineapplication.esa.edu.lb/",
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
  {
    title: "BroadStark Company Website",
    description:
      "Created a small business website with responsive design and contact functionality.",
    tags: ["Next.js", "Tailwind", "EmailJS", "Responsive Design"],
    imageUrl: "https://i.ibb.co/d427tf32/Screenshot-2026-01-30-at-11-09-03.png",
    githubrepo: "",
    demo: "https://broadstark.com/",
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
  { name: "React.js", imageUrl: react },
  { name: "Next.js", imageUrl: nextjs },
  { name: "React Native", imageUrl: react },
  { name: "Vue.js", imageUrl: javascript },
  { name: "Angular.js", imageUrl: javascript },
  { name: "Laravel", imageUrl: laravel },
  { name: "Laravel Blade", imageUrl: laravel },
  { name: "Node.js", imageUrl: nodejs },
  { name: "Express.js", imageUrl: nodejs },
  { name: "Fastify", imageUrl: nodejs },
  { name: "Django", imageUrl: python },
  { name: "Flask", imageUrl: python },
  { name: "Redux", imageUrl: react },
  { name: "Sequelize", imageUrl: nodejs },
  { name: "Prisma", imageUrl: prisma },
  { name: "MySQL", imageUrl: mysql },
  { name: "MongoDB", imageUrl: mongodb },
  { name: "PostgreSQL", imageUrl: postgresql },
  { name: "DynamoDB", imageUrl: dynamodb },
  { name: "Redis", imageUrl: nodejs },
  { name: "RabbitMQ", imageUrl: nodejs },
  { name: "Docker", imageUrl: aws },
  { name: "Git", imageUrl: github },
  { name: "GitHub", imageUrl: github },
  { name: "GitHub Actions", imageUrl: github },
  { name: "GitLab", imageUrl: github },
  { name: "AWS", imageUrl: aws },
  { name: "Cloudinary", imageUrl: cloudinary },
  { name: "Tailwind CSS", imageUrl: tailwind },
  { name: "Bootstrap", imageUrl: bootstrap },
  { name: "Sass", imageUrl: sass },
  { name: "Postman", imageUrl: postman },
  { name: "Swagger/OpenAPI", imageUrl: swagger },
  { name: "GraphQL", imageUrl: graphql },
  { name: "Stripe", imageUrl: strip },
  { name: "Jest", imageUrl: nodejs },
  { name: "Supertest", imageUrl: nodejs },
  { name: "Vercel", imageUrl: github },
  { name: "Socket.io", imageUrl: nodejs },
  { name: "n8n", imageUrl: nodejs },
  { name: "Cloudflare", imageUrl: aws },
] as const;
