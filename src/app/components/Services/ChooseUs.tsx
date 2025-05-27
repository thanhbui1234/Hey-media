"use client";

import ButtonCustom from "@/components/ui/ButtonCustom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const slides = [
  {
    title: "Phòng thu hiện đại",
    image: "/vip1.JPG",
    description: "Phòng thu hiện đại với công nghệ tiên tiến nhất.",
  },
  {
    title: "Thiết lập chuyên nghiệp",
    image: "/vip2.jpg",
    description: "Thiết bị chuyên nghiệp, đội ngũ giàu kinh nghiệm.",
  },
  {
    title: "Phông nền cao cấp",
    image: "/vip3.JPG",
    description: "Phông nền cao cấp, đa dạng cho nhiều phong cách quay.",
  },
  {
    title: "Phòng âm thanh",
    image: "/vip5.JPG",
    description: "Phòng âm thanh chuyên nghiệp, chất lượng hoàn hảo.",
  },
  {
    title: "Phòng chỉnh màu",
    image: "/44.JPG",
    description: "Thiết bị chỉnh màu cao cấp cho hiệu ứng điện ảnh.",
  },
  {
    title: "Khu làm hiệu ứng VFX",
    image: "/55.jpg",
    description: "Không gian VFX hiện đại cho hiệu ứng mãn nhãn.",
  },
];

const ChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16  ">
      <div className="max-w-[1400px] mx-auto border-[0.2px] border-gray-500/20 p-5 rounded-lg px-32">
        <div className="text-center mb-12">
          <h2 className="relative z-10 text-lg md:text-5xl my-3 mb-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Tại sao chọn chúng tôi?
          </h2>
          <div className="space-y-2 text-gray-300 flex justify-center items-center gap-2 flex-col">
            <p className="m-w-[500px]">
              Chúng tôi không chỉ làm media, chúng tôi tạo nên giá trị truyền
              thông thực sự.
            </p>
            <p className=" w-[500px]">
              Với đội ngũ sáng tạo, thiết bị hiện đại và quy trình chuyên
              nghiệp, chúng tôi cam kết mang đến những sản phẩm ấn tượng, đúng
              tiến độ và phù hợp với mục tiêu thương hiệu.
            </p>
            <p className="w-[500px]">
              Chúng tôi luôn lắng nghe và đồng hành, biến ý tưởng của bạn thành
              những nội dung truyền cảm hứng, giúp thương hiệu nổi bật và khác
              biệt trên thị trường.u
            </p>
          </div>
          <ButtonCustom
            text="Book our services"
            className="bg-white mt-5 text-black cursor-pointer"
            onClick={() => {}}
          />
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden group flex items-center gap-8 px-4">
          <motion.button
            className="absolute left-8 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoChevronBackOutline size={24} />
          </motion.button>

          <motion.button
            className="absolute right-8 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoChevronForwardOutline size={24} />
          </motion.button>
          <div
            className="w-48 h-48 relative opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 rounded-xl overflow-hidden"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
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

          <div className="relative flex-1 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  mass: 0.5,
                }}
                className="absolute inset-0"
                whileHover={{
                  scale: 1.02,
                  filter: "brightness(1.1) contrast(1.1)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                style={{
                  transformOrigin: "center",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="w-48 h-48 relative opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 rounded-xl overflow-hidden"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
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

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-6" : "bg-white/50"
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
