import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from "../NavBar/NavBar";
import StatsSection from "./StatsSection";
import CoursesSection from "./CourseCard";

const users = [
  { name: "Meghana", role: "Developer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Anjali", role: "Data Scientist", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Sruthi Selvam", role: "Data Architect", img: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Kumaran", role: "Full Stack Developer", img: "https://randomuser.me/api/portraits/men/41.jpg" },
];

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [yPos, setYPos] = useState(0);
  const requestRef = useRef();

  const starRefs = useRef([]); // store star refs

  // Scroll loop
  const step = () => {
    if (!isPaused) {
      setYPos((prev) => {
        if (prev <= -100) return 0;
        return prev - 0.1;
      });
    }
    requestRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  // ⭐ GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      starRefs.current,
      { scale: 0, opacity: 0, rotate: -180 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.2,
        repeat: -1, // infinite
        yoyo: true,
      }
    );
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Content Section */}
        <div className="flex items-center justify-between px-10 flex-1">
          {/* Left Content */}
          <div className="max-w-xl space-y-6 pt-30">
  <h1 className="hero-title text-5xl font-bold leading-tight">
    Learn Today, <br />
    <span className="relative inline-block bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent font-extrabold animate-shine">
      Lead Tomorrow
    </span>
  </h1>
  <p className="text-gray-300">
    Transform your Career from Top Industry Mentors.
  </p>

  {/* Buttons */}
  <div className="flex gap-4">
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-6 py-3 rounded-full font-semibold text-white 
        bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
        hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 
        transition duration-300"
    >
      Explore Courses
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-6 py-3 rounded-full font-semibold text-white 
        bg-gray-800 border border-gray-600 
        hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 
        hover:border-transparent transition duration-300"
    >
      View Stories
    </motion.button>
  </div>
</div>


          {/* Right Side - Scrolling User Cards */}
          {/* Right Side - Scrolling User Cards */}
<div className="relative w-1/2 h-[500px] overflow-hidden flex flex-col items-end pr-6 mt-12">
  <motion.div
    style={{ y: `${yPos}%` }}
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    className="flex flex-col gap-6"
  >
    {[...users, ...users].map((user, index) => (
      <div
        key={index}
        className="bg-white text-black rounded-2xl shadow-lg flex items-center gap-4 p-4 w-64"
      >
        <img
          src={user.img}
          alt={user.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.role}</p>
        </div>
      </div>
    ))}
  </motion.div>
</div>

        </div>

        {/* ✨ Animated Stars */}
        <div className="flex justify-center items-center gap-3 px-10 pb-6">
          <span ref={(el) => (starRefs.current[0] = el)} className="star-glow text-yellow-400 text-sm">
            ✦
          </span>
          <span ref={(el) => (starRefs.current[1] = el)} className="star-glow text-yellow-400 text-lg">
            ✦
          </span>
          <span ref={(el) => (starRefs.current[2] = el)} className="star-glow text-yellow-400 text-xl">
            ✦
          </span>
        </div>

        <StatsSection />
      </div>

      {/* ✨ Shine Animation CSS */}
      <style>{`
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        @keyframes star-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(251, 191, 36, 0.8), 
                        0 0 10px rgba(251, 191, 36, 0.6), 
                        0 0 15px rgba(251, 191, 36, 0.4);
          }
          50% {
            text-shadow: 0 0 15px rgba(251, 191, 36, 1), 
                        0 0 25px rgba(251, 191, 36, 0.8), 
                        0 0 35px rgba(251, 191, 36, 0.6);
          }
        }

        .star-glow {
          animation: star-glow 2s infinite ease-in-out;
        }
      `}</style>
      <CoursesSection />
    </>
  );
};

export default Hero;
