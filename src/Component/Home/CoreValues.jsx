import React from "react";
import { BookOpen, Languages, Users, Workflow, Star } from "lucide-react";
import { motion } from "framer-motion";
import Mentors from "./Mentors";

const values = [
  {
    icon: <BookOpen size={32} className="text-violet-500" />,
    title: "Live Courses",
    description:
      "Real-time, interactive courses designed to engage learners directly with expert instructors, creating a dynamic and immersive educational experience.",
  },
  {
    icon: <Languages size={32} className="text-violet-500" />,
    title: "Learn in Tamil",
    description:
      "UPTOR is dedicated to making quality education accessible to everyone by providing courses in Tamil, empowering learners to excel in their native language.",
  },
  {
    icon: <Users size={32} className="text-violet-500" />,
    title: "Guidance From Industry Expert",
    description:
      "Every course at UPTOR is led by seasoned industry professionals, bringing real-world experience into the classroom to ensure that students receive insights that are both current and relevant.",
  },
  {
    icon: <Workflow size={32} className="text-violet-500" />,
    title: "Hands-On Practical Learning",
    description:
      "UPTOR emphasizes practical, hands-on learning experiences, equipping students with the skills they need to succeed in their careers from the very first day.",
  },
];

export default function CoreValues() {
  return (
    <>
      {/* Core Values Section */}
      <section className="bg-black text-white py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold relative inline-block">
            <span className="text-violet-500">Core</span> Values
          </h2>
          <p className="mt-4 text-gray-400">
            Empowering Learners with Expert Guidance and Practical Skills. <br />
            Here's What We Offer:
          </p>

          {/* Animated Divider */}
          <div className="flex items-center justify-center mt-6">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex-1 max-w-xs border-t border-gray-700 origin-right"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Star size={24} className="mx-3 text-violet-500 drop-shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="flex-1 max-w-xs border-t border-gray-700 origin-left"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-start shadow-lg hover:shadow-violet-500/20 transition"
              >
                <div className="mb-4 p-3 bg-neutral-800 rounded-xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join With Fellow Learners Section */}
      <section className="bg-[#1a0015] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Join with Fellow <span className="text-pink-500">Learners</span>
          </h2>
          <p className="mt-2 text-gray-300">
            Our foundation rests on real world relevance.
          </p>

          {/* Avatars */}
          <div className="flex justify-center items-center mt-6 space-x-[-12px]">
            {[
              "/avatars/user1.jpg",
              "/avatars/user2.jpg",
              "/avatars/user3.jpg",
              "/avatars/user4.jpg",
              "/avatars/user5.jpg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Learner"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            ))}
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-sm border-2 border-white">
              10K+
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full border-2 border-pink-500 shadow-lg transition">
              Explore Courses
            </button>
          </div>
        </div>

       
      </section>
       {/* <Mentors /> */}
    </>
  );
}
