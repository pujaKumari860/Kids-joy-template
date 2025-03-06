import React from 'react'

const AboutHome = () => {
  return (
   <>
    <div className='about-sec mt-40'>
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="m-5">
                <img src="images/about_01-1024x975.jpg"></img>
              </div>
              <div className="ml-14">
                  <h3 className="font-fontlove text-[#f39f5f] text-[20px] uppercase tracking-[3px]">kindergarten</h3> 
                  <div className="text-[3.5rem] font-display text-[#385469]">About us</div>
                  <p className='text-md text-[#38546981]'>We are constantly expanding the range of services offered, taking care of children of all ages. Our goal is to carefully educate and develop children in a fun way. We strive to turn the learning process into a bright event so that children study with pleasure.</p>
                  <div className="flex justify-center items-center">
                    <img className='w-20 h-20' src='images/about_icon_01.png'></img>
                    <div className='ml-12'>
                      <div className="font-display text-[#385469] text-[22px] mb-2">Experienced teachers</div>
                      <p className="text-md text-[#38546981]">Libero, sagittis pretium vel ipsum luctus amet et quam sit. Semper aenean enim, in enim, ut venenatis, purus. Id in enim nam eget in. Facilisi faucibus dictumst platea etiam. Augue donec leo diam pulvinar quam cursus.</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-8">
                    <img className='w-20 h-20' src='images/about_icon_02.png'></img>
                    <div className='ml-12'>
                      <div className="font-display text-[#385469] text-[22px] mb-2">Unique approach</div>
                      <p className="text-md text-[#38546981]">Justo proin amet faucibus sed eu. Nisi mauris, vulputate ut ut habitant id diam, accumsan. Convallis neque, pretium ac malesuada sit at amet aliquam. Scelerisque vivamus amet sed vitae ac amet.</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default AboutHome
