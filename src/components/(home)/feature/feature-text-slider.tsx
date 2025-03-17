import { delay, motion } from "framer-motion";
import { useRef } from "react";

type TFeatureTextSlider = {
  title: string;
  description: string;
};

export default function FeatureTextSlider({
  description,
  title,
}: TFeatureTextSlider) {
  const featureSlider = useRef<HTMLDivElement>(null);

  // Custom transition for arc motion
  const arcTransition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
    duration: 5.5,
    delay: .5,
  };

  return (
    <motion.div
      initial={{
        x: 1600,
        y: 600,
        rotate: 90,
        opacity: 1,
      }}
      animate={{
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          ...arcTransition,

          opacity: { duration: 4 },
        },
      }}
      exit={{
        x: -1600,
        y: 1200,
        rotate: -90,
        opacity: 0,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      }}
      // This creates the arc-like movement
      style={{
        originX: 0,
        originY: 0,
      }}
      // Using custom Framer Motion features for path animation
      transition={{
        x: {
          ...arcTransition,
          ease: "circOut", // Circular easing for arc effect
        },
        y: {
          ...arcTransition,
          ease: "circOut", // Circular easing for arc effect
        },
        rotate: {
          ...arcTransition,
        },
      }}
      className="relative -top-32"
    >
      <motion.div
        ref={featureSlider}
        className="flex items-center justify-center flex-col"
      >
        <motion.h2
          key={title}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.8 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          className="text-xl font-bold"
        >
          {title}
        </motion.h2>
        <motion.p
          key={description}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.8 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3 },
          }}
          className="mt-2 max-w-sm text-center"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
