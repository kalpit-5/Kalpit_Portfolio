"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const Projects = () => {
  return (
      <section
      id="projects"
      className="w-full h-auto px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center py-20"
    >
      <div className="flex flex-col items-center gap-4 text-center py-20">
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200 flex flex-wrap justify-center gap-x-2">
          <span className="whitespace-nowrap">A small selection of{" "}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap"> My Recent Projects.</span>{" "}
          {/* <span className="whitespace-nowrap">That</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap"> Matters</span> */}
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-10 px-10">
        {PROJECTS.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="w-full sm:w-[45%] lg:w-[30%]"
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              githublink={project.githublink}
              livelink={project.livelink}
              iconLists={project.iconLists}
            />
          </div>
        ))}
      </div>
      
    </section >
  );
};
