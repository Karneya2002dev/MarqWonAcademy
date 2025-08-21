import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import FallOfWall from "./FallOfWall";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const workshops = [
  {
    title: "Data Science",
    desc: "Your Fast Track to a High-Demand Career!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7zWRQPxwM5OcZbrb-JKgqmBZUshShzt17A&s", // Replace with real image
    registered: "80K+ Registered",
    rating: 4.5,
    price: 9,
    oldPrice: 299,
    btn: "Register Now",
  },
  {
    title: "Electronics Mastery",
    desc: "Get To know, How electronics will play a major role in this Digital Era",
    img: "https://via.placeholder.com/400x200",
    registered: "100K+ Registered",
    rating: 4.9,
    price: 9,
    oldPrice: 299,
    btn: "Register Now",
  },
  {
    title: "Generative AI",
    desc: "Gain hands-on experience with popular generative AI tools and frameworks.",
    img: "https://via.placeholder.com/400x200",
    registered: "200+ Registered",
    rating: 4.9,
    price: 9,
    oldPrice: 500,
    btn: "Register Now",
  },
];

const Workshops = () => {
  const cardsRef = useRef([]);
  const starRef = useRef([]);
  const buttonRef = useRef([]);
  const fallRef = useRef(null); // <-- Ref for FallOfWall

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate divider star infinitely
    gsap.to(starRef.current, {
      rotate: 20,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
      transformOrigin: "50% 50%",
    });

    // Animate buttons on scroll
    buttonRef.current.forEach((btn, i) => {
      gsap.from(btn, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2 + 0.5,
        scrollTrigger: {
          trigger: btn,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Hover scale effect with GSAP
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
      });
    });

    // Animate FallOfWall on scroll
    if (fallRef.current) {
      gsap.from(fallRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fallRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section className="py-16 bg-black text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">
          Ongoing <span className="text-pink-500">Workshops</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Attend the Free Course Workshops and Get to Know All the Details.
        </p>

        {/* Divider with star */}
        <div className="flex items-center justify-center mt-6">
          <div className="flex-1 border-t border-gray-700 origin-right"></div>
          <Star
            size={24}
            ref={starRef}
            className="mx-3 text-pink-500 drop-shadow-lg"
          />
          <div className="flex-1 border-t border-gray-700 origin-left"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {workshops.map((w, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 flex flex-col hover:shadow-pink-500/40 transition-shadow duration-300"
          >
            {/* Banner */}
            <div className="p-6">
              <img src={w.img} alt={w.title} className="rounded-xl" />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <span className="bg-gray-800 text-sm px-3 py-1 rounded-full inline-block mb-3">
                {w.registered}
              </span>
              <h3 className="text-xl font-bold">{w.title}</h3>
              <p className="text-gray-400 text-sm mt-1 flex-1">{w.desc}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-yellow-400">
                  ⭐ {w.rating}
                </span>
              </div>
              {/* Price & Button */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₹{w.price}</span>{" "}
                  <span className="text-gray-500 line-through">₹{w.oldPrice}</span>
                </div>
                <button
                  ref={(el) => (buttonRef.current[i] = el)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  {w.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add gap and animate FallOfWall */}
      <div ref={fallRef} className="mt-20">
        <FallOfWall />
      </div>
    </section>
  );
};

export default Workshops;