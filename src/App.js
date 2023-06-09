import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import DVP_HeroSection from './Components/DVP_HeroSection';
import Developer from './Pages/Developer';
import About from './Pages/About'
import Hamza from './Pages/Hamza';
import Way_To_Fundraise from './Pages/Way_To_Fundraise';
import TipsAndTool from './Pages/TipsAndTool';
import Search from './Pages/Search';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/developer' element={<Developer />} />
        <Route path='/waytofundraise' element={<Way_To_Fundraise />} />
        <Route path='/tipsandtools' element={<TipsAndTool />} />
        <Route path='/search' element={<Search />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/about' element={<About />} />
        <Route path='/hamza' element={<Hamza />} />




      </Routes>

    </>
  );
}

export default App;
