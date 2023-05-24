import { useState } from "react";

const InfiniteScroll = () => {
  const [languages, setLanguages] = useState([
    "नमस्ते",
    "Hello",
    "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
    "নমস্কার",
    "आदाब",
    "प्रणाम",
    "नमस्कार",
    "வணக்கம்",
    "నమస్కరం",
    "ನಮಸ್ತೆ",
    "ନମସ୍କାର",
    "કેમ છો",
    "నమస్కరం",
    "ನಮಸ್ತೆ",
    "ନମସ୍କାର",
  ]);
  return (
    <>
      {/* Infinite Scroll Section*/}
      <div className="flex justify-center items-center">
        <div className="relative w-full p-16 overflow-x-hidden">
          <div className="flex absolute left-0 animate-marquee-infinite whitespace-nowrap">
            {languages.map((item, index) => {
              return (
                <div key={index} className="w-full flex gap-3 justify-around items-center">
                  <h1 className="text-[#47474D] font-normal text-xl ml-3 font-GT_America_Trial ">
                    {item}
                  </h1>
                  <img src="icons/dimond.svg" alt="" />
                </div>
              );
            })}

            {languages.map((item, index) => {
              return (
                <div key={index} className="w-full flex gap-3 justify-around items-center ">
                  <h1 className="text-[#47474D] font-normal text-xl ml-3 font-GT_America_Trial">
                    {item}
                  </h1>
                  <img src="icons/dimond.svg" alt="" />
                </div>
              );
            })}

            {/* blur divs */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
