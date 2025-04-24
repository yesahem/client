"use client"

import Image from "next/image"

export type OrbswayAtAGlanceSectionCardsProps={
    img:string,
    heading:string,
    description:string,
}

export const OrbswayAtAGlanceSectionCards = ({img,heading,description}:OrbswayAtAGlanceSectionCardsProps) => {
    return(
        <div className="bg-white flex justify-center items-center rounded-lg">
            <div className="w-[99%] h-[99%] bg-gradient-to-b from-sky-400/60 to-cyan-200/50 flex justify-center items-center rounded-lg ">
            <div className="flex flex-col bg-white w-[99%] h-[99%] rounded-lg">
                <div className=" flex w-full h-12 justify-end">
                <Image src={img} color="rgba(18, 92, 171, 0)" width={50} height={50} alt="image" className="mr-4 mt-4"/>
                </div>
                <h3 className="lg:text-xl font-semibold mt-1 text-black w-[50%] ml-4 md:text-sm"> 
                {heading}
                </h3>
                <p className="text-black lg:text-sm w-[90%] ml-4 mt-1 md:text-[0.5rem]">
                {description}
                </p>
            </div>
            </div>
        </div>
    )
}