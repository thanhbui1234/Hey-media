"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Danh sách logo khách hàng
const CUSTOMER_LOGOS = [
  { src: "/customer/vinpearl-logo-inkythuatso-1-13-10-21-19.png" },
  { src: "/customer/logo-vinfast-inkythuatso-21-11-08-55.png" },
  { src: "/customer/FPT_logo_2010.svg.png" },
  { src: "/customer/tai-logo-ngan-hang-vietcombank.png" },
  { src: "/customer/1349_Logo_mYi_cho_khYi_YYu_mYi.png" },
  { src: "/customer/Logo_MB_new.png" },
  { src: "/customer/Bamboo_Airways_Logo.svg.png" },
  { src: "/customer/Logo-Vinhomes.png" },
  { src: "/customer/VPBank_logo.svg.png" },
  { src: "/customer/Logo-Cong-ty-CP-Tap-doan-Ecopark.webp" },
  { src: "/customer/Logo_TPBank.svg.png" },
  { src: "/customer/Mercedes-Logo.svg.png" },
  { src: "/customer/Vietnam_Airlines_logo.svg.png" },
  { src: "/customer/4f9f272fee9bc5f0a287a7477985f8ad.png" },
  { src: "/customer/vinpearl-logo-inkythuatso-1-13-10-21-19.png" },
  { src: "/customer/logo-vinfast-inkythuatso-21-11-08-55.png" },
  { src: "/customer/FPT_logo_2010.svg.png" },
  { src: "/customer/tai-logo-ngan-hang-vietcombank.png" },
  { src: "/customer/1349_Logo_mYi_cho_khYi_YYu_mYi.png" },
  { src: "/customer/Logo_MB_new.png" },
  { src: "/customer/Bamboo_Airways_Logo.svg.png" },
  { src: "/customer/Logo-Vinhomes.png" },
  { src: "/customer/VPBank_logo.svg.png" },
  { src: "/customer/Logo-Cong-ty-CP-Tap-doan-Ecopark.webp" },
  { src: "/customer/Logo_TPBank.svg.png" },
  { src: "/customer/Mercedes-Logo.svg.png" },
  { src: "/customer/Vietnam_Airlines_logo.svg.png" },
  { src: "/customer/4f9f272fee9bc5f0a287a7477985f8ad.png" },
];

const BrandLogo = ({
  src,
  alt,
  noFilter,
}: {
  src: string;
  alt: string;
  noFilter?: boolean;
}) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center py-2 transition-all duration-300"
  >
    <div className="relative w-[70px] h-[70px]">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain transition-opacity duration-300 ${
          noFilter
            ? "mix-blend-multiply"
            : "filter brightness-0 invert opacity-70 hover:opacity-100"
        }`}
        sizes="300px"
      />
    </div>
  </motion.div>
);

const SlideGrid = () => {
  return (
    <>
      <div className="text-center w-full pb-8 mt-20">
        <p className="text-white text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md transform transition-all hover:scale-105 duration-300">
          Khách hàng
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex justify-center pb-16"
      >
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-3 max-w-7xl w-full px-6">
          {CUSTOMER_LOGOS.map((logo, index) => (
            <BrandLogo
              key={index}
              src={logo.src}
              alt={`Customer logo ${index + 1}`}
              // noFilter={logo.noFilter}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SlideGrid;
