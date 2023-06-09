'use client';
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
            x:-500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}   
        transition={{
            duration: 1.2,
        }}   
      className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/NamanKun01"
          fgColor="gray"
          bgColor="transparent"
          />
        <SocialIcon
          url="https://www.linkedin.com/in/naman-agrawal-b49b26224/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/NamanAgrawal5"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.codechef.com/users/namankun00"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <a href="#contact">

      <motion.div
        initial={{
          x:500,
            opacity: 0,
            scale: 0.5,   
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-100">Get In Touch</p>
      </motion.div>
      </a>
    </header>
  );
}

export default Header;
