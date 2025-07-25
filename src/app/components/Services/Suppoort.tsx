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

// Modal component để hiển thị video
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
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      setIsPlaying(false);
      setControlsVisible(true);
    }
  }, [isOpen]);

  // Auto-hide controls after 3 seconds of inactivity
  const resetHideControlsTimer = () => {
    setControlsVisible(true);
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    hideControlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    resetHideControlsTimer();
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onMouseMove={handleMouseMove}
    >
      <div className="relative max-w-4xl w-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-full transition-all z-10 ${
            controlsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          <video
            ref={modalVideoRef}
            src={src}
            className="max-w-[80vw] max-h-[70vh] w-auto h-auto cursor-pointer"
            controls
            controlsList="nodownload"
            onClick={handleVideoClick}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedData={() => {
              // Video loaded, ready to play
              console.log("Video loaded");
            }}
          >
            Your browser does not support the video tag.
          </video>

          {/* Custom play overlay - chỉ hiện khi video pause và không có controls */}
          {!isPlaying && (
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                controlsVisible ? "opacity-100" : "opacity-80"
              }`}
              onClick={handleVideoClick}
            >
              <div className="bg-black/70 p-6 rounded-full hover:bg-black/80 transition-colors">
                <Play className="w-12 h-12 text-white ml-1" />
              </div>
            </div>
          )}
        </div>
      </div>
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

  console.log(
    "Slider rendered with images:",
    images.length,
    "mediaType:",
    mediaType
  );

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
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200 border border-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors duration-200 border border-white/20"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <div className="overflow-hidden">
              <div
                ref={containerRef}
                className="flex gap-3 md:gap-4"
                style={{ width: "fit-content" }}
              >
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer"
                    style={{
                      width: `${itemWidth}px`,
                      height: `${itemWidth}px`,
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() =>
                      mediaType === "video" ? handleVideoClick(src) : undefined
                    }
                  >
                    {mediaType === "video" ? (
                      <>
                        <video
                          src={src}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          ref={(el) => {
                            if (el) {
                              if (hoveredIndex === i) {
                                el.play().catch(() => {});
                              } else {
                                el.pause();
                                el.currentTime = 0;
                              }
                            }
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>

                        {/* Play overlay for videos */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-black/60 p-3 rounded-full">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>

                        {/* Video indicator */}
                        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                          VIDEO
                        </div>
                      </>
                    ) : (
                      <img
                        src={src}
                        alt={`Slide ${i}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
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

// Demo component với sample data để test
export function SliderDemo() {
  const sampleImages = [
    "https://picsum.photos/220/220?random=1",
    "https://picsum.photos/220/220?random=2",
    "https://picsum.photos/220/220?random=3",
    "https://picsum.photos/220/220?random=4",
    "https://picsum.photos/220/220?random=5",
    "https://picsum.photos/220/220?random=6",
  ];

  const sampleVideos = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      <InfiniteSlider
        images={sampleImages}
        title="Our Portfolio - Images"
        description={[
          "Những dự án tiêu biểu của chúng tôi",
          "Với hơn 10 năm kinh nghiệm",
          "Chúng tôi tự hào mang đến những sản phẩm chất lượng cao",
        ]}
        direction="left"
        speed={0.8}
        mediaType="image"
      />

      <InfiniteSlider
        images={sampleVideos}
        title="Our Portfolio - Videos"
        description={[
          "Video showcase của các dự án",
          "Trải nghiệm trực quan và sinh động",
          "Khám phá quy trình sáng tạo của chúng tôi",
        ]}
        direction="right"
        speed={0.6}
        mediaType="video"
      />
    </div>
  );
}
