import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, ChevronDown, ChevronUp, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgVideo from "../../assets/he.mp4";
import CoreValues from "./CoreValues";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Gowri G", role: "Student", review: "I thoroughly had an enlightening session about Electronics and looking forward to move on in this path." },
  { name: "Sruthi Selvam", role: "Student", review: "The Uptor full stack data science course was comprehensive and well-structured. The mentors guided me throughout, and the job assistance was extremely helpful. Highly recommended!" },
  { name: "Prabakaran", role: "Student", review: "The electronics part of the Uptor course was detailed and applicable to real-world scenarios. The mentors were always available for guidance, and the job assistance was invaluable." },
  { name: "Deepak", role: "Student", review: "Uptor's mentors made complex topics simple. The mock interviews boosted my confidence before job placements." },
  { name: "Rashmi", role: "Student", review: "The projects gave me real-world experience. I was able to crack my first internship with ease!" },
];

export default function WallOfLove() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  const containerRef = useRef(null);
  const heartRef = useRef(null);
  const cardRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate testimonials on scroll
    if (containerRef.current) {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Heart pulse animation
    if (heartRef.current) {
      gsap.to(heartRef.current, {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Floating effect for cards
    cardRefs.current.forEach((card, i) => {
      gsap.to(card, {
        y: 10,
        duration: 2 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Floating & subtle scale animation for video
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        y: 15,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [showAll]);

  return (
    <>
    <section className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Background Video */}
      {/* Background Video */}
<div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
  <video
    ref={videoRef}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-30 rounded-3xl"
  >
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">
            Wall of <span className="text-violet-500">Love</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Meet our students & hear their success stories.
          </p>

          {/* Heart Divider */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <Heart
              ref={heartRef}
              className="mx-3 text-pink-500 drop-shadow-lg"
              size={28}
            />
            <div className="flex-1 border-t border-gray-700"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleTestimonials.map((t, index) => (
              <motion.div
                key={t.name}
                ref={(el) => (cardRefs.current[index] = el)}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-1 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                  </div>
                  <span className="flex items-center text-green-400 text-sm">
                    <CheckCircle2 size={16} className="mr-1" /> Verified
                  </span>
                </div>
                <p className="text-gray-300 mt-3 text-sm">{t.review}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="bg-violet-600 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Icon */}
        <div className="flex justify-center mt-10">
          <motion.div
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer p-3 bg-violet-600 hover:bg-violet-700 rounded-full shadow-lg"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {showAll ? (
              <motion.div
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ChevronUp size={28} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ChevronDown size={28} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

    </section>

<CoreValues />
</>
  );
}
