"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BannerServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* YouTube Video Background */}
        <iframe
          src="https://www.youtube.com/embed/REXwxkmErpY?autoplay=1&mute=1&loop=1&playlist=REXwxkmErpY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=0&disablekb=1&fs=0&cc_load_policy=0&vq=highres&start=1&end=9999&widget_referrer=none"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          className="absolute pointer-events-none"
          style={{
            width: '120%',
            height: '120%',
            top: '-10%',
            left: '-10%',
            border: 'none',
            pointerEvents: 'none',
            objectFit: 'cover'
          }}
        />
      </motion.div>

      <div className="relative h-full flex items-end pb-24 px-8 md:px-16 lg:px-24 z-20">
        <motion.div className="text-left max-w-2xl" style={{ y: textY }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Dịch Vụ
          </h1>
          {/* <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Join us on a journey where ideas transform into captivating video
            content, with a dash of creativity and a whole lot of fun.
          </p> */}
        </motion.div>
      </div>
    </div>
  );
};

export default BannerServices;
