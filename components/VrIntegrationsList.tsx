"use client"

import Image from "next/image"

export type ListItemsProps={
    img:string,
    content:string,
}

export const VrIntegrationList= ({img,content}:ListItemsProps) => {
    return(
        <div className="xl:flex xl:gap-4 md:flex md:gap-2 md:mt-2 md:-ml-6">
            <Image src={img} width={20} height={20} alt="image"/>
            <li className="md:text-[0.7rem] ">
                {content}
            </li>
        </div>
    )
} 