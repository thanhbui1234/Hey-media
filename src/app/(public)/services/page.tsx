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

const videosDoanhNghiep = [
  "https://youtu.be/Joc4p4Rj5QQ?si=2vGRf7J6zeI7XGXS", "https://youtu.be/u7cAVdkKodE?si=bTmFL8XMQTUp3WfU", "https://youtu.be/5xTgsd9JvMQ?si=ja2POy2AqdVSH6UV"
  , "https://www.youtube.com/watch?v=mwZRxouTZ40",
  "https://youtu.be/F2DQebuw_Ek",
  "https://youtu.be/NWNAB8boTew",
  "https://youtu.be/-J7uYq4g5AE",
  "https://youtu.be/m6jMaB81_aE",
  "https://youtu.be/tUPz-WqEPew"
]
const videoTvc = [
  "https://www.youtube.com/https://youtu.be/WbCJFFz-aVE?v=eZx9B6z-e7g",
  "https://youtu.be/t4jv0fLry08",
  "https://youtu.be/Pmf5s5oPU2E",
  "https://youtu.be/tihoIyTl_9M",
  "https://youtu.be/7bvv-ibiCjU",
  "https://youtu.be/2iEXTdmmCh4",
  "https://youtu.be/Gc_MLBBzukE",
  "https://youtu.be/HtUEA_1H5s0",
  "https://youtu.be/PKQQ4_wqb8k",
  "https://youtu.be/tjj4JLT-bZQ",
  "https://youtu.be/Inr8BOdk8jI",
  "https://youtu.be/UYIKD9fhXoc",
  "https://youtu.be/d5Ni0eOZ0zc",
  "https://youtu.be/i6vN76L2yjY"
]

const vidoeTikTok = [
  "https://www.youtube.com/embed/g7brKqj7duw",
  "https://www.youtube.com/embed/Lx5N1ul3LaA"
]

const videoLivestream = [
  "https://youtu.be/Ooo5fRt5B2M",
  "https://youtu.be/9Pyso_iGTFI"
]
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
          images={videoTvc}
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
          images={videosDoanhNghiep}
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
          images={vidoeTikTok}
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
          images={videoLivestream}
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