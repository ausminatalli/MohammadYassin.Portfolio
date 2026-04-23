"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[] | string[];
  imageUrl?: string;
  githubrepo: string;
  demo: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubrepo,
  demo,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / rect.width;
      const deltaY = (y - centerY) / rect.height;

      setTilt({
        x: deltaY * 12,
        y: deltaX * -12,
      });
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const linkUrl = demo || githubrepo;
  const hasImage = Boolean(imageUrl);

  const cardContent = (
    <div
      ref={cardRef}
      className="project-card"
      data-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="project-card-inner h-full"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovering
            ? "transform 0.1s ease-out"
            : "transform 0.5s ease-out",
        }}
      >
        {/* Glare */}
        <div
          className="glare"
          style={{
            background: isHovering
              ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.08), transparent 60%)`
              : "none",
            opacity: isHovering ? 1 : 0,
          }}
        />

        {/* Image */}
        <div className="card-image">
          {hasImage ? (
            <Image
              src={imageUrl as string}
              alt={`${title} screenshot`}
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 520px"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_35%,rgba(0,0,0,0.3)_100%)]">
              <div className="mb-3 h-1 w-16 bg-[var(--accent)]/80" />
              <p className="text-mono text-text-muted text-[10px] uppercase tracking-[0.2em]">
                Image coming soon
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="card-content">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-mono text-text-muted text-[10px]">
              [{String(index + 1).padStart(2, "0")}]
            </span>
            <h3 className="font-display font-bold text-xl text-text-primary uppercase tracking-tight">
              {title}
            </h3>
          </div>

          <p className="text-body text-sm line-clamp-2 mb-4 flex-shrink-0">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, i) => (
              <span key={i} className="tech-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 pt-3 border-t border-[var(--border)]">
            {/* Links */}
            <div className="flex items-center gap-3">
              {githubrepo && (
                <a
                  href={githubrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-base" />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>

            {/* Arrow */}
            <div className="ml-auto flex items-center gap-2 text-text-muted group-hover:text-accent transition-colors">
              <div className="w-8 h-[1px] bg-[rgba(255,255,255,0.1)] group-hover:w-12 transition-all" />
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="group flex-shrink-0"
      onClick={() => {
        if (linkUrl) window.open(linkUrl, "_blank", "noopener,noreferrer");
      }}
      style={{ cursor: linkUrl ? "pointer" : "default" }}
    >
      {cardContent}
    </div>
  );
}
