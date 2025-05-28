"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nguyễn Vĩnh Duy",
    role: "Founder & Creative Producer",
    image: "/vip1.JPG",
    facebook: "https://facebook.com/duy",
  },
  {
    name: "Tú Nguyễn",
    role: "Founder & Executive Producer",
    image: "/vip2.jpg",
    facebook: "https://facebook.com/tu",
  },
  {
    name: "Thái Hà",
    role: "Partner & Executive Producer",
    image: "/vip3.webp",
    facebook: "https://facebook.com/ha",
  },
  {
    name: "Kiên Nguyễn",
    role: "Partner & Executive Producer",
    image: "/vip5.webp",
    facebook: "https://facebook.com/kien",
  },
  {
    name: "Kiên Nguyễn",
    role: "Partner & Executive Producer",
    image: "/vip5.webp",
    facebook: "https://facebook.com/kien",
  },
  {
    name: "Kiên Nguyễn",
    role: "Partner & Executive Producer",
    image: "/vip5.webp",
    facebook: "https://facebook.com/kien",
  },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 0 #0000" },
  hover: { scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

const Team = () => {
  return (
    <div className="space-y-12 mt-10 px-6 py-12 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="text-center">
        <TextGenerateEffect
          words="Peek Behind the Curtain: Meet Our Fantastic Team!"
          className="text-4xl md:text-5xl font-bold text-gray-800"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary group transition-all"
            tabIndex={0}
            aria-label={`Team member: ${member.name}`}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            animate="rest"
            variants={cardVariants}
            onClick={() => window.open(member.facebook, "_blank")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                window.open(member.facebook, "_blank");
            }}
          >
            <div className="relative w-full aspect-[4/5]">
              <div className="relative w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 2}
                />
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
                >
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 text-black rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none"
                    aria-label={`Open ${member.name}'s Facebook`}
                    tabIndex={-1}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(member.facebook, "_blank");
                    }}
                  >
                    <FaFacebook className="w-5 h-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </motion.div>
              </div>
            </div>

            <div className="p-4 text-center bg-white rounded-b-2xl">
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {member.name}
              </div>
              <div className="text-sm text-gray-500 tracking-wide uppercase">
                {member.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
