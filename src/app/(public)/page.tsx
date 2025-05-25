import AboutCompany from "@/app/components/Home/About";
import SlideGrid from "@/app/components/Home/Client";
import HeroSection from "@/app/components/Home/HeroSection";
import Project from "@/app/components/Home/Project";
import Services from "@/app/components/Home/services";
import BannerSlideFoot from "@/app/components/Slide/SlideFoot";
export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <AboutCompany />
      <Project />
      {/* <CollapsibleSectionPage /> */}
      <Services />
      <SlideGrid />
      <BannerSlideFoot />
    </main>
  );
}
