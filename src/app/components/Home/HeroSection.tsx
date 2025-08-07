"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from 'next/dynamic';
import { useRef } from "react";

const Banner = dynamic(() => import("./Banner"), { ssr: false , loading: () => {    console.log("⏳ [dynamic] Đang hiển thị loading fallback...");
    return <div>Loading...</div>} } );
const VideoBanner = dynamic(() => import("./Banner/VideoBanner"), { ssr: false , loading: () => {    console.log("⏳ [dynamic] Đang hiển thị loading fallback...");
    return <div>Loading...</div>} });

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Banner hiệu ứng fade và scale nhẹ khi scroll
  const bannerScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Video xuất hiện dần ở phần cuối Hero section
  const videoY = useTransform(scrollYProgress, [0.5, 0.7], ["50%", "0%"]);
  const videoOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <div ref={ref} className="relative w-full h-[250vh]">
      <section className="sticky top-0 h-screen w-full overflow-hidden ">
        {/* Banner layer */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ scale: bannerScale, opacity: bannerOpacity }}
        >
          <Banner />
        </motion.div>

        {/* Text layer */}
        {/* <motion.h1
          className="absolute inset-0 flex items-center justify-center z-20 text-white text-6xl lg:text-[120px] font-extrabold tracking-widest uppercase"
          style={{ y: textY, opacity: textOpacity }}
        >
          SHOWREEL
        </motion.h1> */}

        {/* Video layer */}

        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center"
          style={{ y: videoY, opacity: videoOpacity }}
        >
          <div className="w-full h-[200px] mx-auto flex items-center justify-center">
            <VideoBanner />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
