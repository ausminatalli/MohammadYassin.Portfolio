import Image from "next/image";
import { BsGearFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowUp, HiMail } from "react-icons/hi";
import { links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="workshop-footer">
      <div className="workshop-footer-grain" aria-hidden="true" />
      <div className="workshop-footer-ledge" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <BsGearFill
        className="workshop-footer-gear workshop-footer-gear-left"
        aria-hidden="true"
      />
      <BsGearFill
        className="workshop-footer-gear workshop-footer-gear-right"
        aria-hidden="true"
      />

      <div className="workshop-footer-console">
        <span className="workshop-footer-screw screw-one" aria-hidden="true" />
        <span className="workshop-footer-screw screw-two" aria-hidden="true" />
        <span className="workshop-footer-screw screw-three" aria-hidden="true" />
        <span className="workshop-footer-screw screw-four" aria-hidden="true" />

        <div className="workshop-footer-brand">
          <div className="workshop-footer-id">
            <div className="workshop-footer-logo">
              <Image
                src="/mohammad-yassine-logo.png"
                alt=""
                width={78}
                height={78}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="workshop-footer-label">WORKSHOP ID</p>
              <p className="workshop-footer-name">Mohammad Yassine</p>
              <p className="workshop-footer-role">Full-Stack Software Engineer</p>
            </div>
          </div>

          <p className="workshop-footer-tagline">
            Building thoughtful products, one carefully fitted piece at a time.
          </p>
          <div className="workshop-footer-status">
            <span aria-hidden="true" /> Available for new projects
          </div>
        </div>

        <div className="workshop-footer-controls">
          <p className="workshop-footer-panel-title">Quick Controls</p>
          <nav className="workshop-footer-nav" aria-label="Footer navigation">
            {links.map((link, index) => (
              <a href={link.hash} key={link.hash}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="workshop-footer-post">
          <div className="workshop-footer-post-sign">Post Office</div>
          <p>Have an idea on the workbench?</p>
          <a
            href="mailto:mohammadhabibyassine@gmail.com"
            className="workshop-footer-email"
          >
            <HiMail aria-hidden="true" />
            <span>Send an email</span>
          </a>

          <div className="workshop-footer-socials">
            <a
              href="https://github.com/mohammadhabibyassine"
              target="_blank"
              rel="noopener noreferrer"
              className="workshop-social workshop-social-github"
              aria-label="GitHub"
            >
              <BsGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-habib-yassine-6403aa242"
              target="_blank"
              rel="noopener noreferrer"
              className="workshop-social workshop-social-linkedin"
              aria-label="LinkedIn"
            >
              <BsLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="workshop-footer-base">
        <small>
          &copy; {new Date().getFullYear()} Mohammad Yassine. Crafted in Beirut.
        </small>
        <a href="#home" className="workshop-footer-top">
          Back to top <HiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
