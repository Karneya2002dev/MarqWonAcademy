import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../assets/8.jpeg"
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 80%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Staggered entrance for heading, paragraph, and button
      gsap.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      // Button hover animation
      const btn = buttonRef.current;
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      {/* Main Glass Card */}
      <div className="relative z-10 flex items-end min-h-screen px-8 pb-16">
        <div
          ref={contentRef}
          className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl max-w-lg shadow-lg text-left"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Innovation That Works{" "}
            <motion.span
              initial={{ color: "#4b5563" }}
              whileInView={{ color: "#2563eb" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Efficiency That Scales
            </motion.span>
          </h1>

          <p className="text-lg mb-6 text-gray-700">
            Your back office, built to grow with you. Everything you need to
            launch, operate, and scale with confidence.
          </p>

          <button
            ref={buttonRef}
            className="px-6 py-3 rounded-md bg-blue-600/80 text-white"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
