import React from 'react'

const Teachers = () => {
  return (
    <>
     <div className='mt-24'> 
      <div className='container m-auto'>
       <div className="text-center font-fontlove text-[20px] my-2 text-[#f39f5f] uppercase tracking-[2px]">Expert People</div>
       <div className='font-display text-6xl text-[#385469] text-center '>Our teachers</div>

        <div className='grid grid-cols-2 lg:grid-cols-4'>
            <div className='text-center m-8'>
                <div className=" round-anim"><img className='w-full rounded-[50%] overflow-hidden' src='images/teacher_01-300x300.jpg'></img></div>
                <div className='text-[#385469] text-[30px] font-display mt-6'>Dawson Timms</div>
                <div className='text-[#7399b6] text-[16px]'>Senior Winemaker</div>
            </div>
            <div className='text-center m-8'>
                <div className=" round-anim"><img className='w-full rounded-[50%] overflow-hidden' src='images/teacher_02-300x300.jpg'></img></div>
                <div className='text-[#385469] text-[30px] font-display mt-6'>Michele Bailey</div>
                <div className='text-[#7399b6] text-[16px]'>Wine Critic</div>
            </div>
            <div className='text-center m-8'>
                <div className=" round-anim"><img className='w-full rounded-[50%] overflow-hidden' src='images/teacher_03-300x300.jpg'></img></div>
                <div className='text-[#385469] text-[30px] font-display mt-6'>Philip Klein</div>
                <div className='text-[#7399b6] text-[16px]'>Company Director</div>
            </div>
            <div className='text-center m-8'>
                <div className=" round-anim"><img className='w-full rounded-[50%] overflow-hidden' src='images/teacher_04-300x300.jpg'></img></div>
                <div className='text-[#385469] text-[30px] font-display mt-6'>Brian Marsh</div>
                <div className='text-[#7399b6] text-[16px]'>Winemaker Junior</div>
            </div>
        </div>
        
        </div>
    </div>
   
    </>
  )
}

export default Teachers

