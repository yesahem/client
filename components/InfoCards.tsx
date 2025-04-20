"use client"

import Image from "next/image"

export type InfoCardsProps={
    content:string,
}

export const InfoCards = ({content}:InfoCardsProps) => {
    return(
        <div className="z-50 bg-white/70 backdrop-blur w-72 h-14 rounded-lg border border-sky-200 flex justify-cetner mb-4">
            <Image src={"/verify.svg"} width={20} height={20} alt="verified" className=" bg-whitetransform -translate-.5 ml-2"/>
            <h1 className="ml-4 transform translate-y-3.5">{content}</h1>
        </div>
    )
}   