"use client"

import Image from "next/image"

export type ListItemsProps = {
  img: string
  content: string
}

export const VrIntegrationList = ({ img, content }: ListItemsProps) => {
  return (
    <li className="flex items-start gap-2 md:gap-3 mb-2 text-sm md:text-base">
      <Image src={img} width={20} height={20} alt="icon" className="mt-1" />
      <span className="text-xs md:text-sm xl:text-base">{content}</span>
    </li>
  )
}
