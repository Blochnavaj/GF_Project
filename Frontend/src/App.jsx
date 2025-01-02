import React from 'react'; 
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Course from './Components/Course';
import Footer from './Components/Footer';

const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Header/>
      <Course/>
    <div className='md:flex md:justify-between md:items-center'>
    <Footer/>
    </div>
    </div>
    
  );
};

export default App;
