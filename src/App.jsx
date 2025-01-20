import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import HeroSection from "./Pages/HeroSection";
import Services from "./Pages/Services";
import Works from "./Pages/Works";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Services />
      <About />
      <Works />
    </>
  );
}
