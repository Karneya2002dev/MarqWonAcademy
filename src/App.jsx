import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar.jsx';
import Hero from './Component/Home/Hero.jsx';
import JoinHands from './Component/JoinHands.jsx';
import CourseDetails from './Component/CourseDetails.jsx';
import EnrollPage from './Component/EnrollPage.jsx';

const App = () => {
  return (
    <>
      {/* Navbar is usually at top */}
      <NavBar />


        <Routes>
          <Route path="/" element={<Hero />} />
          
          {/* Example course detail route */}
          <Route path="/courses/web-development/:courseId" element={<CourseDetails />} />
         <Route path="/enroll/:id" element={<EnrollPage />} />

          {/* Add other routes as needed */}
        </Routes>


      {/* Optional JoinHands or other components */}
      {/* <JoinHands /> */}
    </>
  );
};

export default App;
