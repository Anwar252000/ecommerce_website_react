import React, { useState,useEffect } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';

function App() {

  const [mode, setMode] = useState('white')

    const modeFun=()=>{
        if(mode==='white'){
            setMode('black');
        }
        else{
            setMode('white');
        }
    }

  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode}/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About />}/>
      <Route exact path='/contact' element={<Contact />}/>
      <Route exact path='/blogs' element={<Blogs />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
