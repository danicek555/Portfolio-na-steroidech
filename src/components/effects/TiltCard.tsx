"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
  /** Show a moving glare highlight that follows the pointer. */
  glare?: boolean;
}

/**
 * 3D tilt card that rotates toward the pointer with spring physics and lifts
 * on hover. Optionally renders a glare highlight. Falls back to a plain
 * wrapper when the user prefers reduced motion.
 */
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  max = 14,
  glare = true,
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position relative to card center, in range [-0.5, 0.5].
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 250, damping: 20 });
  const sy = useSpring(py, { stiffness: 250, damping: 20 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 55%)`
  );

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.03, z: 30 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative [perspective:1000px] ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
