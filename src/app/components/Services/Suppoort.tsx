import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface InfiniteSliderProps {
  images: string[];
  direction?: "left" | "right";
  title: string;
  description: string[];
  speed?: number;
  mediaType?: "image" | "video"; // Thêm prop để xác định loại media
}

export default function InfiniteSlider({
  images,
  direction = "left",
  title,
  description,
  speed = 0.5,
  mediaType = "image", // Mặc định là image
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(220);
  const [containerWidth, setContainerWidth] = useState(0);
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
        const wrapperWidth = wrapper.offsetWidth - 80; // trừ padding
        setContainerWidth(wrapperWidth);

        // Tính item width responsive
        if (wrapperWidth < 640) {
          setItemWidth(150); // mobile
        } else if (wrapperWidth < 1024) {
          setItemWidth(180); // tablet
        } else {
          setItemWidth(220); // desktop
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

    const totalWidth = itemWidth + 16; // itemWidth + gap
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
      // Nếu đang ở vị trí cuối cùng có thể hiển thị, quay về đầu
      if (prev >= maxVisibleIndex) {
        return 0;
      }
      return prev + 1;
    });
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
                  className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10"
                  style={{
                    width: `${itemWidth}px`,
                    height: `${itemWidth}px`,
                  }}
                >
                  {mediaType === "video" ? (
                    <video
                      src={src}
                      className="w-full h-full object-cover"
                      controls={false}
                      preload="metadata"
                      muted
                      autoPlay
                      loop
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={src}
                      alt={`Slide ${i}`}
                      className="w-full h-full object-cover"
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

  // Sample video URLs (bạn có thể thay thế bằng video URLs thực tế)
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
