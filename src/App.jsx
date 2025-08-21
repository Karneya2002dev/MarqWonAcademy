import React from 'react'
import Hero from './Component/Home/Hero'
import Navbar from './Component/NavBar/NavBar'
import CourseCard from './Component/Home/CourseCard'


import CoursesSection from './Component/Home/CourseCard'
// import { Router } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from './Component/CourseDetails'
import Workshops from './Component/Home/WorkShop'
const App = () => {
  return (
  <>
  <Navbar />
 <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/courses' element={<CourseDetails />} />
      <Route path='/workshops' element={<Workshops />} />
   
    </Routes>

  
  </>
  )
}

export default App