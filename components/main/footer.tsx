import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
<>
  {/* Glow divider */}
  <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 blur-lg gap-10 px-20" />

  {/* Blurred dark footer */}
  <div className="w-full backdrop-blur-md text-gray-300 border-t border-[#2e2e48] bg-opacity-60 ">
    <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

      {/* Left text */}
      <div className="text-sm text-center md:text-left tracking-wide">
        &copy; Kalpit {new Date().getFullYear()} Inc. All rights reserved.
      </div>

      {/* Right text */}
      <div className="text-sm text-center md:text-right tracking-wide">
        Built with <span className="text-pink-400 font-semibold">❤️</span> using
        <span className="text-indigo-400 font-semibold"> React,</span>
        <span className="text-indigo-400 font-semibold"> Next.js</span> &
        <span className="text-indigo-400 font-semibold"> Tailwind</span>
      </div>

    </div>
  </div>
</>





// {/* Glow divider above footer */}
// <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 blur-sm"></div>

// {/* Blurred glass-effect footer */}
// <div className="w-full bg-gradient-to-r from-[#0a0a23] via-[#0f0f3c] to-[#0a0a23] text-gray-300 border-t border-[#2e2e48] mt-0 backdrop-blur-md bg-opacity-70">
//   <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

//     {/* Left text */}
//     <div className="text-sm text-center md:text-left tracking-wide">
//       &copy; Kalpit P. {new Date().getFullYear()} Inc. All rights reserved.
//     </div>

//     {/* Right text */}
//     <div className="text-sm text-center md:text-right tracking-wide">
//       Built with <span className="text-pink-400 font-semibold">❤️</span> using
//       <span className="text-purple-400 font-semibold"> React, Next.js</span> &
//       <span className="text-cyan-400 font-semibold"> Tailwind</span>
//     </div>

//   </div>
// </div>


  );
};
