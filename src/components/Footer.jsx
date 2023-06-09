import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    if (route === "/notes") {
      const data = { section: "do-you-know" };
      navigate("/about_me", { state: data });
    } else {
      navigate(route);
    }
    window.scrollTo(0, 0);
  };

  const handleClick = (site) => {
    if (site === "instagram") {
      window.location.href = "https://www.instagram.com/krishna.design/";
    }
    if (site === "linkedIn") {
      window.location.href = "https://www.linkedin.com/in/krishnakhanikar/";
    }
    if (site === "Github") {
      window.location.href = "https://github.com/krishnakhanikar11";
    }
    if (site === "Dribble") {
      window.location.href = "https://dribbble.com/Krish-design";
    }
  };

  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState();

  const evalYear = () => {
    const newDate = new Date();
    const newYear = newDate.getFullYear();
    setDate(newDate);
    setYear(newYear);
  };
  useEffect(() => {
    evalYear();
  }, []);
  return (
    <>
      <div className="w-full">
        <img
          src="icons/NavLine.svg"
          className="mb-[5.251rem] w-full object-cover"
        />
      </div>
      <div className="w-full md:flex md:justify-between md:flex-row-reverse mb-6 sm:mb-0">
        <div className="md:flex md:gap-[65px]">
          <ul className="mb-[22px] ">
            <li className="font-GT_America_Trial font-normal text-base text-white mb-3">
              In this space
            </li>
            <li
              className="font-GT_America_Trial font-normal text-base hover:text-white text-[#88939E] mb-3 cursor-pointer"
              onClick={() => handleNavigate("/work")}
            >
              Discover my work
            </li>
            <li
              className="font-GT_America_Trial font-normal text-base hover:text-white text-[#88939E] mb-3 cursor-pointer"
              onClick={() => handleNavigate("/about_me")}
            >
              Know more about me
            </li>
            <li
              className="font-GT_America_Trial font-normal text-base hover:text-white text-[#88939E] mb-3 cursor-pointer "
              onClick={() => handleNavigate("/notes")}
            >
              Read my notes
            </li>
            <li
              className="font-GT_America_Trial font-normal text-base hover:text-white text-[#88939E] mb-3 cursor-pointer"
              onClick={() => handleNavigate("/contact")}
            >
              Get in touch
            </li>
          </ul>

          <div>
            <ul className="mb-2">
              <li className="font-GT_America_Trial font-normal text-base text-white mb-4 cursor-pointer">
                Follow my work
              </li>
              <li
                className="font-GT_America_Trial font-normal text-base hover:text-white text-[#88939E] mb-4 cursor-pointer"
                onClick={() => handleClick("Github")}
              >
                Check my Github projects
              </li>
              <li
                className="font-GT_America_Trial font-normal text-base hover:text-white text-[#88939E] mb-4 cursor-pointer"
                onClick={() => handleClick("Dribble")}
              >
                Check my Dribble shots
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-[10px] mb-[66.82px]">
              {/* instagram */}
              <div
                className="h-[36.18px] md:h-[45px] md:w-[45px] w-[36.18px] rounded-full border-[0.36px] border-[#88969E] flex justify-center items-center cursor-pointer"
                onClick={() => handleClick("instagram")}
              >
                <img src="icons/insta.svg" alt="" />
              </div>

              {/* Linkedin */}
              <div
                className="h-[36.18px] md:h-[45px] md:w-[45px] w-[36.18px] rounded-full border-[0.36px] border-[#88969E] flex justify-center items-center cursor-pointer"
                onClick={() => handleClick("linkedIn")}
              >
                <img src="icons/linkedin.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* info & copyright*/}

        <div>
          <h1 className="font-GT_America_Trial font-normal md:text-2xl text-sm text-white mb-[6px]">
            Krishna Khanikar
          </h1>
          <h1 className="font-normal font-GT_America_Trial text-xs md:text-base text-[#88939E]">
            All right reserved | {year}{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
