import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { UpgradeYourPracticeSection } from "@/components/UpgradeYourPracticeSection";


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
      </>  
    );
  }
