"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MobileProjectBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"left" | "right" | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const total = projectsData.length;

  const flipTo = useCallback(
    (direction: "left" | "right") => {
      if (isFlipping) return;
      const nextPage =
        direction === "left"
          ? Math.min(currentPage + 1, total - 1)
          : Math.max(currentPage - 1, 0);
      if (nextPage === currentPage) return;

      setFlipDirection(direction);
      setIsFlipping(true);

      // Wait for the flip-out animation, then switch page and flip-in
      setTimeout(() => {
        setCurrentPage(nextPage);
        setFlipDirection(null);
        setTimeout(() => setIsFlipping(false), 50);
      }, 700);
    },
    [currentPage, isFlipping, total]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
      const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
      touchStartRef.current = null;

      // Only register horizontal swipes (not vertical scrolling)
      if (Math.abs(deltaX) < 50 || Math.abs(deltaY) > Math.abs(deltaX)) return;

      if (deltaX < 0) flipTo("left");
      else flipTo("right");
    },
    [flipTo]
  );

  const project = projectsData[currentPage];
  const linkUrl = project.demo || project.githubrepo;

  // Determine the animation class
  let pageClass = "book-page";
  if (flipDirection === "left") pageClass += " flip-out-left";
  else if (flipDirection === "right") pageClass += " flip-out-right";

  return (
    <div className="book-container px-4 pb-8">
      {/* Book viewport */}
      <div
        className="book-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Edge arrows */}
        {currentPage > 0 && (
          <button
            className="book-arrow book-arrow-left"
            onClick={() => flipTo("right")}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>
        )}
        {currentPage < total - 1 && (
          <button
            className="book-arrow book-arrow-right"
            onClick={() => flipTo("left")}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>
        )}

        {/* Page */}
        <div key={currentPage} className={pageClass}>
          {/* Page fold shadow */}
          <div className="book-page-shadow" />

          {/* Image */}
          <div className="book-page-image">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-start justify-end p-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_35%,rgba(0,0,0,0.3)_100%)]">
                <div className="mb-3 h-1 w-14 bg-[var(--accent)]/80" />
                <p className="text-mono text-text-muted text-[10px] uppercase tracking-[0.2em]">
                  Image coming soon
                </p>
              </div>
            )}
            <div className="book-page-image-overlay" />
          </div>

          {/* Content */}
          <div className="book-page-content">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-mono text-text-muted text-[10px]">
                [{String(currentPage + 1).padStart(2, "0")}]
              </span>
              <h3 className="font-display font-bold text-lg text-text-primary uppercase tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-body text-sm line-clamp-3 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.slice(0, 4).map((tag, i) => (
                <span key={i} className="tech-pill text-[9px]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-3 pt-3 border-t border-[var(--border)]">
              {project.githubrepo && (
                <a
                  href={project.githubrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-base" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
              {linkUrl && (
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-mono text-[10px] text-accent flex items-center gap-1.5"
                >
                  VIEW PROJECT
                  <FaExternalLinkAlt className="text-[8px]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="book-pagination">
        <div className="book-dots">
          {projectsData.map((_, i) => (
            <button
              key={i}
              className={`book-dot ${i === currentPage ? "active" : ""}`}
              onClick={() => {
                if (i === currentPage || isFlipping) return;
                const dir = i > currentPage ? "left" : "right";
                setFlipDirection(dir);
                setIsFlipping(true);
                setTimeout(() => {
                  setCurrentPage(i);
                  setFlipDirection(null);
                  setTimeout(() => setIsFlipping(false), 50);
                }, 700);
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-mono text-text-muted text-[10px] mt-2">
          {currentPage + 1} / {total}
        </span>
      </div>
    </div>
  );
}
