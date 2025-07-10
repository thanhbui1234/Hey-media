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
  "Diễn viên, người mẫu, và nhân sự theo yêu cầu sản xuất.",
  "Đội ngũ chuyên nghiệp, sẵn sàng hỗ trợ mọi quy mô dự án.",
  "Linh hoạt theo từng concept, đảm bảo đúng tiến độ và chất lượng."
]}

      />

<InfiniteSlider
  images={images2}
  direction="left"
  title="Phim Doanh Nghiệp"
  description={[
    "Giới thiệu doanh nghiệp chuyên nghiệp và ấn tượng.",
    "Truyền tải thông điệp thương hiệu một cách rõ ràng và sáng tạo.",
    "Tăng cường uy tín và độ nhận diện với video chất lượng cao."
  ]}
/>


<InfiniteSlider
  speed={0.9}
  images={images}
  direction="left"
  title="TikTok"
  description={[
    "Sản xuất nội dung sáng tạo, thu hút người xem nhanh.",
    "Tối ưu hoá xu hướng để tăng tương tác và lượt xem.",
    "Phù hợp cho chiến dịch viral và xây dựng thương hiệu cá nhân."
  ]}
/>

<InfiniteSlider
  speed={0.9}
  images={images}
  direction="left"
  title="Chụp ảnh"
  description={[
    "Dịch vụ chụp ảnh chuyên nghiệp, đa dạng phong cách.",
    "Phù hợp với sự kiện, sản phẩm, chân dung và quảng cáo.",
    "Đội ngũ nhiếp ảnh gia tận tâm, bắt trọn khoảnh khắc ấn tượng."
  ]}
/>

      <PostProductionSection />
    </>
  );
};

export default Services;
