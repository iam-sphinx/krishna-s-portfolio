import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const workSamples = [
    {
      title: "KryptVault",
      sideTitle: "FEATURED PROJECT",
      description:
        "A Web 3.0 application that allows users to send transactions through the blockchain.",
      company: "Personal",
      period: "Nov-Dec 2023",
      Project: "See live",
      imgSrc: "icons/KryptVault.svg",
    },
    {
      title: "Vellbe.life",
      sideTitle: "FEATURED PROJECT",
      description:
        "I was solely responsible for designing and developing the website which would meet your business requirement.",
      company: "Vellbe life",
      period: "Nov-Dec 2022",
      Project: "See live",
      imgSrc: "icons/VellbeLife.svg",
    },
    {
      title: "Virgo",
      sideTitle: "FEATURED PROJECT",
      description:
        "It is a user-friendly IT based  solution for restaurants, and other public places to be used as a digital menu and interactive tool to order food and drinks.",
      company: "Virgo",
      period: "Jan-Nov 2021",
      Project: "See live",
      imgSrc: "icons/Virgo.svg",
    },
    {
      title: "Beatshop",
      sideTitle: "FEATURED PROJECT",
      description:
        "An e-commerce app with the ability to add and edit products on the go using Sanity, with advanced cart with complete integration with Stripe to cover real payments.",
      company: "Paycrunch",
      period: "Nov-Dec 2023",
      Project: "See live",
      imgSrc: "icons/BeatShop.svg",
    },
  ];
  return (
    <div className="min-h-screen bg-[#00030a] flex flex-col">
      <Header />
      <div className="flex-[1] px-[7.25rem]">
        <Navbar />

        <div className="mt-[7.563rem] mb-[6.625rem]">
          <h1 className="font-Eskell_Display font-light text-[5.75rem] leading-[6.875rem] tracking-[0.063rem] mb-[4.5rem] text-white max-w-[78.5rem]">
            Somewhere between staring at the screen and tilting my head the
            magic is done.
          </h1>
          <p className="font-GT_America_Trial text-2xl text-justify text-[#86939F] max-w-[54rem]">
            I specialise in crafting interfaces, products, and systems through
            close collaboration with engineers, researchers, product managers,
            and fellow designers. From concept to high-fidelity prototypes, I
            create intuitive and polished experiences that captivate users.
          </p>
        </div>
        {/* Projects */}
        {workSamples.map((item, index) => {
          return (
            <div key={index}>
              <ProjectCard title={item.title} sideTitle={item.sideTitle} imgSrc={item.imgSrc} project={item.Project} company={item.company} description={item.description} period={item.period} />
            </div>
          );
        })}
        <div className="mt-[7.186rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Work;
