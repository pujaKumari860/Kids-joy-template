import React from "react";
import Slider from 'react-slick';
import { BsFillArrowRightCircleFill, BsFillTelephoneFill } from "react-icons/bs";


const HeroBanner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
      function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  };
    return (
        <>
        <div className="hero-section">
            <div className="container mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2  gap-10">
                    <div className="lte-content flex-1 mt-28 text-center lg:text-left">
                        <h6 className="text-[#F39F5F] font-medium text-xl  font-fontlove tracking-[3px] uppercase">The best kindergarten</h6>
                        <h1 className="text-[#385469] lg:text-[4rem]/[5rem] text-[3rem] font-display mt-4 ">Join our friendly <span className="text-[#F39F5F]"> BubaKids </span> family</h1>
                        <p className="text-[#385469B2] text-[20px] my-5 ">We have a unique program that helps each child quickly adapt and feel at home. We also help each child find his own way. Become a person, be happy and change the world for the better.</p>
                        <div className="lg:flex gap-8 mt-14">
                            <a href="" className="book-now-btn flex-initial w-52 ">Start Today <BsFillArrowRightCircleFill className="ml-2 text-sm" /></a>
                            <a className="call-cont flex-initial flex items-center group" href=""><BsFillTelephoneFill className="bg-[#bfd7db] p-3 rounded-full text-[3rem] text-white group-hover:bg-[#385469] group-hover:ease-in-out group-hover:transition group-hover:duration-300 transition duration-300 ease-in-out "/> <span className="text-[25px] text-[#385469] font-display ml-2">+1 800 700 000</span></a>
                        </div>
                    </div>
                    <div className="lte-slider flex-1 lg:mt-28 mt-10 ">
                        
                        <div className="lte-slider-box">
                        <Slider {...settings}>
                            <div>
                                <img className="" src="images/slider-01.jpg" alt="Slide 1" />
                            </div>
                            <div>
                                <img className="" src="images/slider-02.jpg" alt="Slide 2" />
                            </div>
                            <div>
                                <img className="" src="images/slider-03.jpg" alt="Slide 3" />
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HeroBanner;