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
import { HomeMobileView } from "@/components/HomeMobileView";


export default function Home() {
  return (
    <>  
      <HomeMobileView/>
      <div className=" hidden w-screen h-[83vh] bg-white flex flex-col px-12 overflow-x-hidden sm:block">
        <NavBar/>
        <HeroSection/>
      </div>
      <section className=" hidden relative w-screen h-screen overflow-hidden px-12 sm:block">
        <UpgradeYourPracticeSection/>
      </section>   
      <section className=" hidden w-screen h-screen  sm:block">
        <div className="w-full h-full flex flex-col items-center">
          <div className="bg-black w-[95%] h-[45%] rounded-xl mt-10 flex justify-center py-10 px-8 md:ml-9 w-[98%]">
            <div className="w-full h-full rounded-xl flex">
              <div className="w-[15%] h-full flex flex-col ">
                <h3 className="lg:text-lg text-[#005ab1] px-4 md:text-xs">THE ORBSWAY EFFECT</h3>
                <h3 className=" mt-6 lg:text-3xl  text-white px-4 md:text-sm">
                  Trusted by 
                  Clinics.Proven 
                  with patient 
                </h3>
                <p className="text-white mt-4 lg:text-sm ml-4 md:text-[0.5rem]">
                  From Hospitals to homes, Orbsway is helping hundreds improve thier vision
                </p> 
              </div>
              <div className="flex justify-around w-[80%] ml-auto">
                {BlackBgInfoCardsData.map((items,index)=>(<BlackBgInfoCards key={index} {...items}/>))}
              </div>
            </div>
          </div>
          <div className=" h-[46%] w-[95%] mt-4 flex px-12 ml-2 md:mt-6">
            <div className="flex flex-col justify-between w-[20%] ">
              <h3 className="text-[#005ab1] ml-2 font-bold md:mb-4 mt-4">OFFERINGS</h3>
              <h3 className="ml-2 transform -translate-y-4 md:text-sm">
                Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care</h3>
            </div>
            <div className="flex justify-around w-[70%] ml-18">
              {OfferingSectionCardsData.map((items,index)=>(<OfferingSectionCards key={index} {...items}/>))}
            </div>
          </div>
        </div>  
      </section> 
      <section className=" hidden relative max-w-screen max-h-screen sm:flex ml-12 mt-12 "> 
      <Image src={"/info-vector-svg.svg"} width={1400} height={50} alt="image" className="z-10 absolute "/>
        {/*Content Part */}
        <div className="z-20 w-[40%] h-full ml-6 mt-28 px-8  md:mt-6">
          <h3 className=" text-black lg:text-2xl font-medium mb-4 md:text-sm lg:mt-12">
            We have developed a comprehensive eye hospital management software</h3>
          <h3 className="text-[#005ab1] lg:text-5xl font-semibold mb-4 md:text-2xl lg:mt-8">
          Cloud based healthcare management Suite
          </h3>
          <h3 className="font-medium lg:text-xl lg:mt-12">
          that’s fully Intergated to streamline your health care management process
          </h3>
        </div>
        
        {/*Image part*/}
        <div className="z-20 w-[50%] mt-20 px-8 mb-2">
          <Image src={"/Manage Appointment-bg-2.svg"} width={500} height={500} alt="image" className="lg:ml-[30%] drop-shadow-md md:ml-[20%] md:transform md:-translate-y-8"/>
          <Image src={"/Manage Appointment-1.svg"} width={500} height={500} alt="image" className="z-20 lg:ml-[10%] lg:transform lg:-translate-y-1/2 drop-shadow-md md:ml-[3%] md:transform md:-translate-y-32"/>
        </div>
      </section>
      <hr className="hidden absolute z-50 h-1 mt-4 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[90%] px-12 ml-20 transform -translate-y-28 opacity-60 rounded-xl sm:block"/>
      <section className="hidden w-screen h-[70vh] -mt-12 sm:block">
        <div className="flex w-full h-full py-8 px-14 gap-10">
          {/*Content Side*/}
          <div className="flex flex-col justify-between w-[20%]">
              <h3 className="text-[#005ab1] ml-4 "> Orbsway At a glace</h3>
              <h3 className=" font-semimedium lg:text-4xl w-[20%] mt-14 ml-4 transform translate-y-6 md:text-lg">
                Smart.
                Simple. 
                Scalable.
              </h3>
              <h3 className="ml-4 transform w-[72%] md:text-xs mt-6">
                Orbsway simplifies vision therapy with AI-driven tools, real-time monitoring, and seamless integration—helping doctors focus on what matters most: patient care</h3>
          </div> 
          {/*Cards Side Grid*/}
          <div className=" w-[75%] grid grid-cols-3 grid-rows-2 gap-4 p-2">
            {OrbswayAtAGlanceSectionsData.map((items,index)=>(<OrbswayAtAGlanceSectionCards key={index} {...items}/>))}            
          </div>
        </div>
      </section>
      <section className="hidden w-screen h-[150vh] sm:flex flex-col items-center mt-12 gap-10 ">
        <div className="flex bg-black h-[45%] w-[90%] rounded-xl overflow-hidden">
          <h2 className="flex justify-center items-center lg:text-4xl font-medium px-4 w-[30%] text-white ml-2 md:text-lg">
          Visionary’s Take 
          on Vision Therapy
          </h2>
          <div className=" flex flex-col w-[30%] justify-center"> 
          <Image src={"/inverted-double-quotes.svg"} width={200} height={200} alt="quotes" className="transform -translate-y-20"/>
            <p className="text-white lg:text-xs mt-6 md:text-[0.6rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam 
              `eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, 
              metus nec fringilla accumsan, risus sem sollicitudin lacus, ut 
              interdum tellus elit sed risus. Maecenas eget condimentum 
              velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad 
              litora torquent per conubia nostra, per inceptos himenaeos. 
            </p>
            <hr className=" w-[15%] h-2 mt-8 bg-gradient-to-r from-sky-400 to-cyan-200 md:hidden"/>
            <h3 className="lg:text-lg font-semibold text-[#3061d7] md:text-sm mt-2">Dr. Vipin Buckshey,</h3>
            <p className="text-white font-medium lg:text-lg md:text-sm">Padma Shri Awardee </p>
            <p className="text-white font-medium lg:text-lg md:text-sm">& Former Optometrist to President of India</p>
          </div>
          <Image src={"/person-image-2.png"} width={450} height={600} alt="person" className="lg:block md:hidden" />
          <Image src={"/person-image-2.png"} width={300} height={250} alt="person" className="lg:hidden md:block" />
        </div>
        <div className=" w-[90%] h-[45%] flex gap-12 mt-4">
          <div className=" flex flex-col w-[30%]">
              <h3 className="font-medium lg:text-5xl lg:mb-6 md:text-xl mb-2">
                Join The Future Of Vision Therapy
              </h3>
              <p className="w-[88%] mb-12">Orbsway is  trusted by  doctors, hospitals, and vision care pioneers. Whether you&apos;re ready to get  started or just want to know more - we&apos;re here for you.</p>
              <div className="flex flex-col gap-2">
                <button className="w-[90%] rounded-lg bg-whtie text-blue-500 font-medium border border-blue-500 p-2 md:text-sm">REQUEST A CALLBACK</button>
                <button className="w-[90%] rounded-lg text-white font-medium bg-blue-500 p-2 md:text-sm">REQUEST FOR FREE TRIAL</button>
              </div>
          </div>
          <div className="w-[68%] h-[87%] border border-blue-700 rounded-xl">
            <form className="w-full h-full rounded-xl p-4">
              <div className="w-full h-full bg-white flex flex-col">
                <h3 className="text-[#005ab1] font-bold mb-2 md:text-sm">Need a custom solution or have questions?</h3>
                <h3 className="lg:text-sm md:text-xs">Drop us a message and we’ll get back to you within 24 hours.dly team would love to hear from you.</h3>
                <div className="w-full h-[30%]  grid grid-cols-2 grid-rows-2  md:gap-1">
                  <div className=" h-[40%] lg:p-2 md:p-1">
                    <div className="p-2">
                      <h3 className="md:text-sm lg:lg">First name*</h3>
                      <input type="text" placeholder="First name" className="w-[90%] pl-6 py-1 border border-blue-700 rounded-lg" />
                    </div>
                  </div>
                  <div className=" h-[40%] lg:p-2 md:p-1">
                    <div className="p-2">
                      <h3 className="md:text-sm lg:lg">last Name*</h3>
                      <input type="text" placeholder="Last name" className="w-[90%] pl-6 py-1 border border-blue-700 rounded-lg" />
                    </div>
                  </div>
                  <div className=" h-[40%] lg:p-2 md:p-1">
                    <div className="p-2">
                      <h3 className="md:text-sm lg:lg">Email*</h3>
                      <input type="text" placeholder="example@gmail.com" className="pl-6 py-1 w-[90%] border border-blue-700 rounded-lg" />
                    </div>
                  </div>
                  <div className=" h-[40%] lg:p-2 md:p-1">
                    <div className="p-2">
                      <h3 className="md:text-sm lg:lg">Contact</h3>
                      <input type="text" placeholder="0000000000" className="w-[90%] py-1 pl-6 border border-blue-700 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="lg:h-[40%] md:h-[20%] md:transform md:translate-y-6">
                  <input type="text" className=" w-[98%] ml-2 h-full border border-blue-700 rounded-lg md:ml-1" placeholder="enter description"/>
                </div>
                <button className=" lg:mt-2 ml-[78%] rounded-lg w-[20%] h-[10%] bg-[#005ab1] text-white text-lg font-bold md:transform md:translate-y-8 ">Send</button>
              </div>
            </form>
          </div>
        </div>
        <hr className=" hidden h-0.5 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[80%] px-12 ml-20 transform -translate-y-28 -translate-x-10 opacity-60 rounded-xlsm:block"/>
        </section>
        <Footer/>
    </>  
  );
}
