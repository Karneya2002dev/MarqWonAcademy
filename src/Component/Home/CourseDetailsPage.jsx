// src/Component/Home/CourseDetailsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Users, Clock, ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import courses from "../data/Courses";

gsap.registerPlugin(ScrollTrigger);

const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for GSAP animations
  const syllabusRef = useRef(null);

 useEffect(() => {
  if (syllabusRef.current) {
    const cards = syllabusRef.current.querySelectorAll(".syllabus-card");

    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: i % 2 === 0 ? 100 : -100, // alternate direction for zig-zag effect
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // animation starts when card enters viewport
          toggleActions: "play none none reverse", // play when in view, reverse when out
        },
      });
    });
  }
}, []);


  if (!course)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <p className="text-xl font-semibold">Course not found</p>
      </div>
    );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrolled:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "" });
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-6 md:p-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-violet-500 hover:text-violet-400 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} /> Back
      </motion.button>

      {/* Course Header */}
      <motion.div
        className="flex flex-col md:flex-row gap-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
  src={course.image}
  alt={course.title}
  loading="lazy"
  className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-xl shadow-lg border border-gray-800"
  whileHover={{ scale: 1.05 }}
/>
        <div className="flex-1 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-gray-400 text-lg mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-1">
                <Users /> {course.students} Students
              </span>
              <span className="flex items-center gap-1">
                <Clock /> {course.duration}
              </span>
              <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                <Star /> {course.rating}
              </span>
            </div>

            <span className="inline-block bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
              {course.category}
            </span>
          </motion.div>

          {/* Enroll Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition w-full md:w-auto text-lg font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </motion.div>

      {/* Course Syllabus (GSAP animated) */}
      <section
        ref={syllabusRef}
        className="mt-12 max-w-5xl mx-auto px-4 syllabus-section"
      >
        <h2 className="text-3xl font-bold mb-12 text-violet-400 text-center">
          Course Syllabus
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-violet-600"></div>

          <div className="space-y-12">
            {[
              "Introduction & Basics",
              "Advanced Topics",
              "Hands-on Projects",
              "Capstone Project",
            ].map((topic, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between w-full syllabus-card"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12 bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-xl font-semibold text-white">
                        {topic}
                      </h3>
                      <p className="text-gray-300 mt-2">
                        This section covers the key points and exercises of{" "}
                        <span className="font-medium">{topic}</span>.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-violet-600 w-5 h-5 rounded-full border-4 border-gray-900"></div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-violet-600 w-5 h-5 rounded-full border-4 border-gray-900"></div>
                    <div className="w-5/12 bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-xl font-semibold text-white">
                        {topic}
                      </h3>
                      <p className="text-gray-300 mt-2">
                        This section covers the key points and exercises of{" "}
                        <span className="font-medium">{topic}</span>.
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Message */}
      {submitted && (
        <motion.p
          className="text-green-400 text-center mb-4 font-semibold mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          ✅ Thank you for enrolling! We will contact you soon.
        </motion.p>
      )}

      {/* Enrollment Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gray-900 rounded-xl shadow-xl w-full max-w-lg p-8 relative"
            initial={{ scale: 0.8, y: -50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-violet-400 text-center">
              Enroll in {course.title}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 transition text-white font-medium px-6 py-3 rounded-lg text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Enrollment
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Coming Soon Overlay */}
      {course.comingSoon && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gray-800 p-10 rounded-xl text-center text-white shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <p className="text-2xl font-bold mb-2">🚀 Coming Soon!</p>
            <p className="text-gray-300">
              This course will be available shortly. Stay tuned!
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CourseDetailsPage;
