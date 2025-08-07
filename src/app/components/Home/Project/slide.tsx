import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// ... existing code ...
const cardData = [
  {
    img: "/services/TVC.png",
    title: "TVC",
    youtubeId: "qjNOy80MyTc",
    video: "/videos/VIDEO_DOC_TVC.mp4",
    serviceId: "tvc",
  },
  {
    img: "/services/Phim doanh nghiệp.png",
    title: "PHIM DOANH NGHIỆP",
    youtubeId: "26ozVYUZMcY",
    video: "/videos/VIDEO_DOC_PDN.mp4",
    serviceId: "phim-doanh-nghiep",
  },
  {
    img: "/services/TikTok.png",
    title: "TIKTOK",
    youtubeId: "mngtcfcaVrI",
    video: "/videos/VIDEO_DOC_TIKTOKmp4.mp4",
    serviceId: "tiktok",
  },
  {
    img: "/services/Chụp ảnh1.png",
    title: "CHỤP ẢNH",
    youtubeId: "VR8ooa3G_5M",
    video: "",
    serviceId: "chup-anh",
  },
  {
    img: "/services/Livestream.jpg",
    title: "LIVESTREAM/SỰ KIỆN",
    youtubeId: "VR8ooa3G_5M",
    video: "/videos/VIDEO_DOC_EVENT_TIKTOK.mp4",
    serviceId: "livestream-su-kien",
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadingVideos, setLoadingVideos] = useState<Set<number>>(new Set());
  const [cachedVideos, setCachedVideos] = useState<Set<number>>(new Set());
  const router = useRouter();
  const videoBlobsRef = useRef<Map<number, string>>(new Map());

  // Cleanup blob URLs on unmount
  useEffect(() => {
    return () => {
      videoBlobsRef.current.forEach(blobUrl => {
        URL.revokeObjectURL(blobUrl);
      });
      videoBlobsRef.current.clear();
    };
  }, []);

  // Load video on first hover
  const handleVideoLoad = async (cardIndex: number, videoSrc: string) => {
    // If already cached, return early
    if (cachedVideos.has(cardIndex)) {
      console.log(`Video ${cardIndex} already cached`);
      return;
    }

    // If currently loading, don't start another load
    if (loadingVideos.has(cardIndex)) {
      console.log(`Video ${cardIndex} already loading`);
      return;
    }

    console.log(`Starting to load video ${cardIndex}`);
    setLoadingVideos(prev => new Set([...prev, cardIndex]));

    try {
      const response = await fetch(videoSrc);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      // Cache the blob URL
      videoBlobsRef.current.set(cardIndex, blobUrl);
      setCachedVideos(prev => new Set([...prev, cardIndex]));
      
      console.log(`Video ${cardIndex} cached successfully`);
    } catch (error) {
      console.warn(`Failed to load video ${cardIndex}:`, error);
    } finally {
      setLoadingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(cardIndex);
        return newSet;
      });
    }
  };

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
    const card = cardData[idx];
    
    // Load video if it has one and isn't cached yet
    if (card.video && !cachedVideos.has(idx)) {
      handleVideoLoad(idx, card.video);
    }
  };

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
            DỊCH VỤ
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
            className="flex md:flex-row flex-col justify-center items-center md:gap-4 gap-6 px-8 mx-auto pb-4 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          >
            {cardData.map((card, idx) => (
              <motion.div
                key={card.img}
                tabIndex={0}
                aria-label={`Card ${card.title}`}
                className="md:flex-1 md:max-w-[280px] md:min-w-[200px] w-72 md:h-[400px] h-[500px] rounded-xl overflow-hidden shadow-lg flex flex-col justify-end relative focus:outline-none focus:ring-2 focus:ring-white/50 transition-all cursor-pointer group"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                  zIndex: 20,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/services?section=${card.serviceId}`);
                }}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
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

                {/* Video/Image Display Logic */}
                {hoveredIndex === idx && card.video ? (
                  <>
                    {loadingVideos.has(idx) ? (
                      // Loading state
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-15">
                        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-white text-sm mt-2">Loading video...</p>
                      </div>
                    ) : cachedVideos.has(idx) ? (
                      // Cached video
                      <video
                        src={videoBlobsRef.current.get(idx)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                        onLoadStart={() => console.log(`Video ${idx} started loading`)}
                        onCanPlay={() => console.log(`Video ${idx} can play`)}
                      />
                    ) : null}
                    
                    {/* Always show image as fallback */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className={`absolute inset-0 w-full h-[600px !important] object-cover transition-transform duration-700 group-hover:scale-110 transition-opacity duration-300 ${
                        cachedVideos.has(idx) && !loadingVideos.has(idx) ? 'opacity-0' : 'opacity-100'
                      }`}
                      priority={idx === 0}
                    />
                  </>
                ) : (
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0 w-full h-[600px !important] object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={idx === 0}
                  />
                )}

                {/* Play button overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </motion.div>
                </div> */}

                <div className="relative z-20 p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                  <motion.div
                    className="text-white text-xl font-bold mb-1 group-hover:text-gray-200 transition-colors cursor-pointer"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/services?section=${card.serviceId}`);
                    }}
                  >
                    {card.title}
                  </motion.div>
                 
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Removed modal section as per new_code */}
    </>
  );
};

export default ProjectSlide;
