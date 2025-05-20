"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description: `I am a software developer with a passion for creating
  user-friendly and visually appealing web applications. With a strong
  foundation in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, and
  Node.js, I specialize in building dynamic and responsive web
  interfaces that deliver exceptional user experiences. My expertise
  allows me to develop custom solutions that meet the unique needs of
  clients and businesses. I am committed to staying up-to-date with the
  latest industry trends and technologies to deliver innovative and
  effective solutions.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Moeketsi Junior Sillo",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+27) 71 799 9930 / (+27) 67 658 7645",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "sillo.99",
    },
    {
      fieldName: "Nationality",
      fieldValue: "South African",
    },
    {
      fieldName: "Email",
      fieldValue: "sillojunior8@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sotho, Xhosa, Zulu",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Although I don’t have professional experience yet, I’ve worked on projects and gained practical skills through education and personal initiatives.",
  items: [
    {
      company: "Personal Project",
      position: "Web Developer",
      period: "2024",
      details:
        "Built a responsive portfolio website using React and Tailwind CSS to showcase my skills and projects.",
    },
    {
      company: "Self-Learning",
      position: "Full-Stack Developer Trainee",
      period: "2021 - Present",
      details:
        "Completed online courses on full-stack development, including JavaScript, React, and Node.js, and built various applications to reinforce my learning.",
    },
  ],
};

const education = {
  icon: "/assets/resume/graduation-cap.svg",
  title: "My Education",
  description:
    "A combination of formal education and self-taught expertise fueled by passion and curiosity for technology.",
  items: [
    {
      institution: "ATTI Bloemfontein",
      degree: "Information Technology - (Systems Development)",
      period: "2024",
    },
    {
      institution: "YouTube",
      degree: "Web Development Fundamentals",
      period: "2020 - 2021",
      description:
        "Mastered the basics of HTML, CSS, and JavaScript. Explored frameworks like React and Next.js, and learned responsive design using Tailwind CSS.",
    },
    {
      institution: "Udemy & YouTube",
      degree: "Mobile App Development (React Native, Flutter, & iOS)",
      period: "2021 - 2023",
      description:
        "Learned to build cross-platform apps using React Native and Flutter. Expanded expertise into native iOS development with Swift and Xcode, focusing on Apple's Human Interface Guidelines and integrating APIs.",
    },
    {
      institution: "Scrimba",
      degree: "UI/UX Design Essentials",
      period: "2022 - 2023",
      description:
        "Learned principles of user-centric design, prototyping, and wireframing. Gained hands-on experience using tools like Figma and Adobe XD to create intuitive interfaces.",
    },
    {
      institution: "Coursera",
      degree: "SEO Optimization Techniques",
      period: "2023 - 2024",
      description:
        "Studied search engine optimization strategies, including on-page and off-page SEO, content optimization, and performance enhancement techniques.",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I bring 5 years of experience in delivering innovative digital solutions, combining technical expertise with creative design. My skill set spans web and mobile development, UI/UX design, SEO, and iOS development, supported by a strong foundation in systems development and continuous self-learning.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaTools, FaUser } from "react-icons/fa";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, efulle: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className="flex items-center gap-2 p-3 hover:bg-accent hover:text-white rounded-full"
            >
              <FaBriefcase /> Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center gap-2 p-3 hover:bg-accent hover:text-white rounded-full"
            >
              <FaGraduationCap /> Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="flex items-center gap-2 p-3 hover:bg-accent hover:text-white rounded-full"
            >
              <FaTools /> Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="flex items-center gap-2 p-3 hover:bg-accent hover:text-white rounded-full"
            >
              <FaUser /> About me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#d50f50] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg-items-start gap-1"
                        >
                          {/* Render the content for each item */}

                          <span className="text-accent">{item.period}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#d50f50] p-6 rounded-xl flex flex-col justify-between items-center lg:items-start gap-3"
                      >
                        {/* Render the content for each item */}
                        <span className="text-accent font-medium">
                          {item.period}
                        </span>
                        <h3 className="text-xl max-w-[260px] text-center lg:text-left font-bold">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={50}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#d50f50] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-6"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
