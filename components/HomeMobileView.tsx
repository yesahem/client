"use client";

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
      <section className="w-full h-screen flex flex-col items-center sm:hidden px-4">
        <div className="w-full flex justify-between mt-4">
          <Image src="/Logo.png" width={80} height={80} alt="logo" />
          <Menu size={30} className="mt-2" />
        </div>
        <h3 className="text-3xl text-[#005ab1] font-bold mt-8 text-center">Next-Gen Vision Therapy</h3>
        <p className="text-sm text-center mt-4 px-6">
          Address vision challenges with innovative, cloud-based solutions—trusted by leading eye institutes.
        </p>
        <Image src="/Group 11.svg" width={250} height={250} alt="hero" className="my-6" />
        <button className="bg-[#005ab1] text-white text-lg px-6 py-2 rounded-lg">REQUEST FOR FREE TRIAL</button>
        <u className="text-[#005ab1] font-semibold mt-4">LEARN MORE</u>
      </section>

      {/* Divider */}
      <hr className="h-1 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[80%] mx-auto my-6 opacity-60 rounded-xl" />

      {/* Upgrade Your Practice */}
      <section className="w-full flex flex-col items-center sm:hidden px-4 py-8">
        <h3 className="text-2xl text-[#005ab1] font-bold text-center">Upgrade Your Practice</h3>
        <p className="text-sm text-center mt-4">
          Everything in one platform. From digital therapy tools to automated scheduling — it just works, together.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          {featureList.map((feature, index) => (
            <div key={index} className="border border-blue-100 shadow-lg rounded-lg p-3 bg-rose-100 flex gap-2 items-start">
              <Image src="/verify.svg" width={20} height={20} alt="check" />
              <p className="text-xs font-semibold">{feature}</p>
            </div>
          ))}
        </div>
        <Image src="/boy-girl-table.svg" width={300} height={300} alt="illustration" className="my-8" />
        <div className="w-full flex items-center justify-between px-2">
          <p className="text-xs">Imagine without Orbsway</p>
          <div className="w-[25%] h-2 bg-gray-200 rounded-full mx-2" />
          <p className="text-[#005ab1] text-xs">With Orbsway</p>
        </div>
        <p className="text-center text-xs mt-4 px-6">
          This is your practice elevated — Seamless operations, happier patients, and less chaos.
        </p>
      </section>

      {/* The Orbsway Effect */}
      <section className="w-full bg-black py-8 sm:hidden px-4">
        <h3 className="text-[#005ab1] font-bold">THE ORBSWAY EFFECT</h3>
        <h3 className="text-white text-2xl font-semibold mt-4">Trusted by Clinics. Proven with patients</h3>
        <p className="text-white text-sm mt-2">Helping hundreds improve their vision from hospitals to homes.</p>
        <div className="grid gap-6 mt-6">
          {OrbswayEffectCardMObileViewData.map((item, index) => (
            <OrbswayEffectCardMobileView key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="w-full px-4 py-8 sm:hidden">
        <h3 className="text-[#005ab1] font-bold mb-2">OFFERINGS</h3>
        <p className="text-sm mb-6">
          Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care.
        </p>
        <div className="grid gap-4">
          {OfferingMobileViewCardsData.map((item, index) => (
            <OfferingMobileViewCards key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Cloud Suite */}
      <section className="w-full px-4 py-8 sm:hidden">
        <h3 className="text-sm font-semibold mb-2">We’ve developed a comprehensive eye hospital management software</h3>
        <h3 className="text-[#005ab1] text-xl font-bold leading-snug">Cloud based healthcare management Suite</h3>
        <p className="mt-2">Fully integrated to streamline your healthcare management process</p>
        <div className="flex flex-col items-center mt-6 gap-4">
          <Image src="/Manage Appointment-bg-2.svg" width={200} height={200} alt="bg" />
          <Image src="/Manage Appointment-1.svg" width={200} height={200} alt="fg" />
        </div>
      </section>
    </>
  );
};
