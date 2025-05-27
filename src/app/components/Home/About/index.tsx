"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutCompany() {
  return (
    <>
      <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="105296-669669130_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-5"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-5"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-32 right-16 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl z-5"
        />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 md:py-20"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-6 leading-tight"
            >
              Về Chúng Tôi
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1  gap-8 md:gap-12">
            {/* Main Description */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white/90">
                    Bắt đầu
                  </h2>
                </div>
                <TextGenerateEffect
                  words="Mọi ý tưởng lớn đều bắt đầu từ những điều nhỏ nhất. Một chiếc máy quay cầm tay, vài dòng kịch bản nguệch ngoạc và một niềm tin: nội dung chân thật sẽ chạm đến trái tim người xem. Chúng tôi không học làm phim chuyên nghiệp, nhưng chúng tôi biết cách lắng nghe, kể lại và làm cho câu chuyện trở nên sống động. Mỗi dự án, mỗi khung hình đều là một hành trình – không chỉ của nhân vật, mà còn là hành trình trưởng thành của chính chúng tôi."
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                />
              </motion.div>
            </motion.div>

            {/* Secondary Description */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: -2 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white/90">
                    Tầm nhìn
                  </h2>
                </div>
                <TextGenerateEffect
                  words="Trở thành đơn vị tiên phong trong việc kể chuyện bằng hình ảnh, nơi mà mỗi thước phim, mỗi khung hình đều mang giá trị kết nối con người với cảm xúc thật.
Chúng tôi hướng đến việc xây dựng một hệ sinh thái sáng tạo bền vững – nơi những người trẻ có thể tự do thể hiện góc nhìn riêng, và cùng nhau tạo ra những sản phẩm mang dấu ấn Việt Nam ra thế giới.
Tầm nhìn của chúng tôi không chỉ nằm ở chất lượng hình ảnh, mà còn ở chiều sâu nội dung – vì chúng tôi tin rằng, nội dung tốt có thể thay đổi cách người ta nhìn nhận về thế giới."
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
