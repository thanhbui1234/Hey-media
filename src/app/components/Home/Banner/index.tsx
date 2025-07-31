"use client";
import { useEffect, useRef, useState } from "react";

const videoSegments = Array.from({ length: 13 }, (_, i) => `/vd/parts/output_${i.toString().padStart(3, "0")}.mp4`);


const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % videoSegments.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = videoSegments[currentIndex];
    video.play().catch((err) => {
      console.warn("AutoPlay failed:", err);
    });
  }, [currentIndex]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <div className="w-full h-full relative">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
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
