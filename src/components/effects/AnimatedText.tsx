"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Delay (s) before the stagger starts. */
  delay?: number;
  /** Stagger between characters (s). */
  stagger?: number;
  /** Animate when scrolled into view instead of on mount. */
  whileInView?: boolean;
}

/**
 * Reveals a string character by character with a spring-y rise. Spaces are
 * preserved. Respects prefers-reduced-motion by rendering plain text.
 */
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  whileInView = false,
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 60, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 200, damping: 18 },
    },
  };

  const animationProps = whileInView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.5 } }
    : { animate: "visible" };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      {...animationProps}
      className={`inline-block ${className}`}
      style={{ perspective: 600 }}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
