"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { projectItem } from "@/db/schema";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
interface ProjectDetailProps {
  params: { id: string };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projectItem.find((item) => item.id === +id);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project not found
          </h1>
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundBeams />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 z-50"
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-12 py-24 px-4  mx-auto relative z-10"
      >
        {/* Project Title */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.h1
            className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-400 font-bold mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h1>

          {/* Project Meta Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Tag size={16} className="text-green-400" />
              <span className="text-sm text-neutral-300">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-yellow-400">
                {project.price}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div variants={scaleVariants} className="w-full max-w-5xl">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <iframe
              width="100%"
              height="540"
              src={`https://www.youtube.com/embed/${project.linkYtb}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="relative rounded-3xl w-full aspect-video shadow-2xl border border-white/10"
            />
          </motion.div>
        </motion.div>

        {/* Description Section */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Project Overview
            </h2>
            <TextGenerateEffect
              words={project.description}
              className="text-lg leading-relaxed text-neutral-300"
            />
          </motion.div>
        </motion.div>

        {/* Project Image */}
        <motion.div variants={scaleVariants} className="w-full max-w-4xl">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Image
              alt={project.description}
              src={`/${project.image}`}
              unoptimized
              width={0}
              height={0}
              sizes="100vw"
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </motion.div>

        {/* Tech Stack / Tags */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl">
          <motion.div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
              Project Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-2xl">{project.icon}</span>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Category</p>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold">$</span>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Price</p>
                  <p className="text-white font-medium">{project.price}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={`https://www.youtube.com/watch?v=${project.linkYtb}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>Watch on YouTube</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              // You could add a toast notification here
            }}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            <span>Share Project</span>
          </motion.button>
        </motion.div>

        {/* Similar Projects Section */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-[2500px] mt-12"
        >
          <motion.div className=" rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></div>
              Similar Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectItem
                .filter((item) => item.id !== project.id)
                .slice(0, 6)
                .map((similarProject, index) => (
                  <motion.div
                    key={similarProject.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/projects/${similarProject.id}`}>
                      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                          <Image
                            src={`https://img.youtube.com/vi/${similarProject.linkYtb}/maxresdefault.jpg`}
                            alt={similarProject.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `/${similarProject.image}`;
                            }}
                          />

                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                            >
                              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                            </motion.div>
                          </div>

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>

                        {/* Project Info */}
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                            {similarProject.title}
                          </h3>
                          <p className="text-neutral-400 text-sm line-clamp-3 mb-3">
                            {similarProject.description}
                          </p>

                          {/* Category and Price */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-white border border-white/20">
                              {similarProject.category}
                            </span>
                            <span className="text-sm font-semibold text-yellow-400">
                              {similarProject.price}
                            </span>
                          </div>

                          {/* View Project Button */}
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors"
                          >
                            <span>View Project</span>
                            <ExternalLink size={14} />
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            {/* View All Projects Button */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                >
                  View All Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 z-50"
        >
          <ArrowLeft size={20} className="rotate-90" />
        </motion.button>
      </motion.div>
    </div>
  );
}
