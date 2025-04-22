"use client"

import Image from "next/image"

export type FooterListItemsProps={
    img:string,
    content:string,
}

export const FooterListItems= ({img,content}:FooterListItemsProps) => {
    return(
        <div className="flex gap-4">
            <Image src={img} width={20} height={20} alt="image"/>
            <li>
                {content}
            </li>
        </div>
    )
} 