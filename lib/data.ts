import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdDataUsage } from "react-icons/md";

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
      "Led end-to-end architecture and delivery of 6+ full-stack web and mobile applications for startup clients, including Sha8elni, MeaCash, Yabalesh, Mourad Valley, and Mido Delivery. Owned database schema, API contracts, deployment topology, and service boundaries. Built and deployed RESTful and GraphQL APIs on Hetzner, DigitalOcean, and AWS (S3, CloudFront) with Docker-based environments and CI/CD via GitHub Actions. Engineered AI-powered automation workflows with n8n, integrating LLM APIs (OpenAI, Anthropic) and document processing pipelines for automated data extraction and cloud migrations.",
    icon: React.createElement(FaReact),
    date: "Nov 2025 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Pixel38 — On site / Lebanon",
    description:
      "Built and maintained 5+ client-facing web applications using React.js, Next.js, TypeScript, Node.js/Express.js, and Laravel, serving hundreds of active users. Designed relational and non-relational database schemas with MySQL, PostgreSQL, and MongoDB using Sequelize and Prisma ORMs; query indexing reduced latency by around 35%. Implemented Auth.js/JWT authentication, RBAC, document upload pipelines, REST and GraphQL APIs, Swagger/OpenAPI documentation, and automated testing with Postman, Newman, Jest, and Supertest.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Oct 2025",
  },
  {
    title: "IT & Full-Stack Developer",
    location: "ESA — Ecole Superieure des Affaires (Beirut, Lebanon)",
    description:
      "Sole developer of a multi-major student registration platform (Next.js, MySQL) supporting 12 academic programs and processing 500+ applicants with zero data integrity errors. Automated 4+ administrative workflows by building internal web tools, reducing manual processing time by an estimated 60%. Maintained Linux server infrastructure, networks, and hardware systems, achieving 99.9%+ uptime for academic operations.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Oct 2023",
  },
  {
    title: "Technical Support & Data Systems",
    location: "Sawa Li Lubnan — Lebanese National Elections",
    description:
      "Managed real-time technical support for a high-traffic national election portal, troubleshooting access and data submission issues for field operators during the 2022 Lebanese national elections. Verified and processed voter registration data across large datasets, maintaining 100% accuracy compliance throughout the electoral reporting cycle.",
    icon: React.createElement(MdDataUsage),
    date: "Jan 2022 - May 2022",
  },
  {
    title: "Web Developer — Freelance",
    location: "Self-Employed — Lebanon / Remote",
    description:
      "Designed and developed websites, landing pages, and full-stack web applications using Django and Flask for clients across various industries, managing the full product lifecycle from requirements to deployment. Built and customized e-commerce stores end-to-end from UI/UX design to backend integration, and collaborated directly with clients to deliver iterative solutions and ongoing maintenance.",
    icon: React.createElement(FaReact),
    date: "Aug 2020 - Aug 2022",
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
    title: "Full-Stack Developer Certification",
    location: "ESIEE-IT — Pontoise, Île-de-France, France",
    description:
      "Completed a Full-Stack Developer Certification focused on practical delivery, collaboration, and production-oriented engineering workflows.",
    icon: React.createElement(FaLaptopCode),
    date: "",
  },
  {
    title: "GMI Business Mentorship Program",
    location: "Global Mentorship Initiative — Bellevue, WA, USA (Remote)",
    description:
      "Completed the GMI Business Mentorship Program with a focus on professional growth, communication, and practical delivery habits.",
    icon: React.createElement(FaLaptopCode),
    date: "",
  },
  {
    title: "Full-Stack Developer Program",
    location: "ESA Coding Lab — Beirut, Lebanon",
    description:
      "Completed the ESA Coding Lab Full-Stack Developer Program with emphasis on modern web development fundamentals and deployment workflows.",
    icon: React.createElement(FaLaptopCode),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Sha8elni",
    description:
      "Built a two-sided Lebanese trades marketplace connecting clients with skilled tradespeople across multiple specializations. Clients post work requests, tradespeople submit proposals, and the platform handles profile, listing, and application management. Implemented real-time job alerts via WebSockets and integrated Whish Money payment flows for premium subscription upgrades. Delivered cross-platform iOS and Android apps with a Laravel REST API backend.",
    tags: ["Live", "Laravel", "React Native", "WebSockets"],
    imageUrl: "/sha8elni.png",
    githubrepo: "",
    demo: "https://sha8elni.com/en/",
  },
  {
    title: "MeaCash",
    description:
      "Built the full Vue.js frontend and Laravel backend for a digital wallet and payments platform with real-time transaction flows, live balance updates, optimistic UI patterns, retry logic, audit logging, and a WebSocket-powered transaction feed.",
    tags: ["Live", "Vue.js", "Laravel", "PostgreSQL"],
    imageUrl: "/meacash.png",
    githubrepo: "",
    demo: "",
  },
  {
    title: "Yabalesh",
    description:
      "Designed and built a bilingual Arabic/English digital products marketplace for subscriptions, gift cards, and game top-ups across 10+ categories. Implemented Supabase-backed catalog management with image storage, category filtering, and WhatsApp-integrated order flows with Whish Money payment processing.",
    tags: ["Live", "Next.js", "Supabase", "TypeScript"],
    imageUrl: "/yabalesh.png",
    githubrepo: "",
    demo: "",
  },
  {
    title: "Mourad Valley",
    description:
      "Designed and built a Laravel-based content platform with a custom CMS and content pipeline, including structured content modeling, admin-controlled publishing workflows, and dynamic routing for non-technical editors.",
    tags: ["Live", "Laravel", "PostgreSQL", "Supabase"],
    imageUrl: "/mouradvalley.png",
    githubrepo: "",
    demo: "https://mouradvalley.com/",
  },
  {
    title: "Mido Delivery",
    description:
      "Built the marketing and service website for Beirut's on-demand courier platform, showing 2,000+ completed deliveries, a 30-minute average fulfillment time, and a 4.9/5 customer rating. The bilingual Arabic/English UI covers service tiers, pricing starting at $3, coverage zones, and a WhatsApp-integrated order flow for direct conversions.",
    tags: ["Live", "Next.js", "Tailwind CSS", "WhatsApp"],
    imageUrl: "/midodelivery.png",
    githubrepo: "",
    demo: "https://midodelivery.com/",
  },
] as const;

