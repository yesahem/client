"use client"

import Image from "next/image"

export type InfoCardsProps={
    content:string,
}

export const InfoCards = ({content}:InfoCardsProps) => {
    return(
        <div className="z-50 bg-white/70 backdrop-blur xl:w-72 xl:h-14 rounded-lg border border-sky-200 flex justify-cetner mb-4 lg:w-54 lg:h-12 md:w-44 h-fit py-1  ">
            <Image src={"/verify.svg"} width={20} height={20} alt="verified" className=" bg-whitetransform -translate-.5 ml-2"/>
            <h1 className="ml-2 xl:transform translate-y-2 lg:text-sm lg:translate-y-3  md:text-[0.5rem] md:transform md:translate-y-1">{content}</h1>
        </div>
    )
}   