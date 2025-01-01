 import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Course from './Components/Course'
 
 const App = () => {
   return (
   <>
    
      <Navbar/>
      <Header/>
      <div className='md:mt-[10rem] mt-[3rem] ' >

      <Course/>
      </div>
     
   </>
   )
 }
 
 export default App