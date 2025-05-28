import BannerContact from "@/app/components/Contact/BannerContact";
import { WorldMapDemo } from "@/app/components/Contact/wordmap";
const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-800 to-black">
      <BannerContact />
      <WorldMapDemo />
    </div>
  );
};

export default page;
