"use client";

import { Button } from "@/components/ui/button";
import { projectItem } from "@/db/schema";
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

export default function TabsWithCards() {
  const [activeTab, setActiveTab] = useState("all");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCards(true), 100); // simulate loading
  }, [activeTab]);

  const filteredCards =
    activeTab === "all"
      ? projectItem
      : projectItem.filter((card) => card.category === activeTab);

  return (
    <section className="py-16 ">
      <div className=" px-6">
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
              <Link href={`/projects/${card.id}`}>
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
