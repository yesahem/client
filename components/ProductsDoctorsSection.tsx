"use client"

import Image from "next/image"
import { ProductsListData } from "@/data/ProductsList"
import { ListItems } from "./ListItems"

export type ProductsDoctorsSectionProps={
    heading:string,
    img:string,
}

export const ProductsDoctorsSection = ({img,heading}:ProductsDoctorsSectionProps) => {
    return(
        <div className="xl:py-10 xl:px-4 md:px-1 py-10">
            <div className="bg-white md:h-[95%] w-full xl:h-[81%] lg:h-[87%] rounded-xl flex flex-col border-2 border-blue-100 box-border ">
                <div className=" xl:h-[8%] w-full flex justify-end pr-4 md:pr-2">
                    <Image src={"/share.svg"} width={40} height={40} alt="image" className="md:mt-2 "   />
                </div>
                <h3 className=" xl:ml-6 mt-8 xl:text-xl xl:font-semibold  md:text-lg ml-2 md:mt-4">{heading}</h3>
                <p className="xl:text-[1rem] xl:ml-6 xl:mt-4 md:text-[0.6rem] md:ml-2 md:mt-2"> A powerful dashboard for prescribing and monitoring patient therapy digitally</p>
                <ul className="xl:mt-4 xl:ml-6 md:mt-4 md:ml-2">
                    {ProductsListData.map((items,index)=>(<ListItems key={index} {...items}/>))}
                </ul>
                <div className="flex xl:gap-4 xl:ml-6 xl:mt-6 md:mt-6 md:ml-4 md:gap-4">
                    <button className="w-fit-content xl:text-lg xl:px-8 xl:py-2 border border-[#005ab1] text-[#005ab1] rounded-lg md:px-2 md:py-1 md:text-xs">Learn More</button>
                    <button className="w-fit-content xl:text-lg xl:px-8 xl:py-2 bg-[#005ab1] text-white rounded-lg md:px-2 md:text-xs">Explore Now</button>
                </div>
                <Image src={img} width={400} height={400} alt="image" className="xl:ml-6 xl:mt-12 md:hidden xl:block lg:block lg:mt-6"/>
                <Image src={img} width={220} height={220} alt="image" className="lg:hidden md:ml-2 md:mt-16 "/>

            </div>
        </div>
    )
}