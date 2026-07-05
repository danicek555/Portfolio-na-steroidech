"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Gradient progress bar fixed at the top of the viewport that fills
 * as the user scrolls through the page.
 */
const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
      aria-hidden="true"
    />
  );
};

export default ScrollProgressBar;
