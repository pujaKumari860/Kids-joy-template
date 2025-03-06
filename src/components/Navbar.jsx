import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/kids-logo.png";
import { CgClose } from "react-icons/cg";
import { BsCart3, BsPerson, BsSearch, BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  faEnvelopeOpenText,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu"

const Navbar = () => {
  const searchHandler = () => {
    const searchshow = document.getElementById("searchshow");
    if (searchshow.classList.contains("w-0", "opacity-0", "bg-transparent")) {
      searchshow.classList.remove("w-0", "opacity-0", "bg-transparent");
      searchshow.classList.add("w-[15rem]", "opacity-100", "bg-white");
    } else {
      searchshow.classList.remove("w-[15rem]", "opacity-100", "bg-white");
      searchshow.classList.add("w-0", "opacity-0");
    }
  };

  return (
    <>
      <div className="top-navbar bg-[#c9dde2] py-2">
        <div className="container mx-auto">
          <div className="flex lg:justify-between justify-center items-center">
            <ul className="flex items-center hidden lg:block">
              <li className="inline-block ml-3">
                <a className="flex items-center" href="">
                  <FontAwesomeIcon
                    className="bg-[#f39f5f] text-white p-[4px] h-3 w-3 rounded-full text-xs"
                    icon={faEnvelopeOpenText}
                  />{" "}
                  <p className="ml-3 text-sm text-[#385469]">support@kidsJoy</p>
                </a>
              </li>
              <li className="inline-block ml-3">
                <a className="flex items-center" href="">
                  <FontAwesomeIcon
                    className="bg-[#f39f5f] text-white p-[4px] h-3 w-3 rounded-full text-xs"
                    icon={faLocationDot}
                  />{" "}
                  <p className="ml-3 text-sm text-[#385469]">
                    {" "}
                    13 Division st, New York, 16004{" "}
                  </p>
                </a>
              </li>
              <li className="inline-block ml-3">
                <a className="flex items-center" href="">
                  <FontAwesomeIcon
                    className="bg-[#f39f5f] text-white p-[4px] h-3 w-3 rounded-full text-xs"
                    icon={faPhone}
                  />
                  <p className="ml-3 text-sm text-[#385469]">+1 800 777 800</p>
                </a>
              </li>
            </ul>
            <ul className=" flex items-end relative">
              <li className="px-4 relative w-auto cursor-pointer" onClick={searchHandler}>
                <BsSearch className="size-6 color-[#385469] hover:color-[#f39f5f]"
                />
               
              </li>

              <li className="px-4">
                <a
                  className="text-[#385469] text-lg font-thin hover:text-[#F39F5F] transition ease-in-out"
                  href=""
                >
                  <BsPerson className="size-7 color-[#385469] hover:color-[#f39f5f]" />
                </a>
              </li>
              <li className="px-4">
                <a
                  className="text-[#385469] text-lg font-thin hover:text-[#F39F5F] transition ease-in-out"
                  href=""
                >
                  <BsCart3 className="size-6 color-[#385469] hover:color-[#f39f5f]" />
                </a>
              </li>
              <div
                  id="searchshow"
                  className="bg-transparent rounded-full w-0 p-2 absolute top-0 right-[7.4rem] flex justify-between items-center overflow-hidden transition-all ease-in-out duration-300"
                >
                  <input
                    className="border-0 border-none focus:outline-none w-full"
                    type="text"
                    placeholder="Search"
                  />
                  <CgClose onClick={searchHandler} className="cursor-pointer" />
                </div>
            </ul>
           
          </div>
        </div>
      </div>
      <div className=" size-full ">
        <img className="w-full" src="images/wave-line.png"/>
    
    
      </div>

      <div className="nav my-5">
        <div className="container mx-auto">
          <div className="flex justify-between  items-center">
            <div className="brand-logo mt-5">
              <img src={Logo} className="w-auto h-[60px]" alt="Logo" />
            </div>
            <div className="main-menu hidden lg:block ">
              <Menu />
            </div>
            <div className=" relative overflow-hidden ">
              <a href="" className="book-now-btn ">Book A Visit <BsFillArrowRightCircleFill className="ml-2 text-sm" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
