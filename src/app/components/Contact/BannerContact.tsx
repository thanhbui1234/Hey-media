"use client";

import ContactForm from "@/app/components/Contact/ContactForm";
import { motion } from "framer-motion";

const words = "Kết nối với chúng tôi".split(" ");

const BannerContact = () => {
  return (
    <div className="relative h-screen w-full mt-20 overflow-hidden bg-gradient-to-b from-gray-800 gap-16 to-black flex flex-col items-center justify-center px-6">
      {/* Vầng sáng mờ như ánh đèn sân khấu */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] top-[-100px] left-[-100px] z-0 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] bottom-[-80px] right-[-80px] z-0 animate-pulse delay-1000" />

      {/* Nội dung chính */}
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mx-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Chúng tôi là một studio sáng tạo biến ý tưởng của bạn thành nội dung
          trực quan tuyệt đẹp với thiết kế táo bạo và hoạt hình mượt mà.
        </motion.p>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default BannerContact;
