import { motion } from "framer-motion";

type TFeatureTextSlider = {
  title: string;
  description: string;
};
export default function FeatureTextSlider({
  description,
  title,
}: TFeatureTextSlider) {
  return (
    <div className="relative -top-32">
      <div className="flex items-center    justify-center flex-col">
        <motion.h2
          key={title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold"
        >
          {title}
        </motion.h2>
        <motion.p
          key={description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
          className="text- mt-2 max-w-sm text-center"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
