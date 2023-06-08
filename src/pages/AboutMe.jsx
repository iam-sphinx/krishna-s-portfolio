import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CollageDisplay from "../components/CollageDisplay";
import AboutMeContent from "../components/AboutMeContent";
import JourneyBanner from "../components/JourneyBanner";
import Footer from "../components/Footer";
import MiniCard from "../components/MiniCard";

const AboutMe = () => {
  const cardContent = [
    {
      index: "001",
      title: "Paper models and all that...",
      description:
        "Printing paper became my mode of expression, from replicas of my favorite aircrafts to a realistic airport ground, I'd made them all. Fun fact: i even made several paper models of assault rifles( except mother discouraged me to do that for obvious reasons pfft)",
    },
    {
      index: "002",
      title: "Woh din bhi kya din the School am i right",
      description:
        "I’ve shifted houses five times and changed schools three times. But the best years of my life were in my high school. I was the house captain in my school which was a big deal back then. Me and my boys planning how we'd rule the world. ",
    },
    {
      index: "003",
      title: "Dance like no one’s watching...it’s liberating",
      description:
        "I guess I got it from my mom. She’d just find a reason to dance her way on occasions and it’s so liberating i’ll tell ya. I’ve participated in bhangra dances, free style and what I'd like to call a decent attempt at salsa.",
    },
    {
      index: "004",
      title: "“Two roads diverged and i took the one...”",
      description:
        "I started my bachelors in tech from a highly reputed college here. Was stoked to spend the next four years on campus but covid hit so ended up staying home for two whole years. Nonetheless, I made memories, met some great people and learnt some stuff too.",
    },
    {
      index: "005",
      title: "“And i took the one less travelled”",
      description:
        "Unexpectedly got a few freelancing gigs and am grateful for that. Became a front end developer, taught myself how to code, tried UI/UX and aced there too. Somewhere along this , I found myself stuck in a void. So I revisited that dream.",
    },
    {
      index: "006",
      title: "“Treating ourselves is essential”",
      description:
        "I'm proud to have bought myself an iphone with my hard earned money. Gifted my loved ones a bunch of things too. Built my whole PC setup on my own.Hey! I'm not bragging ok, just keeping a note:)",
    },
    {
      index: "007",
      title: "Four years boiled down to one piece of paper-",
      description:
        "Completed bachelors from VIT. Bid farewell to my hostel, my lecture halls and the beautiful campus. I came in as a teen and am leaving an adult- old and skilled enough to take accountability for life. It’s gonna be tough out there but that’s thrilling. I’m ready for it. Bring it on.",
    },
    {
      index: "008",
      title: "“My family remainsmy constant”",
      description:
        "Situations changed, my friends changed, struggles changed but my family, my support, have always been there for me. They’re my constant. My sister sees me as her role model and that brims me with happiness and I’d pick them over anything anyday.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#00030a] flex flex-col">
      <Header />
      <div className="flex-[1] px-[7.25rem]">
        <Navbar />
        <div className="mt-[7.563rem]">
          <h1 className="font-Eskell_Display text-white text-[5.75rem] leading-[6.9rem] tracking-[0.063rem] text-center px-[8.75rem]">
            You’ve come this far, don’t hesitate to scroll
          </h1>
        </div>

        {/* Display Section */}
        <div className="mt-8 mb-8">
          <CollageDisplay />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[38.75rem] mb-[9.239rem] ">
            <img src="icons/NavLine.svg" />
          </div>
        </div>

        {/* about me content */}
        <AboutMeContent />
        {/* journey banner */}
      </div>
      <div className="mt-[7.375rem]">
        <JourneyBanner />
      </div>
      <div className="flex-[1] px-[7.25rem]">
        <h1 className="font-light text-white font-Eskell_Display text-[2.962rem] leading-[4.146rem] mb-[1.188rem] tracking-[0.062rem] mt-[8.25rem]">
          Did you know?
        </h1>
        <p className="w-[32.269rem] font-GT_America_Trial font-normal text-[1.234rem] leading-[1.728rem] tracking-[1%] text-[#86939F] mb-[5.313rem]">
          I have documentated a couple of snippets from my interesting life.
          Give it a read
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1  gap-[1rem]">
          {cardContent.map((item, index) => {
            return <MiniCard key={index} {...item} />;
          })}
        </div>
        <div className="mt-[9.438rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
