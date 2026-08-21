"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HiAcademicCap,
  HiBriefcase,
  HiHome,
  HiMail,
  HiSparkles,
  HiUser,
} from "react-icons/hi";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const navIcons = [HiHome, HiUser, HiBriefcase, HiSparkles, HiAcademicCap, HiMail];

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className={`game-header is-${activeSection.toLowerCase()}`}>
      <Link
        href="#home"
        className="game-brand"
        aria-label="Mohammad Yassine — home"
        onClick={() => {
          setActiveSection("Home");
          setTimeOfLastClick(Date.now());
        }}
      >
        <span className="game-monogram" aria-hidden="true">
          <Image
            src="/mohammad-yassine-logo.png"
            alt=""
            width={72}
            height={72}
            priority
            className="h-full w-full object-contain"
          />
        </span>
        {/* <span className="game-profile" aria-hidden="true">
          <span className="game-avatar">
            <Image
              src="/MOHAMMADYASSINE.png"
              alt=""
              width={58}
              height={58}
              priority
              unoptimized
            />
          </span>
          Mohammad Yassine
        </span> */}
      </Link>

      <nav className="game-nav" aria-label="Primary navigation">
        <span className="nav-cloud nav-cloud-left" aria-hidden="true" />
        <span className="nav-cloud nav-cloud-right" aria-hidden="true" />
        {links.map((link, index) => {
          const Icon = navIcons[index];
          const isActive = activeSection === link.name;
          return (
            <Link
              key={link.hash}
              href={link.hash}
              className={`game-nav-link ${isActive ? "is-active" : ""}`}
              aria-label={link.name}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              <Icon aria-hidden="true" />
              <span>{link.name}</span>
            </Link>
          );
        })}
        <span className="nav-gear nav-gear-one" aria-hidden="true">⚙</span>
        <span className="nav-gear nav-gear-two" aria-hidden="true">⚙</span>
      </nav>
    </header>
  );
}
