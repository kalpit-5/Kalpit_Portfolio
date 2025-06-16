// "use client";

// import { SparklesIcon } from "@heroicons/react/24/solid";
// import { motion } from "framer-motion";

// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/lib/motion";

// export const SkillText = () => {
//   return (
//     <div className="w-full h-auto flex flex-col items-center justify-center">
//       <motion.div
//         variants={slideInFromTop}
//         className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
//       >
//         <div className="relative w-auto h-auto top-0 z-[20] py-10 px-10">
//           <motion.div
//             variants={slideInFromTop}
//             className="text-[40px] font-medium text-center text-gray-200"
//           >
//             Powering Projects with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//               Modern Web Stacks.
//             </span>{" "}

//           </motion.div>
//         </div>
//       </motion.div>

//       {/* <motion.div
//           variants={slideInFromLeft(0.5)}
//           className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
//           // className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
//         >
//           <span>
//             Powering Projects with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                      Modern Web Stacks.
//             </span>{" "}

//           </span>
//         </motion.div> */}

//       <motion.div
//         variants={slideInFromRight(0.5)}
//         className="cursive text-[30px] text-gray-200 mb-10 mt-[10px] text-center"
//       >
//         Ideas evolve. Code delivers.

//       </motion.div>

//     </div>
//   );
// };


"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
      <div className="w-full px-4 sm:px-6 md:px-8 overflow-x-hidden box-border flex justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] opacity-90 w-full max-w-4xl p-4 sm:p-6 md:p-10 box-border rounded-lg"
        >
         
         <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
          {/* Text block with wrapping */}
          <div className="relative w-full">

            <motion.div
              variants={slideInFromTop}
              className="flex flex-wrap justify-center gap-x-2 text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200"
            >

              <span className="whitespace-nowrap">Powering Projects with</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
                Modern Web Stacks.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className=" font-parisienne text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 mt-6 text-center max-w-2xl px-4"
      >
        Ideas evolve. Code delivers.
      </motion.div>

    </div>
  );
};

