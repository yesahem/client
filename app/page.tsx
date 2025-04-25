"use client";

import { BlackBgInfoCards } from "@/components/BlackBgInfoCards";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { OfferingSectionCards } from "@/components/OfferingSectionCards";
import { OrbswayAtAGlanceSectionCards } from "@/components/OrbswayAtAGlanceSectionCards";
import { UpgradeYourPracticeSection } from "@/components/UpgradeYourPracticeSection";
import { BlackBgInfoCardsData } from "@/data/BlackBgInfoCardsData";
import { OfferingSectionCardsData } from "@/data/OfferingSectionCardsData";
import { OrbswayAtAGlanceSectionsData } from "@/data/OrbswayAtAGlanceSectionCardsData";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { HomeMobileView } from "@/components/HomeMobileView";

export default function Home() {
  return (
    <>
      <HomeMobileView />
      <div className="w-screen bg-white  flex-col px-4 sm:px-12 overflow-x-hidden sm:h-[83vh] hidden sm:flex">
        <NavBar />
        <HeroSection />
      </div>

      <section className="relative w-screen overflow-hidden px-4 sm:px-12 hidden sm:block h-screen">
        <UpgradeYourPracticeSection />
      </section>

      <section className="w-screen hidden sm:block">
        <div className="w-full flex flex-col items-center">
          <div className="bg-black w-[95%] rounded-xl mt-10 flex flex-col lg:flex-row justify-center py-10 px-4 sm:px-8 md:ml-9">
            <div className="w-full lg:w-[15%] mb-6 lg:mb-0">
              <h3 className="text-[#005ab1] px-4 text-sm lg:text-lg">THE ORBSWAY EFFECT</h3>
              <h3 className="mt-6 text-white px-4 text-sm lg:text-3xl">
                Trusted by Clinics. Proven with patient
              </h3>
              <p className="text-white mt-4 px-4 text-xs lg:text-sm">
                From Hospitals to homes, Orbsway is helping hundreds improve their vision
              </p>
            </div>
            <div className="w-full lg:w-[80%] flex flex-wrap justify-around ml-auto gap-4">
              {BlackBgInfoCardsData.map((items, index) => (
                <BlackBgInfoCards key={index} {...items} />
              ))}
            </div>
          </div>

          <div className="w-[95%] flex flex-col lg:flex-row mt-4 px-4 sm:px-12">
            <div className="w-full lg:w-[20%] mb-4">
              <h3 className="text-[#005ab1] ml-2 font-bold">OFFERINGS</h3>
              <h3 className="ml-2 text-sm mt-2">
                Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care
              </h3>
            </div>
            <div className="w-full lg:w-[70%] flex flex-wrap justify-around gap-4">
              {OfferingSectionCardsData.map((items, index) => (
                <OfferingSectionCards key={index} {...items} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-screen sm:flex hidden ml-4 sm:ml-12 mt-12">
        <Image
          src={"/info-vector-svg.svg"}
          width={1400}
          height={50}
          alt="image"
          className="z-10 absolute"
        />
        <div className="z-20 w-full sm:w-[40%] mt-28 px-4 sm:px-8">
          <h3 className="text-black text-sm lg:text-2xl font-medium mb-4">We have developed a comprehensive eye hospital management software</h3>
          <h3 className="text-[#005ab1] text-2xl lg:text-5xl font-semibold mb-4">Cloud based healthcare management Suite</h3>
          <h3 className="font-medium text-sm lg:text-xl">that’s fully Integrated to streamline your healthcare management process</h3>
        </div>
        <div className="z-20 w-[50%] mt-20 px-8 mb-2">
          <Image src={"/Manage Appointment-bg-2.svg"} width={500} height={500} alt="image" className="lg:ml-[30%] drop-shadow-md md:ml-[20%] md:transform md:-translate-y-8"/>
          <Image src={"/Manage Appointment-1.svg"} width={500} height={500} alt="image" className="z-20 lg:ml-[10%] lg:transform lg:-translate-y-1/2 drop-shadow-md md:ml-[3%] md:transform md:-translate-y-32"/>
        </div>
      </section>

      <hr className="hidden sm:block absolute z-50 h-1 mt-4 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[90%] px-12 ml-20 transform -translate-y-28 opacity-60 rounded-xl" />

      <section className="w-screen hidden sm:block h-auto sm:h-[70vh] -mt-12">
        <div className="flex flex-col sm:flex-row w-full h-full py-8 px-4 sm:px-14 gap-10">
          <div className="w-full sm:w-[20%]">
            <h3 className="text-[#005ab1] ml-4">Orbsway At a glance</h3>
            <h3 className="font-semibold text-lg sm:text-4xl w-full mt-6 sm:mt-14 ml-4">
              Smart. Simple. Scalable.
            </h3>
            <h3 className="ml-4 w-[90%] mt-4 sm:mt-6 text-xs">
              Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care
            </h3>
          </div>
          <div className="w-full sm:w-[75%] grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 p-2">
            {OrbswayAtAGlanceSectionsData.map((items, index) => (
              <OrbswayAtAGlanceSectionCards key={index} {...items} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-screen hidden sm:flex flex-col items-center mt-12 gap-10 h-auto sm:h-[150vh]">
        <div className="flex flex-col sm:flex-row bg-black w-[90%] rounded-xl overflow-hidden">
          <h2 className="text-white text-xl sm:text-4xl font-medium p-4 w-full sm:w-[30%]">
            Visionary’s Take on Vision Therapy
          </h2>
          <div className="flex flex-col w-full sm:w-[30%] justify-center p-4">
            <Image src={"/inverted-double-quotes.svg"} width={100} height={100} alt="quotes" className="-translate-y-8 sm:-translate-y-20" />
            <p className="text-white text-xs mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...
            </p>
            <hr className="w-[15%] h-2 mt-4 bg-gradient-to-r from-sky-400 to-cyan-200 hidden sm:block" />
            <h3 className="text-[#3061d7] font-semibold mt-2">Dr. Vipin Buckshey,</h3>
            <p className="text-white font-medium">Padma Shri Awardee</p>
            <p className="text-white font-medium">Former Optometrist to President of India</p>
          </div>
          <Image src={"/person-image-2.png"} width={300} height={300} alt="person" className="block sm:hidden mx-auto" />
          <Image src={"/person-image-2.png"} width={450} height={600} alt="person" className="hidden sm:block" />
        </div>

        <div className="w-[90%] flex flex-col sm:flex-row gap-12 mt-4">
          <div className="w-full sm:w-[30%]">
            <h3 className="text-xl sm:text-5xl font-medium mb-4">Join The Future Of Vision Therapy</h3>
            <p className="w-[90%] mb-6">Orbsway is trusted by doctors, hospitals, and vision care pioneers...</p>
            <div className="flex flex-col gap-2">
              <button className="w-full rounded-lg border border-blue-500 text-blue-500 font-medium p-2 text-sm">REQUEST A CALLBACK</button>
              <button className="w-full rounded-lg bg-blue-500 text-white font-medium p-2 text-sm">REQUEST FOR FREE TRIAL</button>
            </div>
          </div>

          <div className="w-full sm:w-[68%] border border-blue-700 rounded-xl">
            <form className="w-full h-full rounded-xl p-4">
              <div className="w-full bg-white flex flex-col">
                <h3 className="text-[#005ab1] font-bold mb-2 text-sm">Need a custom solution or have questions?</h3>
                <h3 className="text-sm">Drop us a message and we’ll get back to you within 24 hours.</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  {["First name*", "Last name*", "Email*", "Contact"].map((label, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm">{label}</h3>
                      <input type="text" placeholder={label.includes("Email") ? "example@gmail.com" : label.includes("Contact") ? "0000000000" : label.split("*")[0]} className="w-full pl-4 py-2 border border-blue-700 rounded-lg" />
                    </div>
                  ))}
                </div>

                <textarea placeholder="Enter description" className="w-full h-24 mt-4 border border-blue-700 rounded-lg p-2" />
                <button type="submit" className="mt-4 self-end w-[40%] sm:w-[20%] bg-[#005ab1] text-white text-lg font-bold py-2 rounded-lg">Send</button>
              </div>
            </form>
          </div>
        </div>

        
      </section>
      <hr className="hidden sm:block h-1 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[92%] px-12 ml-20 transform -translate-y-28 -translate-x-10 opacity-60 rounded-xl" />

      <Footer />
    </>
  );
}
