// "use client";

// import { motion } from "framer-motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import { slideInFromTop } from "@/lib/motion";
// import GlowCard from "../sub/GlowCard";
// import Image from "next/image";
// import { expCards } from "@/constants";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export const Experience = () => {
//   useGSAP(() => {
//     gsap.utils.toArray(".timeline-card").forEach((card) => {
//       gsap.from(card as Element, {
//         xPercent: -100,
//         opacity: 0,
//         transformOrigin: "left left",
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: card as Element,
//           start: "top 80%",
//         },
//       });
//     });

//     gsap.to(".timeline", {
//       transformOrigin: "bottom bottom",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".timeline",
//         start: "top center",
//         end: "70% center",
//         onUpdate: (self) => {
//           gsap.to(".timeline", {
//             scaleY: 1 - self.progress,
//           });
//         },
//       },
//     });

//     gsap.utils.toArray(".expText").forEach((text) => {
//       gsap.from(text as Element, {
//         opacity: 0,
//         xPercent: 0,
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: text as Element,
//           start: "top 60%",
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="w-full h-auto flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full px-4 sm:px-6 md:px-8 flex justify-center">
//         <motion.div
//           variants={slideInFromTop}
//           className=" border-[#7042f88b] opacity-90 w-full max-w-4xl p-4 sm:p-6 md:p-10 rounded-lg"
//         >
//           <div className="flex flex-col items-center gap-4">
//             <motion.div
//               variants={slideInFromTop}
//               className="flex flex-wrap justify-center gap-x-2 text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200"
//             >
//               <span className="whitespace-nowrap">My</span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
//                 Experience ,
//               </span>
//               <span className="whitespace-nowrap">That</span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
//                 Matters
//               </span>
//               {/* <SparklesIcon className="text-[#b49bff] h-10 w-10" /> */}
//               <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />

//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//       <div className="mt-20 w-full max-w-6xl space-y-16">
//         {expCards.map((card, index) => (
//           <div key={card.title} className="timeline-card flex flex-col md:flex-row gap-10">
//             {/* Left Card */}
//             <div className="md:w-1/3">
//               <GlowCard card={card} index={index}>
//                 <Image
//                   src={card.imgPath}
//                   alt="experience image"
//                   className="w-full object-contain rounded-md"
//                   width={500}
//                   height={300}
//                 />
//               </GlowCard>
//             </div>

//             {/* Right Content */}
//             <div className="md:w-2/3 flex gap-6 items-start relative z-10 expText">
//               <div className="relative flex flex-col items-center">
//                 <div className="timeline bg-[#7042f8] w-1 h-full rounded-full origin-bottom transition-transform" />
//                 <div className="gradient-line w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 absolute top-0" />
//               </div>

//               <div>
//                 <Image
//                   src={card.logoPath}
//                   alt="logo"
//                   className="h-10 mb-4"
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="text-xl sm:text-2xl font-semibold text-white">{card.title}</h3>
//                 <p className="my-2 text-gray-400">🗓️ {card.date}</p>
//                 <p className="italic text-sm text-[#839CB5]">Responsibilities</p>
//                 <ul className="list-disc ml-5 mt-3 text-white space-y-2">
//                   {card.responsibilities.map((item, idx) => (
//                     <li key={idx} className="text-sm sm:text-base">{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparklesIcon } from "@heroicons/react/24/solid";

import { expCards } from "@/constants"; // Update if path differs
import GlowCard from "@/components/sub/GlowCard"; // Update if path differs
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card as Element, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card as Element,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text as Element, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text as Element,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full h-auto px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center py-20"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200 flex flex-wrap justify-center gap-x-2">
          <span className="whitespace-nowrap">My</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">Experience,</span>
          <span className="whitespace-nowrap">That</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap"> Matters</span>
          <SparklesIcon className="hidden md:inline text-[#b49bff] h-10 w-10" />
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl space-y-16">
        {expCards.map((card, index) => (
          <div key={card.title} className="timeline-card flex flex-col md:flex-row gap-10">
            {/* Left Card */}
            <div className="md:w-1/6">
        
            </div>

            {/* Right Content */}
            <div className="md:w-2/3 flex gap-6 items-start relative z-10 expText">
              <div className="relative flex flex-col items-center">
                <div className="timeline bg-[#7042f8] w-1 h-full rounded-full origin-bottom transition-transform" />
                <div className="gradient-line w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 absolute top-0" />
              </div>

              <div>
                <Image
                  src={card.logoPath}
                  alt="logo"
                  className="h-10 mb-4"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{card.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 my-2"> {card.company_name}</p>
                <p className="my-2 text-gray-400"> {card.date}</p>
                {/* <p className="italic text-sm text-[#839CB5]">Responsibilities</p> */}
                <ul className="list-disc ml-5 mt-3 text-white space-y-2">
                  {card.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-sm sm:text-base">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

