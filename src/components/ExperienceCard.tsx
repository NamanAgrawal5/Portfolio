"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  id: number,
  title: string,
  company: string,
  companyLogo: string,
  skills: string[],
  work: string,
  summary: string[],
};
function ExperienceCard({id,title,company,companyLogo,skills,work,summary}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
      initial={{
        y: -100,
        opacity : 0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity:1 , y: 0}}
      viewport={{once: true }}
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      src={companyLogo} alt="" />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2 mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
            <Image
            className="h-10 w-10 rounded-full" src={skills[0]} alt="" />
            <Image
            className="h-10 w-10 rounded-full" src={skills[1]} alt="" />
            <Image
            className="h-10 w-10 rounded-full" src={skills[0]} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">{work}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            {
              summary.map((item)=><li key={id}>{item}</li>)
            }
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
