"use client"

import Image from "next/image"

export type BlackBgInfoCardsProps={
    number:string,
    heading:string,
    description:string,
}

export const BlackBgInfoCards=({number,heading,description}:BlackBgInfoCardsProps)=>{
    return(
        <div className="bg-white h-full w-[30%] rounded-xl flex flex-col items-center md:h-[95%]">
            <p className="lg:text-8xl font-bold mt-8 px-2 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent md:text-4xl">
                {number}
            </p>
            <div className="flex mt-8">
                <Image src={"/hospital.svg"} width={50} height={40} alt="hospital" className="lg:block w-fit-content h-fit-content p-2 bg-gray-200 rounded-xl md:hidden"/>
                <Image src={"/hospital.svg"} width={15} height={15} alt="hospital" className=" w-fit h-fit p-1 mt-2 bg-gray-200 rounded-xl lg:hidden"/>
                <div className="flex flex-col ml-4  ">
                <p className="lg:text-lg font-bold md:text-[0.8rem]">{heading}</p>
                <p className="lg:text-sm md:text-[0.8rem]">{description}</p>
                </div>
            </div>
        </div>
    )
}