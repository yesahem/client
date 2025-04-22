"use client"

import Image from "next/image"

export type ListItemsProps={
    img:string,
    content:string,
}

export const ListItems= ({img,content}:ListItemsProps) => {
    return(
        <div className="flex gap-4">
            <Image src={img} width={20} height={20} alt="image"/>
            <li>
                {content}
            </li>
        </div>
    )
} 