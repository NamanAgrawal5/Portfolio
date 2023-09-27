"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";


type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, My Name Is Naman Agrawal",
      "Guy-who-loves-Anime.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
      className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-1.jpg" alt="" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
      <h1 className="text-3xl lg:text-4xl font-semibold scroll-px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className="pt-5">
        <a href="#about">
        <button className="herobutton">About</button>
        </a>
        <a href="#experience">
        <button className="herobutton">Experience</button>
        </a>
        <a href="#skills">
        <button className="herobutton">Skills</button>
        </a>
        <a href="#projects">
        <button className="herobutton">Projects</button>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Hero;
