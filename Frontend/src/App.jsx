 import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Course from './Components/Course'
import Footer from './Components/Footer'
 
 const App = () => {
   return (
   <>
    
      <Navbar/>
      <Header/>
      <div className='md:mt-[3rem] mt-[3rem] ' >
      <Course/>
      </div>
      <Footer/>
     
   </>
   )
 }
 
 export default App