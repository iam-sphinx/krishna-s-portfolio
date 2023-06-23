import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import CustomAnimation from "../utils/customAnimation";

const Work = () => {
  const workSamples = [
    {
      title: "KryptVault",
      sideTitle: "FEATURED PROJECT",
      description:
        "A Web 3.0 application that allows users to send transactions through the blockchain.",
      company: "KryptVault",
      period: "Nov-Dec 2023",
      imgSrc: "icons/KryptVault1.png",
      link: "https://kypytvault.netlify.app/",
    },
    {
      title: "Vellbe.life",
      sideTitle: "FEATURED PROJECT",
      description:
        "I was solely responsible for designing and developing the website which would meet your business requirement.",
      company: "Vellbe life",
      period: "Nov-Dec 2022",
      imgSrc: "icons/VellbeLife1.png",
      link: "https://www.vellbe.life/",
    },
    {
      title: "Virgo",
      sideTitle: "FEATURED PROJECT",
      description:
        "It is a user-friendly IT based  solution for restaurants, and other public places to be used as a digital menu and interactive tool to order food and drinks.",
      company: "Virgo",
      period: "Jan-Nov 2021",
      imgSrc: "icons/Virgo1.png",
    },
    {
      title: "Beatshop",
      sideTitle: "FEATURED PROJECT",
      description:
        "An e-commerce app with the ability to add and edit products on the go using Sanity, with advanced cart with complete integration with Stripe to cover real payments.",
      company: "Beatshop",
      period: "Nov-Dec 2023",
      imgSrc: "icons/BeatShop1.png",
      link: "https://beat-shop.vercel.app/",
    },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#00030a] flex justify-center">
      <div className="sm:w-[94.5rem] w-[24.375rem] flex flex-col relative">
        {/* <Header /> */}
        <div className="flex-[1] sm:px-[7.25rem] px-6">
          <Navbar />

          <div className="sm:mt-[7.563rem] mt-16 sm:mb-[6.625rem] mb-[5.25rem]">
            <CustomAnimation>
              <h1 className="font-Eskell_Display font-light sm:text-[5.75rem] sm:leading-[6.875rem] text-[2.125rem] leading-[2.55rem] tracking-[0.063rem] sm:mb-[4.5rem] mb-[1.125rem] text-white max-w-[78.5rem]">
                Somewhere between staring at the screen and tilting my head the
                magic is done.
              </h1>
              <p className="font-GT_America_Trial sm:text-2xl text-base text-justify text-[#86939F] sm:max-w-[54rem] max-w-[21.375rem]">
                I specialise in crafting interfaces, products, and systems
                through close collaboration with engineers, researchers, product
                managers, and fellow designers. From concept to high-fidelity
                prototypes, I create intuitive and polished experiences that
                captivate users.
              </p>
            </CustomAnimation>
          </div>
          {/* Projects */}

          {workSamples.map((item, index) => {
            return (
              <div key={index}>
                <ProjectCard {...item} />
              </div>
            );
          })}

          <div className="mt-[7.186rem]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
