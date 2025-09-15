"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const VideoBanner = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.youtube.com/embed/cUKyPcTvPXk?autoplay=1&mute=1&loop=1&playlist=cUKyPcTvPXk&controls=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
          className="absolute pointer-events-none"
          style={{
            width: '120%',
            height: '120%',
            top: '-10%',
            left: '-10%',
            border: 'none',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
};

export default VideoBanner;