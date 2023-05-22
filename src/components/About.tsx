'use client'
import React from 'react'
import {motion} from "framer-motion";
type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 test-2xl'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x:0,
          opacity: 1,
        }} 
        transition={{
          duration: 1.2,
        }}   
        viewport={{once:true}}  
      src='https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-1.jpg' className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'></motion.img>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold text-gray-400'>Here is a <span className='text-yellow-700 tracking-widest'>little</span> background</h4>
        <p className='text-inherit tracking-wide font-Mukta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati rem maxime, animi recusandae labore cumque? Fuga vel sequi ullam repellendus necessitatibus ducimus architecto modi fugiat numquam! Vitae, eius debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis ipsum consequuntur tempore quam aperiam doloremque quas necessitatibus et, accusamus accusantium itaque blanditiis neque reiciendis cupiditate voluptas, beatae ipsa officia?</p>
      </div>
    </motion.div>

  )
}

export default About