import Image from "next/image"
import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/NavBar"
import { ProductsDoctorsSection } from "@/components/ProductsDoctorsSection"
import { ProductsMobileView } from "@/components/ProductsMobileView"
import { ProductPatientsList } from "@/components/ProductsPatientsList"
import { VrIntegrationList } from "@/components/VrIntegrationsList"
import { ProductsDoctorsSectionData } from "@/data/ProductsDoctorsSectionData"
import { ProductPatientsData } from "@/data/ProductsPatientsData"

export default function Product() {
    return (
        <>
            {/* Mobile View */}
            <ProductsMobileView />

            {/* Desktop Hero Section */}
            <section className="hidden sm:block relative w-screen h-[70vh] xl:px-12 md:px-12 overflow-hidden">
                <Image src="/info-vector-svg.svg" width={1400} height={700} alt="image" className="absolute z-10 mt-12 ml-24" />
                <NavBar />
                <div className="z-20 flex gap-4 w-full h-[89%] px-4 md:px-1">
                    <div className="w-[70%] h-full flex flex-col justify-center">
                        <h2 className="text-[#005ab1] font-bold xl:text-4xl xl:ml-20 md:text-lg md:ml-12">
                            Discover Tools
                        </h2>
                        <h2 className="text-[#005ab1] font-bold xl:text-4xl xl:ml-20 md:text-lg md:ml-12">
                            That Redefine Vision Care
                        </h2>
                        <p className="w-[67%] mt-2 xl:mt-4 xl:ml-20 xl:text-[1rem] md:text-xs md:ml-12">
                            From personalised therapy for patients to smart tools for doctors, our product suite is
                            built to simplify, digitize, and elevate the way eye care is delivered. Whether you&apos;re
                            treating, managing, or tracking—there&apos;s a solution designed just for you.
                        </p>
                    </div>
                    <div>
                        <Image src="/hero-section-boy-girl-svg.svg" width={500} height={500} alt="image" className="z-20 mt-20 overflow-hidden" />
                    </div>
                </div>
            </section>

            {/* Products Sections */}
            <section className="hidden sm:block w-full h-[210vh] xl:px-8 md:px-2 flex flex-col md:ml-2">
                <div className="w-full h-[50%] bg-blue-100 rounded-xl overflow-hidden grid grid-cols-3 xl:gap-1 md:gap-0.5">
                    <div className="flex flex-col xl:pl-12 md:pl-4">
                        <h3 className="text-[#005ab1] xl:mt-6 md:mt-12 xl:text-lg md:text-lg font-medium">Products | Doctors</h3>
                        <h3 className="xl:text-2xl md:text-lg xl:w-[40%] md:w-[60%] xl:mt-6 font-semibold">
                            Designed for Doctors, Engineered for Simplicity.
                        </h3>
                        <p className="xl:w-[53%] md:w-[61%] xl:text-sm md:text-xs mt-4">
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        </p>
                        <Image src="/Standing Doctor.svg" width={330} height={300} alt="standing doctor" className="ml-4 mt-20 md:mt-36 w-full h-auto" />
                    </div>
                    {ProductsDoctorsSectionData.map((items, index) => (
                        <ProductsDoctorsSection key={index} {...items} />
                    ))}
                </div>

                <div className="w-full h-[50%] flex gap-4 mt-4 rounded-xl">
                    <div className="w-[65%] bg-blue-100 rounded-xl relative overflow-hidden">
                        <h3 className="text-[#005ab1] font-medium mt-6 ml-10 md:ml-4 md:mt-4 md:text-lg">Products | Patient</h3>
                        <h3 className="text-3xl font-semibold w-[60%] ml-10 mt-8 md:ml-4 md:mt-4">
                            Empowering patients with modern,
                            digital-first tools for vision care.
                        </h3>
                        <h3 className="mt-2 ml-10 text-xs md:ml-4 md:text-[0.5rem]">
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        </h3>
                        <div className="flex bg-white rounded-xl w-[90%] h-[45%] ml-10 mt-4 md:ml-6">
                            <div className="w-[50%] flex flex-col px-4">
                                <div className="ml-6 mt-4 md:ml-2 md:mt-2">
                                    <Image src="/share.svg" width={40} height={40} alt="icon" className="md:hidden" />
                                    <Image src="/share.svg" width={20} height={20} alt="icon" className="md:block hidden md:ml-2" />
                                </div>
                                <h3 className="text-2xl font-medium ml-6 mt-2 md:text-lg md:ml-4">Vision Therapy for Patients</h3>
                                <p className="ml-6 mt-2 w-[80%] text-xs md:text-[0.6rem] md:ml-4">
                                    A powerful dashboard for prescribing and monitoring patient therapy digitally.
                                </p>
                                <ul className="ml-6 mt-4 md:mt-1 xl:ml-7 md:text-[0.6rem]">
                                    {ProductPatientsData.map((items, index) => (
                                        <ProductPatientsList key={index} {...items} />
                                    ))}
                                </ul>
                                <div className="flex gap-4 ml-6 mt-4">
                                    <button className="xl:px-8 xl:py-2 border border-[#005ab1] text-[#005ab1] rounded-lg md:px-2 md:py-2 md:text-xs">
                                        Learn More
                                    </button>
                                    <button className="xl:px-8 xl:py-2 bg-[#005ab1] text-white rounded-lg md:px-2 md:py-2 md:text-xs">
                                        Explore Now
                                    </button>
                                </div>
                            </div>
                            <div className="w-[50%] relative">
                                <Image src="/info-manage-appointement-back.svg" width={180} height={180} alt="background" className="z-10 md:mt-20 md:ml-6" />
                                <Image src="/main-section-high-z-index.svg" width={180} height={180} alt="foreground" className="z-20 md:-mt-16 md:ml-1" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-4 xl:mt-8 md:mt-4 xl:ml-6 md:ml-6 bg-black rounded-xl w-[90%] h-[15%]">
                            <h3 className="text-white xl:text-lg md:text-md font-medium ml-6 md:ml-4 -translate-y-4">
                                With VR Integration
                            </h3>
                            <h3 className="xl:text-xs md:text-[0.7rem] text-white ml-6 md:ml-4 -mt-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.
                            </h3>
                        </div>

                        <div className="absolute transform -translate-y-[72%] translate-x-[75%] md:translate-x-[60%]">
                            <Image src="/standing-girl.svg" width={230} height={230} alt="image" className="md:hidden" />
                            <Image src="/standing-girl.svg" width={300} height={300} alt="image" className="xl:mt-32 ml-14 hidden md:block" />
                        </div>
                    </div>

                    <div className="w-[33%] bg-black rounded-xl p-12">
                        <div className="h-full w-full rounded-xl flex flex-col">
                            <h3 className="ml-2 text-white text-3xl md:text-lg">VR Integrations</h3>
                            <p className="ml-2 text-white text-xs mt-4 md:text-[0.5rem]">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.
                            </p>
                            <ul className="ml-6 mt-4 text-white md:text-xs">
                                {ProductPatientsData.map((items, index) => (
                                    <VrIntegrationList key={index} {...items} />
                                ))}
                            </ul>
                            <Image src="/vr-integration.svg" width={250} height={250} alt="VR image" className="ml-20 mt-12 md:ml-2 xl:ml-16" />
                            <p className="text-xs text-white mt-12 px-4 md:text-[0.5rem] md:px-1 md:mt-4 xl:text-sm">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section Placeholder */}
            <section className="hidden sm:flex relative max-w-screen h-[60vh] ml-12 mt-12">
                <Image src="/info-vector-svg.svg" width={1400} height={50} alt="image" className="absolute" />
                <div className="z-20 w-[40%] h-full ml-6 mt-28 px-8">
                    <h3 className="text-[#005ab1] xl:text-lg font-medium mb-8 md:text-md">THE ORBSWAY EFFECT</h3>
                    <h3 className="text-[#005ab1] xl:text-4xl font-semibold mb-4 xl:w-[60%]">...</h3>
                    {/* You can continue here with your content */}
                </div>
            </section>

            {/* Optional Footer */}
            <Footer />
        </>
    )
}
