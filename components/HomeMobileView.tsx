"use client"

import Image from "next/image";
import { Menu } from "lucide-react";

export const HomeMobileView = () => {
    return(
        <>
        <section className="w-screen h-[80vh] overflow-hiddenflex flex-col items-center  sm:hidden ">
                <div className=" w-[95%] h-[7%] flex justify-between">
                    <Image src={"/Logo.png"}  width={100} height={50} alt="logo"/>
                    <Menu strokeWidth={"2px"} size={30} className="mt-2"/>
                </div>
                
            </section>
        </>
    )
}