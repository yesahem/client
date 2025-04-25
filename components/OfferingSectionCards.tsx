"use client";

import Image from "next/image";

export type OfferingSectionCardsProps = {
  image: string;
  imgw: number;
  imgh: number;
  styling: string;
  heading: string;
  description: string;
};

export const OfferingSectionCards = ({
  image,
  imgh,
  imgw,
  heading,
  description,
}: OfferingSectionCardsProps) => {
  return (
    <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[40%] h-auto bg-white rounded-xl my-4 flex justify-center items-center">
      <div className="w-[99%] h-[99%] bg-gradient-to-b from-sky-400 to-cyan-200 rounded-xl flex justify-center items-center">
        <div className="w-[99%] h-[99%] bg-white rounded-xl p-4">
          <div className="w-full flex justify-center">
            <Image
              src={image}
              width={imgw}
              height={imgh}
              alt={`${heading} image`}
              className="w-auto h-auto object-contain max-h-40"
            />
          </div>
          <h3 className="font-bold text-xl sm:text-xl md:text-xl lg:text-2xl mt-4">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm mt-2">{description}</p>
          <button className="bg-[#005ab1] text-white p-2 rounded-lg mt-4 text-xs sm:text-sm hover:bg-[#004a8e] transition-colors">
            EXPLORE OUR PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};
