"use client"

import Image from "next/image"
import { ListItemsProps } from "./ListItems"

export const MobileListItems= ({img,content}:ListItemsProps) => {
    return(
        <div className=" ml-4">
            <Image src={img} width={20} height={20} alt="image" className=" transform translate-y-6"/>
            <li className="text-xs ml-8 mt-1">
                {content}
            </li>
        </div>
    )
} 