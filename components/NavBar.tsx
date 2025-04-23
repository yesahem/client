"use client"

import Image from "next/image"

export const NavBar = () => {
    return (
        <div className="flex justify-between h-[10%] w-full mb-4">
            <div className="w-[20%] h-full flex justify-center items-center">
                <Image src={"/Logo.png"} width={100} height={100} alt="logo"/>
            </div> 
            <div className="w-[20%] h-full flex justify-center items-center gap-x-4 ">
                <h3 className="">Products</h3>
                <h3 className="">Contact</h3>
            </div> 
        </div>
    )
}