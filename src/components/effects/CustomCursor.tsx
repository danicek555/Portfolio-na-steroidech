"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Custom cursor: a small solid dot that tracks the pointer exactly and a
 * larger trailing ring that lags behind with spring physics. The ring grows
 * and the dot hides when hovering interactive elements. Uses
 * mix-blend-difference so it inverts whatever is underneath.
 *
 * Disabled on touch / coarse pointers and when the user prefers reduced motion.
 */
const CustomCursor: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(dotX, { stiffness: 250, damping: 28, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 250, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse) and no reduced-motion.
    const finePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
      );
      setHovering(interactive);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [dotX, dotY, reduceMotion]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] hidden md:block">
      {/* Trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute top-0 left-0 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hovering ? 2.4 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-white"
        />
      </motion.div>

      {/* Exact dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute top-0 left-0 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
