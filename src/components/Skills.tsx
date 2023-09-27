"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h0screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 test-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 test-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
      <Skill directionLeft={true} image={"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"} />
        <Skill directionLeft={true} image={"https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png"}/>
        <Skill directionLeft={true} image={"https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"}/>
        <Skill directionLeft={true} image={"https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"}/>
        <Skill directionLeft={true} image={"https://codelabs.developers.google.com/static/codelabs/tensorflowjs-convert-python-savedmodel/img/1aee0ede85885520.png"}/>
        <Skill directionLeft={true} image={"https://pytorch.org/tutorials/_static/img/thumbnails/cropped/profiler.png"}/>
        <Skill directionLeft={true} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"}/>
        <Skill directionLeft={true} image={"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"}/>
        <Skill directionLeft={false} image={"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"}/>
        <Skill directionLeft={false} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"}/>
        <Skill directionLeft={false} image={"https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"}/>
        <Skill directionLeft={false} image={"https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-devops.png"}/>
      </div>
    </motion.div>
  );
}

export default Skills;
