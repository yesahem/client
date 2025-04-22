
import { Footer } from "@/components/Footer"
import { ListItems } from "@/components/ListItems"
import { NavBar } from "@/components/NavBar"
import { ProductsDoctorsSection } from "@/components/ProductsDoctorsSection"
import { ProductsDoctorsSectionData } from "@/data/ProductsDoctorsSectionData"
import { ProductPatientsData } from "@/data/ProductsPatientsData"
import Image from "next/image"

export default function Product() {
    return(
        <>
            <section className="relative w-screen h-[70vh] flex flex-col px-12 overflow-hidden">
                    <Image src={"/info-vector-svg.svg"} width={1400} height={700} alt="image" className="absolute z-10 mt-12 ml-24"/>
                    <NavBar/>
                    <div className="z-20 flex gap-4 w-full h-[89%] px-4">
                        <div className="w-[70%] h-full flex flex-col justify-center">
                            <h2 className="text-[#005ab1] text-4xl font-bold ml-20">Discover Tools</h2>
                            <h2 className="text-[#005ab1] text-4xl font-bold ml-20">That Redefine Vision Care</h2>
                            <p className="ml-20  mt-4 w-[67%]">
                                From personalised therapy for patients to smart tools for doctors, our product suite is 
                                built to simplify, digitize, and elevate the way eye care is delivered. Whether you&apos;re 
                                treating, managing, or tracking—there&apos;s a solution designed just for you.
                            </p>
                        </div>
                        <div>
                            <Image src={"/hero-section-boy-girl-svg.svg"} width={500} height={500} alt="image" className="mt-20 z-20"/>
                        </div>
                    </div>
            </section>   
            <section className="w-full h-[210vh] px-8 flex flex-col">
                <div className="w-full h-[50%] bg-blue-100 rounded-xl grid grid-cols-3 gap-1">
                    <div className="flex flex-col pl-12 ">
                        <h3 className="text-[#005ab1] mt-2 font-medium mt-6"> Products | Doctors</h3>
                        <h3 className="text-2xl w-[35%] font-semilbold mt-6">Designed for Doctors, Engineered for Simplicity.</h3>
                        <p className="w-[53%] text-sm mt-4">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                        <Image src={"/Standing Doctor.svg"} width={330} height={200} alt="standing doctor" className="ml-4 mt-20 transform -translate-y-0.5"/>
                    </div>
                    {ProductsDoctorsSectionData.map((items,index)=>(<ProductsDoctorsSection key={index} {...items}/>))}
                    <div className="bg-rose-100"></div>
                </div>
                <div className="w-full h-[50%] flex gap-4 mt-4 rounded-xl">
                    <div className="w-[65%]  rounded-xl relative overflow-hidden bg-blue-100">
                        <h3 className="text-[#005ab1] mt-2 font-medium mt-6 ml-10"> Products | Patient </h3>
                        <h3 className="text-3xl font-semibold w-[60%] ml-10 mt-8">
                            Empowering patients with modern, 
                            digital-first tools for vision care.
                        </h3>
                        <h3 className="mt-2 ml-10 text-xs "> Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</h3>
                        <div className="flex bg-white rounded-xl w-[90%] h-[45%] ml-10 mt-4">
                            <div className="w-[50%] flex flex-col">
                                <div className=" ml-6 mt-4"><Image src={"/share.svg"} width={40} height={40} alt="image"/></div>
                                <h3 className="text-2xl font-medium ml-6 mt-2">Vision Therapy for Patients</h3>
                                <p className="ml-6 text-xs w-[80%] mt-2"> 
                                    A powerful dashboard for prescribing and monitoring patient 
                                    therapy digitally.
                                </p>
                                <ul className="ml-6 mt-4">
                                    {ProductPatientsData.map((items,index)=>(<ListItems key={index} {...items}/>))}
                                </ul>
                                <div className="flex gap-4 ml-6 mt-4">
                                    <button className="w-fit-content px-8 py-2 border border-[#005ab1] text-[#005ab1] rounded-lg">Learn More</button>
                                    <button className="w-fit-content px-8 py-2 bg-[#005ab1] text-white rounded-lg">Explore Now</button>
                                </div>                                
                            </div>
                            
                            <div className="w-[50%]">
                                <Image src={"/info-manage-appointement-back.svg"} width={300} height={300} alt="image" className="z-10 mt-8 ml-28"/>
                                <Image src={"/main-section-high-z-index.svg"} width={300} height={300} alt="image" className="z-20 -mt-24 ml-6"/>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center gap-4 mt-8 ml-10 bg-black rounded-xl w-[90%] h-[15%]">
                            <h3 className="text-white text-lg font-medium ml-6">With VR Intergation</h3>
                            <h3 className="text-xws text-white ml-6 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.</h3>
                        </div>
                        <div className="w-full absolute transform -translate-y-[72%] translate-x-[75%]">
                            <Image src={"/standing-girl.svg"} width={230} height={230} alt="image" />
                        </div>
                    </div>
                    <div className="w-[33%] bg-black rounded-xl p-12">
                        <div className=" h-full w-full rounded-xl flex flex-col">
                            <h3 className="ml-2 text-white text-3xl">Vr Integrations</h3>
                            <p className="ml-2 text-white w-full text-xs mt-4">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                            <ul className="ml-6 mt-4 text-white">
                                {ProductPatientsData.map((items,index)=>(<ListItems key={index} {...items}/>))}
                            </ul>
                            <Image src={"/vr-integration.svg"} width={250} height={250} alt="image" className="ml-20 mt-12"/>
                            <p className="text-xs text-white mt-12 px-4">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam 
                                eu turpis molestie, dictum est a, mattis tellus. Jorem ipsum 
                                dolor sit amet, consectetur adipiscing elit. Etiam eu turpis 
                                molestie, dictum est a, mattis tellus. Jorem ipsum dolor sit 
                                amet, consectetur adipiscing elit. Etiam eu turpis molestie
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" relative max-w-screen h-[60vh] flex ml-12 mt-12"> 
                <Image src={"/info-vector-svg.svg"} width={1400} height={50} alt="image" className=" absolute "/>
                {/*Content Part */}
                <div className="z-20 w-[40%] h-full ml-6 mt-28 px-8  ">
                    <h3 className=" text-[#005ab1] text-lg font-medium mb-8">
                    THE ORBSWAY EFFECT 
    
                    </h3>
                    <h3 className="text-[#005ab1] text-4xl font-semibold mb-4 w-[60%]">
                    Trusted by Clinics. 
                    </h3>
                    <h3 className="text-[#005ab1] text-4xl font-semibold mb-4 w-[80%]">Proven with patient</h3>
                    <h3 className="font-medium text-xs">
                    From Hospitals to homes, Orbsway is helping hundreds improve thier vision

                    </h3>
                </div>
                
                {/*Image part*/}
                <div className="z-20 w-[50%] mt-20 px-8 mb-2">
                    <Image src={"/Manage Appointment-bg-2.svg"} width={500} height={500} alt="image" className="ml-[30%] drop-shadow-md"/>
                    <Image src={"/Manage Appointment-1.svg"} width={500} height={500} alt="image" className="z-20 ml-[10%] transform -translate-y-1/2 drop-shadow-md"/>
                </div>
                
            </section>
            <hr className="h-1  border-none bg-gradient-to-r from-sky-400 to-cyan-200 w-[80%] px-12 ml-20 transform translate-y-28 translate-x-16 opacity-60 rounded-xl"/>

            <footer className=" h-[30vh] mt-54 "> <Footer/></footer>
        </>
    )
}