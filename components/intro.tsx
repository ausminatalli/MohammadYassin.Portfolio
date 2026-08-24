"use client";

import Image from "next/image";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaAws, FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const technologies = [
  { name: "React", Icon: FaReact, className: "tech-react" },
  { name: "Docker", Icon: FaDocker, className: "tech-docker" },
  { name: "AWS", Icon: FaAws, className: "tech-aws-top" },
  { name: "Python", Icon: FaPython, className: "tech-python-top" },
  { name: "Docker", Icon: FaDocker, className: "tech-docker-left" },
  { name: "AWS", Icon: FaAws, className: "tech-aws-left" },
  { name: "Python", Icon: FaPython, className: "tech-python-left" },
  { name: "Java", Icon: FaJava, className: "tech-java" },
  { name: "Kubernetes", Icon: SiKubernetes, className: "tech-kubernetes" },
  { name: "Node.js", Icon: FaNodeJs, className: "tech-node" },
] as const;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="space-hero scroll-mt-0">
      <div className="cosmos-layer cosmos-nebula" aria-hidden="true" />
      <div className="cosmos-layer cosmos-stars stars-near" aria-hidden="true" />
      <div className="cosmos-layer cosmos-stars stars-far" aria-hidden="true" />

      <div className="technology-orbit" aria-label="Core technologies">
        {technologies.map(({ name, Icon, className }, index) => (
          <div key={`${name}-${index}`} className={`floating-tech ${className}`}>
            <Icon role="img" aria-label={name} />
          </div>
        ))}
      </div>

      <div className="hero-copy">
        <div className="hero-title-wrap">
          <h1 className="bubble-name" aria-label="Mohammad Yassine">
            <span>MOHAMMAD</span>
            <span>YASSINE</span>
          </h1>
          <div className="robot-aura" aria-hidden="true" />
          <div className="robot-perch" aria-hidden="true" />
          <div
            className="robot-stage"
            aria-label="Friendly robot sitting on the name"
          >
            <Image
              src="/design/robot-hero-trimmed.png"
              alt="Friendly copper robot waving while sitting on the name"
              width={817}
              height={1037}
              priority
              sizes="(max-width: 600px) 39vw, (max-width: 900px) 28vw, 22vw"
              className="robot-figure"
            />
          </div>
        </div>
        <p className="bubble-role">Full-Stack Software Engineer</p>
        <div className="hero-actions">
          <Link
            href="#projects"
            className="candy-button candy-button-green"
            onClick={() => {
              setActiveSection("Projects");
              setTimeOfLastClick(Date.now());
            }}
          >
            <span>View Work</span>
          </Link>
          <a
            href="/MohammadYassineCV.pdf"
            download="Mohammad-Yassine-CV.pdf"
            aria-label="Download Mohammad Yassine's CV as a PDF"
            className="candy-button candy-button-purple"
          >
            <span>Download CV</span>
            <HiDownload aria-hidden="true" />
          </a>
        </div>
      </div>

    </section>
  );
}
