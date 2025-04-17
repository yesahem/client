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
          <div className=" h-[46%] w-[95%] mt-4 flex">
            <div className="flex flex-col justify-between w-[20%] ">
              <h3 className="text-[#005ab1] ml-2">OFFERINGS</h3>
              <h3 className="ml-2">
                Orbsway simplifies vision therapy 
                with AI-driven tools, real-time 
                monitoring, and seamless 
                integration—helping doctors focus 
                on what matters most: patient care</h3>
            </div>
            <div className="flex justify-around w-[70%] ml-18">
              <div className="w-[40%] h-[90%] bg-white rounded-xl my-4 flex justify-center items-center">
                <div className="w-[99.5%] h-[99.5%] bg-gradient-to-b from-sky-400 to-cyan-200 rounded-xl flex justify-center items-center">
                  <div className="w-[99.5%] h-[99.5%] bg-white rounded-xl">
                    <div className="w-full h-[60%] bg-black">
                      <Image src={"/doctor.svg"} width={200} height={200} alt="image" className="ml-54 transform translate-y-2/3  "/>
                    </div>
                    <h3 className="font-bold text-2xl ml-4">For Doctors</h3>
                    <p className="text-xs ml-4"> Everything you need—vision therapy, patient tracking, appointment management
                    —all in one seamless, doctor-focused platform</p>
                    <button className="bg-[#005ab1] text-white p-2 rounded-lg transform translate-x-24 mt-1">EXPLORE OUR PRODUCTS</button>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-[90%] bg-white rounded-xl my-4 flex justify-center items-center">
                <div className="w-[99.5%] h-[99.5%] bg-gradient-to-b from-sky-400 to-cyan-200 rounded-xl flex justify-center items-center">
                  <div className="w-[99.5%] h-[99.5%] bg-white rounded-xl">
                    <div className="w-full h-[60%] bg-black">
                      <Image src={"/patient.svg"} width={120} height={120} alt="image" className="ml-72 transform translate-y-1/4 "/>
                    </div>
                    <h3 className="font-bold text-2xl ml-4">For Patients</h3>
                    <p className="text-xs ml-4"> Everything you need—vision therapy, patient tracking, appointment management
                    —all in one seamless, doctor-focused platform</p>
                    <button className="bg-[#005ab1] text-white p-2 rounded-lg transform translate-x-24 mt-1">EXPLORE OUR PRODUCTS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section> 
    </>  
  );
}
