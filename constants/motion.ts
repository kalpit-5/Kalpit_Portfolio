import { Variants } from "framer-motion";

// `textVariant` for vertical text reveal with spring
export const textVariant = (delay: number): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

// `fadeIn` for directional fade-in with x/y control
export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween",
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// `zoomIn` for scale-based entrance animation
export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween",
  delay: number,
  duration: number
): Variants => {
  let x = 0;
  let y = 0;

  if (direction === "left") x = -100;
  else if (direction === "right") x = 100;
  else if (direction === "up") y = 100;
  else if (direction === "down") y = -100;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideInFromTop = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
      when: "beforeChildren", // important
      staggerChildren: 0.3,   // also important
    },
  },
};




// `staggerContainer` to stagger child animations
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
