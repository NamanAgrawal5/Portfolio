"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function WorkExperience({}: Props) {
  const experiencelist = [
    {
      id: 1,
      title: "Student",
      company: "KIET Group of Institutions",
      companyLogo:
        "https://www.kindpng.com/picc/m/464-4645124_kiet-group-of-institutions-logo-hd-png-download.png",
      skills: [
        "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
        "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
      ],
      work: "2021-Present",
      summary: ["UnderGrad in CSE(AIML)", "Learning Basic and advance computing tools and topics", "Currently in Second Year","First Year SGPA : 8.5"],
    },
    {
      id: 2,
      title: "Member",
      company: "DSDL",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQEXAoszu0wlGw/company-logo_200_200/0/1638176187574?e=1694044800&v=beta&t=4tOcfMRCvZ1_XN6F32dZY-tv6M1ohxdxCNI-5Srb4vM",
      skills: [
        "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
        "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
      ],
      work: "2021-Present",
      summary: ["Joined in first year", "Participated in college events for 2 years for the club", "Learned Data Science and deep learning",""],
    },
    {
      id: 3,
      title: "Co-Founder",
      company: "DevUp",
      companyLogo:
        "https://media.licdn.com/dms/image/D4D0BAQHjQ0sJlH81BQ/company-logo_200_200/0/1667210987799?e=1694044800&v=beta&t=sciZ1tn1qeoFib4laLoRKB6R5YOB4uISddWxi9riXHU",
      skills: [
        "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
        "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
      ],
      work: "2021-Present",
      summary: ["Co-founder of the club and founding member.", "CP Co-ordinator", "Tutored Students about competitive programming"],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-leftft md:flex-row max-w-full px-10 justify-evenly mx-auto  items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 test-2xl">
        Experience
      </h3>

      <div className="absolute top-24 w-full flex space-x-5 overflow-x-scroll p-10  snap-x snap-mandatory scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard {...experiencelist[0]} />
        <ExperienceCard {...experiencelist[1]} />
        <ExperienceCard {...experiencelist[2]} />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
