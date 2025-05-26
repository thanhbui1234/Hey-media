import BannerContact from "@/app/components/Contact/BannerContact";
import GoogleMapEmbed from "@/app/components/Contact/GoogleMap";
const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-800 to-black">
      <BannerContact />
      <GoogleMapEmbed />
    </div>
  );
};

export default page;
