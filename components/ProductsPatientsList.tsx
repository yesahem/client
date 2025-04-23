"use client"

import Image from "next/image"

export type ListItemsProps={
    img:string,
    content:string,
}

export const ProductPatientsList= ({img,content}:ListItemsProps) => {
    return(
        <div className="xl:flex xl:gap-4 md:flex md:gap-2 md:mt-2 md:-ml-4">
            <Image src={img} width={20} height={20} alt="image"/>
            <li className="md:text-[0.5rem] xl:text-sm">
                {content}
            </li>
        </div>
    )
} 