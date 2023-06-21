import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const data = { url: window.location.href };

  const handleClick = () => {
    navigate("/sidebar", { state: data });
  };

  return (
    <div className="w-full">
      <div className="w-full  h-[90px] flex items-center justify-between sm:pl-[0.688rem] sm:pr-[2.137rem]">
        <div className="flex items-center gap-[14px]">
          {/* Profile Info */}
          <div className="w-[37px] h-[37px] md:w-[47px] md:h-[47px]">
            <img
              src="icons/profile.svg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <Link to="/home">
            <div>
              <h1 className="text-white font-normal font-GT_America_Trial text-base">
                Krishna <span className="font-Mangal">खानिकर</span>
              </h1>
              <h1 className="font-GT_America_Trial font-normal md:text-sm text-xs text-[#88939E] mt-1">
                My digital space on the cloud
              </h1>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu */}

        <img
          src="icons/hamburger.svg"
          onClick={() => handleClick()}
          className="cursor-pointer"
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <img
          src="icons/NavLine.svg"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Navbar;
