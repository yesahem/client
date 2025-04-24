"use client"

import Image from "next/image";
import { Menu } from "lucide-react";
import { OrbswayEffectCardMObileViewData } from "@/data/OrbswayEfffectCardMobileViewData";
import { OrbswayEffectCardMobileView } from "./OrbswayEffectCardMobileView";
import { OfferingMobileViewCards } from "./OfferingMobileVIewCards";
import { OfferingMobileViewCardsData } from "@/data/OfferingMobileViewCardsData";
import { OrbswayAtAGlanceMBVData } from "@/data/OrbswayAtAGlanceMBVData";
import { OrbswayAtAGlanceMBV } from "./OrbswayAtAGlanceMBV";
import { FooterIcons } from "./FooterIcons";
import { FooterIconsData } from "@/data/FooterIconsData";
import { FooterListItemsData } from "@/data/FooterListItemsData";
import { MobileListItems } from "./MobileListItems";

export const HomeMobileView = () => {
    return(
        <>
            <section className="w-screen h-[100vh] overflow-hidden flex flex-col items-center  sm:hidden ">
                <div className=" w-[95%] h-[9%] flex justify-between ml-2.5">
                    <Image src={"/Logo.png"}  width={80} height={80} alt="logo" className="ml-2 mt-2"/>
                    <Menu strokeWidth={"2px"} size={30} className="mt-2"/>
                </div>
                <h3 className="mt-8 ml-2 text-3xl text-[#005ab1] font-bold">
                    Next-Gen Vision Therapy
                </h3>
                <p className="ml-4 mt-4 text-center text-sm px-14"> Address vision challenges with innovative, cloud-based solutions—trusted by leading eye institutes.</p>
                <Image src={"/Group 11.svg"} width={250} height={250} alt="image"/>
                <button className="bg-[#005ab1] text-white text-2xl px-8 py-2 mt-2 rounded-lg mt-8">REQUEST FOR FREE TRIAL</button>
                <u className="text-[#005ab1] font-semibold mt-4">LEARN MORE</u>
            </section>
            <hr className="h-1  border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[80%] px-12 ml-20 transform -translate-y-4 -translate-x-10 opacity-60 rounded-xl"/>
            <section className="h-[160vh] w-full flex flex-col items-center sm:hidden">
                <h3 className="mt-6  text-2xl text-[#005ab1] font-bold">
                    Upgrade Your Practice
                </h3>
                <p className="text-sm px-4 text-center mt-4">Everything in one platform. From digital therapy tools to automated scheduling — it just works, together.</p>
                <div className="grid grid-cols-3 grid-rows-3 px-4 gap-2 h-[40%] w-full mt-4 ">
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                    <div className="border border-blue-100 shadow-lg rounded-lg p-2 w-full">
                        <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between ">
                            <Image src={"/verify.svg"} width={30} height={30} alt="verify" className="ransform translate-y-2"/>
                            <h3 className="text-sm font-bold ">Online Booking & Scheduling</h3>
                        </div>
                    </div>
                </div>
                <Image src={"/boy-girl-table.svg"} width={400} height={400} alt="image" className="mt-8"/>
                <div className="w-full px-16 flex justify-between mt-6">
                    <h3 className="text-xs mt-4">Imagine without Orbsway</h3>
                    {/* Toogle button */}
                    <div className="w-[20%] h-4 rounded-xl bg-gray-100 mt-4"/>
                    <h3 className="text-[#005ab1] mt-4 text-xs">With Orbsway</h3>
                </div>
                <h3 className="text-sm font-medium px-16 text-center mt-6"> This is your practice elevated - Seamless operations, happier patient and  less chaos. Toggle back to see the before</h3>
            </section>
            <section className="w-screen h-[230vh] bg-black rounded-t-xl p-8 ml-2 sm:hidden">
                <div className=" w-full h-full">
                    <h3 className="text-[#005ab1] font-bold">THE ORBSWAY EFFECT</h3>
                    <h3 className="text-white font-semibold text-2xl w-[80%] mt-10">Trusted by Clinics.</h3>
                    <h3 className="text-white font-semibold text-2xl w-[80%]">Proven with patient</h3>
                    <p className="text-white  text-sm w-[80%]">From Hospitals to homes, Orbsway is helping hundreds improve thier vision</p>
                    <div className="grid grids-rows-3 gap-12 w-full h-[78%] mt-6">
                        {OrbswayEffectCardMObileViewData.map((items,index)=>(<OrbswayEffectCardMobileView key={index} {...items}/>))}
                    </div>
                </div>
            </section>
            <section className="h-[200vh] w-full px-4 sm:hidden">
                <div className=" flex flex-col gap-6">
                    <h3 className="font-semibold text-[#005ab1] mt-4">OFFERINGS</h3>
                    <p>Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care.</p>
                </div>
                <div className="mt-4 grid grid-rows-2 w-full h-[70%] gap-2">
                    {OfferingMobileViewCardsData.map((items,index)=>(<OfferingMobileViewCards key={index} {...items}/>))}
                </div>
            </section>
            <section className="relative h-[70vh] w-screen flex flex-col items-center px-4 transform -translate-y-24 sm:hidden">
                <div className="flex flex-col gap-6 h-full w-full z-20">
                    <h3 className="z-20">We have developed a comprehensive eye hospital management software</h3>
                    <div className="flex flex-col">
                        <h3 className="z-20 text-[#005ab1] text-xl font-bold">Cloud based  </h3>
                        <h3 className=" z-20 text-[#005ab1] text-xl font-bold">healthcare management Suite</h3>
                    </div>
                    <h3 className="z-20">that’s fully Intergated to streamline your health care management process</h3>
                    <Image src={"/Manage Appointment-bg-2.svg"} width={250} height={250} alt="image" className="ml-[25%] drop-shadow-md z-20"/>
                    <Image src={"/Manage Appointment-1.svg"} width={250} height={250} alt="image" className="z-20 ml-[10%] transform -translate-y-2/3 drop-shadow-md z-20"/>
                    <Image src={"/Vector-bg.svg"} width={600} height={600} alt="image" className="absolute z-0 opacity-70"/>
                </div>
            </section>
            <hr  className="w-[90%] h-1 border-none bg-gradient-to-r from-sky-400 to-cyan-200  px-12 ml-6 transform -translate-y-10"/>
            <section className="h-[180vh] w-full px-4 flex flex-col sm:hidden">
            <div className=" flex flex-col gap-12">
                <h3 className="font-semibold text-[#005ab1] mt-4">ORBSWAY AT A GLACE</h3>
                <h3 className="font-semibold text-xl">Smart. Simple. Scalable.</h3>
            </div>
            <p className="mt-2">Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care.</p>
            <div className="grid grid-rows-6 gap-y-2 w-full">
                {OrbswayAtAGlanceMBVData.map((items,index)=>(<OrbswayAtAGlanceMBV key={index} {...items}/>))}
            </div>
            </section>
            <section className="h-[170vh] bg-black w-screen rounded-t-xl transform -translate-y-28 ml-2 px-4 overflow-hidden sm:hidden">
                <h3 className="text-[#005ab1] text-lg font-bold transform translate-y-4">Expert Validation</h3>
                <h3 className="text-4xl text-white font-bold mt-24 w-[90%]">A Visionary’s Take on Vision Therapy</h3>
                <Image src={"/inverted-double-quotes.svg"} width={200} height={200} alt="inverted commas" className="mt-8"/>
                <p className="text-white mt-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                <hr className="w-[30%] h-1  border-none bg-gradient-to-r from-sky-400 to-cyan-200 mt-12"/>
                <h3 className="text-white text-3xl font-bold mt-2 text-[#005ab1]">Dr. Vipin Buckshey, </h3>
                <div className="mt-4">
                    <h3 className="text-lg text-white">Padma Shri Awardee </h3>
                    <h3 className="text-lg text-white">& Former Optometrist to President of India</h3>
                </div>
                <Image src={"/person-image.png"} width={500} height={500} alt="image"/>
            </section>
            <section className="w-screen h-[165vh] px-4 flex flex-col sm:hidden">
                <h3 className="text-3xl font-bold ">A Visionary’s Take</h3>
                <h3 className="text-3xl font-bold ">on Vision Therapy</h3>
                <p className="mt-4 text-lg">Orbsway is trusted by doctors, hospitals, and vision care pioneers. Whether you’re ready to get started or just want to know more — we’re here for you.</p>
                <div className="w-full flex flex-col mt-6 gap-2">
                    <button className="text-[#005ab1] border border-[#005ab1] px-8 py-4 rounded-lg font-bold">REQUEST A CALLBACK</button>
                    <button className="bg-[#005ab1] px-8 py-4 rounded-lg text-white font-bold">REQUEST FOR FREE TRIAL</button>
                </div>
                <div className="w-full h-[70%] bg-cyan-100 rounded-xl transform translate-y-8 flex justify-center items-center p-1">
                    <div className="bg-white w-full h-full rounded-xl p-6">
                        <h3 className="text-[#005ab1] font-semibold w-[65%] text-xl">Need a custom solution or have questions?</h3>
                        <p className="text-sm w-[83%] mt-4">Drop us a message and we’ll get back to you within 24 hours.dly team would love to hear from you.</p>
                            <form className="w-full h-[80%]  rounded-xl flex flex-col">
                                <div className="flex justify-center w-full mt-4">
                                    <div className="flex flex-col gap-2 w-[50%]">
                                        <h3 className="text-black">First Name*</h3>
                                        <input placeholder="First name" type="text" className=" h-fit px-2 py-2 w-[80%] bg-white border border-[#005ab1] rounded-lg"/>
                                    </div>
                                    <div className="flex flex-col gap-2 w-[50%]">
                                        <h3 className="text-black">Last Name*</h3>
                                        <input placeholder="Last Name" type="text" className=" h-fit px-4 py-2 w-[83%] bg-white border border-[#005ab1] rounded-lg"/>
                                    </div>
                                </div>
                                <div className="relative mt-4">
                                    <h3 className="text-black">Email*</h3>
                                    <input className="h-fit px-8 py-2 w-[95%] bg-white border border-[#005ab1] rounded-lg" placeholder="example@gmail.com"/>
                                    <Image src={"/sms.svg"} width={25} height={25} alt="image" className="absolute transform -translate-y-8 translate-x-1"/>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-black">Contact*</h3>
                                    <input className="h-fit px-4 py-2 w-[95%] bg-white border border-[#005ab1] rounded-lg " placeholder="example@gmail.com"/>
                                </div>
                                <div className=" mt-4">
                                    <h3 className="text-black">Message</h3>
                                    <input className="h-32 px-4 py-2 w-[95%] bg-white border border-[#005ab1] rounded-lg placeholder:text-left" placeholder="Enter a description"/>
                                </div>
                                <button className="w-fit h-fit bg-[#005ab1] text-white font-bold px-36 py-2 mt-4 rounded-lg">Send</button>
                            </form>
                    </div>
                </div>
            </section>
            <footer className="h-[100vh] w-full flex flex-col items-center mt-6 px-4 sm:hidden">
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