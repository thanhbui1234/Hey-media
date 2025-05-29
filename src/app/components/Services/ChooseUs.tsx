"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Phòng thu hiện đại",
    image: "https://picsum.photos/800/400?random=1",
    description: "Phòng thu hiện đại với công nghệ tiên tiến nhất.",
  },
  {
    title: "Thiết lập chuyên nghiệp",
    image: "https://picsum.photos/800/400?random=2",
    description: "Thiết bị chuyên nghiệp, đội ngũ giàu kinh nghiệm.",
  },
  {
    title: "Phông nền cao cấp",
    image: "https://picsum.photos/800/400?random=3",
    description: "Phông nền cao cấp, đa dạng cho nhiều phong cách quay.",
  },
  {
    title: "Phòng âm thanh",
    image: "https://picsum.photos/800/400?random=4",
    description: "Phòng âm thanh chuyên nghiệp, chất lượng hoàn hảo.",
  },
  {
    title: "Phòng chỉnh màu",
    image: "https://picsum.photos/800/400?random=5",
    description: "Thiết bị chỉnh màu cao cấp cho hiệu ứng điện ảnh.",
  },
  {
    title: "Khu làm hiệu ứng VFX",
    image: "https://picsum.photos/800/400?random=6",
    description: "Không gian VFX hiện đại cho hiệu ứng mãn nhãn.",
  },
];

const ButtonCustom = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className: string;
  onClick: () => void;
}) => (
  <button
    className={`px-6 py-3 rounded-lg transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

const ChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-[1400px] mx-auto border-[0.2px] border-gray-500/20 p-4 md:p-8 lg:p-16 xl:px-32 rounded-lg">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl my-3 mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Tại sao chọn chúng tôi?
          </h2>

          <div className="space-y-3 md:space-y-4 text-gray-300 flex justify-center items-center gap-2 flex-col">
            <p className="max-w-full md:max-w-[500px] text-sm md:text-base px-4 md:px-0">
              Chúng tôi không chỉ làm media, chúng tôi tạo nên giá trị truyền
              thông thực sự.
            </p>
            <p className="max-w-full md:max-w-[500px] text-sm md:text-base px-4 md:px-0">
              Với đội ngũ sáng tạo, thiết bị hiện đại và quy trình chuyên
              nghiệp, chúng tôi cam kết mang đến những sản phẩm ấn tượng, đúng
              tiến độ và phù hợp với mục tiêu thương hiệu.
            </p>
            <p className="max-w-full md:max-w-[500px] text-sm md:text-base px-4 md:px-0">
              Chúng tôi luôn lắng nghe và đồng hành, biến ý tưởng của bạn thành
              những nội dung truyền cảm hứng, giúp thương hiệu nổi bật và khác
              biệt trên thị trường.
            </p>
          </div>

          <ButtonCustom
            text="Book our services"
            className="bg-white mt-5 text-black cursor-pointer hover:bg-gray-100 text-sm md:text-base"
            onClick={() => {}}
          />
        </div>

        {/* Slider Section */}
        <div className="relative rounded-2xl overflow-hidden group">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="relative h-64 sm:h-80">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: `url(${slides[currentSlide].image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Mobile Navigation Buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                onClick={prevSlide}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                onClick={nextSlide}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex h-[300px] lg:h-[400px] items-center gap-4 lg:gap-8 px-4">
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 lg:left-8 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors hover:scale-110 active:scale-90"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 lg:right-8 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors hover:scale-110 active:scale-90"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>

            {/* Previous Thumbnail */}
            <div
              className="w-32 h-32 lg:w-48 lg:h-48 relative opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 rounded-xl overflow-hidden flex-shrink-0"
              onClick={prevSlide}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    slides[(currentSlide - 1 + slides.length) % slides.length]
                      .image
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Main Slide */}
            <div className="relative flex-1 h-full">
              <div
                key={currentSlide}
                className="absolute inset-0 hover:scale-[1.02] transition-all duration-500"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-200">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Thumbnail */}
            <div
              className="w-32 h-32 lg:w-48 lg:h-48 relative opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 rounded-xl overflow-hidden flex-shrink-0"
              onClick={nextSlide}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    slides[(currentSlide + 1) % slides.length].image
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white w-4 md:w-6"
                    : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
