import { Variants } from 'framer-motion';

const sharedAnimations: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const textVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const buttonVariants: Variants = {
  initial: { scale: 0.9 },
  animate: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const heroAnimations = {
  container: {
    ...sharedAnimations,
    initial: { ...sharedAnimations.initial, scale: 0.8 },
    animate: { ...sharedAnimations.animate, scale: 1 },
    exit: { ...sharedAnimations.exit, scale: 1.2 },
  },
  title: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  },
  image: {
    initial: { rotate: -10, scale: 0.9 },
    animate: { rotate: 0, scale: 1 },
    hover: { scale: 1.05, rotate: 5 },
  },
  speechBubble: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    exit: { scale: 0, opacity: 0 },
  },
  summary: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
    exit: { opacity: 0, y: -30 },
  },
  text: textVariants,
  button: buttonVariants,
};

export const villainAnimations = {
  container: {
    ...sharedAnimations,
    initial: { ...sharedAnimations.initial, rotate: -5 },
    animate: { ...sharedAnimations.animate, rotate: 0 },
    exit: { ...sharedAnimations.exit, rotate: 5 },
  },
  title: {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  image: {
    initial: { filter: 'grayscale(100%)' },
    animate: { filter: 'grayscale(0%)' },
    hover: { scale: 1.05, filter: 'brightness(120%)' },
  },
  speechBubble: {
    initial: { opacity: 0, scale: 0, rotate: -45 },
    animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 10 } },
    exit: { opacity: 0, scale: 0, rotate: 45 },
  },
  summary: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.2 } },
    exit: { opacity: 0, x: 30 },
  },
  text: textVariants,
  button: buttonVariants,
};

export const professionalAnimations = {
  container: {
    ...sharedAnimations,
    initial: { ...sharedAnimations.initial, y: 50 },
    animate: { ...sharedAnimations.animate, y: 0 },
    exit: { ...sharedAnimations.exit, y: -50 },
  },
  title: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2 } },
    exit: { opacity: 0 },
  },
  image: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.02 },
  },
  summary: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.4 } },
    exit: { opacity: 0 },
  },
  text: textVariants,
  button: buttonVariants,
};
