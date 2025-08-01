'use client'
import SlideGrid from '@/app/components/Home/Client';
import HeroSection from '@/app/components/Home/HeroSection';
import BannerSlideFoot from '@/app/components/Slide/SlideFoot';
import dynamic from 'next/dynamic';

// Lazy load components with loading fallbacks
const AboutCompany = dynamic(() => import("@/app/components/Home/About"), {
  ssr: false,
  loading: () => {
    console.log("⏳ [dynamic] Loading About Company...");
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }
});

const Project = dynamic(() => import("@/app/components/Home/Project"), {
  ssr: false,
  loading: () => {
    console.log("⏳ [dynamic] Loading Projects...");
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="text-center">
          <div className="animate-bounce text-white text-2xl mb-2">📽️</div>
          <p className="text-white">Loading projects...</p>
        </div>
      </div>
    );
  }
});


export default function Home() {
  return (
    <main className="relative">
      <div id="home" className="relative z-10">
        <HeroSection />
      </div>
      <div id="about">
        <AboutCompany />
      </div>
      <div id="services">
        <Project />
      </div>
      {/* <div id="projects">
        <Services />
      </div> */}
      {/* <CollapsibleSectionPage /> */}
      <SlideGrid />
      <BannerSlideFoot />
    </main>
  );
}
