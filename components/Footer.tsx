"use client"

import Image from "next/image"
import { FooterIconsData } from "@/data/FooterIconsData"
import { FooterListItemsData } from "@/data/FooterListItemsData"
import { FooterIcons } from "./FooterIcons"
import { ListItems } from "./ListItems"

export const Footer = () => {
    return(
        <footer className="h-[30vh] w-full flex justify-center transform -translate-y-1/4">
                <div className="grid grid-cols-4 w-[90%] gap-2">
                  <div className=" flex justify-center items-center">
                    <Image src={"/footer-logo.svg"} width={200} height={100} alt="image"/>
                  </div>
                  <div className=" w-[90%] flex flex-col justify-center items-center">
                    <p className="mt-6 ml-6 ">
                      <span className="font-medium">
                        Address vision challenges with 
                        innovative,
                      </span> 
                      cloud-based solutions—
                      trusted by leading eye institutes.
                    </p>
                    <div className="grid grid-cols-5 w-full gap-1 px-8 mt-1">
                      {FooterIconsData.map((items,index)=>(<FooterIcons key={index} {...items}/>))}                
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <h3 className="font-medium ml-8">Links</h3>
                    <ul className="ml-8 mt-1">
                      {FooterListItemsData.slice(0,3).map((items,index)=>(<ListItems key={index} {...items}/>))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-medium ml-8">Contact</h3>
                    <ul className="ml-8 mt-1">
                      {FooterListItemsData.slice(3).map((items,index)=>(<ListItems key={index} {...items}/>))}
                    </ul>
                  </div>
                </div>
              </footer>
    )
}