"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

// Tabs for filtering
const tabs = [
  { id: "all", label: "Tất cả" },
  { id: "video", label: "Dựng video" },
  { id: "design", label: "Thiết kế" },
  { id: "photo", label: "Chụp ảnh" },
];

// Fake 20 media cards
const allCards = [
  {
    id: 1,
    title: "Dựng video quảng cáo",
    category: "video",
    description: "Biên tập video chuyên nghiệp cho chiến dịch marketing",
    price: "Ngon",
    image: "vip5.JPG",
    icon: "🎬",
  },
  {
    id: 2,
    title: "Thiết kế motion graphic",
    category: "design",
    description: "Chuyển động hình ảnh sinh động và sáng tạo",
    price: "Ngon",
    image: "motiongraphic.webp",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Hậu kỳ phim ngắn",
    category: "video",
    description: "Xử lý màu sắc và âm thanh cho dự án phim cá nhân",
    price: "Ngon",
    image: "33.JPG",
    icon: "🎞️",
  },
  {
    id: 4,
    title: "Chụp ảnh sản phẩm",
    category: "photo",
    description: "Ảnh sản phẩm sắc nét, chuyên nghiệp",
    price: "Ngon",
    image: "44.JPG",
    icon: "📸",
  },
  {
    id: 5,
    title: "Thiết kế poster sự kiện",
    category: "design",
    description: "Poster ấn tượng thu hút người tham dự",
    price: "Ngon",
    image: "55.jpg",
    icon: "🖼️",
  },
  {
    id: 6,
    title: "Livestream đa nền tảng",
    category: "video",
    description: "Setup livestream chuyên nghiệp Facebook, YouTube",
    price: "Ngon",
    image: "vip3.JPG",
    icon: "📡",
  },
  {
    id: 7,
    title: "Dựng intro YouTube",
    category: "video",
    description: "Mở đầu video bắt mắt cho kênh cá nhân",
    price: "Ngon",
    image: "vip5.JPG",
    icon: "🎬",
  },
  {
    id: 8,
    title: "Thiết kế nhận diện thương hiệu",
    category: "design",
    description: "Bộ logo, màu sắc, phông chữ đồng bộ",
    price: "Ngon",
    image: "IMG_3706.JPG",
    icon: "📚",
  },
  {
    id: 9,
    title: "TV Commercial Production",
    category: "video",
    description: "Sản xuất quảng cáo truyền hình chuyên nghiệp",
    price: "Ngon",
    image: "vip5.JPG",
    icon: "📺",
  },
  {
    id: 10,
    title: "Viral video TikTok",
    category: "video",
    description: "Nội dung ngắn viral",
    price: "Ngon",
    image: "vip1.JPG",
    icon: "📱",
  },
  {
    id: 11,
    title: "Chỉnh màu video chuyên nghiệp",
    category: "video",
    description: "Color grading điện ảnh",
    price: "Ngon",
    image: "vip5.JPG",
    icon: "🎨",
  },
  {
    id: 12,
    title: "Storyboard minh họa",
    category: "design",
    description: "Vẽ storyboard cho tiền kỳ",
    price: "Ngon",
    image: "motiongraphic.webp",
    icon: "📝",
  },
  {
    id: 13,
    title: "Mix nhạc nền video",
    category: "video",
    description: "Âm nhạc nền phù hợp cho video",
    price: "Ngon",
    image: "44.JPG",
    icon: "🎧",
  },
  {
    id: 14,
    title: "TVC hoạt hình 2D",
    category: "video",
    description: "Quảng cáo hoạt hình sinh động",
    price: "Ngon",
    image: "33.JPG",
    icon: "🖍️",
  },
  {
    id: 15,
    title: "Chụp ảnh hậu trường",
    category: "photo",
    description: "Ảnh behind the scenes cho sự kiện",
    price: "Ngon",
    image: "IMG_3706.JPG",
    icon: "📷",
  },
  {
    id: 16,
    title: "Sản xuất phỏng vấn",
    category: "video",
    description: "Phỏng vấn doanh nhân, nghệ sĩ",
    price: "Ngon",
    image: "vip1.JPG",
    icon: "🎤",
  },
  {
    id: 17,
    title: "Viết kịch bản video",
    category: "video",
    description: "Biên kịch nội dung video giới thiệu",
    price: "Ngon",
    image: "vip3.JPG",
    icon: "✍️",
  },
  {
    id: 18,
    title: "Làm sub & dịch video",
    category: "video",
    description: "Phụ đề tiếng Việt/Anh",
    price: "Ngon",
    image: "vip5.JPG",
    icon: "🌐",
  },
  {
    id: 19,
    title: "Thiết kế banner chạy ads",
    category: "design",
    description: "Banner chạy quảng cáo chuyên nghiệp",
    price: "Ngon",
    image: "motiongraphic.webp",
    icon: "📣",
  },
  {
    id: 20,
    title: "Dựng vlog du lịch",
    category: "video",
    description: "Hiệu ứng chuyển cảnh mượt mà",
    price: "Ngon",
    image: "vip5.JPG",
    icon: "🌍",
  },
];

export default function TabsWithCards() {
  const [activeTab, setActiveTab] = useState("all");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCards(true), 100); // simulate loading
  }, [activeTab]);

  const filteredCards =
    activeTab === "all"
      ? allCards
      : allCards.filter((card) => card.category === activeTab);

  return (
    <section className="py-16 w-screen">
      <div className="max-w-full px-6">
        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-3 flex-wrap">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-6 py-2 text-sm transition-all",
                activeTab === tab.id
                  ? "bg-white text-black shadow"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-0 transition-opacity duration-700"
          style={{ opacity: showCards ? 1 : 0 }}
        >
          {filteredCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative"
              style={{
                animation: "fadeInUp 0.4s ease",
                animationDelay: `${index * 0.05}s`,
                animationFillMode: "both",
              }}
            >
              <Link href={`/projects/detail`}>
                <div className="relative bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 cursor-pointer hover:border-white/20 hover:bg-black/30 group-hover:scale-[1.02] group-hover:-translate-y-2 hover:shadow-xl hover:shadow-white/5">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full max-h-[230px] h-[230px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="flex gap-2">
                        <button className="bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition hover:scale-110">
                          ❤️
                        </button>
                        <button className="bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition hover:scale-110">
                          👁
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-2 left-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-200">
                      <div className="bg-white/70 text-black px-3 py-1 rounded-full text-sm font-medium shadow">
                        {card.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-300">
                      <div className="text-white text-lg font-semibold drop-shadow">
                        {card.title}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