export const skillsData = [
  { name: "JavaScript (ES6+)" },
  { name: "TypeScript" },
  { name: "PHP" },
  { name: "Python" },
  { name: "Java" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Vue.js" },
  { name: "Blade" },
  { name: "Tailwind CSS" },
  { name: "Shadcn/ui" },
  { name: "React Native" },
  { name: "Expo" },
  { name: "FCM Push Notifications" },
  { name: "Node.js" },
  { name: "Laravel" },
  { name: "Express.js" },
  { name: "Fastify" },
  { name: "Django" },
  { name: "Flask" },
  { name: "REST API design" },
  { name: "GraphQL" },
  { name: "WebSockets" },
  { name: "JWT" },
  { name: "RBAC" },
  { name: "n8n workflow automation" },
  { name: "LLM API integration" },
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Supabase" },
  { name: "Redis" },
  { name: "Prisma" },
  { name: "Sequelize" },
  { name: "AWS" },
  { name: "AWS S3" },
  { name: "AWS CloudFront" },
  { name: "Cloudflare R2" },
  { name: "Docker" },
  { name: "GitHub Actions" },
  { name: "CI/CD pipelines" },
  { name: "Cloudflare CDN" },
  { name: "Cloudflare DNS" },
  { name: "Hetzner" },
  { name: "DigitalOcean" },
  { name: "Linux server administration" },
  { name: "Git" },
  { name: "Swagger/OpenAPI" },
  { name: "Jest" },
  { name: "Supertest" },
  { name: "Postman" },
  { name: "Agile/Scrum" },
  { name: "TDD" },
  { name: "PII data handling" },
] as const;
