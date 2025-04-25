"use client";

import Image from "next/image";

export type OrbswayAtAGlanceSectionCardsProps = {
  img: string;
  heading: string;
  description: string;
};

export const OrbswayAtAGlanceSectionCards = ({
  img,
  heading,
  description,
}: OrbswayAtAGlanceSectionCardsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-1 bg-gradient-to-b from-sky-400/60 to-cyan-200/50 rounded-lg">
        <div className="bg-white rounded-lg p-4 flex flex-col">
          {/* Icon */}
          <div className="flex justify-end mb-2">
            <Image
              src={img}
              width={40}
              height={40}
              alt={`${heading} icon`}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-1">
            {heading}
          </h3>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
