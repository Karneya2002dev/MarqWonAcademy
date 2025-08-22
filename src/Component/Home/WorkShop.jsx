import React, { useEffect, useRef, useState } from "react";
import { Star, X, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workshops = [
  {
    title: "Data Science",
    desc: "Your Fast Track to a High-Demand Career!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7zWRQPxwM5OcZbrb-JKgqmBZUshShzt17A&s",
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
  const fallRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(starRef.current, {
      rotate: 20,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
      transformOrigin: "50% 50%",
    });

    buttonRef.current.forEach((btn, i) => {
      gsap.from(btn, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2 + 0.5,
        scrollTrigger: {
          trigger: btn,
          start: "top 85%",
        },
      });
    });

    if (fallRef.current) {
      gsap.from(fallRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fallRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        ".modal-content",
        { y: -50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isModalOpen]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    // Auto close modal after 2 sec
    setTimeout(() => {
      setIsSuccess(false);
      setIsModalOpen(false);
    }, 2000);
  };

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

        {/* Divider */}
        <div className="flex items-center justify-center mt-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <Star size={24} ref={starRef} className="mx-3 text-pink-500" />
          <div className="flex-1 border-t border-gray-700"></div>
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
            <div className="p-6">
              <img src={w.img} alt={w.title} className="rounded-xl" />
            </div>
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
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₹{w.price}</span>{" "}
                  <span className="text-gray-500 line-through">
                    ₹{w.oldPrice}
                  </span>
                </div>
                <button
                  ref={(el) => (buttonRef.current[i] = el)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                  onClick={() => {
                    setSelectedWorkshop(w);
                    setIsModalOpen(true);
                  }}
                >
                  {w.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="modal-content bg-[#111] text-white p-8 rounded-2xl max-w-lg w-full relative">
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">
              Register for {selectedWorkshop?.title}
            </h3>

            {!isSuccess ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-lg font-semibold transition"
                >
                  Confirm Registration
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle2 size={50} className="text-green-500 mb-4" />
                <p className="text-lg font-semibold">
                  Registration Successful! 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshops;
