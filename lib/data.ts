import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdDataUsage, MdComputer } from "react-icons/md";
import ecommerceImg from "../public/ecommerce.png";
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

import transportationImg from "../public/transportation.png";
import hrImg from "../public/hr.png";

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
    title: "Bachelor in Computer Science",
    location: "Lebanese International University, Beirut",
    description:
      "Graduated with a strong foundation in Computer Science and Mathematics. Developed technical problem-solving skills and passion for innovation.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Freelance Maintenance Technician",
    location: "Lebanon",
    description:
      "Provided software and hardware maintenance for PCs, satellite dish installation, internet configuration, bug troubleshooting, and IPTV setup for individual and business clients.",
    icon: React.createElement(MdComputer),
    date: "Aug 2020 - Present",
  },
  {
    title: "Data Entry & Verification Assistant",
    location: "Sawa Li Lubnan - Lebanese Elections",
    description:
      "Verified and entered voter data during the Lebanese national elections. Ensured accuracy and compliance with electoral protocols and contributed to smooth data operations.",
    icon: React.createElement(MdDataUsage),
    date: "Jan 2022 - May 2023",
  },
  {
    title: "Full-Stack Developer Certification",
    location: "ESIEE-IT & ESA Coding Lab",
    description:
      "Completed intensive full-stack development programs, earning certifications from both ESIEE-IT and ESA Coding Lab. Mastered modern web development technologies and frameworks.",
    icon: React.createElement(FaLaptopCode),
    date: "Apr 2023 - Sep 2023",
  },
  {
    title: "IT & Full-stack Developer",
    location: "ESA (Ecole Superieure des Affaires) - French Business School",
    description:
      "Maintained digital infrastructure and developed internal tools and platforms. Supported both hardware and software needs while implementing new features across web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Apr 2024",
  },
  {
    title: "Software Engineer (Freelance)",
    location: "Pixel38 Worldwide",
    description:
      "Freelancing in and for different projects.",
    icon: React.createElement(FaReact),
    date: "Dec 2025 - Present",
  },
  {
    title: "Full-stack Developer",
    location: "Pixel38 - Remote / Lebanon",
    description:
      "Working on multiple client and internal projects. Contributing to both front-end and back-end development, collaborating with cross-functional teams to deliver scalable and efficient web applications.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Dec 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Sha8elni",
    description:
      "A Laravel and React Native platform connecting job seekers with opportunities. Launching March 1st on iOS and Android.",
    tags: ["Laravel", "React Native", "Job Platform", "Mobile App"],
    imageUrl: "https://i.ibb.co/LhF2wMm/ecommerce.png", // Using placeholder as no new image provided
    githubrepo: "",
    demo: "https://sha8elni.com/en/",
  },
  {
    title: "Mourad Valled",
    description:
      "Informative website built with Laravel. Showcases services and information for the client.",
    tags: ["Laravel", "PHP", "Informative Website"],
    imageUrl: "https://i.ibb.co/gLL2tXVq/Screenshot-2026-01-30-at-11-12-34.png", // Using placeholder as no new image provided
    githubrepo: "",
    demo: "https://mouradvalley.com/",
  },
  {
    title: "Marblearth",
    description:
      "Developed a full-featured web platform using React and Node.js. Integrated extensive AWS services, including CloudFront CDN, for optimized performance and scalability.",
    tags: [
      "React.js",
      "Node.js",
      "AWS",
      "CloudFront",
      "CDN",
      "Performance Optimization",
    ],
    imageUrl: "https://i.ibb.co/Qjdx1qS9/Screenshot-2026-01-30-at-11-14-08.png",
    githubrepo: "",
    demo: "https://marblearth.com/",
  },
  {
    title: "HR Management System",
    description:
      "Created a web-based HR Management System to facilitate efficient employee-HR interactions, enabling employees to submit requests, HR to respond promptly, and facilitating secure document uploads.",
    tags: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Tailwind",
      "Cloudinary",
      "PDFLib",
      "Auth.js",
    ],
    imageUrl: "https://i.ibb.co/z43NWKz/hr.png",
    githubrepo: "",
    demo: "",
  },
  {
    title: "Transportation Management System",
    description:
      "Developed an efficient bus transportation system with secure payment integration. Admins manage stations, buses, and travel schedules. Users can securely book tickets online. Drivers can register to work as drivers.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "MySQL",
      "PHP",
      "Stripe",
      "Git",
    ],
    imageUrl: "https://i.ibb.co/jJdLWfF/transportation.png",
    githubrepo: "https://github.com/ausminatalli/Trasnportation",
    demo: "",
  },

  {
    title: "Student Registration Forms",
    description:
      "Served as backend developer for ESA, designing a web-based student registration form. Supported 12 different majors, each requiring specialized data entry formats. Established and managed the corresponding database.",
    tags: ["Next.js", "MySQL2", "Cloudinary", "Tailwind", "Database Design"],
    imageUrl: "https://i.ibb.co/z43NWKz/hr.png",
    githubrepo: "",
    demo: "https://onlineapplication.esa.edu.lb/",
  },
  {
    title: "BroadStark Company Website",
    description:
      "Created a small business website for a friend using modern web technologies. Features responsive design and contact functionality.",
    tags: ["Next.js", "Tailwind", "EmailJS", "Responsive Design"],
    imageUrl: "https://i.ibb.co/d427tf32/Screenshot-2026-01-30-at-11-09-03.png",
    githubrepo: "",
    demo: "https://broadstark.com/",
  },
  {
    title: "Help More Website",
    description:
      "Developed a charity website using Laravel framework. Features donation tracking, volunteer management, and content management system.",
    tags: ["Laravel", "PHP", "MySQL", "Charity Platform"],
    imageUrl: "https://i.ibb.co/LdcvHJHN/helpmore.png",
    githubrepo: "",
    demo: "https://www.helpmore.co.uk/",
  },
];

export const skillsData = [
  { name: "HTML", imageUrl: html },
  { name: "CSS", imageUrl: css },
  { name: "JavaScript", imageUrl: javascript },
  { name: "TypeScript", imageUrl: typescript },
  { name: "PHP", imageUrl: php },
  { name: "Python", imageUrl: python },
  { name: "Java", imageUrl: java }, // Using JS icon as placeholder
  { name: "C#", imageUrl: dotnet }, // Using JS icon as placeholder
  { name: "React.js", imageUrl: react },
  { name: "Next.js", imageUrl: nextjs },
  { name: "Node.js", imageUrl: nodejs },
  { name: "Express.js", imageUrl: nodejs },
  { name: "Laravel", imageUrl: laravel },
  { name: "Spring Boot", imageUrl: springboot },
  { name: "Django", imageUrl: python },
  { name: "Flask", imageUrl: python },
  { name: ".NET Core", imageUrl: dotnet },
  { name: "Redux", imageUrl: react },
  { name: "Sequelize", imageUrl: nodejs },
  { name: "Prisma", imageUrl: prisma },
  { name: "WordPress", imageUrl: wordpress },
  { name: "MySQL", imageUrl: mysql },
  { name: "MongoDB", imageUrl: mongodb },
  { name: "PostgreSQL", imageUrl: postgresql },
  { name: "DynamoDB", imageUrl: dynamodb },
  { name: "Git", imageUrl: github },
  { name: "GitHub", imageUrl: github },
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
  { name: "Vercel", imageUrl: github },
] as const;
