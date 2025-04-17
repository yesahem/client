import { BlackBgInfoCards } from "@/components/BlackBgInfoCards";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { UpgradeYourPracticeSection } from "@/components/UpgradeYourPracticeSection";
import { BlackBgInfoCardsData } from "@/data/BlackBgInfoCardsData";
import Image from "next/image";


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
        <section className="w-screen h-screen ">
          <div className="w-full h-full flex flex-col items-center">
            <div className="bg-black w-[95%] h-[50%] rounded-xl mt-10 flex justify-center py-10 px-8">
              <div className="w-full h-full rounded-xl flex">
                <div className="w-[15%] h-full flex flex-col ">
                  <h3 className="text-[#005ab1] px-4">THE ORBSWAY EFFECT</h3>
                  <h3 className=" mt-6 text-3xl  text-white px-4">
                    Trusted by 
                    Clinics.Proven 
                    with patient 
                  </h3>
                  <p className="text-white mt-4 text-sm ml-4">
                    From Hospitals to homes, 
                    Orbsway is helping hundreds 
                    improve thier vision
                  </p>
                </div>
                <div className="flex justify-around w-[80%] ml-24">
                  {BlackBgInfoCardsData.map((items,index)=>(<BlackBgInfoCards key={index} {...items}/>))}
                </div>
              </div>
            </div>
          </div>  
        </section> 
      </>  
    );
  }
