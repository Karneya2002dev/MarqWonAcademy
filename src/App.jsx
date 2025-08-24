import React from 'react'
import Hero from './Component/Home/Hero'
import Navbar from './Component/NavBar/NavBar'
import CourseCard from './Component/Home/CourseCard'
import CoursesSection from './Component/Home/CourseCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Component/Home/Footer'
import HomePage from './Component/HomePage'
import Workshops from './Component/Home/WorkShop'
import CourseDetails from './Component/CourseDetails'
import CourseDetailsPage from './Component/Home/CourseDetailsPage'
import VerifyCertificate from './Component/Home/VerifyCertificate'
import FallOfLove from './Component/Home/FallOfWall'
import ScrollToTop from './Component/Home/ScrollToTop'
import About from './Component/Home/About'
const App = () => {
  return (
  <>

    <ScrollToTop />
  <Navbar />

 <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/courses' element={<CourseDetails/>} />
      <Route path='/courses/:id' element={<CourseDetailsPage/>} />
      <Route path='/workshops' element={<Workshops />} />
      <Route path='/love' element={<FallOfLove />} />
      <Route path='/verify' element={<VerifyCertificate />} />
      <Route path='/about' element={<About />} />
    
   
    </Routes>
    <Footer />
   
 
  
    
  
  </>
  )
}

export default App