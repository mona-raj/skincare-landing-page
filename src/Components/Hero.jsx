import React from "react";

const Hero = () => {
  return (
    <section className="h-full w-full bg-secondary text-accent font-inter pt-[4.4vh] pl-[5vw] pr-[5vw] relative overflow-hidden">
      <div className="h-screen flex justify-between flex-col gap-0">
        <div className="flex items-center justify-between">
          <p className="max-w-[270px] indent-20 text-justify leading-[1.2em]">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
          <h1 className="text-[5.2em] max-w-[270px] leading-[0.85em] hyphens-auto uppercase font-bold inline">
            Glow Natur&shy;ally
          </h1>
          <img
            className="scale-75"
            src="..\src\assets\images\skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 1.png"
            alt=""
          />
        </div>
        <div className="h-[75%] flex items-center justify-start gap-[16vw]">
          <button className="rounded-[100px] bg-accent text-secondary pt-[8px] pb-[8px] pl-[16px] pr-[16px] mb-[15vh]">
            Shop Now
          </button>
          <img
            className="scale-70 z-1"
            src="..\src\assets\images\ChatGPT Image Jun 15, 2025, 10_24_47 PM 2.png"
            alt=""
          />
        </div>
    
      </div>
        <h1 className="font-extrabold uppercase text-[16em] z-0 top-123 -left-4 absolute tracking-wider ">
          skincare
        </h1>
    </section>
  );
};

export default Hero;
