"use client"

import Image from "next/image"

export type OfferingSectionCardsProps={
    image:string,
    imgw:number,
    imgh:number,
    styling:string,
    heading:string,
    description:string,
}

export const OfferingSectionCards = ({image,imgh,imgw,styling,heading,description}:OfferingSectionCardsProps) => {
    return(
        // <div className="flex justify-around w-[70%] ml-18">
            <div className="w-[40%] h-[90%] bg-white rounded-xl my-4 flex justify-center items-center">
                <div className="w-[99.5%] h-[99.5%] bg-gradient-to-b from-sky-400 to-cyan-200 rounded-xl flex justify-center items-center">
                    <div className="w-[99.5%] h-[99.5%] bg-white rounded-xl">
                        <div className="w-full h-[60%] bg-black rounded-t-lg">
                            <Image src={image} width={imgw} height={imgh} alt="image" className={`${styling}`}/>
                        </div>
                        <h3 className="font-bold text-2xl ml-4">{heading}</h3>
                        <p className="text-xs ml-4"> {description}</p>
                        <button className="bg-[#005ab1] text-white p-2 rounded-lg transform translate-x-20 mt-1">EXPLORE OUR PRODUCTS</button>
                    </div>    
                </div>
            </div>
        // </div>
    )
}