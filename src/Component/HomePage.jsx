import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen bg-[#111111] overflow-hidden flex flex-col items-center justify-center">
      {/* Bouncing Title */}
      <motion.h1
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-300 via-blue-200 to-gray-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: [0, -20, 0], // bounce effect
        }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          y: { duration: 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }}
      >
        MarqWon Dynamics Academy
      </motion.h1>

      {/* Bouncing Subtitle */}
      <motion.p
        className="mt-4 text-lg sm:text-2xl md:text-3xl font-semibold text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0], // bounce effect
        }}
        transition={{
          opacity: { delay: 0.3, duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }}
      >
        Efficiency That Scales
      </motion.p>

      {/* Animated Waves */}
      <motion.div
        className="absolute bottom-0 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, x: [0, -50, 0] }}
        transition={{
          opacity: { delay: 0.5, duration: 0.8 },
          y: { delay: 0.5, duration: 0.8, ease: "easeOut" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#44316E"
            fillOpacity="1"
            d="M0,224L80,224C160,224,320,224,480,192C640,160,800,96,960,69.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Second Wave Layer */}
      <motion.div
        className="absolute bottom-0 w-full opacity-70"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0, x: [0, 50, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.8 },
          y: { delay: 0.8, duration: 0.8, ease: "easeOut" },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#2E1F4C"
            fillOpacity="1"
            d="M0,288L80,288C160,288,320,288,480,245.3C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default HomePage;
