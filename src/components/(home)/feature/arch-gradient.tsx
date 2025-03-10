import { motion } from "framer-motion";
export const ArchGradient = ({ index }: { index: number }) => {
  return (
    <motion.svg 
      viewBox="0 0 499 113" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        strokeWidth={2}
        d="M1 112V112C133.507 -36.2367 365.493 -36.2367 498 112V112"
        stroke="url(#paint0_linear_4029_14085)"
        initial={{ pathLength: 0, pathOffset: 0.5 }}
        animate={{ 
          pathLength: [0.05, 1],
          pathOffset: [0.05, 0]
        }}
        transition={{ 
          duration: 4, 
          ease: "easeOut",
        //   repeat: Infinity,
        //   repeatDelay: 0.5
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4029_14085"
          x1="249"
          y1="-4.86295"
          x2="249.751"
          y2="114.314"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#78DBFF" />
          <stop offset="0.410111" stopColor="#78DBFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
