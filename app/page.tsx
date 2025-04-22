"use client"

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


export default function Home() {
  return (
    <>  
      <div className="w-screen h-[83vh] bg-white flex flex-col px-12 overflow-x-hidden">
        <NavBar/>
        <HeroSection/>
      </div>
      <section className="relative w-screen h-screen overflow-hidden px-12">
        <UpgradeYourPracticeSection/>
      </section>   
      <section className=" w-screen h-screen ">
        <div className="w-full h-full flex flex-col items-center">
          <div className="bg-black w-[95%] h-[45%] rounded-xl mt-10 flex justify-center py-10 px-8">
            <div className="w-full h-full rounded-xl flex">
              <div className="w-[15%] h-full flex flex-col ">
                <h3 className="text-[#005ab1] px-4">THE ORBSWAY EFFECT</h3>
                <h3 className=" mt-6 text-3xl  text-white px-4">
                  Trusted by 
                  Clinics.Proven 
                  with patient 
                </h3>
                <p className="text-white mt-4 text-sm ml-4">
                  From Hospitals to homes, Orbsway is helping hundreds improve thier vision
                </p> 
              </div>
              <div className="flex justify-around w-[80%] ml-auto">
                {BlackBgInfoCardsData.map((items,index)=>(<BlackBgInfoCards key={index} {...items}/>))}
              </div>
            </div>
          </div>
          <div className=" h-[46%] w-[95%] mt-4 flex px-12 ml-2">
            <div className="flex flex-col justify-between w-[20%] ">
              <h3 className="text-[#005ab1] ml-2">OFFERINGS</h3>
              <h3 className="ml-2 transform -translate-y-4">
                Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care</h3>
            </div>
            <div className="flex justify-around w-[70%] ml-18">
              {OfferingSectionCardsData.map((items,index)=>(<OfferingSectionCards key={index} {...items}/>))}
            </div>
          </div>
        </div>  
      </section> 
      <section className=" relative max-w-screen max-h-screen flex ml-12 mt-12"> 
      <Image src={"/info-vector-svg.svg"} width={1400} height={50} alt="image" className="z-10 absolute "/>
        {/*Content Part */}
        <div className="z-20 w-[40%] h-full ml-6 mt-28 px-8  ">
          <h3 className=" text-black text-2xl font-medium mb-4">
            We have developed a comprehensive eye hospital management software</h3>
          <h3 className="text-[#005ab1] text-4xl font-semibold mb-4">
          Cloud based healthcare management Suite
          </h3>
          <h3 className="font-medium text-lg">
          that’s fully Intergated to streamline your health care management process
          </h3>
        </div>
        
        {/*Image part*/}
        <div className="z-20 w-[50%] mt-20 px-8 mb-2">
          <Image src={"/Manage Appointment-bg-2.svg"} width={500} height={500} alt="image" className="ml-[30%] drop-shadow-md"/>
          <Image src={"/Manage Appointment-1.svg"} width={500} height={500} alt="image" className="z-20 ml-[10%] transform -translate-y-1/2 drop-shadow-md"/>
        </div>
      </section>
      <hr className="absolute z-50 h-1 mt-4 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[90%] px-12 ml-20 transform -translate-y-28 opacity-60 rounded-xl"/>
      <section className="w-screen h-[70vh] -mt-12  ">
        <div className="flex w-full h-full py-8 px-14 gap-10">
          {/*Content Side*/}
          <div className="flex flex-col justify-between w-[20%]">
              <h3 className="text-[#005ab1] ml-4 "> Orbsway At a glace</h3>
              <h3 className=" font-semimedium text-4xl w-[20%] mt-16 ml-4 transform translate-y-6">
                Smart.
                Simple. 
                Scalable.
              </h3>
              <h3 className="ml-4 transform translate-y-2 w-[70%]">
                Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care</h3>
          </div> 
          {/*Cards Side Grid*/}
          <div className=" w-[75%] grid grid-cols-3 grid-rows-2 gap-4 p-2">
            {OrbswayAtAGlanceSectionsData.map((items,index)=>(<OrbswayAtAGlanceSectionCards key={index} {...items}/>))}            
          </div>
        </div>
      </section>
      <section className="w-screen h-[150vh] flex flex-col items-center mt-12 gap-10">
        <div className="flex bg-black h-[45%] w-[90%] rounded-xl overflow-hidden">
          <h2 className="flex justify-center items-center text-4xl font-medium px-4 w-[30%] text-white ml-2">
          Visionary’s Take 
          on Vision Therapy
          </h2>
          <div className=" flex flex-col w-[30%] justify-center"> 
          <Image src={"/inverted-double-quotes.svg"} width={200} height={200} alt="quotes" className="transform -translate-y-20"/>
            <p className="text-white text-xs mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam 
              `eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, 
              metus nec fringilla accumsan, risus sem sollicitudin lacus, ut 
              interdum tellus elit sed risus. Maecenas eget condimentum 
              velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad 
              litora torquent per conubia nostra, per inceptos himenaeos. 
            </p>
            <hr className=" w-[15%] h-2 mt-8 bg-gradient-to-r from-sky-400 to-cyan-200"/>
            <h3 className="text-lg font-semibold text-[#3061d7]">Dr. Vipin Buckshey,</h3>
            <p className="text-white font-medium text-lg">Padma Shri Awardee </p>
            <p className="text-white font-medium text-lg">& Former Optometrist to President of India</p>
          </div>
          <Image src={"/person-image-2.png"} width={450} height={600} alt="person" />
        </div>
        <div className=" w-[90%] h-[45%] flex gap-12 mt-4">
          <div className=" flex flex-col w-[30%]">
              <h3 className="font-medium text-5xl mb-6">
                Join The Future Of Vision Therapy
              </h3>
              <p className="w-[88%] mb-12">Orbsway is  trusted by  doctors, hospitals, and vision care pioneers. Whether you&apos;re ready to get  started or just want to know more - we&apos;re here for you.</p>
              <div className="flex flex-col  gap-2">
                <button className="w-[90%] rounded-lg bg-whtie text-blue-500 font-medium border border-blue-500  p-2">REQUEST A CALLBACK</button>
                <button className="w-[90%] rounded-lg text-white font-medium bg-blue-500 p-2">REQUEST FOR FREE TRIAL</button>
              </div>
          </div>
          <div>
            <form>
              
            </form>
          </div>
        </div>
        <hr className="h-1  border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[80%] px-12 ml-20 transform -translate-y-28 -translate-x-10 opacity-60 rounded-xl"/>
        </section>
        <Footer/>
    </>  
  );
}
