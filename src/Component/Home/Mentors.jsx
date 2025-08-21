import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Linkedin } from "lucide-react";

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
  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Industry <span className="text-pink-500">Experts</span>
        </h2>
        <p className="mt-2 text-gray-400">
          Our mentor for all courses.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6"
      >
        {mentors.map((mentor, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden relative">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-64 object-cover"
              />
              {mentor.comingSoon && (
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  Coming Soon!
                </span>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{mentor.name}</h3>
                <p className="text-gray-500">{mentor.role}</p>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 text-blue-600"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
