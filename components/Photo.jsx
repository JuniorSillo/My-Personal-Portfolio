"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
      >
        {/* Image Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src="/photo.png"
            priority
            quality={100}
            fill
            alt="Moeketsi Junior Sillo"
            className="rounded-full object-cover"
          />
        </motion.div>

        {/* Animated SVG Circle */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ffb299"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "15 120 25 25", rotate: 0 }}
            animate={{
              strokeDasharray: ["15 120 25 25", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
