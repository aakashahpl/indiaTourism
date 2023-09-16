import Image from "next/image";
import MapboxMap from "./components/mapbox";
import Navbar from "./components/navbar";
import Homeo from "./components/home";
import MustVisits from "./components/mustvisits";
import Slider from "./components/slide";
import food from "./components/food";
import Food from "./components/food";
import Footer from "./components/footer";
import PopularDestinations from "./components/popular";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Navbar />
      <Homeo />
      <PopularDestinations />
      <Food />
      <Footer />
    </main>
  );
}
