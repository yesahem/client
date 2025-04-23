"use client"

import Image from "next/image"

export type FooterIconsProps={
    img:string,
}

export const FooterIcons = ({img}:FooterIconsProps) => {
    return(
        <div className="bg-white rounded-full  xl:h-10 xl:w-10  md:h-6 md:w-6 border border-black/20">
            <Image src={img} width={45} height={45} alt="image"/>
        </div>
    )
}