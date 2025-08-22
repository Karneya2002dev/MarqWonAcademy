// CoursesSection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Users, Clock, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import come from "../../assets/up.mp4";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CourseCard Component
const CourseCard = ({ course, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-violet-500/20 transition-all duration-300 relative"
    >
      {/* Coming Soon Badge */}
      {course.comingSoon && (
        <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          Coming Soon
        </span>
      )}

      {/* Thumbnail or Video */}
      <div className="relative">
        {course.comingSoon && course.video ? (
          <video
            src={course.video}
            className="w-full h-48 object-cover opacity-80"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={course.image}
            alt={course.title}
            className={`w-full h-48 object-cover ${
              course.comingSoon ? "opacity-50 grayscale" : ""
            }`}
          />
        )}

        {/* Lock Overlay for Upcoming */}
        {course.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Lock size={40} className="text-white opacity-80" />
          </div>
        )}

        {/* Category Badge */}
        {!course.comingSoon && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-violet-500 to-indigo-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {course.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{course.description}</p>

        {!course.comingSoon ? (
          <>
            {/* Stats */}
            <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
              <span className="flex items-center gap-1">
                <Users size={16} /> {course.students}+
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} /> {course.duration}
              </span>
              <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                <Star size={16} /> {course.rating}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                onClick={() => navigate(`/courses/${course.id}`)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
              >
                View Details
              </button>
              <button className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition">
                📄 Brochure
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-400 text-sm py-6 flex flex-col items-center">
            <Lock size={20} className="mb-2 text-gray-500" />
            🚀 Stay tuned! This course will be available soon.
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Courses Section
const CoursesSection = () => {
  const [filter, setFilter] = useState("All Courses");

  const courses = [
    {
      id: 1,
      title: "Python Full Stack",
      description: "Learn Python, Django, and modern frontend tools.",
      students: "1500",
      duration: "6 Months",
      rating: "4.7",
      category: "Web Development",
      image:
        "https://qicon.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-6.11.42-PM.jpeg",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      description: "Master MongoDB, Express, React, and Node.",
      students: "2000",
      duration: "5 Months",
      rating: "4.6",
      category: "Web Development",
      image:
        "https://i.pinimg.com/736x/45/53/86/455386f21c9a82ccb91ec78dacd9d8a9.jpg",
    },
    {
      id: 3,
      title: "Data Analysis",
      description: "Learn data wrangling, visualization, and ML basics.",
      students: "1200",
      duration: "4 Months",
      rating: "4.8",
      category: "Data Science",
      image: "https://wallpaperaccess.com/full/3457552.jpg",
    },
    {
      id: 4,
      title: "Graphic Designing",
      description: "UI/UX design, Adobe tools, and modern design trends.",
      students: "800",
      duration: "3 Months",
      rating: "4.5",
      category: "UI/UX",
      image: "https://clipart-library.com/images/rTjrn5Lkc.jpg",
    },
    {
      id: 5,
      title: "Machine Learning",
      description: "UI/UX design, Adobe tools, and modern design trends.",
      students: "800",
      duration: "3 Months",
      rating: "4.5",
      category: "Data Science",
      image: "https://t3.ftcdn.net/jpg/09/33/83/82/360_F_933838289_TS8PCfgl9RFC1Z6dRwkpxpsG9gSgObnB.jpg",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Dive into AI tools like ChatGPT, DALL·E, and MidJourney.",
      comingSoon: true,
      category: "Marketing",
      image:
        "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?semt=ais_hybrid&w=740&q=80",
      video: come,
    },
    {
      id: 7,
      title: "Cybersecurity Essentials",
      description: "Dive into AI tools like ChatGPT, DALL·E, and MidJourney.",
      comingSoon: true,
      category: "Security",
      image: "https://www.bitlyft.com/hubfs/Cybersecurity-solutions.jpeg",
      video: come,
    },
  ];

  const filters = [
    "All Courses",
    "Web Development",
    "Data Science",
    "UI/UX",
    "Marketing",
    "Security",
  ];

  const filteredCourses =
    filter === "All Courses"
      ? courses
      : courses.filter((c) => c.category === filter);

  return (
    <section className="py-16 bg-black text-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl font-bold">
          Our <span className="text-violet-500">Courses</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Join us for Interactive Learning with 8+ years Industry Mentors.
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
            <Star size={24} className="mx-3 text-violet-500 drop-shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="flex-1 border-t border-gray-700 origin-left"
          />
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex gap-4 justify-center mb-10 flex-wrap">
        {filters.map((f) => (
          <motion.button
            key={f}
            onClick={() => setFilter(f)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "bg-violet-600 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* Courses Carousel */}
      <div className="px-6 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredCourses.map((course, index) => (
            <SwiperSlide key={course.id}>
              <CourseCard course={course} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoursesSection;
