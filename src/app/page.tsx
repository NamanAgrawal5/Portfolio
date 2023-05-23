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
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-end"><img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://spng.pngfind.com/pngs/s/56-561289_arrow-pointing-north-comments-hd-png-download.png" alt="" /></div>
        </footer>
      </a>
    </div>
  );
}
