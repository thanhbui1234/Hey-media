"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const aboutVideoSegments = Array.from({ length: 13 }, (_, i) => `/vd/parts/output_${i.toString().padStart(3, "0")}.mp4`);

const BannerAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  
  // Cache all video blobs in memory to avoid network calls
  const videoBlobsRef = useRef<Map<number, string>>(new Map());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Preload all videos once at startup
  useEffect(() => {
    const preloadAllVideos = async () => {
      const loadPromises = aboutVideoSegments.map(async (src, index) => {
        try {
          const response = await fetch(src);
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          videoBlobsRef.current.set(index, blobUrl);
          
          return { index, blobUrl };
        } catch (error) {
          console.warn(`Failed to load about video ${index}:`, error);
          return null;
        }
      });

      await Promise.all(loadPromises);
      setAllVideosLoaded(true);
    };

    preloadAllVideos();

    // Cleanup blob URLs on unmount
    return () => {
      videoBlobsRef.current.forEach(blobUrl => {
        URL.revokeObjectURL(blobUrl);
      });
      videoBlobsRef.current.clear();
    };
  }, []);

  // Handle video switching - no network calls after initial load
  useEffect(() => {
    if (!allVideosLoaded) return;
    
    const currentVideo = activeVideo === 1 ? video1Ref.current : video2Ref.current;
    if (!currentVideo) return;

    const handleEnded = () => {
      const nextIndex = (currentIndex + 1) % aboutVideoSegments.length;
      
      // Check if we're about to loop back to the beginning
      if (nextIndex === 0) {
        setIsLooping(true);
        // Add a brief pause before looping to make transition smoother
        setTimeout(() => {
          setActiveVideo(prev => prev === 1 ? 2 : 1);
          setCurrentIndex(0);
          setIsLooping(false);
        }, 300); // 300ms pause before restart
      } else {
        // Normal progression to next segment
        setActiveVideo(prev => prev === 1 ? 2 : 1);
        setCurrentIndex(nextIndex);
      }
    };

    currentVideo.addEventListener("ended", handleEnded);
    
    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [activeVideo, allVideosLoaded]);

  // Initialize first video when all videos are loaded
  useEffect(() => {
    if (!allVideosLoaded) return;
    
    const video1 = video1Ref.current;
    if (!video1) return;
    
    const blobUrl = videoBlobsRef.current.get(0);
    if (blobUrl) {
      video1.src = blobUrl;
      video1.play().catch((err) => {
        console.warn("AutoPlay failed:", err);
      });
    }
  }, [allVideosLoaded]);

  // Switch video source when activeVideo or currentIndex changes - using cached blobs
  useEffect(() => {
    if (!allVideosLoaded || isLooping) return;
    
    const currentVideo = activeVideo === 1 ? video1Ref.current : video2Ref.current;
    const inactiveVideo = activeVideo === 1 ? video2Ref.current : video1Ref.current;
    
    // Set current video source
    if (currentVideo) {
      const blobUrl = videoBlobsRef.current.get(currentIndex);
      if (blobUrl) {
        currentVideo.src = blobUrl;
        currentVideo.currentTime = 0;
        currentVideo.play().catch((err) => {
          console.warn("AutoPlay failed:", err);
        });
      }
    }
    
    // Preload next video in inactive element
    if (inactiveVideo) {
      const nextIndex = (currentIndex + 1) % aboutVideoSegments.length;
      const nextBlobUrl = videoBlobsRef.current.get(nextIndex);
      if (nextBlobUrl) {
        inactiveVideo.src = nextBlobUrl;
        inactiveVideo.load(); // Preload but don't play
      }
    }
  }, [activeVideo, currentIndex, allVideosLoaded, isLooping]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Dual Videos for Seamless Transition */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ objectPosition: "center" }}
        />
        
        <video
          ref={video2Ref}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
            activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ objectPosition: "center" }}
        />
      </motion.div>

      <div className="relative h-full flex items-end pb-24 px-8 md:px-16 lg:px-24 z-20">
        <motion.div className="text-left max-w-2xl" style={{ y: textY }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Về Chúng Tôi
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

export default BannerAbout;
