import { motion } from "framer-motion";

const BreakingTicker = ({ headlines }) => {
  return (
    <div className="bg-red-700 text-white/80 overflow-hidden sticky top-0 z-30 hidden md:block">
      <div className="flex items-center">
        <div className="bg-red-900 px-4 py-2 font-bold z-20">
          BREAKING
        </div>

        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
          className="whitespace-nowrap px-6"
        >
          {headlines.map((item, index) => (
            <span key={index} className="mx-8">
              {item.title}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BreakingTicker;