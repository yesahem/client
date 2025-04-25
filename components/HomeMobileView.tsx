"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { OrbswayEffectCardMObileViewData } from "@/data/OrbswayEfffectCardMobileViewData";
import { OrbswayEffectCardMobileView } from "./OrbswayEffectCardMobileView";
import { OfferingMobileViewCards } from "./OfferingMobileVIewCards";
import { OfferingMobileViewCardsData } from "@/data/OfferingMobileViewCardsData";
// import { OrbswayAtAGlanceMBVData } from "@/data/OrbswayAtAGlanceMBVData";
// import { OrbswayAtAGlanceMBV } from "./OrbswayAtAGlanceMBV";
// import { FooterIcons } from "./FooterIcons";
// import { FooterIconsData } from "@/data/FooterIconsData";
// import { FooterListItemsData } from "@/data/FooterListItemsData";
// import { MobileListItems } from "./MobileListItems";

const featureList = [
  "Online Booking & Scheduling",
  "Automated Reports",
  "Integrated Patient Records",
  "Real-Time Progress Tracking",
  "AI-Powered Recommendations",
  "Insurance & Billing",
  "Multi-Device Access",
  "Patient Engagement Tools",
  "Data Security & Compliance"
];

export const HomeMobileView = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen h-[100vh] overflow-hidden flex flex-col items-center sm:hidden">
        <div className="w-[95%] h-[9%] flex justify-between ml-2.5">
          <Image src="/Logo.png" width={80} height={80} alt="logo" className="ml-2 mt-2" />
          <Menu strokeWidth={"2px"} size={30} className="mt-2" />
        </div>
        <h3 className="mt-8 ml-2 text-3xl text-[#005ab1] font-bold">Next-Gen Vision Therapy</h3>
        <p className="ml-4 mt-4 text-center text-sm px-14">
          Address vision challenges with innovative, cloud-based solutions—trusted by leading eye institutes.
        </p>
        <Image src="/Group 11.svg" width={250} height={250} alt="hero image" />
        <button className="bg-[#005ab1] text-white text-2xl px-8 py-2 mt-8 rounded-lg">REQUEST FOR FREE TRIAL</button>
        <u className="text-[#005ab1] font-semibold mt-4">LEARN MORE</u>
      </section>

      {/* Divider */}
      <hr className="h-1 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[80%] px-12 ml-20 transform -translate-y-4 -translate-x-10 opacity-60 rounded-xl" />

      {/* Upgrade Practice Section */}
      <section className="h-[160vh] w-full flex flex-col items-center sm:hidden">
        <h3 className="mt-6 text-2xl text-[#005ab1] font-bold">Upgrade Your Practice</h3>
        <p className="text-sm px-4 text-center mt-4">
          Everything in one platform. From digital therapy tools to automated scheduling — it just works, together.
        </p>
        <div className="grid grid-cols-3 grid-rows-3 px-4 gap-2 h-[40%] w-full mt-4">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="border border-blue-100 shadow-lg rounded-lg p-2 w-full"
            >
              <div className="w-full h-full bg-rose-100 rounded-lg p-2 flex flex-col justify-between">
                <Image
                  src="/verify.svg"
                  width={30}
                  height={30}
                  alt="verify"
                  className="transform translate-y-2"
                />
                <h3 className="text-sm font-bold">{feature}</h3>
              </div>
            </div>
          ))}
        </div>
        <Image src="/boy-girl-table.svg" width={400} height={400} alt="demo" className="mt-8" />
        <div className="w-full px-16 flex justify-between mt-6">
          <h3 className="text-xs mt-4">Imagine without Orbsway</h3>
          <div className="w-[20%] h-4 rounded-xl bg-gray-100 mt-4" />
          <h3 className="text-[#005ab1] mt-4 text-xs">With Orbsway</h3>
        </div>
        <h3 className="text-sm font-medium px-16 text-center mt-6">
          This is your practice elevated - Seamless operations, happier patient and less chaos. Toggle back to see the before
        </h3>
      </section>

      {/* The Orbsway Effect Section */}
      <section className="w-screen h-[230vh] bg-black rounded-t-xl p-8 ml-2 sm:hidden">
        <div className="w-full h-full">
          <h3 className="text-[#005ab1] font-bold">THE ORBSWAY EFFECT</h3>
          <h3 className="text-white font-semibold text-2xl w-[80%] mt-10">Trusted by Clinics.</h3>
          <h3 className="text-white font-semibold text-2xl w-[80%]">Proven with patients</h3>
          <p className="text-white text-sm w-[80%] mt-2">From Hospitals to homes, Orbsway is helping hundreds improve their vision</p>
          <div className="grid grid-rows-3 gap-12 w-full h-[78%] mt-6">
            {OrbswayEffectCardMObileViewData.map((item, index) => (
              <OrbswayEffectCardMobileView key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="h-[200vh] w-full px-4 sm:hidden">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-[#005ab1] mt-4">OFFERINGS</h3>
          <p>
            Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors
            focus on what matters most: patient care.
          </p>
        </div>
        <div className="mt-4 grid grid-rows-2 w-full h-[70%] gap-2">
          {OfferingMobileViewCardsData.map((item, index) => (
            <OfferingMobileViewCards key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Cloud Suite Section */}
      <section className="relative h-[70vh] w-screen flex flex-col items-center px-4 transform -translate-y-24 sm:hidden">
        <div className="flex flex-col gap-6 h-full w-full z-20">
          <h3 className="z-20">We have developed a comprehensive eye hospital management software</h3>
          <div className="flex flex-col">
            <h3 className="z-20 text-[#005ab1] text-xl font-bold">Cloud based</h3>
            <h3 className="z-20 text-[#005ab1] text-xl font-bold">healthcare management Suite</h3>
          </div>
          <h3 className="z-20">that’s fully integrated to streamline your healthcare management process</h3>
          <Image
            src="/Manage Appointment-bg-2.svg"
            width={250}
            height={250}
            alt="background"
            className="ml-[25%] drop-shadow-md z-20"
          />
          <Image
            src="/Manage Appointment-1.svg"
            width={250}
            height={250}
            alt="foreground"
            className="z-20 ml-[10%] transform -translate-y-2"
          />
        </div>
      </section>
    </>
  );
};
