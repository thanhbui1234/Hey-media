"use client";

import BannerServices from "@/app/components/Services/BannerServices";
import ChooseUs from "@/app/components/Services/ChooseUs";
import PostProductionSection from "@/app/components/Services/postProduction";
import InfiniteSlider from "@/app/components/Services/Suppoort";
import { useRouter } from "next/navigation";
const images = [
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip3.JPG",
  "/vip5.JPG",
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip3.JPG",
  "/vip5.JPG",
];
const images2 = [
  "/vfx.webp",
  "/scriptwriting.webp",
  "/pexels-pixabay-459203.jpg",
  "/motiongraphic.webp",
];
const Services = () => {
  const router = useRouter();
  return (
    <>
      <BannerServices />
      <ChooseUs />
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
        description="Diễn viên, người mẫu, và nhân sự theo yêu cầu sản xuất."
      />

      <InfiniteSlider
        images={images2}
        direction="left"
        title="Phim Doanh Nghiệp"
        description="Giới thiệu doanh nghiệp chuyên nghiệp và ấn tượng."
      />

      <InfiniteSlider
        speed={0.9}
        images={images}
        direction="left"
        title="TikTok"
        description="Sản xuất nội dung sáng tạo, thu hút người xem nhanh."
      />
      <InfiniteSlider
        speed={0.9}
        images={images}
        direction="left"
        title="Chụp ảnh"
        description="Dịch vụ chụp ảnh chuyên nghiệp, đa dạng phong cách."
      />
      <PostProductionSection />
    </>
  );
};

export default Services;
