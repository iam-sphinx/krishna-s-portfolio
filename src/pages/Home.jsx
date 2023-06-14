import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WebCard from "../components/WebCard";
import Marquee from "react-fast-marquee";
import HeroCard from "../components/HeroCard";
import GreetCard from "../components/GreetCard";
import PersonalGrowthCard from "../components/PersonalGrowthCard";
import CanvasCard from "../components/CanvasCard";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#00030a] flex flex-col">
      <Header />
      <div className=" flex-1 px-[7.25rem]">
        <Navbar />
        <div className="flex justify-center items-center mt-[8.355rem]">
          <WebCard />
        </div>
      </div>
      <div className="relative bottom-32 mb-[5.063rem]">
        <HeroCard />
      </div>
      <div className="flex-1 px-[7.25rem]">
        <div className="mb-[9.019rem]">
          <GreetCard />
        </div>
        <PersonalGrowthCard />
      </div>

      <div className="flex-1 px-[7.25rem] mb-[5.313rem]">
        <CanvasCard />
      </div>
      <div className="flex-1 ">
        <Section4 />
      </div>
      <div className="flex-1">
        <Section5 />
      </div>
      <div className="flex-1 mb-[10.1875rem]">
        <Section6 />
      </div>
      <div className="flex-1 px-[7.25rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
