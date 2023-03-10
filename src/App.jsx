import { useState } from 'react'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    </BrowserRouter>
    {/* <Skills /> */}
    </>
  )
}

export default App
