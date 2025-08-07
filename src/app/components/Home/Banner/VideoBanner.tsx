"use client";

import { motion } from "framer-motion";

const VideoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full flex justify-center items-center"
    >
      <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="nenshoe.png"
          alt="About us banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default VideoBanner;
