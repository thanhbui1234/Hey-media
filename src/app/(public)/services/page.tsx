"use client";

import BannerServices from "@/app/components/Services/BannerServices";
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
const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/aboutus.mp4",
];
const Services = () => {
  const router = useRouter();
  return (
    <>
      <BannerServices />
      {/* <ChooseUs /> */}
      {/* Slider đi từ trái qua phải */}
      <InfiniteSlider
        images={videos}
        direction="left"
        title="TVC"
        description={[
          "Sản xuất TVC quảng cáo sáng tạo, truyền tải thông điệp rõ ràng, giúp thương hiệu ghi dấu ấn mạnh mẽ trên thị trường.",
        ]}
        mediaType="video"
      />
      <InfiniteSlider
        images={videos}
        direction="left"
        title="Phim Doanh Nghiệp"
        description={[
          "Sản xuất video giới thiệu doanh nghiệp nhằm hỗ trợ khách hàng xây dựng hình ảnh chuyên nghiệp, tăng độ tin cậy và định vị thương hiệu.",
        ]}
        mediaType="video"
      />
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
      <InfiniteSlider
        speed={0.9}
        images={videos}
        direction="left"
        title="Chụp ảnh"
        description={[
          " Chụp ảnh sản phẩm, chân dung, không gian... với bố cục và màu sắc phù hợp mục tiêu truyền thông",
        ]}
        mediaType="video"
      />{" "}
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
      {/* <PostProductionSection /> */}
    </>
  );
};

export default Services;
