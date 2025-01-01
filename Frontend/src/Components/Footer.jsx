import React from 'react'

function Footer() {
  return (
     <>
       <div className='grid grid-cols-2 items-center  justify-center md:grid md:grid-cols-4  m-auto lg:grid lg:grid-cols-4 lg:mt-3 lg:p-3 '>
         
        <div className='ml-7'>
           <h1 className='text-3xl cursor-pointer py-6  '> <span className='text-[#20B486] font-medium'>e<span className='text-[#FFC27A]'>Dex</span></span></h1>
           <p className='text-2xl font-bold py-2'>Contact Us</p>
           <p  className='text-sm font-semibold py-2'>Call : +123 400 123</p>
           <p  className='text-sm font-semibold '>Praesent nulla massa, hendrerit </p>
           <p  className='text-sm font-semibold pb-2'>vestibulum gravida in, feugiat auctor felis.</p>
           <p  className='text-sm font-bold'>Email: example@mail.com</p>
        </div>
          
          <div className='ml-[6rem] grid items-center justify-center  '>
           
          <h1 className='font-bold text-3xl py-6'>Explore</h1>
            <p className='text-sm font-light pb-2'>Home</p>
            <p className='text-sm font-light pb-2'>About</p>
            <p className='text-sm font-light pb-2'>Course</p>
            <p className='text-sm font-light pb-2'>Blog</p>
            <p className='text-sm font-light pb-2'>Contact</p>
          </div>

          <div className='mt-[5rem] lg:mt-0  ml-7'>
            <h1 className='font-bold text-3xl pb-4 ' >Category</h1>
            <p className='text-sm font-light pb-2'>Design</p>
            <p className='text-sm font-light pb-2'>Development</p>
            <p className='text-sm font-light pb-2'>Marketing</p>
            <p className='text-sm font-light pb-2'>Business</p>
            <p className='text-sm font-light pb-2'>Lifestyle</p>
          </div>

          <div className='mt-[5rem] lg:mt-0 ml-[6rem] '>
             <h1 className='font-bold text-3xl '>Subscribe</h1>
             <input type="email"  className='border w-full p-3 rounded-lg pt-0' placeholder='Enter your email'  />
             <button>Subscribe Now</button>
          </div>
       </div>
     </>
  )
}

export default Footer