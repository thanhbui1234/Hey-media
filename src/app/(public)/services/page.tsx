"use client";

import BannerServices from "@/app/components/Services/BannerServices";
import PostProductionSection from "@/app/components/Services/postProduction";
import InfiniteSlider from "@/app/components/Services/Suppoort";
import { useRouter } from "next/navigation";
const images = [
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip3.webp",
  "/vip5.webp",
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip5.webp",
];
const images2 = [
  "/vfx.webp",
  "/scriptwriting.webp",
  "/pexels-pixabay-459203.jpg",
  "/vip3.webp",
  "/vip5.webp",
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip5.webp",
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip5.webp",
];
const Services = () => {
  const router = useRouter();
  return (
    <>
      <BannerServices />
      {/* <ChooseUs /> */}
      {/* Slider đi từ trái qua phải */}
      {/* <InfiniteSlider
        images={images}
        direction="right"
        title="Casting & Talent Management"
        description="Access to professional actors, models, and extras tailored to your production needs."
      /> */}

      <InfiniteSlider
        images={images}
        direction="left"
        title="TVC"
        description={[
          "Sản xuất TVC quảng cáo sáng tạo, truyền tải thông điệp rõ ràng, giúp thương hiệu ghi dấu ấn mạnh mẽ trên thị trường.",
        ]}
      />

      <InfiniteSlider
        images={images2}
        direction="left"
        title="Phim Doanh Nghiệp"
        description={[
          "Sản xuất video giới thiệu doanh nghiệp nhằm hỗ trợ khách hàng xây dựng hình ảnh chuyên nghiệp, tăng độ tin cậy và định vị thương hiệu.",
        ]}
      />

      <InfiniteSlider
        speed={0.9}
        images={images}
        direction="left"
        title="TikTok"
        description={[
          " Sáng tạo nội dung theo xu hướng, tăng khả năng tiếp cận và tương tác trên nền tảng Tiktok theo đúng định hướng khách hàng",
        ]}
      />

      <InfiniteSlider
        speed={0.9}
        images={images}
        direction="left"
        title="Chụp ảnh"
        description={[
          " Chụp ảnh sản phẩm, chân dung, không gian... với bố cục và màu sắc phù hợp mục tiêu truyền thông",
        ]}
      />

      <PostProductionSection />
    </>
  );
};

export default Services;
