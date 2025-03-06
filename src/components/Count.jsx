import React from "react";
import CountUp from 'react-countup';

const Count = () => {
    return (
        <>
        <div className="count-sec mt-40 ">
            <div className="container mx-auto relative">
                <div className="count-cont ">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="cont-list text-center p-10 lg:border-r-4 border-dashed border-[#9eced867] ">
                            <div className="count-add font-fontlove text-8xl text-[#70A6B1]"><CountUp end={767} /></div>
                            <h5 className="font-display text-3xl text-[#385469]">Happy children</h5>
                            <p className="mt-5 opacity-65 text-[#385469]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor semper tincidunt ut feugiat nulla. Nisl vivamus id donec eu aliquet sagittis tincidunt pellentesque.</p>
                        </div>
                        <div className="  cont-list text-center p-10 lg:border-r-4 border-dashed border-[#9eced867] ">
                            <div className="count-add font-fontlove text-8xl text-[#70A6B1]"><CountUp end={32} />K</div>
                            <h5 className="font-display text-3xl text-[#385469]">Hours worked</h5>
                            <p className="mt-5 opacity-65 text-[#385469]"> Pellentesque vulputate odio neque tellus. Urna convallis phasellus quis diam sit viverra eros. Vulputate ut donec nascetur dictumst posuere.</p>
                        </div>
                        <div className=" cont-list text-center p-10">
                            <div className="count-add font-fontlove text-8xl text-[#70A6B1]"><CountUp end={120} /></div>
                            <h5 className="font-display text-3xl text-[#385469]">Awards received</h5>
                            <p className="mt-5 opacity-65 text-[#385469]"> Ipsum et arcu velit lobortis diam cursus. Eu viverra morbi nullam lectus. Auctor placerat feugiat nunc blandit. Suspendisse vel enim, nisi, quis .</p>
                        </div>
                    </div>
                </div>
                <div className="cont-img1 absolute top-[-100px] right-60">
                    <img src="images/counters_01.png" alt=""></img>
                </div>
                <div className="cont-img2 absolute left-[-20px] bottom-0">
                    <img src="images/counters_02.png" alt=""></img>
                </div>
            </div>
        </div>
        </>
    )


}
export default Count;