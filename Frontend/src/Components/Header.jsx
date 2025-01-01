import React from 'react';
import header_image from '../assets/header_image.png';

function Header() {
    return (
        <>
            <div className="">
                {/* Header Image Section */}
                <div className="lg:grid md:justify-center md:text-center lg:justify-start lg:items-start grid items-center justify-center">
                    <div className="lg:flex lg:right-8 lg:absolute ml-[-2.25rem] mt-[1.5rem] lg:w-[889px] lg:h-[500px] md:grid md:justify-center md:items-center">
                        <img className="w-full h-full" src={header_image} alt="" />
                    </div>
                    {/* Header Text Section */}
                    <div className="mt-8 text-3xl grid justify-center items-center lg:text-6xl lg:mt-[4rem] lg:ml-5 lg:leading-[4.5rem] md:text-5xl">
                        <div>
                            <p className="text-[#20B486] text-2xl md:ml-[5rem] flex md:justify-start md:items-center">
                                START TO SUCCESS
                            </p>
                        </div>
                        <p className="font-medium flex justify-start items-start gap-2 ">
                            Access To <span className="text-[#20B486] font-bold   ">5000+</span> Courses
                        </p>
                        <p className="font-medium flex justify-start items-start gap-2">
                            from <span className="text-[#20B486] font-bold">300</span> Instructors
                        </p>
                        <p className="font-medium flex justify-start items-start">& Institutions</p>
                    </div>
                </div>
                {/* Supporting Text */}
                <div className="md:mt-3 md:ml-3 ml-3 mt-4">
                    <p className="font-semibold text-xl">
                        Various versions have evolved over the years, sometimes by accident,
                    </p>
                </div>
                <div className="border mt-4 rounded-md flex items-center px-4 md:mt-3 w-[300px] md:w-[400px] h-[50px] ml-4">
                    <input
                        type="text"
                        className="flex-grow outline-none text-sm placeholder-gray-500 text-left pl-2"
                        placeholder="What do you want to learn?"
                    />
                    <i className="fa-solid fa-magnifying-glass text-gray-500 cursor-pointer"></i>
                 </div>

            </div>

        </>
    );
}

export default Header;
