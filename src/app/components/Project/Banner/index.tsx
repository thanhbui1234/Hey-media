"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BannerProject = () => {
  return (
    <div className="h-[35rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Dự án của chúng tôi
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-5 text-sm text-center relative z-10">
          Chúng tôi cung cấp giải pháp media toàn diện, bao gồm quay phim, chụp
          hình, dựng video, livestream và thiết kế nội dung truyền thông. Với
          đội ngũ sáng tạo, thiết bị hiện đại và quy trình làm việc chuyên
          nghiệp, chúng tôi giúp doanh nghiệp xây dựng hình ảnh ấn tượng, lan
          tỏa thông điệp một cách mạnh mẽ và hiệu quả trên mọi nền tảng. Dù là
          quảng bá sản phẩm, sự kiện hay thương hiệu cá nhân, chúng tôi luôn
          đồng hành để biến ý tưởng thành những sản phẩm truyền thông chất lượng
          cao.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default BannerProject;
