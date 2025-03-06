import React from 'react'

const OurPrograms = () => {
  return (
    <>
       <div className='prog-sec'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <div className='font-fontlove tracking-[3px] text-[20px] uppercase text-[#f39f5f]'>Curriculum</div>
                    <div className='font-display text-6xl text-[#385469]'>Our programs</div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  <div className='prog-frame-box relative mx-3'>
                  <div className='prog-frame bg-white p-16 rounded-[100px] text-center mt-16 '>
                    <div className='font-display text-[40px] text-[#385469]'>Junior group</div>
                    <div className='font-display text-[26px] text-[#f39f5f] my-2'>1-2 years</div>
                    
                      <ul className='prog-list text-left'>
                        <li className='text-[#385469ce] py-2 ml-4'>Сognitive sphere enlargement</li>
                        <li className='text-[#385469ce] py-2 ml-4'>Speech development</li>
                        <li className='text-[#385469ce] py-2 ml-4'>Social communication skills</li>
                        <li className='text-[#385469ce] py-2 ml-4'>Physical development</li>
                        <li className='text-[#385469ce] py-2 ml-4'> Development of creativity</li>
                        <li className='text-[#385469ce] py-2 ml-4'>Motor skills improvement</li>
                      </ul>
                  
                    <div className='prog-img-box'><img src='images/programs_01.png'></img></div>
                  </div>
                  <a href='' className="bg-[#f39f5f] p-2 rounded-[20px] w-[50px] inline-block h-[50px] mb-[-30px] absolute z-10 bottom-0 left-[45%]"><span className='ab-prog-link'></span></a>
                  </div>
                  <div className='prog-frame-box relative mx-3'>
                  <div className='prog-frame bg-[#f4eee5] p-16 rounded-[100px] text-center mt-16 '>
                    <div className='font-display text-[40px] text-[#385469]'>Junior group</div>
                    <div className='font-display text-[26px] text-[#f39f5f] my-2'>1-2 years</div>
                    
                      <ul className='prog-list text-left'>
                        <li className='text-[#385469ce] py-2 ml-4'> Knowledge expansion</li>
                        <li className='text-[#385469ce] py-2 ml-4'> Speech development</li>
                        <li className='text-[#385469ce] py-2 ml-4'> Learning aithmetic</li>
                        <li className='text-[#385469ce] py-2 ml-4'>  Exploring the world</li>
                        <li className='text-[#385469ce] py-2 ml-4'> Skill development</li>
                        <li className='text-[#385469ce] py-2 ml-4'> Self-reliance training</li>
                      </ul>
                  
                    <div className='prog-img-box2'><img src='images/programs_02.png'></img></div>
                  </div>
                  <a href='' className="bg-[#f39f5f] p-2 rounded-[20px] w-[50px] inline-block h-[50px] mb-[-30px] absolute z-10 bottom-0 left-[45%]"><span className='ab-prog-link'></span></a>
                  </div>
                  <div className='prog-frame-box relative mx-3'>
                  <div className='prog-frame bg-[#70a6b1] p-16 rounded-[100px] text-center mt-16 '>
                    <div className='font-display text-[40px] text-[#385469]'>Junior group</div>
                    <div className='font-display text-[26px] text-[#fff] my-2'>1-2 years</div>
                    
                      <ul className='prog-list text-left'>
                        <li className='text-[#fff] py-2 ml-4'>  Individual approach</li>
                        <li className='text-[#fff] py-2 ml-4'>  Preparing for first class</li>
                        <li className='text-[#fff] py-2 ml-4'>  Special program</li>
                        <li className='text-[#fff] py-2 ml-4'>   Reading lessons</li>
                        <li className='text-[#fff] py-2 ml-4'> Speech correction</li>
                        <li className='text-[#fff] py-2 ml-4'>  Learning new languages</li>
                      </ul>
                  
                    <div className='prog-img-box3'><img src='images/programs_03.png'></img></div>
                    <div className='prog-img-box3'><img src='images/programs_03.png'></img></div>
                  </div>
                  <a href='' className="bg-[#f39f5f] p-2 rounded-[20px] w-[50px] inline-block h-[50px] mb-[-30px] absolute z-10 bottom-0 left-[45%]"><span className='ab-prog-link'></span></a>
                  </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default OurPrograms
