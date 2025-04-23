"use client"

import Image from "next/image"
import { Menu } from 'lucide-react';
import { VrINtegrationsData } from "@/data/ProductsList";
import { MobileListItems } from "./MobileListItems";
import { ProductDoctorSectionMobileViewData } from "@/data/ProductSectionMobileViewData";
import { ProductDoctorSectionMobileView } from "./ProductDoctorSectionMobileView";
import { FooterIconsData } from "@/data/FooterIconsData";
import { FooterIcons } from "./FooterIcons";
import { FooterListItemsData } from "@/data/FooterListItemsData";
import { ListItems } from "./ListItems";

export const ProductsMobileView = () => {
    return(
        <>
            <section className="w-screen h-[80vh] overflow-hiddensm:hidden flex flex-col items-center">
                <div className=" w-[95%] h-[7%] flex justify-between">
                    <Image src={"/Logo.png"}  width={100} height={50} alt="logo"/>
                    <Menu strokeWidth={"2px"} size={30} className="mt-2"/>
                </div>
                <h3 className="text-3xl font-medium text-[#005ab1] mt-10"> Discover Tools</h3>
                <h3 className="text-3xl font-medium text-[#005ab1] ">That Redefine Vision Care</h3>
                <Image src={"/hero-section-boy-girl-svg.svg"} width={250} height={250} alt="image" className="mt-8"/>
                <p className="text-xs px-4 mt-4 text-center">
                    From personalised therapy for patients to smart tools 
                    for doctors, our product suite is built to simplify, 
                    digitize, and elevate the way eye care is delivered. 
                    Whether you're treating, managing, or tracking—
                    there’s a solution designed just for you.
                </p>
            </section>
            <section className=" h-[250vh] w-full bg-blue-100 rounded-xl px-4 py-4 flex flex-col overflow-hidden">
                <h3 className="text-[#005ab1] text-lg font-medium"> Products | Doctors</h3>
                <h3 className="text-lg font-medium w-[60%] mt-8">Trusted by Clinics. Proven with patient </h3>
                <p className="text-sm mt-2 w-[90%]">From Hospitals to homes, Orbsway is helping 
                hundreds improve thier vision</p>
                {ProductDoctorSectionMobileViewData.map((items,index)=>(<ProductDoctorSectionMobileView key={index} {...items}/>))}
                <Image src={"/Standing Doctor.svg"} width={150} height={150} alt="standing doctor" className="transform -translate-y-24 -translate-x-4"/>                
            </section>
            <section className="relative  h-[200vh] w-full bg-blue-100 rounded-xl px-4 py-4 flex flex-col mt-8 ">
                <h3 className="text-[#005ab1] text-lg font-medium"> Products | Doctors</h3>
                <h3 className="text-lg font-medium w-[60%] mt-8">Trusted by Clinics. Proven with patient </h3>
                <p className="text-sm mt-2 w-[90%]">From Hospitals to homes, Orbsway is helping 
                hundreds improve thier vision</p>
                {ProductDoctorSectionMobileViewData.slice(0,1).map((items,index)=>(<ProductDoctorSectionMobileView key={index} {...items}/>))}
                <div className="mt-8 bg-black w-[97%] h-[15%] ml-1 rounded-xl flex flex-col justify-center">
                    <h3 className="text-white font-semibold ml-6 text-xl w-[42%]"> With VR Intergation</h3>
                    <p className="text-white text-xs w-[42%] ml-6 mt-4">A powerful dashboard for prescribing and monitoring patient therapy digitally.</p>
                </div>
                <Image src={"/standing-girl.svg"} width={190} height={190} alt="image" className="absolute bottom-0 right-[2%]"/>
            </section>
            <section className="w-full h-[120vh] bg-black rounded-xl mt-12 flex flex-col px-8 py-4">
                <div className=" w-full h-full rounded-xl">
                    <h3 className="text-white font-bold text-xl ml-4 mt-2">VR Integrations</h3>
                    <p className="text-white text-xs w-[80%] ml-4 mt-4 mb-4"> Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                    <ul className="text-white ">
                    {VrINtegrationsData.map((items,index)=>(<MobileListItems key={index} {...items}/>))}
                </ul>
                <Image src={"/vr-integration.svg"} width={200} height={200} alt="image" className="mt-6 ml-12"/>
                <p className="w-[70%] text-xs text-white mt-8 ml-8"> Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.</p>
                </div>
            </section>
            <footer className="h-[100vh] w-full flex flex-col items-center px-4">
                <Image src={"/footer-logo.svg"} width={200} height={200} alt="logo"/>
                <p className=" ">Address vision challenges with innovative, cloud-based solutions—trusted by leading eye institutes.</p>
                <div className="flex gap-4 mt-6">{FooterIconsData.map((items,index)=>(<FooterIcons key={index} {...items}/>))}</div>
                <div className="w-full flex flex-col mt-4">
                    <h3 className="font-medium ">Links</h3>
                    <ul className="  -ml-4 -mt-4">
                        {FooterListItemsData.slice(0,3).map((items,index)=>(<MobileListItems key={index} {...items}/>))}
                    </ul>
                </div>
                <div className="w-full flex flex-col mt-6">
                    <h3 className="font-medium ">Contact</h3>
                    <ul className="  -ml-4 -mt-4">
                        {FooterListItemsData.slice(3).map((items,index)=>(<MobileListItems key={index} {...items}/>))}
                    </ul>
                </div>
                <div className="bg-[#005ab1] h-[10%] w-screen mt-16"></div>
            </footer >
        </>
    )
}