import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [{
    id: 1,
    Name: "Netflix-clone",
    link: "https://github.com/NamanAgrawal5/Neflix-Clone",
    desc: "Build a Netflix clone that completely mimics the UI of Netflix and has its own Admin panel to manage TV shows and Movies, Admin can add TV shows and movies with ease. It was build using ReactJS MongoDB NOdeJS ExpressJS and firebaseJS",
    image: "https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/c144749aa0df745e43367744af149f66/Android_Collage_1920x1080__UCAN_En.jpg",
  },
  {
    id: 2,
    Name: "Toxic comment recognition",
    link: "https://github.com/NamanAgrawal5/Toxic-Comment-Analyser",
    desc: "Using Natural language processing , we determine whether a comment was toxic or not with various criteria such as level of toxicity, racially motivated, or a mean comment",
    image: "https://e1.pxfuel.com/desktop-wallpaper/593/115/desktop-wallpaper-toxic-green-symbol-graphics-logo-toxic-logo.jpg",
  },
  {
    id: 3,
    Name: "Eventogram",
    link: "https://github.com/NamanAgrawal5/Eventogram",
    desc: "Built a website to host events like Hackathons and Meet-ups with an attached chat application with each event which provided an overall fulfilling platform for hosting events.TechStack Build on was ReactJS NodeJs and GetStream.io",
    image: "https://img.freepik.com/premium-vector/logo-vector-minimalist-design-circle-spin-colorful-concept-minimalism-technology_790567-360.jpg",
  }
  ];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
                y:-300,
                opacity: 0,
            }}
            transition={{duration :1.2}}
            whileInView={{opacity:1 , y: 0}}
            viewport={{once:true}}
            className="w-96"
              src={project.image}
              alt=""
            ></motion.img>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                <span >
                  Case Study {project.id} of {projects.length} :
                </span>{" "}
                <a className="underline decoration-[#F7AB0A]/50" href={project.link}>{project.Name}</a>
              </h4>
              <p className="text-lg text-center md:text-left">{project.desc}.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
