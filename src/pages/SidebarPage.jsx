import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarPage = () => {
  const location = useLocation();
  const data = location.state;

  let route = "";
  
  if (data.url.includes("/work")) {
    route = "/work";
  } else if (data.url.includes("/about_me")) {
    route = "/about_me";
  } else if (data.url.includes("/contact")) {
    route = "/contact";
  }
  else
  {
    route = "/";
  }

  return (
    <div className="min-h-screen bg-[#00030a] flex justify-center">
      <div className="sm:w-[94.5rem] w-[24.375rem] flex flex-col relative">
        <div className="flex justify-between items-center mt-[6.6875rem] sm:px-[5.75rem] px-[1.6875rem] sm:mb-[5.0625rem] mb-[3.875rem]">
          <Link to="/">
            <div className="w-[37px] h-[37px] md:w-[47px] md:h-[47px]">
              <img
                src="icons/profile.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <Link to={route}>
            <div className="sm:h-auto sm:w-auto h-[1rem] w-[1rem]">
              <img src="icons/Vector.svg" />
            </div>
          </Link>
        </div>

        <div className="flex justify-end sm:px-[7.25rem] px-[1.6875rem]">
          <div className="sm:w-[74.5rem] sm:h-[29.0625rem] h-[9.9375rem] w-[22.6875rem] flex flex-wrap sm:pl-12 pl-5 justify-end ">
            <Link to="/">
              <h1
                className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[3.75rem] sm:mb-0 mb-4 leading-[3.3rem] tracking-[0.25rem] text-right ${
                  route === "/" ? "text-white" : "text-[#2D2D2D]"
                }`}
              >
                Home \
              </h1>
            </Link>

            <Link to="/work">
              <h1
                className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[3.75rem] sm:mb-0 mb-4 leading-[3.3rem] tracking-[0.25rem] text-right ${
                  route === "/work" ? "text-white" : "text-[#2D2D2D]"
                }`}
              >
                Work \
              </h1>
            </Link>
            <Link to="/about_me">
              <h1
                className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[3.75rem] sm:mb-0 mb-4 leading-[3.3rem] tracking-[0.25rem] text-right ${
                  route === "/about_me" ? "text-white" : "text-[#2D2D2D]"
                }`}
              >
                About \
              </h1>
            </Link>
            <Link to="/contact">
              <h1
                className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[3.75rem] sm:mb-0 mb-4 leading-[3.3rem] tracking-[0.25rem] text-right  ${
                  route === "/contact" ? "text-white" : "text-[#2D2D2D]"
                }`}
              >
                Contact \
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;
