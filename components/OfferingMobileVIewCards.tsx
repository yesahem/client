"use client"

import Image from "next/image"

export type OfferingMobileCardsProps={
    heading:string,
    description:string,
    img:string,
    style:string,
    w:number,
    h:number,
}

export const OfferingMobileViewCards = ({heading,description,img,w,h}:OfferingMobileCardsProps) =>{
    return(
        <div className="bg-cyan-100 p-1 roudned-xl flex items-center justify-center w-full h-full rounded-xl">
            <div className=" bg-white rounded-xl w-full h-full flex flex-col ">
                <Image src={img} width={w} height={h} alt="doctor" className="transform translate-y-4 translate-x-12"/>
                <h3 className="font-bold text-2xl mt-20 ml-8">{heading}</h3>
                <p className="px-8 text-sm">{description}</p>
                <button className="w-fit h-fit mt-6 ml-8 px-12 py-2 bg-[#005ab1] text-white rounded-lg">EXPLORE OUR PRODUCTS</button>
            </div>
        </div>
    )
}