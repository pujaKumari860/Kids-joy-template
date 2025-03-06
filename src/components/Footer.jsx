import React from 'react'
import Logo from "../assets/kids-logo.png";
import { BsFillArrowRightCircleFill, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
   <>
    <div className='mt-32'>
        <div><img src='images/footer-top-wave.png'></img></div>
        <div className='bg-[#f4eee5]'>
            <div className='container m-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className='my-10 text-center lg:text-left'>
                    <img src={Logo} className="w-auto h-[60px] lg:ml-0 m-auto " alt="Logo" />
                        <div className='my-6 text-[#385469] font-normal lg:mr-20 mr-0 '>Solar power generation is a sound investment that provides savings by reducing the amount of electricity purchased from the grid.</div>
                        <a className=" justify-center lg:justify-start call-cont flex-initial flex items-center group" href=""><BsFillTelephoneFill className="bg-[#f39f5f] p-3 rounded-full text-[3rem] text-white group-hover:bg-[#385469] group-hover:ease-in-out group-hover:transition group-hover:duration-300 transition duration-300 ease-in-out "/> <span className="text-[25px] text-[#385469] font-display ml-2">+1 800 700 000</span></a>
                    
                    </div>
                    <div className='my-10 hidden lg:block'>
                        <div className='text-[#385469] text-[30px] mb-6 font-display'>Company</div>
                        <div className='flex'>
                        <ul className='mr-6'> 
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>Home</a></li>
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>About Us</a></li>
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>Product</a></li>
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>Blog</a></li>
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>Contact</a></li>
                        </ul>
                        <ul className='mx-14'>
                            
                        <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>Articles</a></li>
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>FAQ</a></li>
                            <li className='my-2'><a href='#' className='text-[#385469] text-[16px] font-semibold hover:text-[#b2d4cc] transition-all ease-in-out'>Gallery</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className='my-10 hidden lg:block'>
                        <div className='text-[#385469] text-[30px] mb-6 font-display'>Our galleries</div>
                        <div className=''>
                            <ul className='flex'>
                                <li className='m-2'><img className='rounded' src='images/gallery_01-800x688.jpg'></img></li>
                                <li className='m-2'><img className='rounded' src='images/gallery_02-800x688.jpg'></img></li>
                                <li className='m-2'><img className='rounded' src='images/gallery_03-800x688.jpg'></img></li>
                                <li className='m-2'><img className='rounded' src='images/gallery_04-800x688.jpg'></img></li>
                            </ul>
                            <ul className='flex'>
                                <li className='m-2'><img className='rounded' src='images/gallery_05-800x688.jpg'></img></li>
                                <li className='m-2'><img className='rounded' src='images/gallery_06-800x688.jpg'></img></li>
                                <li className='m-2'><img className='rounded' src='images/gallery_07-800x688.jpg'></img></li>
                                <li className='m-2'><img className='rounded' src='images/gallery_08-800x688.jpg'></img></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Footer
