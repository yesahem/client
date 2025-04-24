"use client"

import Image from "next/image"

export const HomePageGridMobile = () => {
    return(
        <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
            <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
            </div>
        </div>
    )
}