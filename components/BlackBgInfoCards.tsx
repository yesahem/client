"use client"

import Image from "next/image"

export type BlackBgInfoCardsProps={
    number:string,
    heading:string,
    description:string,
}

export const BlackBgInfoCards=({number,heading,description}:BlackBgInfoCardsProps)=>{
    return(
        <div className="bg-white h-full w-[30%] rounded-xl flex flex-col items-center">
            <p className="text-8xl font-bold mt-8 px-2 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent">
                {number}
            </p>
            <div className="flex mt-8">
                <Image src={"/hospital.svg"} width={50} height={40} alt="hospital" className="w-fit-content h-fit-content p-2 bg-gray-200 rounded-xl"/>
                <div className="flex flex-col ml-4  ">
                <p className="font-bold">{heading}</p>
                <p>{description}</p>
                </div>
            </div>
        </div>
    )
}