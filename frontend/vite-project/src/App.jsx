import { useState } from 'react'
import Home from './component/Home';
import Courses from './component/Courses.jsx' 
import Signup from './component/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
   <div className=''>
     <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
   </div>
    </BrowserRouter>
     
  )
}

export default App;
