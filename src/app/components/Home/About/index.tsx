"use client";
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

export default function AboutCompany() {
  return (
    <>
      <section className="w-full min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/Media.png"
          alt="About"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Clean Background Text - Very Subtle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
          <div className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-white/[0.02] select-none tracking-wider leading-none transform rotate-12">
            MEDIA
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 my-[175px]">
          <div className="w-full max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="text-center my-10">
              <div className="w-32 h-px bg-white/60 mx-auto"></div>
            </div>

            {/* Content Grid - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left Column - Bắt đầu */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-white/95 uppercase">
                    Về chúng tôi
                  </h2>
                </div>

                <div className="space-y-6">
                  <TextGenerateEffect
                    words="Hey Media là đơn vị chuyên sản xuất nội dung truyền thông marketing cho thương hiệu, doanh nghiệp và cá nhân."
                    className="framer-text"
                  />

                  <div className="w-8 h-px bg-white/40 my-6"></div>

                  <TextGenerateEffect
                    words="Với đội ngũ trẻ, am hiểu xu hướng truyền thông và tư duy sáng tạo linh hoạt, chúng tôi luôn mang đến những sản phẩm chỉn chu, chất lượng, đáp ứng yêu cầu của khách hàng. Hey Media luôn sẵn sàng đồng hành cùng khách hàng trong hành trình xây dựng hình ảnh, lan tỏa thông điệp và tạo dấu ấn thương hiệu bằng những sản phẩm truyền thông ấn tượng, hiệu quả."
                    className="framer-text"
                  />
                </div>

                <div className="mt-8 flex items-center justify-left">
                  <a
                    href="/about"
                    className="text-white cursor-pointer font-light tracking-wide flex items-center gap-2"
                  >
                    <span className="relative group inline-block transition-colors duration-300 text-white group-hover:text-orange-400 group-hover:drop-shadow-[0_0_5px_orange]">
                      Chi tiết
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"></span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column - Tầm nhìn */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white/95 uppercase">
                    Tầm nhìn
                  </h2>
                </div>

                <img
                  src="/teams/MT1.jpg"
                  alt="About"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
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
      </section>
    </>
  );
}
