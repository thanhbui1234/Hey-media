"use client";

import Industries from "@/app/components/Home/services/Industries";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-20 justify-center items-center">
        <ButtonCustom
          className="cursor-pointer"
          onClick={() => {
            router.push("/projects");
          }}
          text="Khám phá dự án"
        />
        <h3 className=" text-white text-4xl font-bold font-sans">
          Chúng tôi là các chuyên gia video trong nhiều ngành công nghiệp!
        </h3>
        <Industries />
      </div>
    </>
  );
};

export default Services;
