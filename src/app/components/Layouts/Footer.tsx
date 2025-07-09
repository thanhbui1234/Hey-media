"use client";

import ButtonCustom from "@/components/ui/ButtonCustom";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCamera,
  FaEdit,
  FaFacebookF,
  FaFilm,
  FaInstagram,
  FaLinkedinIn,
  FaPlay,
  FaVimeoV,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-[#FF5F38] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-24 pb-8">
        {/* Hero CTA Section */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaFilm className="text-5xl text-[#FF5F38]" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              HEY MEDIA
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Không chỉ giới hạn trong video, chúng tôi là đồng minh sáng tạo của
            bạn
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <FaPlay className="text-[#FF5F38]" />
              <span className="text-sm">Video Production</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaCamera className="text-[#FF5F38]" />
              <span className="text-sm">Photography</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaEdit className="text-[#FF5F38]" />
              <span className="text-sm">Post Production</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <ButtonCustom
                className="cursor-pointer text-lg px-8 py-4 bg-gradient-to-r from-[#FF5F38] to-[#FF7A5A] hover:from-[#E54A2B] hover:to-[#FF5F38] shadow-lg hover:shadow-xl transition-all duration-300"
                text="Bắt đầu hợp tác"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Main Grid Section */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Studio Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-[#FF5F38]">Studio</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Hey Media là studio sáng tạo chuyên về sản xuất video, nhiếp ảnh
              và các dịch vụ media marketing. Chúng tôi mang đến những giải pháp
              sáng tạo và chuyên nghiệp cho thương hiệu của bạn.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <h5 className="font-semibold text-white mb-2">Địa chỉ</h5>
                <p className="text-gray-400">
                  86 Đại An
                  <br />
                  Văn Quán, Hà Đông
                  <br />
                  Hà Nội, Việt Nam
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <h5 className="font-semibold text-white mb-2">Liên hệ</h5>
                <p className="text-gray-400">
                  hey.productionsvn@gmail.com
                  <br />
                  0966787864
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-[#FF5F38]">
              Điều hướng
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Trang chủ", href: "/" },
                { name: "Dự án", href: "/projects" },
                { name: "Dịch vụ", href: "/services" },
                { name: "Về chúng tôi", href: "/about" },
                { name: "Liên hệ", href: "/contact" },
              ].map((item, idx) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#FF5F38] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-[#FF5F38] transition-colors"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-[#FF5F38]">Kết nối</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Theo dõi chúng tôi để cập nhật những dự án mới nhất
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { Icon: FaFacebookF, name: "Facebook", color: "#1877F2" },
                { Icon: FaInstagram, name: "Instagram", color: "#E4405F" },
                { Icon: FaVimeoV, name: "Vimeo", color: "#1AB7EA" },
                { Icon: FaLinkedinIn, name: "LinkedIn", color: "#0A66C2" },
              ].map(({ Icon, name, color }) => (
                <motion.a
                  key={name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  style={
                    {
                      "--hover-color": color,
                    } as React.CSSProperties
                  }
                >
                  <Icon className="text-gray-400 group-hover:text-[var(--hover-color)] transition-colors" />
                  <span className="text-xs text-gray-400 group-hover:text-white">
                    {name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="max-w-7xl mx-auto pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaFilm className="text-[#FF5F38]" />
              <span>
                © {new Date().getFullYear()} Hey Media Studio. All rights
                reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-[#FF5F38] transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#FF5F38] transition-colors"
              >
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
