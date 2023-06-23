import React from "react";

const WorkCard = ({ company, type, listItems, current, last }) => {
  return (
    <div className="w-auto h-auto  flex gap-[1.375rem]">
      <div className="flex flex-[1]  flex-col  items-center">
        <div className="w-[1.625rem] h-[1.625rem] rounded-full border-[0.088rem] border-[#2C333B] flex justify-center items-center flex-shrink-0">
          {current ? (
            <div className="w-[1.125rem] h-[1.125rem] rounded-full bg-white"></div>
          ) : (
            <></>
          )}
        </div>
        {!last ? (
          <div className="w-0 h-full border-[0.124rem] border-[#2C333B]"></div>
        ) : (
          <></>
        )}
      </div>
      <div className="w-[24.313rem]">
        <div className="flex flex-col gap-[0.563rem] mb-8">
          <h1 className="font-light font-Eskell_Display sm:text-[2rem] sm:leading-[2.75rem] text-[1.625rem] leading-[1.625rem] text-white">
            {company}
          </h1>
          <h3 className="font-Source_Sans_Pro font-normal sm:text-[1.25rem] sm:leading-[2rem] text-[1rem] leading-[2rem] text-[#86939F]">
            {type}
          </h3>
        </div>
        <div className=" font-normal font-Source_Sans_Pro text-justify text-white sm:text-[1.25rem] sm:leading-[2rem] text-[1rem] leading-[1.2rem] pl-3 sm:min-h-[12rem] min-h-[5.1875rem] sm:mb-[3.188rem] mb-[5.1875rem] ">
          <ul className="list-disc">
            {listItems.map((item, index) => {
              return (
                <li key={index} className="pl-1">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
