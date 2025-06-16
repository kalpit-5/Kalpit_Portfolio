"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "@/components/sub/Earth";
import { slideIn } from "@/constants/motion";
import { styles } from "@/constants/styles";
import SectionWrapper from "@/components/sub/SectionWrapper";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromTop,
} from "@/lib/motion";
import toast from "react-hot-toast";

// hooks/useWindowSize.ts

function useWindowSize() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}



export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic field validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Oops! Looks like a few fields are still empty 😕");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address 😕");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Kalpit",
          from_email: form.email,
          to_email: "kalpitparmar55@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setLoading(false);
        toast.success("Thanks! I'll reach out to you shortly ☺️", {
          duration: 4000, 
        });;
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error("Hmmm... something’s off. Mind trying again? ☺️", {
          duration: 2000, 
        });;
      });
  };


  const width = useWindowSize();

  return (
    <section className="pb-10">
      <div id="contact" className="py-10 "></div>
      <div className="w-full flex flex-col items-center justify-center px-4">
        {/* Welcome Message Section */}
        <div className="w-full px-4 sm:px-6 md:px-6 overflow-x-hidden box-border flex justify-center">

          <motion.div
            variants={slideInFromTop}
            // initial="hidden"
            animate="show"
            className="Welcome-box border border-[#7042f88b] opacity-90 w-full max-w-4xl p-4 sm:p-6 md:p-10 box-border rounded-lg"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
            <div className="relative w-full">
              <motion.div
                variants={{
                  // hidden: { opacity: 0, y: -20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex flex-wrap justify-center gap-x-2 text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200"
              >
                <span className="whitespace-nowrap">Get In Touch </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap">
                  , I’d Love to Hear From You.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div key={width} className="xl:mt-8 flex xl:flex-row flex-col-reverse gap-6 overflow-hidden w-full max-w-5xl mt-6">

          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="flex-[0.75] bg-black-100 p-4 pt-0 pb-4 rounded-xl shadow-md shadow-[#915EFF]/20"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-6 bg-[#15121f] p-6 rounded-xl shadow-xl shadow-[#915EFF]/10 backdrop-blur-md border border-[#2e225a]"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-white font-semibold text-base">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="bg-[#1f1d2b] py-2 px-4 rounded-md text-white text-sm placeholder:text-gray-400 outline-none border border-[#915EFF]/20 focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF] transition duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white font-semibold text-base">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="bg-[#1f1d2b] py-2 px-4 rounded-md text-white text-sm placeholder:text-gray-400 outline-none border border-[#915EFF]/20 focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF] transition duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white font-semibold text-base">Your Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="bg-[#1f1d2b] py-2 px-4 rounded-md text-white text-sm placeholder:text-gray-400 outline-none border border-[#915EFF]/20 focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF] transition duration-200"
                />
              </div>

              {/* <button
                type="submit"
                className="bg-gradient-to-r from-[#915EFF] to-[#5F39F7] py-2 px-6 rounded-md text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 w-fit self-center sm:self-start"
              >
                {loading ? "Sending..." : "Send Message"}
              </button> */}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-[#915EFF] to-[#5F39F7] py-2 px-6 rounded-md text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 w-fit self-center sm:self-start disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="xl:flex-1 xl:h-auto md:h-[400px] h-[300px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>

      </div>
    </section>

  )
};

export default Contact;