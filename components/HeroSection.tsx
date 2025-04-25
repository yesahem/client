"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full h-[70%] flex justify-between mt-6 overflow-x-hidden">
      {/* Left Section (Text Content) */}
      <div className="xl:w-[40%] xl:px-28 xl:pt-16 lg:w-[60%] h-full flex flex-col lg:px-28 pt-12 md:w-[57%] md:px-24 pt-14">
        <h1 className="lg:text-[#005ab1] font-bold lg:text-5xl md:text-3xl ml-6 text-[#005ab1]">
          Next-Gen Vision Therapy
        </h1>
        <p className="mt-4 font-semibold md:-ml-6">
          Address vision challenges with innovative, cloud-based solutions—
          trusted by leading eye institutes.
        </p>
        <div className="flex gap-x-4 mt-4 md:-ml-6">
          <button className="w-28 h-10 bg-white rounded-lg text-center border border-[#005ab1] hover:bg-[#f2f2f2] transition-all duration-200">
            Learn More
          </button>
          <button className="w-44 h-10 bg-[#005ab1] text-center text-white rounded-lg hover:bg-[#003c7d] transition-all duration-200">
            Request For Free Trial
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-[40%] h-full flex justify-center items-center">
        <Image
          src="/Group 11.svg"
          width={340}
          height={300}
          alt="boy and girl at table with eye care"
          className="object-contain"
        />
      </div>
    </section>
  );
};
