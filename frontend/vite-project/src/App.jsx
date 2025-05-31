import { useState } from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Freebook from './component/Freebook';


function App() {

  return (
    <>
       <Navbar />
       <Banner/>
       <Freebook/>
       <Footer/>
    </>
  )
}

export default App
