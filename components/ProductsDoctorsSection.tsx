"use client"

import Image from "next/image"
import { ProductsListData } from "@/data/ProductsList"
import { ListItems } from "./ListItems"

export type ProductsDoctorsSectionProps = {
  heading: string
  img: string
}

export const ProductsDoctorsSection = ({ img, heading }: ProductsDoctorsSectionProps) => {
  return (
    <div className="py-10 px-4 md:px-2 xl:px-4">
      <div className="bg-white rounded-xl border-2 border-blue-100 p-4 flex flex-col">
        {/* Share Icon */}
        <div className="flex justify-end mb-4">
          <Image src={"/share.svg"} width={40} height={40} alt="Share Icon" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Heading */}
        <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-2 md:mb-4">{heading}</h3>

        {/* Description */}
        <p className="text-sm md:text-base xl:text-lg text-gray-700 mb-4">
          A powerful dashboard for prescribing and monitoring patient therapy digitally
        </p>

        {/* Feature List */}
        <ul className="mb-6 space-y-1">
          {ProductsListData.map((items, index) => (
            <ListItems key={index} {...items} />
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap mb-6">
          <button className="text-sm md:text-base px-4 md:px-6 py-2 border border-[#005ab1] text-[#005ab1] rounded-lg">
            Learn More
          </button>
          <button className="text-sm md:text-base px-4 md:px-6 py-2 bg-[#005ab1] text-white rounded-lg">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={img}
            width={400}
            height={400}
            alt="Product"
            className="hidden md:block w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
          <Image
            src={img}
            width={220}
            height={220}
            alt="Product"
            className="block md:hidden w-[80%] mx-auto"
          />
        </div>
      </div>
    </div>
  )
}
