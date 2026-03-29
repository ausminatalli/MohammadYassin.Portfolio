"use client";

import React, { useState, useEffect, useRef } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsSun, BsMoon } from "react-icons/bs";
import gsap from "gsap";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { clipPath: "circle(0% at calc(100% - 40px) 32px)" },
        {
          clipPath: "circle(150% at calc(100% - 40px) 32px)",
          duration: 0.6,
          ease: "power3.inOut",
        }
      );
      gsap.fromTo(
        ".mobile-link",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, delay: 0.3, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileMenuRef.current, {
        clipPath: "circle(0% at calc(100% - 40px) 32px)",
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] h-16">
      {/* Background */}
      <div
        className={clsx(
          "absolute inset-0 transition-all duration-500",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-[20px]"
            : "bg-transparent"
        )}
      />

      {/* Nav content */}
      <nav className="relative h-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo monogram */}
        <Link
          href="#home"
          className="flex items-center gap-0 group"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            {/* Outer border */}
            <rect
              x="1"
              y="1"
              width="42"
              height="42"
              rx="6"
              stroke="var(--accent)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* M */}
            <text
              x="7"
              y="30"
              fontFamily="var(--font-display)"
              fontWeight="700"
              fontSize="20"
              fill="var(--text-primary)"
              letterSpacing="-1"
            >
              M
            </text>
            {/* Y */}
            <text
              x="22"
              y="30"
              fontFamily="var(--font-display)"
              fontWeight="700"
              fontSize="20"
              fill="var(--accent)"
              letterSpacing="-1"
            >
              Y
            </text>
            {/* Accent dot */}
            <circle cx="38" cy="8" r="2.5" fill="var(--accent)" />
          </svg>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className={clsx("nav-link text-sm font-body tracking-wide", {
                  "text-accent": activeSection === link.name,
                  "text-text-muted": activeSection !== link.name,
                })}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>{link.name}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle — desktop only */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex w-9 h-9 items-center justify-center rounded-full border border-[var(--border-light)] hover:border-accent text-text-muted hover:text-accent transition-all"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <BsSun className="text-sm" />
          ) : (
            <BsMoon className="text-sm" />
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-[1001] w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "w-6 h-[1.5px] bg-text-primary transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-[4.5px]"
            )}
          />
          <span
            className={clsx(
              "w-6 h-[1.5px] bg-text-primary transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-[4.5px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-bg-primary z-[1000] flex flex-col items-center justify-center md:hidden"
        style={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className={clsx(
                  "mobile-link block text-3xl font-display font-bold tracking-tight",
                  {
                    "text-accent": activeSection === link.name,
                    "text-text-primary": activeSection !== link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMobileOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

          {/* Theme toggle — mobile */}
          <button
            onClick={toggleTheme}
            className="mt-10 w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border-light)] text-text-muted hover:text-accent hover:border-accent transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <BsSun className="text-lg" />
            ) : (
              <BsMoon className="text-lg" />
            )}
          </button>
      </div>
    </header>
  );
}
