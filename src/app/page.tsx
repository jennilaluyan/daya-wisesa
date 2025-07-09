import Navbar from "@/components/general/Navbar";
import HeroSlider from "@/components/homepage/HeroSlider";
import AboutUs from "@/components/homepage/AboutUs";
import NewProducts from "@/components/homepage/NewProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <NewProducts />
    </>
  );
}
