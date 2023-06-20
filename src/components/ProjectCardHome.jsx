import React from "react";

const ProjectCardHome = ({ title, desc, link }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      className="w-[19.8744rem] h-[15.3906rem] overflow-hidden bg-[#030303] relative flex flex-col border-[0.0606rem] border-[#444444] cursor-pointer"
      onClick={() => handleClick()}
    >
      <img src="icons/image 4 (1).svg" loading="lazy"/>

      <h1
        className="font-Monument_Extended top-[4.1875rem] left-[50%] -translate-x-[50%] font-normal text-[1.92rem] leading-[2.3044rem] absolute  text-center tracking-[2%] "
        style={{
          background:
            "linear-gradient(90deg, #6BF4E5 0%, #AEF68C 59.9%, #EAFE85 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "text",
          WebkitTextFillColor: "transparent",
          filter: "blur(0.4364rem)",
        }}
      >
        {capitalizeFirstLetter(title) == "Kryptvault"
          ? "KryptVault"
          : capitalizeFirstLetter(title)}
      </h1>
      <h1
        className="font-Monument_Extended top-[4.1875rem] left-[50%] -translate-x-[50%] font-normal text-[1.92rem] leading-[2.3044rem] absolute text-center tracking-[2%] "
        style={{
          background:
            "linear-gradient(90deg, #6BF4E5 0%, #AEF68C 59.9%, #EAFE85 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {capitalizeFirstLetter(title) == "Kryptvault"
          ? "KryptVault"
          : capitalizeFirstLetter(title)}
      </h1>

      <div className="flex-grow bg-[#2C2C2C] flex  items-center  gap-[11.63px] px-[1.2119rem]">
        <div className="w-[2.06rem] h-[2.8094rem]">
          <img src="icons/penIcon.png" loading="lazy"/>
        </div>
        <div>
          <h1 className="font-GT_America_Trial font-normal text-[0.9694rem] leading-[1.9387rem] text-white">
            {title}
          </h1>
          <h1 className="font-GT_America_Trial font-normal text-[0.8481rem] leading-[0.8481rem] text-[#88939E]">
            {desc}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardHome;
