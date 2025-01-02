import React from 'react'
 
import courseData from '../assets/data.js'


function Course() {
  
  
  return (
    <>
     
      <div className='md:mt-[2rem] md:flex  grid justify-center items-center md:justify-start md:items-start mt-[3rem]  ' id='skills'>
      
        <div className='md:ml-[4rem] md:m-auto flex flex-col justify-center items-center  md:justify-start md:items-start mt-6'>
          <p className='font-light text-5xl text-black'>Most</p>
          <p className='text-[#20B486] font-semibold text-5xl'>Popular</p>
          <p className='text-[#20B486] font-semibold text-5xl'>Course</p>
        </div>
     
         <div className="  grid md:grid md:grid-cols-2 lg:gap-3 lg:grid-cols-3  gap-5 mt-0 md:mt-28  transform scale-90  ">
          {courseData.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg  cursor-pointer     ">
              <div className="relative border border-black px-[2rem] py-[1rem]">
                {/* Positioned text on top of the image */}
                <div className="absolute top-2 left-4 bg-white text-black px-2 py-1 rounded-sm">
                  <p className="text-sm font-semibold">{item.course_name}</p>
                </div>

                {/* Image */}
                <img
                  src={item.image}
                  alt={`Course ${index + 1}`}
                  className="md:w-45 h-45 object-cover rounded-lg"
                />

                {/* Course Title */}
                <h1 className="md:mt-2 mt-4 grid items-center justify-center text-lg md:text-sm md:truncate font-semibold">
                  {item.course_tittle}
                </h1>

                {/* Star Rating */}
                <div className="md:flex md:justify-center md:items-center md:gap-2 gap-2 md:mt-1 flex justify-center items-center">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <i key={index} className="fa-solid fa-star text-yellow-500"></i>
                    ))}
                  <h1>{item.total}</h1>
                </div>
                <hr className="w-3/3" />

                {/* Price and Arrow */}
                <div className="mt-2 flex justify-between items-center text-black md:flex md:justify-between md:items-center ">
                  <h1 className="font-bold text-2xl">{item.price}</h1>
                  <i class="fa-solid fa-arrow-right md:w-8"></i>
                </div>
              </div>
            </div>
          ))}

        
        </div>

   

 
      </div>

    </>
  )
}

export default Course