import { motion } from "framer-motion";
import {
  FiArchive,
  FiCpu,
  FiDisc,
  FiEdit,
  FiSliders,
  FiType,
  FiVideo,
  FiVolume2,
} from "react-icons/fi";

const services = [
  {
    title: "Biên Tập Video",
    desc: "Đội ngũ biên tập viên chuyên nghiệp của chúng tôi sẽ tỉ mỉ lắp ghép và chỉnh sửa footage, tạo nên một câu chuyện mạch lạc, liền mạch và hấp dẫn.",
    icon: FiVideo,
  },
  {
    title: "Chỉnh Màu",
    desc: "Chúng tôi nâng cao chất lượng hình ảnh bằng kỹ thuật chỉnh màu chuyên nghiệp để tạo nên sản phẩm hoàn hảo.",
    icon: FiSliders,
  },
  {
    title: "Xử Lý Âm Thanh",
    desc: "Chúng tôi cung cấp dịch vụ xử lý âm thanh để đảm bảo thông điệp được truyền tải rõ ràng và chất lượng.",
    icon: FiVolume2,
  },
  {
    title: "Hoạt Hình 3D và CGI",
    desc: "Chúng tôi cung cấp dịch vụ hoạt hình 3D và CGI để tạo hiệu ứng hình ảnh sống động.",
    icon: FiCpu,
  },
  {
    title: "Phụ Đề và Hỗ Trợ Người Khiếm Thính",
    desc: "Chúng tôi thêm phụ đề để đảm bảo nội dung của bạn dễ tiếp cận với mọi đối tượng.",
    icon: FiType,
  },
  {
    title: "Livestream/Sự Kiện",
    desc: "Chúng tôi cung cấp dịch vụ livestream chuyên nghiệp cho các sự kiện, hội nghị, ra mắt sản phẩm với chất lượng cao.",
    icon: FiEdit,
  },
  {
    title: "Sản Xuất DVD và Blu-ray",
    desc: "Đối với phân phối vật lý, chúng tôi đảm bảo trình bày chuyên nghiệp.",
    icon: FiDisc,
  },
  {
    title: "Lưu Trữ và Sao Lưu",
    desc: "Lưu trữ an toàn và truy xuất nội dung giá trị của bạn.",
    icon: FiArchive,
  },
];

const images = ["/vip1.JPG", "/vip2.JPG", "/vip3.webp", "/vip5.webp"];
const duplicatedImages = [...images, ...images];

export default function PostProductionSection() {
  return (
    <section className="relative text-white py-5 px-2 md:py-16 md:px-6 w-[370px] md:w-[180vh!important] left-[10%]">
      {/* Background stripes */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-black/40 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_right,_transparent,_transparent_90px,_rgba(255,255,255,0.05)_91px,_transparent_92px)] rounded-2xl border border-gray-600/30" />

      {/* Main content */}
      <div className="relative z-10 max-w-[180vh] mx-auto p-10 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="relative pb-32">
            {" "}
            {/* padding-bottom for space under content */}
            <h2 className="text-3xl font-bold mb-2">Livestream/sự kiện</h2>
            <p className="text-sm text-gray-300 mb-6">
              Dịch vụ biên tập, chỉnh màu và hiệu ứng hình ảnh để hiện thực hóa
              tầm nhìn của bạn.
            </p>
            {/* Slider positioned at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-xl border border-gray-500/40">
              <motion.div
                className="flex gap-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {duplicatedImages.map((src, i) => (
                  <div
                    key={i}
                    className="min-w-[200px] max-w-[200px] flex-shrink-0"
                  >
                    <img
                      src={src}
                      alt={`Slide ${i}`}
                      className="w-full h-[130px] object-cover rounded-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  {/* Icon spin on hover */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="mt-1"
                  >
                    <Icon className="text-orange-400 text-lg" />
                  </motion.div>

                  {/* Text motion on hover */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-sm text-gray-400">{service.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
