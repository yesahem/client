"use client"

import Image from "next/image"

export const HeroSection = () => {
    return(
        <div className=" w-full h-[70%] flex justify-between mt-6">
        <div className="w-[40%] h-full flex flex-col px-28 pt-14">
          <h1 className="text-[#005ab1] font-bold text-5xl">
            Next-Gen 
            Vision Therapy
          </h1>
          <p className="mt-4 font-semibold">
            Address vision challenges with innovative, 
            cloud-based solutions—trusted by leading eye 
            institutes.
          </p>
          <div className="flex gap-x-4 mt-4">
            <div>
              <button className="w-26 h-10 bg-white rounded-lg text-center border border-[#005ab1]">
                Learn More
              </button>
            </div>
            <div>
              <button className="w-44 h-10 bg-[#005ab1] text-center text-white rounded-lg">
                Request For Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full  flex justify-center items-center">
          <Image src={"/Group 11.svg"} width={350} height={300} alt="boy-girl-table"/>
        </div>
      </div>
    )
}