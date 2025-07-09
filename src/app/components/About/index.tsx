"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BannerAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <video
          src="/videos/aboutus.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_25%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.1)_75%,transparent_100%)]" />

      <div className="relative h-full flex items-end pb-24 px-8 md:px-16 lg:px-24">
        <motion.div className="text-left max-w-2xl" style={{ y: textY }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Về chúng tôi
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Chúng tôi là đội ngũ trẻ trung, sáng tạo và đam mê trong lĩnh vực
            truyền thông – media. Với sứ mệnh kết nối thương hiệu với khách hàng
            bằng hình ảnh và cảm xúc, chúng tôi luôn đặt chất lượng và sự khác
            biệt lên hàng đầu. Từ ý tưởng đến sản phẩm hoàn thiện, chúng tôi
            đồng hành cùng bạn qua từng khung hình, từng câu chuyện – để mỗi nội
            dung đều có giá trị, mỗi hình ảnh đều có sức sống.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default BannerAbout;
