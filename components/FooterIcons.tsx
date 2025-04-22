"use client"

import Image from "next/image"

export type FooterIconsProps={
    img:string,
}

export const FooterIcons = ({img}:FooterIconsProps) => {
    return(
            <div className="bg-white rounded-full  h-10 w-10  border border-black/10">
                <Image src={img} width={45} height={45} alt="image"/>
            </div>
    )
}