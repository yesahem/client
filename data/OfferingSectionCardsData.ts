import { OfferingSectionCardsProps } from "@/components/OfferingSectionCards";

export const OfferingSectionCardsData: OfferingSectionCardsProps[] = [
    {
        image: "/doctor.svg",
        imgw: 150,
        imgh: 150,
        heading: "For Doctors",
        description: "Everything you need—vision therapy, patient tracking, appointment management—all in one seamless, doctor-focused platform",
        styling: "", // Removed specific positioning classes as we're handling this with flexbox now
    },
    {
        image: "/patient.svg",
        imgw: 100,
        imgh: 100,
        heading: "For Patients",
        description: "Everything you need—vision therapy, patient tracking, appointment management—all in one seamless, doctor-focused platform",
        styling: "", // Removed specific positioning classes as we're handling this with flexbox now
    }
]