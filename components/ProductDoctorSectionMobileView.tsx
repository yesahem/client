"use client"

import Image from "next/image"
import { ProductsListData } from "@/data/ProductsList"
import { MobileListItems } from "./MobileListItems"

export type ProductDoctorSectionMobileViewProps={
    heading:string,
    description:string,
}

export const ProductDoctorSectionMobileView = ({heading,description}:ProductDoctorSectionMobileViewProps) => {
    return(
        <div className="bg-white rounded-xl h-[60%] w-[95%] ml-2 mt-4 flex flex-col">
            <div className="flex w-full h-[5%] justify-end mt-2"><Image src={"/share.svg"} width={40} height={40} alt="image" className="mr-4"/></div>
            <h3 className="text-2xl font-bold px-4 mt-6"> {heading}</h3>
            <h3 className="mt-4 px-4 text-sm">{description}</h3>
            <ul>
                {ProductsListData.map((items,index)=>(<MobileListItems key={index} {...items}/>))}
            </ul>
            <div className="px-2">
                <button className="w-fit text-lg font-semibold ml-4 px-21 py-2 border border-[#005ab1] text-[#005ab1] rounded-lg mt-4 m">LEARN MORE</button>
                <button className="w-fit text-lg font-semibold ml-4 px-20 py-2 bg-[#005ab1] text-white rounded-lg mt-4">EXPLORE NOW</button>
            </div>
            <div className="mt-4 px-4 py-1">
                <Image src={"/info-manage-appointement-back.svg"} width={200} height={200} alt="image" className="z-10 mt-4 ml-24 md:hidden"/>
                <Image src={"/main-section-high-z-index.svg"} width={200} height={200} alt="image" className="z-20 -mt-20 ml-6 md:hidden"/>
            </div>
        </div>
    )
}