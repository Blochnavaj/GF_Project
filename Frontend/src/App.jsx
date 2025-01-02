import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 
import SignUp from './Components/SignUp';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Route for Login Page (Standalone) */}
        <Route path='/login' element={<SignUp />} />

        <Route path='/home' element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
