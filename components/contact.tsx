"use client";

import React, { useEffect, useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".contact-word",
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Terminal block
      gsap.fromTo(
        ".terminal-line",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          delay: 0.3,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".terminal-block",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(node) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      id="contact"
      className="scroll-mt-16 relative min-h-screen flex items-center"
    >
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-32 w-full">
        {/* Section label */}
        <div className="mb-12">
          <span className="text-mono text-text-muted">05</span>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <div className="hero-word-mask overflow-hidden">
            <h2 className="contact-word heading-display heading-lg">
              LET&apos;S BUILD
            </h2>
          </div>
          <div className="hero-word-mask overflow-hidden">
            <h2 className="contact-word heading-display heading-lg text-accent">
              SOMETHING
            </h2>
          </div>
        </div>

        <p className="text-body text-lg max-w-[600px] mb-16">
          Open to freelance, full-time, and consulting opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Terminal + Social */}
          <div>
            {/* Terminal block */}
            <div className="terminal-block bg-bg-secondary border border-[var(--border)] rounded p-6 mb-12">
              <div className="terminal-line flex gap-4">
                <span className="text-text-muted">&gt;</span>
                <span className="key">location:</span>
                <span className="value">Beirut, Lebanon | Open to Remote</span>
              </div>
              <div className="terminal-line flex gap-4">
                <span className="text-text-muted">&gt;</span>
                <span className="key">email:</span>
                <span className="value">mohammadhabibyassine@gmail.com</span>
              </div>
              <div className="terminal-line flex gap-4">
                <span className="text-text-muted">&gt;</span>
                <span className="key">phone:</span>
                <span className="value">+961 81653405</span>
              </div>
              <div className="terminal-line flex gap-4">
                <span className="text-text-muted">&gt;</span>
                <span className="key">status:</span>
                <span className="value">available_for_work</span>
              </div>
              <div className="terminal-line flex gap-4">
                <span className="text-text-muted">&gt;</span>
                <span className="key">response:</span>
                <span className="value">
                  within_24h{" "}
                  <span className="inline-block w-2 h-4 bg-accent animate-blink-cursor ml-1" />
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-8 mb-12">
              <a
                href="https://github.com/mohammadhabibyassine"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BsGithub className="text-lg" />
                <span className="text-sm font-body">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-habib-yassine-6403aa242"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BsLinkedin className="text-lg" />
                <span className="text-sm font-body">LinkedIn</span>
              </a>
            </div>

            {/* CV Download CTA */}
            <a
              href="/MohammadYassineCV.pdf"
              download
              className="cta-wipe inline-flex items-center gap-3 px-10 py-5 font-display font-bold text-sm tracking-wide uppercase"
            >
              <span className="flex items-center gap-3">
                Download CV
                <HiDownload />
              </span>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 className="font-display font-bold text-xl text-text-primary mb-6">
              Send a message
            </h3>
            <form
              className="flex flex-col gap-4"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email sent successfully!");
              }}
            >
              <input
                className="contact-input"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <textarea
                className="contact-input h-48 resize-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <SubmitBtn />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
