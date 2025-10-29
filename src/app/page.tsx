"use client";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import MySkills from "./Components/MySkills/MySkills";
import About from "./Components/AboutMe/About";
import MyApproch from "./Components/Services/MyApproch";
import Contact from "./Components/Contact-us/Contact";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <MyApproch />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}
