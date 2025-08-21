// Mentors.jsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Linkedin, Star } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const mentors = [
  {
    name: "Premanand",
    role: "Electronics",
    image: "/images/premanand.jpg",
    linkedin: "#",
  },
  {
    name: "Dinesh Kumar",
    role: "Digital Marketing",
    image: "/images/dinesh.jpg",
    linkedin: "#",
    comingSoon: true,
  },
  {
    name: "Mohan Sivaraman",
    role: "Data Science",
    image: "/images/mohan.jpg",
    linkedin: "#",
  },
  {
    name: "Vinesh Raja",
    role: "Data Science",
    image: "/images/vinesh.jpg",
    linkedin: "#",
  },
  {
    name: "Mathiarasan",
    role: "Full Stack",
    image: "/images/mathiarasan.jpg",
    linkedin: "#",
  },
];

export default function Mentors() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experts-bg", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".section-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".mentor-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="experts-bg text-[10rem] md:text-[16rem] font-extrabold text-gray-800 opacity-10 tracking-widest select-none leading-none">
          EXPERTS
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
          Industry <span className="text-pink-500">Experts</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Our mentors for all courses.
        </p>

        {/* Divider with Animated Star */}
        <div className="flex items-center justify-center mt-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex-1 border-t border-gray-700 origin-right"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Star size={24} className="mx-3 text-pink-500 drop-shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="flex-1 border-t border-gray-700 origin-left"
          />
        </div>
      </motion.div>

      {/* Swiper Carousel */}
      <div className="container mx-auto px-6 relative z-10">
        <Swiper
  modules={[Navigation, Pagination]}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 6 },
    640: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 12 }, // reduced from 20
  }}
  className="px-2" // reduced from px-8
>
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.08, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mentor-card bg-white rounded-xl shadow-md overflow-hidden relative group w-[260px] cursor-pointer"
              >
                {/* Mentor Label */}
                {!mentor.comingSoon && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] px-2 py-1 rounded">
                    MENTOR
                  </span>
                )}

                {/* Image */}
                <motion.img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-44 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Coming Soon */}
                {mentor.comingSoon && (
                  <span className="absolute top-2 right-2 bg-black text-white text-[9px] px-2 py-1 rounded">
                    Coming Soon!
                  </span>
                )}

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="text-base font-semibold text-gray-900">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-gray-500">{mentor.role}</p>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
