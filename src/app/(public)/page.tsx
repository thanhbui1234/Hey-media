import AboutCompany from "@/app/components/Home/About";
import SlideGrid from "@/app/components/Home/Client";
import HeroSection from "@/app/components/Home/HeroSection";
import Project from "@/app/components/Home/Project";
import Services from "@/app/components/Home/services";
import BannerSlideFoot from "@/app/components/Slide/SlideFoot";
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
      <div id="projects">
        <Services />
      </div>
      {/* <CollapsibleSectionPage /> */}
      <SlideGrid />
      <BannerSlideFoot />
    </main>
  );
}
