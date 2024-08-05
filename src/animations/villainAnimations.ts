import { Variants } from "framer-motion";
import { keyframes, css } from "styled-components";

const creepingShadow = keyframes`
  0% { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 0 0 0); }
`;

const distort = keyframes`
  0% { transform: skew(0deg); }
  25% { transform: skew(3deg); }
  75% { transform: skew(-3deg); }
  100% { transform: skew(0deg); }
`;

export const villainShadowAnimation = css`
  animation: ${creepingShadow} 0.5s ease-out;
`;

export const villainDistortAnimation = css`
  animation: ${distort} 2s ease-in-out infinite;
`;

export const villainContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const villainElementVariants: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const villainImageVariants: Variants = {
  initial: { opacity: 0, scale: 1.2, rotate: 5 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const villainButtonVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    filter: "brightness(0.7)",
    boxShadow: "0 0 15px rgba(106, 13, 173, 0.8)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: { scale: 0.95 },
};

export const villainTextVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
