"use client";

import { AnimatedPinDemo } from "@/app/components/Contact/3d";
import ContactForm from "@/app/components/Contact/ContactForm";
import { motion } from "framer-motion";

const words = "Kết nối với chúng tôi".split(" ");

const BannerContact = () => {
  return (
    <div className="relative min-h-screen w-full mt-20 overflow-hidden bg-gradient-to-b from-gray-800 to-black flex flex-col items-center justify-center px-6 py-12">
      {/* Vầng sáng mờ như ánh đèn sân khấu */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] top-[-100px] left-[-100px] z-0 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] bottom-[-80px] right-[-80px] z-0 animate-pulse delay-1000" />

      {/* Container chính */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header section */}
        <motion.div
          className="text-center text-white mb-16"
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
            Hey Media là đơn vị chuyên sản xuất nội dung truyền thông marketing cho thương hiệu, doanh nghiệp và cá nhân.
          </motion.p>
        </motion.div>

        {/* Main content section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12  lg:gap-20 items-start justify-items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {/* Left side - Map */}
          <div className="w-full max-w-md lg:max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              {/* <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10"> */}
              <AnimatedPinDemo />
              {/* </div> */}
            </motion.div>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full  max-w-md lg:max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-16 space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerContact;
