import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <small className="text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Mohammad Yassine. All rights reserved.
        </small>

        <div className="flex items-center gap-6 text-xs text-text-muted">
          <a
            href="https://www.linkedin.com/in/mohammad-habib-yassine-6403aa242"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mohammadhabibyassine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:mohammadhabibyassine@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
