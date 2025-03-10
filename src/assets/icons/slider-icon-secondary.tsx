import { motion } from "framer-motion";
import { ReactNode } from "react";
// Enhanced SliderIconSecondary with animation capabilities
export const SliderIconSecondary = ({  }: { index: number }) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{
      // opacity: 1,
      // rotate: 360,
      // }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        {/* Outer circle with blur effect */}
        <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.06" />
        <circle cx="10" cy="10" r="9.5" stroke="white" strokeOpacity="0.08" />

        {/* Drop shadow/glow effect for outer circle */}
        <circle
          cx="10"
          cy="10"
          r="10"
          fill="white"
          fillOpacity="0.06"
          filter="blur(3px)"
        />

        {/* Inner circle with blur effect */}
        <circle cx="10" cy="10" r="3" fill="#78DBFF" />
        <circle
          cx="10"
          cy="10"
          r="2.75"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="0.5"
        />

        {/* Drop shadow/glow effect for inner circle */}
        <circle cx="10" cy="10" r="3" fill="#78DBFF" filter="blur(1px)" />
      </svg>
    </motion.div>
  );
};

export const CircularMotion = ({
  // index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  //   const radius = 10; // Radius of circular motion

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <motion.div
        className="absolute"
        // animate={{
        //   x: [radius, 0, -radius, 0, radius],
        //   y: [0, -radius, 0, radius, 0],
        // }}
        transition={{
          duration: 4,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
