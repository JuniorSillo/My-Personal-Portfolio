"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/ui/WorkSlideBtns";

const projects = [
  {
  "num": "01",
  "category": "Full-Stack",
  "title": "AI-Powered Resume Builder",
  "description": "A dynamic web application for creating professional resumes with AI-driven suggestions and real-time previews. Features include responsive design, form validation, PDF export, and a modern user interface.",
  "stack": [
    { "name": "Next.js" },
    { "name": "React" },
    { "name": "TypeScript" },
    { "name": "TailwindCSS" },
    { "name": "jsPDF" }
  ],
  "image": "/thumb5.png",
  "live": "https://ai-resume-builder-rosy-rho.vercel.app/",
  "github": "https://github.com/JuniorSillo/AI-Resume-Builder"
},
  {
    num: "02",
    category: "FullStack",
    title: "Food Delivery Website",
    description:
      "A full-stack food delivery application that allows users to browse menus, add items to their cart, and place orders. The project includes a modern, responsive UI designed with Tailwind CSS and integrates a backend for managing orders and data.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
      { name: "Vite" },
    ],
    image: "/thumb2.png",
    live: "https://hotel-website-4s1i.vercel.app/",
    github: "https://github.com/JuniorSillo/Food-Delivery",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Spotify Clone",
    description:
      "A frontend Spotify clone designed to replicate the user interface and experience of Spotify. Built using modern tools like React, Tailwind CSS, and Vite, it provides a smooth and visually appealing music browsing experience.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    image: "/thumb3.png",
    live: "https://spotify-clone-plum-pi.vercel.app/",
    github: "https://github.com/JuniorSillo/Spotify-clone",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Hotel Booking Website",
    description:
      "A responsive hotel booking website built using modern web technologies. The project includes a visually appealing design, interactive features, and user-friendly navigation.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/thumb1.png",
    live: "",
    github: "https://github.com/JuniorSillo/HOTEL_WEBSITE",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="relative">
                <div className="absolute inset-0 text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-2xl opacity-30">
                  {project.num}
                </div>
                <div className="relative text-8xl leading-none font-extrabold text-white tracking-tighter">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-500">
                    {project.num}
                  </span>
                </div>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/10">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover  w-full h-full"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
