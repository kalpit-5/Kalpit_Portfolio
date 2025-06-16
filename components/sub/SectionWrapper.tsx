"use client";

import { ComponentType } from "react";
import { motion } from "framer-motion";

import { styles } from "@/constants/styles";
import { staggerContainer } from "@/constants/motion";
// HOC accepts a component and an id name
const SectionWrapper = <T extends object>(
  Component: ComponentType<T>,
  idName: string
) => {
  // Return a functional component that accepts props of type T
  const HOC = (props: T) => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Pass props down to the wrapped component */}
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;

