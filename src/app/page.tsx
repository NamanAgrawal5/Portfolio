"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-scroll">
      <head>
        <title>Naman's Portfolio</title>
      </head>
      <Header />
      <section id="hero" className="snap-start overflow-hidden">
        <Hero />
      </section>
      <section id="about" className="snap-center overflow-hidden">
        <About />
      </section>
      <section id="experience" className="snap-center overflow-hidden">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start overflow-hidden">
        <Skills />
      </section>
      <section id="projects" className="snap-start overflow-hidden">
        <Projects />
      </section>
      <section id="contact" className="snap-start overflow-hidden">
        <ContactMe />
      </section>
    </div>
  );
}
