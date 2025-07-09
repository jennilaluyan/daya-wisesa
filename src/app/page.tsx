import Navbar from "@/components/general/Navbar";
import HeroSlider from "@/components/homepage/HeroSlider";
import AboutUs from "@/components/homepage/AboutUs";
import NewProducts from "@/components/homepage/NewProducts";
import HomeGrid from "@/components/homepage/HomeGrid";
import VideoSection from "@/components/homepage/VideoSection";
import Footer from "@/components/general/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <NewProducts />
      <HomeGrid />
      <VideoSection />
      <Footer />
    </>
  );
}
