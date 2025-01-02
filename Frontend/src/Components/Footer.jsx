import React from 'react'

function Footer() {
  return (
    <>
      <div className=" md:m-auto  md:my-7  grid justify-center items-center   ">
        {/* Footer Header */}
        

        {/* Footer Content */}
        <div className="md:flex justify-between items-start md:gap-[9.5rem]    ">
          {/* Contact Us */}
          <div className="mb-6 ">
            <p className="text-2xl font-bold py-2">Contact Us</p>
            <p className="text-sm font-semibold py-1">Call : +123 400 123</p>
            <p className="text-sm font-semibold py-1">
              Praesent nulla massa, hendrerit
            </p>
            <p className="text-sm font-semibold py-1">
              vestibulum gravida in, feugiat auctor felis.
            </p>
            <p className="text-sm font-bold py-1">Email: example@mail.com</p>
          </div>

          {/* Explore */}
          <div className="mb-6">
            <h1 className="font-bold text-2xl pb-4">Explore</h1>
            <p className="text-sm font-light pb-2">Home</p>
            <p className="text-sm font-light pb-2">About</p>
            <p className="text-sm font-light pb-2">Course</p>
            <p className="text-sm font-light pb-2">Blog</p>
            <p className="text-sm font-light pb-2">Contact</p>
          </div>

          {/* Category */}
          <div className="mb-6">
            <h1 className="font-bold text-2xl pb-4">Category</h1>
            <p className="text-sm font-light pb-2">Design</p>
            <p className="text-sm font-light pb-2">Development</p>
            <p className="text-sm font-light pb-2">Marketing</p>
            <p className="text-sm font-light pb-2">Business</p>
            <p className="text-sm font-light pb-2">Lifestyle</p>
          </div>

          {/* Subscribe */}
          <div className='grid'>
            <h1 className="font-bold text-2xl pb-4">Subscribe</h1>
            <div className="grid  items-center gap-4 ">
              <input
                type="email"
                className="border rounded-lg px-4 py-2 w-full sm:w-auto"
                placeholder="Enter your email"
              />
              <button  className="bg-[#20B486] text-white px-6 py-2 rounded-lg ">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
