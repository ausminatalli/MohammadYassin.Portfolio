import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Mohammad Yassine. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this portfolio:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend. Deployed on Vercel.
      </p>
      <div className="mt-4 flex justify-center space-x-4 text-xs">
        <a
          href="https://www.linkedin.com/in/mohammad-habib-yassine-6403aa242"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <span>•</span>
        <a
          href="https://github.com/ausminatalli"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
        >
          GitHub
        </a>
        <span>•</span>
        <a
          href="mailto:mohammadhabibyassine@gmail.com"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
