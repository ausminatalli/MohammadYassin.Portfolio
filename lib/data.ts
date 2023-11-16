import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Graduated University",
    location: "Beirut, Lebanon",
    description:
      "I graduated after 4 years of studying. I worked as a freelance for quite sometime..",
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
    imageUrl: "https://i.ibb.co/LhF2wMm/ecommerce.png",
    githubrepo: "https://github.com/ausminatalli/FootVibe",
    demo: "https://foot-vibe.vercel.app/",
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
    imageUrl: "https://i.ibb.co/jJdLWfF/transportation.png",
    githubrepo: "https://github.com/ausminatalli/Trasnportation",
    demo: "",
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
    imageUrl: "https://i.ibb.co/z43NWKz/hr.png",
    githubrepo: "https://github.com/ausminatalli/esa_hr_system",
    demo: "",
  },
];

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "PHP",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "MySQL",
//   "MongoDB",
//   "Postman",
//   "Cloudinary",
//   "PDFLib",
//   "Stripe",
//   "Python",
//   "Sequlize(ORM)",
// ] as const;

export const skillsData = [
  { name: "HTML", imageUrl: html },
  { name: "CSS", imageUrl: css },
  {
    name: "JavaScript",
    imageUrl: javascript,
  },
  { name: "PHP", imageUrl: php },
  {
    name: "TypeScript",
    imageUrl: typescript,
  },
  { name: "Reactjs", imageUrl: react },
  { name: "Nextjs", imageUrl: nextjs },
  { name: "Nodejs", imageUrl: nodejs },
  { name: "Aws lambda", imageUrl: aws },
  { name: "Strip", imageUrl: strip },
  { name: "Github", imageUrl: github },
  { name: "Prisma", imageUrl: prisma },
  { name: "Python", imageUrl: python },
  { name: "Laravel", imageUrl: laravel },
  { name: "WordPress", imageUrl: wordpress },
  { name: "MySql", imageUrl: mysql },
  { name: "MongoDB", imageUrl: mongodb },
  { name: "DynamoDB", imageUrl: dynamodb },
  { name: "Postgres", imageUrl: postgresql },
  { name: "Cloudinary", imageUrl: cloudinary },
  { name: "Sass", imageUrl: sass },
  { name: "Tailwind", imageUrl: tailwind },
  { name: "Bootstrap", imageUrl: bootstrap },
  { name: "Postman", imageUrl: postman },
] as const;
