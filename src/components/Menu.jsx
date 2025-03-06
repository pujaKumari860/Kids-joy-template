import React from "react";

const Menu = () => {
  return (
    <>
     <div className="menu-sec justify-center " data-aos="fade-left">
        <ul className="flex">
            <li className="px-5 py-5"><a className="text-[#385469] text-sm font-medium uppercase font-display hover:text-[#F39F5F]" href="">Home </a>
            </li>
            <li className="px-5 py-5 relative group">
            <a href="#" className="text-[#385469] text-sm font-medium uppercase font-display hover:text-[#F39F5F] transition-all ease-in-out  hover:-transition-all hover:duration-500 hover:ease-in-out">
      About Us .
    </a>
            <ul
      className="absolute left-[-50px] top-14 w-56 mt-2 hidden group-hover:block bg-white shadow-md border-gray-200 border rounded-xl transition-all ease-in-out duration-500" 
    >
      <li className="hover:bg-[#F39F5F] m-2 rounded-full">
        <a href="#" className="text-[#385469] hover:text-[#fff] w-full block px-4 py-2 transition-all ease-in-out">About Us</a>
      </li>
      <li className="hover:bg-[#F39F5F] m-2 rounded-full">
        <a href="#" className="text-[#385469] hover:text-[#fff] w-full block px-4 py-2 transition-all ease-in-out">FAQ</a>
      </li>
      <li className=" hover:bg-[#F39F5F] m-2 rounded-full" >
        <a href="#" className="text-[#385469] hover:text-[#fff] w-full block px-4 py-2 transition-all ease-in-out">Testimonials</a>
      </li>
    </ul>
            </li>
            <li className="px-5 py-5"><a className="text-[#385469] text-sm font-medium uppercase font-display hover:text-[#F39F5F]" href="">Project</a></li>
            <li className="px-5 py-5"><a className="text-[#385469] text-sm font-medium uppercase font-display hover:text-[#F39F5F]" href="">Blog</a></li>
            <li className="px-5 py-5"><a className="text-[#385469] text-sm font-medium uppercase font-display hover:text-[#F39F5F]" href="">Contact</a></li>
        </ul>
     </div>
    </>
  )
}

  


export default Menu;
