import React from 'react';

const ScheduleList = () => {
  return (
<>
    <div className='mt-24'> 
      <div className='container m-auto'>
       <div className="text-center font-fontlove text-[20px] my-2 text-[#f39f5f] uppercase tracking-[2px]">Schedule</div>
       <div className='font-display text-6xl text-[#385469] text-center '>Daily schedule</div>

       <div className='flex justify-between mt-28'>
        <div className='grid justify-items-end items-center w-[35%] mr-24 hidden lg:block'>
          <img className='' src='images/schedule_01.png'></img>
          <div className=" text-center font-fontlove text-[#385469] text-[30px]">Morning</div>
        </div>
        <div className='lg:w-[65%] w-[100%] sed-line '>
          <div className='flex justify-start items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png '></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>7:00 - 8:00</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Amet, in vitae, mauris volutpat. Fermentum rhoncus sed morbi feugiat.</div>
          </div>
          <div className='flex justify-start  items-center my-3'>
          <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png '></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>8:00 - 8:30</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Fermentum rhoncus sed morbi feugiat luctus tristique egestas gravida.</div>
          </div>
          <div className='flex justify-start items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png '></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>8:30 - 10:30</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Platea ac metus nisi, quis rutrum viverra eleifend tellus quis.
            </div>
          </div>
          <div className='flex justify-start items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png '></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>10:30 - 12:00</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Pharetra congue et cursus fermentum nisi lacinia tincidunt.</div>
          </div>
        </div>
       </div>

       <div className='flex justify-between mt-14'>
        <div className='grid justify-items-end items-center w-[35%] mr-24 hidden lg:block'>
          <img className='' src='images/schedule_02.png'></img>
          <div className=" text-center font-fontlove text-[#385469] text-[30px]">Noon
          </div>
        </div>
        <div className='lg:w-[65%] w-[100%] sed-line'>
          <div className='flex items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>12:00 - 12:30</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Tempor venenatis mi quam diam. Cursus ut scelerisque vulputate eget.</div>
          </div>
          <div className='flex  items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>12:30 - 1:00</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Nisl lectus aliquam neque, sit malesuada.</div>
          </div>
          <div className='flex  items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>1:00 - 2:30</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Consequat, lectus eu sit dictum metus, nec.
            </div>
          </div>
          <div className='flex  items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>2:30 - 4:00</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Imperdiet sagittis consectetur suspendisse mauris ipsum pretium id.</div>
          </div>
        </div>
       </div>
       
       <div className='flex justify-between mt-14'>
        <div className='grid justify-items-end items-center w-[35%] mr-24 hidden lg:block'>
          <img className='' src='images/schedule_03.png'></img>
          <div className=" text-center font-fontlove text-[#385469] text-[30px]">
          Evening</div>
        </div>
        <div className='lg:w-[65%] w-[100%] sed-line'>
          <div className='flex items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>4:00 - 4:30</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Amet, in vitae, mauris volutpat. Fermentum rhoncus sed morbi feugiat.</div>
          </div>
          <div className='flex  items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>4:30 - 5:30</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Fermentum rhoncus sed morbi feugiat luctus tristique egestas gravida.</div>
          </div>
          <div className='flex  items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>5:30 - 6:00</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Platea ac metus nisi, quis rutrum viverra eleifend tellus quis.
            </div>
          </div>
          <div className='flex  items-center my-3'>
            <div className='w-[10%]'><img className='w-[60px]' src='images/schedule_04.png'></img></div>
            <div className='font-display lg:text-[22px] text-[18px] text-[#385469] lg:ml-6 ml-2 w-[20%]'>6:00 - 7:00</div>
            <div className='text-[#70a6b1] ml-6 w-[75%]'>Pharetra congue et cursus fermentum nisi lacinia tincidunt.</div>
          </div>
        </div>
       </div>
       </div>
    </div>

</>
  )
}


export default ScheduleList


