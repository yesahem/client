"use client"

import Image from "next/image"
import { InfoCards } from "./InfoCards"
import { InfoCardsData } from "@/data/InfoCardsData"

export const UpgradeYourPracticeSection=()=>{
    return(
        <>
            <div className="absolute z-10 w-screen h-full mt-12 transform translate-x-2">
                <Image src={"/Vector-bg.svg"} width={1400} height={50} alt="vector bg" className="opacity-70"/>
            </div>
            <div className="z-20 w-full h-full flex flex-col items-center pt-8">
                <h2 className="text-[#005ab1] text-semibold text-4xl">Upgrade Your Practice</h2>
                <p className="font-semibold mt-2">Everything in one platform. From digital therapy tools to automated scheduling — it just works, together.</p>
                <Image src={"/boy-girl-table.svg"} width={500} height={500} alt="boy-girl-table" className="z-20 mt-12"/>
                <div className="z-30 absolute left-[18%] top-[27%]">
                    {InfoCardsData.slice(0,4).map((items,index)=>(<InfoCards key={index} {...items}/>))}
                    <Image src={"/Frame 1000014222.svg"} width={100} height={100} alt="practo" className="absolute top-0 -left-[30%]"/>
                    <Image src={"/Frame 1000014226.svg"} width={200} height={200} alt="practo" className="absolute top-[28%] -left-[60%]"/>
                    <Image src={"/Frame 1000014223.svg"} width={150} height={150} alt="practo" className="absolute top-[55%] -left-[40%]"/>
                    <Image src={"/Frame 1000014230.svg"} width={150} height={150} alt="practo" className="absolute top-[90%] left-[ 20%]"/>
                </div>
                <div className="z-30 absolute left-[65%] top-[25%]">
                    {InfoCardsData.slice(4).map((items,index)=>(<InfoCards key={index} {...items}/>))}
                    <Image src={"/Frame 1000014221.svg"} width={100} height={100} alt="practo" className="absolute -top-[5%] left-[80%]"/>
                    <Image src={"/Frame 1000014228.svg"} width={200} height={200} alt="practo" className="absolute top-[20%]  left-[88%]"/>
                    <Image src={"/Frame 1000014229.svg"} width={200} height={200} alt="practo" className="absolute top-[45%] left-[65%]"/>
                    <Image src={"/Frame 1000014225.svg"} width={150} height={150} alt="practo" className="absolute top-[67%] left-[90%]"/>
                    <Image src={"/Frame 1000014227.svg"} width={150} height={150} alt="practo" className="absolute top-[86%] left-[87%]"/>
                </div>
                <div className="z-30 mt-14 flex">
                    <h3 className="text-black">Imagine without Orbsway</h3>
                    <div className="w-12 h-6 rounded-2xl bg-black ml-2">
                    <div className="w-4 h-4 rounded-full bg-white my-1 ml-1"/>
                    </div>
                    <h3 className="text-[#005ab1] ml-2"> With Orbsway</h3>
                </div>
                <h3 className="z-30 text-black ml-2 font-bold mt-4"> Remember this? Clunky systems and paperwork maze - All before Orbsway stepped in</h3>
                <button className="z-30 bg-[#005ab1] text-center text-white p-2 rounded-lg font-semibold mt-6">EXPLORE OUR PRODUCTS</button>
            </div>
        </>
    )
}