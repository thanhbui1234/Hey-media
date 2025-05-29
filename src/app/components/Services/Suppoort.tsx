import { useEffect, useRef, useState } from "react";

interface InfiniteSliderProps {
  images: string[];
  direction?: "left" | "right";
  title: string;
  description: string;
  speed?: number;
}

export default function InfiniteSlider({
  images,
  direction = "left",
  title,
  description,
  speed = 0.5,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const animationRef = useRef<number>(0);
  const [itemWidth, setItemWidth] = useState(220);
  const [containerWidth, setContainerWidth] = useState(0);

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

  // Animation loop
  useEffect(() => {
    if (!images || images.length === 0) return;

    const animate = () => {
      if (!containerRef.current) return;

      const totalWidth = images.length * (itemWidth + 16); // itemWidth + gap

      x.current += direction === "left" ? -speed : speed;

      // Reset position khi scroll hết một set
      if (Math.abs(x.current) >= totalWidth) {
        x.current = 0;
      }

      containerRef.current.style.transform = `translateX(${x.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images, itemWidth, speed, direction]);

  const duplicatedImages =
    images && images.length > 0 ? [...images, ...images, ...images] : [];

  // Nếu không có images, hiển thị placeholder
  if (!images || images.length === 0) {
    return (
      <div className="w-full flex flex-col items-center py-6 md:py-10 text-white px-4">
        <div className="w-full max-w-7xl rounded-xl md:rounded-2xl p-6 md:p-10 border border-gray-500/20 overflow-hidden bg-[#111111] shadow-xl">
          <h2 className="text-xl md:text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
            {description}
          </p>
          <div className="text-center py-10">
            <p className="text-gray-500">No images provided</p>
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
        <h2 className="text-xl md:text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
          {description}
        </p>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-3 md:gap-4"
            style={{ width: "fit-content" }}
          >
            {duplicatedImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10"
                style={{
                  width: `${itemWidth}px`,
                  height: `${itemWidth}px`,
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
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

  return (
    <div className="min-h-screen bg-black p-4">
      <InfiniteSlider
        images={sampleImages}
        title="Our Portfolio"
        description="Những dự án tiêu biểu của chúng tôi"
        direction="left"
        speed={0.8}
      />

      <InfiniteSlider
        images={sampleImages}
        title="Behind The Scenes"
        description="Hậu trường sản xuất"
        direction="right"
        speed={0.6}
      />
    </div>
  );
}
