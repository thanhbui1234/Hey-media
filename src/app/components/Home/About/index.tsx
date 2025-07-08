"use client";
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

        {/* Cinematic Light Streaks */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-2"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent z-2"></div>

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
                  <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white/95 uppercase">
                    Về chúng tôi
                  </h2>
                </div>

                <div className="space-y-6">
                  <TextGenerateEffect
                    words="Mọi ý tưởng lớn đều bắt đầu từ những điều nhỏ nhất."
                    className="text-xl md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-lg"
                  />

                  <div className="w-8 h-px bg-white/40 my-6"></div>

                  <TextGenerateEffect
                    words="Một chiếc máy quay cầm tay, vài dòng kịch bản nguệch ngoạc và một niềm tin: nội dung chân thật sẽ chạm đến trái tim người xem. Chúng tôi không học làm phim chuyên nghiệp, nhưng chúng tôi biết cách lắng nghe, kể lại và làm cho câu chuyện trở nên sống động."
                    className="text-lg md:text-xl font-light text-white/85 leading-relaxed drop-shadow-lg"
                  />

                  <TextGenerateEffect
                    words="Mỗi dự án, mỗi khung hình đều là một hành trình – không chỉ của nhân vật, mà còn là hành trình trưởng thành của chính chúng tôi."
                    className="text-lg md:text-xl font-light text-white/80 leading-relaxed drop-shadow-lg italic"
                  />
                </div>

               <div className="flex justify-center mt-8">
                <Link href="/about">
                  <p className="group relative text-white cursor-pointer font-light tracking-wide flex items-center gap-2">
                    <span className="text-orange-400 animate-bounce text-2xl">→</span>
                    <span className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50 animate-pulse"></span>
                    Về chúng tôi
                  </p>
                </Link>
              </div>
              </div>

              {/* Right Column - Tầm nhìn */}
              <div className="space-y-8 lg:mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white/95 uppercase">
                    Tầm nhìn
                  </h2>
                </div>

                <div className="space-y-6">
                  <TextGenerateEffect
                    words="Trở thành đơn vị tiên phong trong việc kể chuyện bằng hình ảnh, nơi mà mỗi thước phim, mỗi khung hình đều mang giá trị kết nối con người với cảm xúc thật."
                    className="text-lg md:text-xl font-light text-white/90 leading-relaxed drop-shadow-lg"
                  />

                  <div className="w-8 h-px bg-white/40 my-6"></div>

                  <TextGenerateEffect
                    words="Chúng tôi hướng đến việc xây dựng một hệ sinh thái sáng tạo bền vững – nơi những người trẻ có thể tự do thể hiện góc nhìn riêng, và cùng nhau tạo ra những sản phẩm mang dấu ấn Việt Nam ra thế giới."
                    className="text-lg md:text-xl font-light text-white/85 leading-relaxed drop-shadow-lg"
                  />

                  <TextGenerateEffect
                    words="Tầm nhìn của chúng tôi không chỉ nằm ở chất lượng hình ảnh, mà còn ở chiều sâu nội dung – vì chúng tôi tin rằng, nội dung tốt có thể thay đổi cách người ta nhìn nhận về thế giới."
                    className="text-lg md:text-xl font-light text-white/80 leading-relaxed drop-shadow-lg italic"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="text-center mt-32 mb-16">
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
            </div>
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
