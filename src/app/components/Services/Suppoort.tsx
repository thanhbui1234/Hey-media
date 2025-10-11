
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface InfiniteSliderProps {
  images: string[];
  direction?: "left" | "right";
  title: string;
  description: string[];
  speed?: number;
  mediaType?: "image" | "video";
}

// Utility function để detect và convert YouTube URL
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
    /youtube\.com\/watch\?.*v=([^&]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be');
}

function getYouTubeThumbnail(url: string): string {
  const videoId = getYouTubeId(url);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return '';
}

function getYouTubeEmbedUrl(url: string): string {
  const videoId = getYouTubeId(url);
  if (videoId) {
    // Thêm các tham số để controls hoạt động tốt
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0&enablejsapi=1&fs=1&playsinline=1&cc_load_policy=1&iv_load_policy=3`;
  }
  return url;
}

// Modal component để hiển thị video (hỗ trợ cả local và YouTube)
function VideoModal({
  src,
  isOpen,
  onClose,
}: {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideControlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isYouTube = isYouTubeUrl(src);

  useEffect(() => {
    if (isOpen && !isYouTube && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      setIsPlaying(false);
      setControlsVisible(true);
    }
  }, [isOpen, isYouTube]);

  const resetHideControlsTimer = () => {
    setControlsVisible(true);
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    hideControlsTimeoutRef.current = setTimeout(() => {
      if (!isYouTube) {
        setControlsVisible(false);
      }
    }, 3000);
  };

  const handleMouseMove = () => {
    resetHideControlsTimer();
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isYouTube && modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Chỉ đóng khi click vào backdrop, không phải video/iframe
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleIframeClick = (e: React.MouseEvent) => {
    // Ngăn việc đóng modal khi click vào iframe
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-full transition-all z-10 opacity-100"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          {isYouTube ? (
            // YouTube iframe - không có overlay, cho phép tương tác trực tiếp
            <div
              className="relative w-full"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src={getYouTubeEmbedUrl(src)}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="YouTube video"
                style={{
                  border: 'none',
                  pointerEvents: 'auto',
                  zIndex: 1
                }}
                frameBorder="0"
                scrolling="no"
              />
            </div>
          ) : (
            // Local video
            <div onClick={(e) => e.stopPropagation()}>
              <video
                ref={modalVideoRef}
                src={src}
                className="max-w-[80vw] max-h-[70vh] w-auto h-auto cursor-pointer mx-auto"
                controls
                controlsList="nodownload"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>

              {/* Custom play overlay - chỉ cho local video */}
              {!isPlaying && (
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity ${controlsVisible ? "opacity-100" : "opacity-80"
                    }`}
                  onClick={handleVideoClick}
                >
                  <div className="bg-black/70 p-6 rounded-full hover:bg-black/80 transition-colors">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Video Item Component cho local videos
function VideoItem({
  src,
  index,
  itemWidth,
  isHovered,
  onHover,
  onClick,
}: {
  src: string;
  index: number;
  itemWidth: number;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().catch(() => {
        // Ignore autoplay errors
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer"
      style={{
        width: `${itemWidth}px`,
        height: `${itemWidth}px`,
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
        muted
        loop
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>

      {/* Play overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/60 p-3 rounded-full">
          <Play className="w-6 h-6 text-white ml-1" />
        </div>
      </div>

      {/* Video indicator */}
      <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
        VIDEO
      </div>
    </div>
  );
}

// YouTube Thumbnail Item Component
function YouTubeItem({
  src,
  index,
  itemWidth,
  onClick,
}: {
  src: string;
  index: number;
  itemWidth: number;
  onClick: () => void;
}) {
  const thumbnailUrl = getYouTubeThumbnail(src);

  return (
    <div
      className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer"
      style={{
        width: `${itemWidth}px`,
        height: `${itemWidth}px`,
      }}
      onClick={onClick}
    >
      <img
        src={thumbnailUrl}
        alt={`YouTube video ${index}`}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
        loading="lazy"
      />

      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
    </div>
  );
}

export default function InfiniteSlider({
  images,
  direction = "left",
  title,
  description,
  speed = 0.5,
  mediaType = "image",
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(220);
  const [containerWidth, setContainerWidth] = useState(0);
  const [modalVideoSrc, setModalVideoSrc] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Tính toán kích thước responsive
  useEffect(() => {
    const updateSizes = () => {
      if (wrapperRef.current) {
        const wrapper = wrapperRef.current;
        const wrapperWidth = wrapper.offsetWidth - 80;
        setContainerWidth(wrapperWidth);

        if (wrapperWidth < 640) {
          setItemWidth(150);
        } else if (wrapperWidth < 1024) {
          setItemWidth(180);
        } else {
          setItemWidth(220);
        }
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Update transform khi currentIndex thay đổi
  useEffect(() => {
    if (!containerRef.current || !images || images.length === 0) return;

    const totalWidth = itemWidth + 16;
    const translateX = -currentIndex * totalWidth;

    containerRef.current.style.transform = `translateX(${translateX}px)`;
    containerRef.current.style.transition = "transform 0.3s ease-out";
  }, [currentIndex, itemWidth, images]);

  const handlePrevious = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!images || images.length === 0) return;
    const itemsPerView = Math.floor(containerWidth / (itemWidth + 16));
    const maxVisibleIndex = Math.max(0, images.length - itemsPerView);

    setCurrentIndex((prev) => {
      if (prev >= maxVisibleIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleVideoClick = (src: string) => {
    setModalVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoSrc("");
  };

  // Nếu không có images, hiển thị placeholder
  if (!images || images.length === 0) {
    return (
      <div className="w-full flex flex-col items-center py-6 md:py-10 text-white px-4">
        <div className="w-full max-w-7xl rounded-xl md:rounded-2xl p-6 md:p-10 border border-gray-500/20 overflow-hidden bg-[#111111] shadow-xl">
          <h2 className="text-xl md:text-3xl font-semibold mb-2">{title}</h2>
          <div className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
            {description.map((line, index) => (
              <p className="text-sm text-gray-400" key={index}>
                {line}
              </p>
            ))}
          </div>
          <div className="text-center py-10">
            <p className="text-gray-500">No {mediaType}s provided</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col items-center py-6 md:py-10 text-white px-4">
        <div
          ref={wrapperRef}
          className="w-full max-w-7xl rounded-xl md:rounded-2xl p-6 md:p-10 border border-gray-500/20 overflow-hidden bg-[#111111] shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
          </div>

          <div className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
            {description.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          <div className="relative">
            {/* Previous Button */}
            {images.length >= 6 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200 border border-white/20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200 border border-white/20"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button></>
            )}





            <div className="overflow-hidden">
              <div
                ref={containerRef}
                className="flex gap-3 md:gap-4"
                style={{ width: "fit-content" }}
              >
                {images.map((src, i) => (
                  <div key={i}>
                    {mediaType === "video" ? (
                      isYouTubeUrl(src) ? (
                        <YouTubeItem
                          src={src}
                          index={i}
                          itemWidth={itemWidth}
                          onClick={() => handleVideoClick(src)}
                        />
                      ) : (
                        <VideoItem
                          src={src}
                          index={i}
                          itemWidth={itemWidth}
                          isHovered={hoveredIndex === i}
                          onHover={(hovered) => setHoveredIndex(hovered ? i : null)}
                          onClick={() => handleVideoClick(src)}
                        />
                      )
                    ) : (
                      <div
                        className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10 relative group"
                        style={{
                          width: `${itemWidth}px`,
                          height: `${itemWidth}px`,
                        }}
                      >
                        <img
                          src={src}
                          alt={`Slide ${i}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        src={modalVideoSrc}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
