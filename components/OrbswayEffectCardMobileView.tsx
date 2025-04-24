"use client"

import Image from "next/image"

export type OrbswayEffectCardMobileViewProps={
    number:string,
    heading:string,
    description:string,
}

export const OrbswayEffectCardMobileView = ({number,heading,description}:OrbswayEffectCardMobileViewProps) => {
    return(
        <div className="bg-white rounded-lg p-6 w-fulll h-full rounded-xl">
            <div className=" h-full w-full flex flex-col items-center">
                <h3 className=" text-8xl font-bold bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent transform translate-y-10">{number}</h3>
                <div className="flex transform translate-y-28 translate-x-8 gap-4 w-full ">
                    <div className="w-fit h-fit p-4 bg-gray-200 rounded-full"><Image src={"/hospital.svg"} width={30} height={30} alt="image"/></div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">{heading} </h3>
                        <p className="text-lg">{description} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}