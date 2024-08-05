import { Variants } from "framer-motion";
export const professionalContainerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const professionalElementVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

export const professionalImageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const professionalButtonVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 2px 4px rgba(0, 119, 181, 0.3)",
    transition: {
      duration: 0.2,
    },
  },
  tap: { scale: 0.98 },
};

export const professionalTextVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
