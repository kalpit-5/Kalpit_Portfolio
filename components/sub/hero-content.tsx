"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { RESUME_LINK } from "@/constants";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 w-full z-[20] mt-40"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start -mt-1">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-[rgb(180,155,255)] mr-[10px] h-5 w-5" />
          <h1 className=" text-[#030014] md:text-[#b49bff] text-[13px] transition-colors duration-300">
            Software Developer
          </h1>
        </motion.div>





        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Redefining {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Digital Experience
            </span>{" "}
            Through Code.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I design and develop full stack web experiences that are fast, functional, and user-focused. Scroll down to see my latest work and skills. 🚀
        </motion.p>


        {/* HERE IS THE RESUME LOGIC CHANGE LINK HERE */}
        <motion.a
          variants={slideInFromLeft(1)}
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          My Resume 📃
        </motion.a>



      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center "
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
