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
        <div className="py-10 px-4">
            <div className="bg-white h-full w-full rounded-xl flex flex-col border-2 border-blue-100 box-border">
                <div className=" h-[8%] w-full flex justify-end pr-4">
                    <Image src={"/share.svg"} width={40} height={40} alt="image"/>
                </div>
                <h3 className=" ml-6 mt-8 text-xl font-semibold">{heading}</h3>
                <p className="text-[0.7 rem] ml-6 mt-4"> A powerful dashboard for prescribing and monitoring patient therapy digitally</p>
                <ul className="mt-4 ml-6">
                    {ProductsListData.map((items,index)=>(<ListItems key={index} {...items}/>))}
                </ul>
                <div className="flex gap-4 ml-6 mt-6">
                    <button className="w-fit-content px-8 py-2 border border-[#005ab1] text-[#005ab1] rounded-lg">Learn More</button>
                    <button className="w-fit-content px-8 py-2 bg-[#005ab1] text-white rounded-lg">Explore Now</button>
                </div>
                <Image src={img} width={400} height={400} alt="image" className="ml-6 mt-12"/>
            </div>
        </div>
    )

}