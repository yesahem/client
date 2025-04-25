"use client"

import Image from "next/image"
import { FooterIconsData } from "@/data/FooterIconsData"
import { FooterListItemsData } from "@/data/FooterListItemsData"
import { FooterIcons } from "./FooterIcons"
import { ListItems } from "./ListItems"

export const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start items-center">
          <Image
            src={"/footer-logo.svg"}
            width={200}
            height={100}
            alt="image"
            className="hidden md:block"
          />
          <Image
            src={"/footer-logo.svg"}
            width={100}
            height={100}
            alt="image"
            className="md:hidden"
          />
        </div>

        {/* Description and Icons */}
        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <p className="text-sm sm:text-xs md:text-sm lg:text-base">
            <span className="font-medium">
              Address vision challenges with innovative,
            </span>{" "}
            cloud-based solutions—trusted by leading eye institutes.
          </p>
          <div className="grid grid-cols-5 gap-2 mt-4 w-full max-w-xs">
            {FooterIconsData.map((items, index) => (
              <FooterIcons key={index} {...items} />
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-medium mb-2">Links</h3>
          <ul>
            {FooterListItemsData.slice(0, 3).map((items, index) => (
              <ListItems key={index} {...items} />
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-medium mb-2">Contact</h3>
          <ul>
            {FooterListItemsData.slice(3).map((items, index) => (
              <ListItems key={index} {...items} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
