"use client";
import { useEffect, useRef, useState } from "react";

const videoSegments = Array.from({ length: 13 }, (_, i) => `/vd/parts/output_${i.toString().padStart(3, "0")}.mp4`);

const Banner = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(true);

  // Preload next video
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % videoSegments.length;
    const inactiveVideo = activeVideo === 1 ? video2Ref.current : video1Ref.current;
    
    if (inactiveVideo) {
      inactiveVideo.src = videoSegments[nextIndex];
      inactiveVideo.load(); // Preload the next video
    }
  }, [currentIndex, activeVideo]);

  // Handle video switching
  useEffect(() => {
    const currentVideo = activeVideo === 1 ? video1Ref.current : video2Ref.current;
    
    if (!currentVideo) return;

    const handleEnded = () => {
      // Switch to the other video element
      setActiveVideo(prev => prev === 1 ? 2 : 1);
      setCurrentIndex(prev => (prev + 1) % videoSegments.length);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    currentVideo.addEventListener("ended", handleEnded);
    currentVideo.addEventListener("canplay", handleCanPlay);
    currentVideo.addEventListener("loadstart", handleLoadStart);
    
    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
      currentVideo.removeEventListener("canplay", handleCanPlay);
      currentVideo.removeEventListener("loadstart", handleLoadStart);
    };
  }, [activeVideo]);

  // Initialize first video
  useEffect(() => {
    const video1 = video1Ref.current;
    if (!video1) return;
    
    video1.src = videoSegments[0];
    video1.play().catch((err) => {
      console.warn("AutoPlay failed:", err);
    });
  }, []);

  // Play the active video when switched
  useEffect(() => {
    const currentVideo = activeVideo === 1 ? video1Ref.current : video2Ref.current;
    
    if (currentVideo && currentVideo.src) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch((err) => {
        console.warn("AutoPlay failed:", err);
      });
    }
  }, [activeVideo]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <div className="w-full h-full relative">
        {/* Video Background - Dual Videos for Seamless Transition */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
        
        <video
          ref={video2Ref}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-15" />

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
              Chào mừng tới <span className="text-black">Hey Media</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Bắt sóng thời đại – Dẫn lối truyền thông.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;