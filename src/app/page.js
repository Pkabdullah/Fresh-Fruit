import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HomePage from "@/components/Home";
import OurGallery from "@/components/OurGallery";
import OurServices from "@/components/OurServices";
import TheCompany from "@/components/TheCompany";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <HomePage/>
    <TheCompany/>
    <OurServices/>  
    <OurGallery/>
    <GetInTouch/>
   </main>
  );
}
