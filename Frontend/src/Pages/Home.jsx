import React from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Course from '../Components/Course';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div> 
          <Navbar />
              <Header />
              <div className='md:mt-[3rem] mt-[3rem]'>
                <Course />
              </div>
              <Footer />
    </div>
  )
}

export default Home