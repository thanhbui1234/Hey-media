"use client";

import BannerServices from "@/app/components/Services/BannerServices";
import InfiniteSlider from "@/app/components/Services/Suppoort";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/aboutus.mp4",
];

const ServicesContent = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      // Delay scroll to ensure components are rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500); // 500ms delay to ensure page is fully loaded

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      <BannerServices />
      {/* <ChooseUs /> */}
      {/* Slider đi từ trái qua phải */}
      <div id="tvc">
        <InfiniteSlider
          images={videos}
          direction="left"
          title="TVC"
          description={[
            "Sản xuất TVC quảng cáo sáng tạo, truyền tải thông điệp rõ ràng, giúp thương hiệu ghi dấu ấn mạnh mẽ trên thị trường.",
          ]}
          mediaType="video"
        />
      </div>
      <div id="phim-doanh-nghiep">
        <InfiniteSlider
          images={videos}
          direction="left"
          title="Phim Doanh Nghiệp"
          description={[
            "Sản xuất video giới thiệu doanh nghiệp nhằm hỗ trợ khách hàng xây dựng hình ảnh chuyên nghiệp, tăng độ tin cậy và định vị thương hiệu.",
          ]}
          mediaType="video"
        />
      </div>
      <div id="tiktok">
        <InfiniteSlider
          speed={0.9}
          images={videos}
          direction="left"
          title="TikTok"
          description={[
            " Sáng tạo nội dung theo xu hướng, tăng khả năng tiếp cận và tương tác trên nền tảng Tiktok theo đúng định hướng khách hàng",
          ]}
          mediaType="video"
        />
      </div>
      <div id="chup-anh">
        <InfiniteSlider
          speed={0.9}
          images={videos}
          direction="left"
          title="Chụp ảnh"
          description={[
            " Chụp ảnh sản phẩm, chân dung, không gian... với bố cục và màu sắc phù hợp mục tiêu truyền thông",
          ]}
          mediaType="video"
        />
      </div>
      <div id="livestream-su-kien">
        <InfiniteSlider
          speed={0.9}
          images={videos}
          direction="left"
          title="Livestream/sự kiện"
          description={[
            " Sản xuất livestream sự kiện với hình ảnh chất lượng, âm thanh ổn định, kết nối khán giả theo thời gian thực.",
          ]}
          mediaType="video"
        />
      </div>
      {/* <PostProductionSection /> */}
    </>
  );
};

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
};

export default Services;
