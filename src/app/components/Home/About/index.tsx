"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, words]);

  return <div className={className}>{displayedText}</div>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function AboutCompany() {
  return (
    <>
      <section className="w-full min-h-screen relative overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="105296-669669130_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Dark Overlay - Only at edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-1"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-1"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="text-center my-10">
              {/* <h1 className="text-6xl md:text-8xl font-extralight tracking-widest text-white mb-8 drop-shadow-2xl">
                VỀ CHÚNG TÔI
              </h1> */}
              <div className="w-32 h-px bg-white/60 mx-auto"></div>
            </div>

            {/* Content Grid - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left Column - Bắt đầu */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  {/* <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div> */}
                  <h2 className="text-2xl md:text-3xl  font-bold tracking-wider text-white/95 uppercase">
                    Về chúng tôi
                  </h2>
                </div>

                <div className="space-y-6">
                  <TextGenerateEffect
                    words="Hey Media là đơn vị chuyên sản xuất nội dung truyền thông marketing cho thương hiệu, doanh nghiệp và cá nhân."
                    className="text-xl md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-lg"
                  />

                  <div className="w-8 h-px bg-white/40 my-6"></div>

                  <TextGenerateEffect
                    words="Với đội ngũ trẻ, am hiểu xu hướng truyền thông và tư duy sáng tạo linh hoạt, chúng tôi luôn mang đến những sản phẩm chỉn chu, chất lượng, đáp ứng yêu cầu của khách hàng. Hey Media luôn sẵn sàng đồng hành cùng khách hàng trong hành trình xây dựng hình ảnh, lan tỏa thông điệp và tạo dấu ấn thương hiệu bằng những sản phẩm truyền thông ấn tượng, hiệu quả."
                    className="text-lg md:text-xl font-light text-white/85 leading-relaxed drop-shadow-lg"
                  />
                </div>

                <div className="mt-8 flex items-center justify-left">
                  <Link href="/about">
                    <p className="text-white cursor-pointer font-light tracking-wide flex items-center gap-2">
                      <span className="relative group inline-block transition-colors duration-300 text-white group-hover:text-orange-400 group-hover:drop-shadow-[0_0_5px_orange]">
                        Chi tiết
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"></span>
                      </span>
                    </p>
                  </Link>
                </div>
              </div>

              {/* Right Column - Tầm nhìn */}
              <div className="space-y-8 ">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white/95 uppercase">
                    Tầm nhìn
                  </h2>
                </div>

                <Image
                  src="/img/tamnhin.jpg"
                  alt="About"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Bottom Quote */}
            {/* <div className="text-center mt-32 mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-4xl md:text-6xl font-extralight text-white/60 mb-8">
                  "
                </div>
                <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed italic tracking-wide">
                  Chúng tôi không chỉ làm phim - chúng tôi tạo ra những khoảnh
                  khắc
                </p>
                <div className="w-24 h-px bg-white/40 mx-auto mt-8"></div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-px h-3 bg-white/50 mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Film Strip Effect - Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-black/80 z-5">
          <div className="flex h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex-1 border-r border-white/20 h-full"
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
