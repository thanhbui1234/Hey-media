"use client";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="mt-20 ">
      <PinContainer
        title="219 Trung Kính, Cầu Giấy, Hà Nội"
        href="https://maps.app.goo.gl/Mt21CCoXSX7EfLM19"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Địa chỉ
          </h3>
          <iframe
            src="https://maps.google.com/maps?q=21.020365,105.800239&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <div className="text-base !m-0 !p-0 font-normal"></div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
