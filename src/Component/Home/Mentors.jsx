// Mentors.jsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Linkedin, Star } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const mentors = [
  { name: "Premanand", role: "Electronics", image: "/images/premanand.jpg", linkedin: "#" },
  { name: "Dinesh Kumar", role: "Digital Marketing", image: "/images/dinesh.jpg", linkedin: "#", comingSoon: true },
  { name: "Mohan Sivaraman", role: "Data Science", image: "/images/mohan.jpg", linkedin: "#" },
  { name: "Vinesh Raja", role: "Data Science", image: "/images/vinesh.jpg", linkedin: "#" },
  { name: "Mathiarasan", role: "Full Stack", image: "/images/mathiarasan.jpg", linkedin: "#" },
];

export default function Mentors() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mentors-bg", { opacity: 0, scale: 0.8, duration: 1.2, ease: "power3.out" });
      gsap.from(".section-heading", { y: 50, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="mentors-bg text-[8rem] md:text-[14rem] font-extrabold text-gray-800 opacity-10 tracking-widest select-none leading-none">
          MENTORS
        </h1>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center mb-14 section-heading"
      >
        <h2 className="text-4xl font-bold">
          Meet Our <span className="text-pink-500">Mentors</span>
        </h2>
        <p className="text-gray-400 mt-2">Industry experts guiding your journey.</p>

        {/* Divider with Animated Star */}
        <div className="flex items-center justify-center mt-6">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} className="flex-1 border-t border-gray-700 origin-right" />
          <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Star size={24} className="mx-3 text-pink-500 drop-shadow-lg" />
          </motion.div>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 border-t border-gray-700 origin-left" />
        </div>
      </motion.div>

      {/* Mentors Carousel */}
      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-14"   // ⬅️ extra padding at bottom for dots
>

          {mentors.map((mentor, index) => (
           <SwiperSlide key={index}>
  <motion.div
    whileHover={{ scale: 1.05, y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative flex flex-col items-center text-center bg-gray-900/80 backdrop-blur-md 
               rounded-2xl shadow-lg p-6 h-[380px] w-[280px] mx-auto overflow-hidden border border-gray-700"
  >
    {/* Image at Top */}
    <motion.img
      src={mentor.image}
      alt={mentor.name}
      className="w-32 h-32 object-cover rounded-full border-4 border-white mb-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    />

    {/* Mentor Name & Role */}
    <div className="z-10">
      <h3 className="text-lg font-bold text-white">{mentor.name}</h3>
      <p className="text-sm text-gray-300">{mentor.role}</p>
    </div>

    {/* LinkedIn */}
    {!mentor.comingSoon && (
      <a
        href={mentor.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-white hover:text-blue-300 transition"
      >
        <Linkedin size={22} />
      </a>
    )}

    {/* Coming Soon Badge */}
    {mentor.comingSoon && (
      <span className="absolute top-3 right-3 bg-black text-white text-[10px] px-2 py-1 rounded">
        Coming Soon
      </span>
    )}
  </motion.div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
