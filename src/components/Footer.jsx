import React, { useEffect, useState } from "react";

const Footer = () => {
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
    <div className="w-full md:flex md:justify-between md:flex-row-reverse">
      <div className="md:flex md:gap-[65px]">
        <ul className="mb-[42px] ">
          <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
            In this space
          </li>
          <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
            Discover my work
          </li>
          <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
            Know more about me
          </li>
          <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer ">
            Read my notes
          </li>
          <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
            Get in touch
          </li>
        </ul>

        <div>
          <ul className="mb-5">
            <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
              Follow my work
            </li>
            <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
              Subscribe to my newsletter
            </li>
            <li className="font-GT_America_Trial font-normal text-sm hover:text-white text-[#88939E] mb-4 cursor-pointer">
              Check my Dribble shots
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-[10px] mb-[76.82px]">
            {/* instagram */}
            <div className="h-[36.18px] w-[36.18px] rounded-full border-[0.36px] border-[#88969E] flex justify-center items-center cursor-pointer">
              <img src="icons/insta.svg" alt="" />
            </div>

            {/* Linkedin */}
            <div className="h-[36.18px] w-[36.18px] rounded-full border-[0.36px] border-[#88969E] flex justify-center items-center cursor-pointer">
              <img src="icons/linkedin.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* info & copyright*/}
      <div>
        <h1 className="font-GT_America_Trial font-normal text-sm text-white mb-[6px]">
          Krishna Khanikar
        </h1>
        <h1 className="font-normal font-GT_America_Trial text-xs text-[#88939E]">
          All right reserved | {year}{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
