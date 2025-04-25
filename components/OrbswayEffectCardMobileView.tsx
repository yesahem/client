"use client";

import Image from "next/image";

export type OrbswayEffectCardMobileViewProps = {
  number: string;
  heading: string;
  description: string;
};

export const OrbswayEffectCardMobileView = ({
  number,
  heading,
  description,
}: OrbswayEffectCardMobileViewProps) => {
  return (
    <div className="bg-white rounded-xl p-6 w-full h-full shadow-md">
      <div className="flex flex-col items-center relative h-full w-full">
        <h3 className="text-8xl font-bold bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent translate-y-6">
          {number}
        </h3>
        <div className="flex items-start gap-4 w-full mt-16 ml-6">
          <div className="w-fit h-fit p-4 bg-gray-200 rounded-full">
            <Image src="/hospital.svg" width={30} height={30} alt="hospital icon" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-gray-900">{heading}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
