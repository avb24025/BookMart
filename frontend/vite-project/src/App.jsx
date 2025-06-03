import { useState } from 'react'
import Home from './component/Home';
import Courses from './component/Courses.jsx' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
    </Routes>
    </BrowserRouter>
     
  )
}

export default App;
