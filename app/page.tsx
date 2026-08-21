import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <div className="section-bridge bridge-home-about" aria-hidden="true" />
      <About />
      <div className="section-bridge bridge-about-projects" aria-hidden="true" />
      <Projects />
      <div className="section-bridge bridge-projects-skills" aria-hidden="true" />
      <Skills />
      <div className="section-bridge bridge-skills-experience" aria-hidden="true" />
      <Experience />
      <div className="section-bridge bridge-experience-contact" aria-hidden="true" />
      <Contact />
      <div className="section-bridge bridge-contact-footer" aria-hidden="true" />
      <Footer />
    </main>
  );
}
