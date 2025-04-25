"use client";

import Image from "next/image";

export type OfferingMobileCardsProps = {
  heading: string;
  description: string;
  img: string;
  w: number;
  h: number;
  style: string;
};

export const OfferingMobileViewCards = ({
  heading,
  description,
  img,
  w,
  h,
}: OfferingMobileCardsProps) => {
  return (
    <div className="bg-cyan-100 p-1 rounded-xl flex items-center justify-center w-full h-full">
      <div className="bg-white rounded-xl w-full h-full flex flex-col items-start p-6 relative">
        <Image
          src={img}
          width={w}
          height={h}
          alt="offering image"
          className="absolute top-[-40px] right-6"
        />
        <div className="mt-20">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">{heading}</h3>
          <p className="text-sm text-gray-700 mb-4">{description}</p>
          <button className="px-6 py-2 bg-[#005ab1] text-white rounded-lg text-sm">
            EXPLORE OUR PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};
