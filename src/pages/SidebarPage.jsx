import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data.url);

  let route = "";
  if (data.url.includes("/home")) {
    route = "/home";
  } else if (data.url.includes("/work")) {
    route = "/work";
  } else if (data.url.includes("/about_me")) {
    route = "/about_me";
  } else if (data.url.includes("/contact")) {
    route = "/contact";
  }

  return (
    <div className="min-h-screen bg-[#00030a] relative">
      <Link to={route}>
        <div className="absolute sm:top-[6.6875rem] top-[6.6875rem] sm:right-[5.75rem] right-[1.6875rem] sm:h-auto sm:w-auto h-[1rem] w-[1rem]">
          <img src="icons/Vector.svg" />
        </div>
      </Link>

      <div className="absolute sm:w-[74.5rem] w-[22.6875rem] sm:top-[12.75rem] sm:right-[7.25rem] top-[11.5625rem] right-[1.6875rem] flex flex-wrap justify-end">
        <Link to="/home">
          <h1
            className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[2.75rem] leading-[3.3rem] tracking-[0.25rem] text-right ${
              route === "/home" ? "text-white" : "text-[#2D2D2D]"
            }`}
          >
            Home \
          </h1>
        </Link>

        <Link to="/work">
          <h1
            className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[2.75rem] leading-[3.3rem] tracking-[0.25rem] text-right ${
              route === "/work" ? "text-white" : "text-[#2D2D2D]"
            }`}
          >
            Work \
          </h1>
        </Link>

        <Link to="/about_me">
          <h1
            className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[2.75rem] leading-[3.3rem] tracking-[0.25rem] text-right ${
              route === "/about_me" ? "text-white" : "text-[#2D2D2D]"
            }`}
          >
            About \
          </h1>
        </Link>

        <Link to="/contact">
          <h1
            className={`font-Eskell_Display  sm:text-[8.07rem] sm:leading-[9.6837rem] text-[2.75rem] leading-[3.3rem] tracking-[0.25rem] text-right  ${
              route === "/contact" ? "text-white" : "text-[#2D2D2D]"
            }`}
          >
            Contact \
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SidebarPage;
