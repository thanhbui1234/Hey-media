"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Đỗ Hồng Sơn",
    role: "Director of Photography",
    image: "/teams/Đỗ Hồng Sơn - Director of Photography.jpg",
  },
  {
    name: "Nguyễn Hữu Bảo Nhân",
    role: "Camera Operator",
    image: "/teams/Nguyễn Hữu Bảo Nhân - Camera Operator.jpg",
  },
  {
    name: "Quang Khải",
    role: "Producer",
    image: "/teams/Quang Khải - Producer.jpg",
  },
  {
    name: "Việt Hoàng",
    role: "Assistant Director",
    image: "/teams/Việt Hoàng - Assistant Director.jpg",
  },
  {
    name: "Vương Minh Tuấn",
    role: "Director",
    image: "/teams/Vương Minh Tuấn - Director.jpg",
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
    <div className="space-y-12 mt-10 px-6 py-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-700/80 rounded-3xl overflow-hidden border border-gray-700 shadow-xl focus:outline-none focus:ring-2 focus:ring-primary group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/30"
            tabIndex={0}
            aria-label={`Team member: ${member.name}`}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            animate="rest"
            variants={cardVariants}
            // Xoá logic Facebook
          >
            <div className="relative w-full aspect-[4/5]">
              <div className="relative w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top rounded-t-3xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 2}
                />
                {/* Xoá overlay Facebook */}
              </div>
            </div>

            <div className="p-5 text-center bg-gradient-to-t from-gray-900/80 via-gray-800/80 to-transparent rounded-b-3xl">
              <div className="text-xl font-bold text-white mb-1 drop-shadow-lg tracking-wide">
                {member.name}
              </div>
              <div className="text-xs text-gray-300 tracking-widest uppercase font-medium">
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
