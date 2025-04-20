import { BlackBgInfoCards } from "@/components/BlackBgInfoCards";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { OfferingSectionCards } from "@/components/OfferingSectionCards";
import { UpgradeYourPracticeSection } from "@/components/UpgradeYourPracticeSection";
import { BlackBgInfoCardsData } from "@/data/BlackBgInfoCardsData";
import { OfferingSectionCardsData } from "@/data/OfferingSectionCardsData";
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
              <div className="flex justify-around w-[80%] ml-auto">
                {BlackBgInfoCardsData.map((items,index)=>(<BlackBgInfoCards key={index} {...items}/>))}
              </div>
            </div>
          </div>
          <div className=" h-[46%] w-[95%] mt-4 flex px-12 ml-2">
            <div className="flex flex-col justify-between w-[20%] ">
              <h3 className="text-[#005ab1] ml-2">OFFERINGS</h3>
              <h3 className="ml-2 transform -translate-y-4">
                Orbsway simplifies vision therapy 
                with AI-driven tools, real-time 
                monitoring, and seamless 
                integration—helping doctors focus 
                on what matters most: patient care</h3>
            </div>
            <div className="flex justify-around w-[70%] ml-18">
              {OfferingSectionCardsData.map((items,index)=>(<OfferingSectionCards key={index} {...items}/>))}
            </div>
          </div>
        </div>  
      </section> 
      <section className=" max-w-screen max-h-screen flex ml-12 mt-12"> 
        {/*Content Part */}
        <div className="w-[40%] h-full ml-6 mt-28 px-8  ">
          <h3 className=" text-black text-2xl font-medium mb-4">
            We have developed a comprehensive eye 
            hospital management software</h3>
          <h3 className="text-[#005ab1] text-4xl font-semibold mb-4">
          Cloud based healthcare 
          management Suite
          </h3>
          <h3 className="font-medium text-lg">
          that’s fully Intergated to streamline your health care 
          management process
          </h3>
        </div>
        
        {/*Image part*/}
        <div className="w-[50%] mt-20 px-8 mb-2">
          <Image src={"/Manage Appointment-bg-2.svg"} width={400} height={400} alt="image" className="ml-[40%] drop-shadow-md"/>
          <Image src={"/Manage Appointment-1.svg"} width={400} height={400} alt="image" className="z-20 ml-[20%] transform -translate-y-1/2 drop-shadow-md"/>
        </div>
      </section>
      <hr className="h-1  mt-4 border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[90%] px-12 ml-20 transform -translate-y-28 opacity-60 rounded-xl"/>
      <section className="w-screen h-[70vh]">
        <div className="flex w-full h-full py-8 px-12 gap-10">
          {/*Content Side*/}
          <div className="flex flex-col justify-between w-[20%]">
              <h3 className="text-[#005ab1] ml-2 "> Orbsway At a glace</h3>
              <h3 className=" font-semimedium text-4xl w-[20%] mt-16  transform translate-y-6">
                Smart.
                Simple. 
                Scalable.
              </h3>
              <h3 className="ml-2 transform translate-y-2 w-[70%]">
                Orbsway simplifies vision therapy 
                with AI-driven tools, real-time 
                monitoring, and seamless 
                integration—helping doctors focus 
                on what matters most: patient care</h3>
            </div>
          
          {/*Cards Side Grid*/}
          <div className=" w-[75%] grid grid-cols-3 grid-rows-2 gap-4 p-2">
            <div className="bg-white flex justify-center items-center rounded-lg">
              <div className="w-[99%] h-[99%] bg-gradient-to-b from-sky-400 to-cyan-200 flex justify-center items-center rounded-lg opacity-50">
                <div className="flex bg-white w-[99%] h-[99%] rounded-lg">
                  <div className=" flex w-full h-12 justify-end">
                    <Image src={"/share.svg"} color="rgba(18, 92, 171, 0)" width={40} height={40} alt="image" className="mr-4"/>
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
