"use client"

import Image from "next/image"

export type OrbswayAtAGlanceMBVProps={
    content:string,
    img:string,
    description?:string,
}

export const OrbswayAtAGlanceMBV = ({content,img}:OrbswayAtAGlanceMBVProps) => {
    return(
        <div className="bg-gradient-to-r from-sky-400/60 to-cyan-200/50 flex justify-center items-center rounded-lg w-full h-24 mb-2 rounded-xl p-0.5 ">
            <div className="flex items-center justify-center bg-white w-full h-full rounded-lg">
                <div className="flex justify-between gap-8 ">
                    <h3 className="text-lg font-bold transform translate-y-2">{content}</h3>
                    <Image src={img} width={40} height={40} alt="img" />
                </div>
            </div>
        </div>
    )
}