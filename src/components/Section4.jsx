import React from "react";
import FontCard from "./FontCard";
import ProjectCardHome from "./ProjectCardHome";

const Section4 = () => {
  const cards = [
    {
      title: "KryptVault",
      desc: "Blockchain crypto-trading",
    },
  {
      title: "Beatshop",
      desc: "E-Commerce website",
    },
    {
     
      title: "Vellbe",
      desc: "Wellness center",
    },
    {
      
      title: "Virgo",
      desc: "QR solution for restaurants",
    },
    {
      
      title: "TrackME",
      desc: "Workout tracker using NLP",
    },
    {
     
      title: "Paratop",
      desc: "Stock market news alerting system",
    },
  ];
  return (
    <div className="bg-[#111111] h-[89.875rem] relative overflow-hidden">
      <div className="absolute inline-block top-[7.25rem]">
        <img src="icons/EditBG.svg" />
      </div>
      <div className="absolute top-[22.5rem] left-[50%] translate-x-[-50%]">
        <div
          className="w-[55.5rem] h-[13.6875rem] bg-no-repeat mt-[4.875rem] relative p-[0.375rem]"
          style={{ backgroundImage: "url(icons/Rectangle5.svg)" }}
        >
          <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -top-[0.3125rem] -left-[0.1875rem]"></div>
          <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -bottom-[0.3125rem] -left-[0.1875rem]"></div>
          <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -bottom-[0.3125rem] -right-[0.1875rem]"></div>
          <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -top-[0.3125rem] -right-[0.1875rem]"></div>

          <div className="w-[2.75rem] h-[1.25rem] bg-[#306FF6] absolute left-0 -top-[2.375rem] rounded-[0.625rem] flex justify-center items-center">
            <h1 className="text-white font-Helvetica font-bold text-xs leading-[0.75rem] ">{`<h1>`}</h1>
          </div>

          <div className="h-[1.125rem] w-[1.1875rem] border border-[#306FF6] bg-white flex justify-center items-center absolute top-0 -right-[2.125rem] rounded-[0.125rem] rounded-r-[0.625rem]">
            <img src="icons/Vector (3).svg" />
          </div>

          
          <div className="w-[13.875rem] h-[2.8125rem] rounded-lg border-[0.05rem] border-[#373737] bg-[#211E21] absolute -bottom-[5.6875rem] left-[50%] translate-x-[-50%] flex justify-center items-center">
            <div className="flex justify-center items-center gap-[0.8712rem]">
              <h1 className="font-GT_America_Trial font-normal text-sm leading-[1.3125rem] tracking-[1%] text-center text-[#999999]">
                Check out more projects
              </h1>
              <div>
                <img src="icons/Vector (4).svg" />
              </div>
            </div>
          </div>

          <div className="h-full w-full relative">
            <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute top-0 left-[50%] translate-x-[-50%]" />
            <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute bottom-0 left-[50%] translate-x-[-50%]" />
            <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute rotate-90 left-0 top-[50%] translate-y-[-50%]" />
            <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute rotate-90 right-0 top-[50%] translate-y-[-50%]" />

            <h1 className="font-Eskell_Display font-light text-5xl leading-[3.6rem] text-center tracking-[0.0625rem] text-white pt-[2.4063rem]">
              Somewhere between staring at the screen and tilting my head the
              magic is done.
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute top-[49.9rem] w-[61.6231rem] flex flex-wrap gap-4 items-center justify-center left-[50%] translate-x-[-50%]">
        {cards.map((item,index)=>{
          return (<ProjectCardHome key={index} {...item}/>)
        })}
      </div>
    </div>

    // <div className="bg-[#111111] h-[89.875rem] overflow-hidden pt-[7.25rem] pl-[7.25rem] pr-[7.063rem]">
    //   <div
    //     className="w-full h-full relative"
    //     style={{
    //       backgroundImage: "url(icons/Border.svg)",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     <div className="flex gap-6 items-center justify-center pt-[3px]">
    //       <h1 className="font-PlayFair_Display font-normal text-sm leading-[44px] text-[#88939E]">
    //         Box
    //       </h1>
    //       <div className="w-[44px] rotate-90 h-0 border-[#292929B2] border"></div>
    //       <h1 className="font-PlayFair_Display font-normal text-sm leading-[44px] text-[#FFFFFFCC]">
    //         Text
    //       </h1>
    //       <div className="w-[44px] rotate-90 h-0 border-[#292929B2] border"></div>
    //       <h1 className="font-PlayFair_Display font-normal text-sm leading-[44px] text-[#88939E]">
    //         Motion
    //       </h1>
    //     </div>
    //     <div className="flex justify-center items-center">
    //       <img src="icons/Line 107.svg" />
    //     </div>
    //     <div className="h-[83px] flex justify-center items-center">
    //       <FontCard />
    //     </div>
    //     <div className="flex justify-center items-center">
    //       <img src="icons/Line 107.svg" />
    //     </div>
    //     <img
    //       src="icons/EditIcons.svg"
    //       className="absolute top-[31.625rem] left-[1.75rem]"
    //     />

    //     <div className="absolute top-[62.3125rem] left-[1.75rem] border border-[#191919] rounded-[1.4375rem] w-[3.1875rem] h-[12rem] pt-[1.625rem] pl-[0.875rem] pr-[0.8125rem] pb-[1.8381rem] overflow-hidden">
    //       <div className="h-full w-full flex flex-col justify-between ">
    //         <img src="icons/Star 1.svg" />
    //         <img src="icons/Union.svg" />
    //         <img src="icons/Vector (2).svg" />
    //       </div>
    //     </div>

    //     Middle Section
    //     <div className="flex justify-center items-center">
    //       <div
    //         className="h-[67.125rem] w-[68.9375rem] bg-no-repeat mt-[7.1875rem]"
    //         style={{ backgroundImage: "url(icons/Rectangle4.svg)" }}
    //       >
    //         <div className="flex justify-center items-center">
    //           <div
    //             className="w-[55.5rem] h-[13.6875rem] bg-no-repeat mt-[4.875rem] relative p-[0.375rem]"
    //             style={{ backgroundImage: "url(icons/Rectangle5.svg)" }}
    //           >
    //             <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -top-[0.3125rem] -left-[0.1875rem]"></div>
    //             <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -bottom-[0.3125rem] -left-[0.1875rem]"></div>
    //             <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -bottom-[0.3125rem] -right-[0.1875rem]"></div>
    //             <div className="w-[0.625rem] h-[0.625rem] rounded-[0.125rem] border border-[#306FF6] bg-white absolute -top-[0.3125rem] -right-[0.1875rem]"></div>

    //             <div className="w-[2.75rem] h-[1.25rem] bg-[#306FF6] absolute left-0 -top-[2.375rem] rounded-[0.625rem] flex justify-center items-center">
    //               <h1 className="text-white font-Helvetica font-bold text-xs leading-[0.75rem] ">{`<h1>`}</h1>
    //             </div>

    //             <div className="h-[1.125rem] w-[1.1875rem] border border-[#306FF6] bg-white flex justify-center items-center absolute top-0 -right-[2.125rem] rounded-[0.125rem] rounded-r-[0.625rem]">
    //               <img src="icons/Vector (3).svg" />
    //             </div>

    //             <img
    //               src="icons/pointer.svg"
    //               className="absolute -bottom-[2.9413rem] right-[0.0975rem]"
    //             />
    //             <div className="w-[4.0313rem] h-[1.4769rem] py-[0.0625rem] px-[0.3125rem] bg-[#FFC700] absolute -bottom-[4.6638rem] -right-[3.75rem]">
    //               <h1 className="font-medium text-[0.9025rem] leading-[1.3125rem] tracking-[1%] text-center text-[#000000CC]">
    //                 Krishna
    //               </h1>
    //             </div>

    //             <div className="w-[13.875rem] h-[2.8125rem] rounded-lg border-[0.05rem] border-[#373737] bg-[#211E21] absolute -bottom-[5.6875rem] left-[50%] translate-x-[-50%]"></div>

    //             <div className="h-full w-full relative">
    //               <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute top-0 left-[50%] translate-x-[-50%]" />
    //               <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute bottom-0 left-[50%] translate-x-[-50%]" />
    //               <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute rotate-90 left-0 top-[50%] translate-y-[-50%]" />
    //               <div className="h-[0.0625rem] w-[0.625rem] bg-[#61D270] absolute rotate-90 right-0 top-[50%] translate-y-[-50%]" />

    //               <h1 className="font-Eskell_Display font-light text-5xl leading-[3.6rem] text-center tracking-[0.0625rem] text-white pt-[2.4063rem]">
    //                 Somewhere between staring at the screen and tilting my head
    //                 the magic is done.
    //               </h1>

    //             </div>
    //           </div>
    //
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Section4;
