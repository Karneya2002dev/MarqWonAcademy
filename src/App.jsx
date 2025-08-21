import React from 'react'
import Hero from './Component/Home/Hero'
import Navbar from './Component/NavBar/NavBar'
import CourseCard from './Component/Home/CourseCard'


import CoursesSection from './Component/Home/CourseCard'
// import { Router } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CourseDetails from './Component/CourseDetails'
// import Workshops from './Component/Home/WorkShop'
import Footer from './Component/Home/Footer'
import HomePage from './Component/HomePage'
import Workshops from './Component/Home/WorkShop'
const App = () => {
  return (
  <>
  <Navbar />

 <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/courses' element={<CoursesSection/>} />
      <Route path='/workshops' element={<Workshops />} />
    
   
    </Routes>
    <Footer />
 
  
    
  
  </>
  )
}

export default App