import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const cardData = [
  {
    img: "/vip1.JPG",
    title: "TVC",
    subtitle: "MB BANK",
    youtubeId: "qjNOy80MyTc",
  },
  {
    img: "/vip2.jpg",
    title: "Phim Doanh Nghiệp",
    subtitle: "ĐEN",
    youtubeId: "26ozVYUZMcY",
  },
  {
    img: "/vip3.JPG",
    title: "TikTok",
    subtitle: "ARTIST 3",
    youtubeId: "mngtcfcaVrI",
  },
  {
    img: "/vip5.JPG",
    title: "Chụp ảnh",
    subtitle: "ARTIST 4",
    youtubeId: "VR8ooa3G_5M",
  },
  {
    img: "/vip5.JPG",
    title: "Livestream/sự kiện",
    subtitle: "ARTIST 5",
    youtubeId: "VR8ooa3G_5M",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
};

const ProjectSlide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleOpenModal = useCallback((youtubeId: string) => {
    setActiveYoutubeId(youtubeId);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setActiveYoutubeId(null);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handleCloseModal]);

  // Focus trap for modal
  useEffect(() => {
    if (isModalOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="relative overflow-hidden py-16 ">
        {/* Artistic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] opacity-10 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-[20%] w-[60%] h-[40%] opacity-10 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl"></div>
        </div>

        {/* Title with artistic styling */}
        <div className="relative z-10 text-center mb-16">
          <motion.h2
            className="text-5xl font-bold text-white inline-block pb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Dự Án Nổi Bật
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-white/50 mx-auto mt-2 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>

        <div className="relative z-10 overflow-hidden mb-28">
          <motion.div
            className="flex md:flex-row flex-col justify-center items-center md:gap-4 gap-6 px-4 max-w-7xl mx-auto md:overflow-x-auto pb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          >
            {cardData.map((card, idx) => (
              <motion.div
                key={card.img}
                tabIndex={0}
                aria-label={`Card ${card.title} by ${card.subtitle}`}
                className="md:w-56 w-72 md:h-[350px] h-[400px] md:flex-shrink-0 rounded-xl overflow-hidden shadow-lg flex flex-col justify-end relative focus:outline-none focus:ring-2 focus:ring-white/50 transition-all cursor-pointer group"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                  zIndex: 20,
                }}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => handleOpenModal(card.youtubeId)}
                onKeyDown={(e) => {
                  if ((e.key === "Enter" || e.key === " ") && card.youtubeId) {
                    e.preventDefault();
                    handleOpenModal(card.youtubeId);
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />

                {/* Subtle border effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow:
                      hoveredIndex === idx
                        ? "0 0 25px 3px rgba(255, 255, 255, 0.3), inset 0 0 25px 3px rgba(255, 255, 255, 0.2)"
                        : "none",
                  }}
                />

                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={idx === 0}
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </motion.div>
                </div>

                <div className="relative z-20 p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                  <motion.div
                    className="text-white text-xl font-bold mb-1 group-hover:text-gray-200 transition-colors"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {card.title}
                  </motion.div>
                  <div className="text-white/80 text-sm group-hover:text-white/90 transition-colors">
                    {card.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {isModalOpen && activeYoutubeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          onClick={handleCloseModal}
        >
          <motion.div
            className="relative bg-neutral-900 rounded-2xl shadow-2xl p-0 max-w-4xl w-full flex flex-col items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              ref={closeBtnRef}
              onClick={handleCloseModal}
              aria-label="Đóng video"
              className="absolute top-3 right-3 text-white bg-black/60 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50 z-10 hover:bg-black/80 transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
            <iframe
              width="960"
              height="540"
              src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl w-full aspect-video"
            ></iframe>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectSlide;
