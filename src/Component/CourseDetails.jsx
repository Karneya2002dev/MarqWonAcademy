import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Users,
  Star,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import mernAnimation from "../assets/React icon circling.json"; // Lottie file

// MERN logos
import mongoLogo from "../assets/mernstack/mongodb.png";
import expressLogo from "../assets/mernstack/express.png";
import reactLogo from "../assets/mernstack/reactjs.png";
import nodeLogo from "../assets/mernstack/nodejs.png";


gsap.registerPlugin(ScrollTrigger);

// ---------- Course Data ---------- //
const courses = [
  {
    id: "mern",
    title: "MERN Stack Development",
    duration: "12 Weeks",
    level: "Beginner → Job-ready",
    mode: "Online, Mentor-led",
    thumbnail:
      "https://leadproinfotech.com/wp-content/uploads/2025/01/mern-stack.png",
    description:
      "Master full-stack development using MongoDB, Express.js, React, and Node.js. Build production-grade apps, learn authentication, APIs, deployment, and follow modern best practices.",
    youWillLearn: [
      "Build responsive SPAs with React (hooks, context, routing)",
      "Design RESTful APIs with Node.js & Express",
      "Model data and aggregate queries in MongoDB",
      "JWT auth, role-based access, and secure sessions",
      "State management patterns (Context/Reducer, RTK Query intro)",
      "Reusable UI components & accessibility basics",
      "Testing fundamentals (Jest + React Testing Library)",
      "Deploy client & server to cloud (Vercel/Render)",
    ],
    whoIsFor: [
      "Beginners who know basic JS and want a guided path to full‑stack",
      "Front-end devs leveling up to APIs, databases, and deployment",
      "College students and freshers preparing for placement-ready projects",
      "Career switchers seeking a practical, portfolio-first roadmap",
    ],
    requirements: [
      "Basic HTML/CSS and JavaScript",
      "Laptop with Node.js 18+ and Git installed",
      "Willingness to build and iterate on projects",
    ],
    curriculum: [
      { module: "Week 1: Web & Git Foundations", items: ["Semantic HTML, modern CSS", "ES6+ refresh", "Git & GitHub workflow"] },
      { module: "Week 2: React Fundamentals", items: ["CRA/Vite setup", "Hooks", "Routing"] },
      { module: "Week 3: Advanced React", items: ["Context API", "Forms", "Data fetching"] },
      { module: "Week 4: Node.js & Express", items: ["Routing & middleware", "MVC patterns", "Error handling"] },
      { module: "Week 5: MongoDB & Mongoose", items: ["Schema design", "CRUD", "Aggregation"] },
      { module: "Week 6: Auth & Security", items: ["JWT", "Password hashing", "Role-based access"] },
      { module: "Week 7: File Uploads", items: ["Multer", "Cloud storage"] },
      { module: "Week 8: Testing", items: ["Jest", "RTL", "Supertest"] },
      { module: "Week 9: Performance", items: ["Code splitting", "Caching", "Linting"] },
      { module: "Week 10: Project — E‑Commerce", items: ["Catalog", "Checkout", "Dashboard"] },
      { module: "Week 11: Project — Auth", items: ["JWT system", "Role-based routes"] },
      { module: "Week 12: Deployment", items: ["Deploy to Vercel/Render", "Env configs", "Portfolio polish"] },
    ],
    instructor: {
      name: "Aarav Mehta",
      title: "Senior Full‑Stack Engineer (MERN)",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
      bio: "8+ years building SaaS and e‑commerce platforms.",
      stats: { students: 4800, reviews: 1200, rating: 4.8 },
    },
    reviews: [
      { name: "Ishita R.", rating: 5, comment: "Crystal clear explanations and practical assignments." },
      { name: "Rahul S.", rating: 5, comment: "Capstone project became my portfolio centerpiece." },
    ],
    faqs: [
      { q: "Do I need prior React experience?", a: "No, we start from fundamentals." },
      { q: "Is there a certificate?", a: "Yes, you get a verifiable completion certificate." },
    ],
  },
];

// ---------- Helpers ---------- //
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: "easeOut" },
  }),
};

const Stars = ({ value = 0 }) => {
  const full = Math.floor(value);
  const empty = 5 - full;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="w-4 h-4 opacity-30" />
      ))}
      <span className="text-sm ml-1">{value.toFixed(1)}</span>
    </div>
  );
};

// ---------- Component ---------- //
const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useMemo(
    () => courses.find((c) => c.id === courseId) || courses[0],
    [courseId]
  );

  const imgRef = useRef(null);
  const lottieRef = useRef(null);
  const sectionRefs = useRef([]);

  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const triggers = [];

    if (imgRef.current) {
      const t = gsap.fromTo(
        imgRef.current,
        { y: 0, scale: 1 },
        {
          y: -60,
          scale: 1.05,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      triggers.push(t);
    }

    // Floating animations for MERN logos
    gsap.utils.toArray(".mern-logo").forEach((el, i) => {
      const t = gsap.to(el, {
        y: "random(-30,30)",
        x: "random(-30,30)",
        rotation: "random(-15,15)",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
      triggers.push(t);
    });

    sectionRefs.current.forEach((el) => {
      if (el) {
        const t = gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
        triggers.push(t);
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [courseId]);

  if (!course)
    return <div className="max-w-4xl mx-auto mt-20 p-6">Course not found</div>;

  return (
    <>
      <img src={mongoLogo} alt="MongoDB" className="mern-logo absolute top-20 left-10 w-50 opacity-20" />
      <img src={expressLogo} alt="Express" className="mern-logo absolute bottom-32 right-20 w-50 opacity-20" />
      <img src={reactLogo} alt="React" className="mern-logo absolute top-40 right-10 w-50 opacity-20" />
      <img src={nodeLogo} alt="Node.js" className="mern-logo absolute bottom-20 left-20 w-50 opacity-20" />

      <div className="relative max-w-5xl mx-auto mt-24 p-4 sm:p-6 overflow-hidden">
        {/* Floating MERN Logos */}

        {/* Back link */}
        <div className="mb-4 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to courses
          </Link>
        </div>

        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4 relative z-10"
        >
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
            {course.title}
          </motion.h1>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
              <Clock className="w-4 h-4" /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
              <GraduationCap className="w-4 h-4" /> {course.level}
            </span>
            <span className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
              <Users className="w-4 h-4" /> {course.mode}
            </span>
          </motion.div>
        </motion.div>

        {/* Lottie Animation */}
        {/* <motion.div ref={lottieRef} className="flex justify-center mb-6 relative z-10">
        <Lottie animationData={mernAnimation} loop={true} className="w-56 h-56 sm:w-64 sm:h-64" />
      </motion.div> */}

        {/* Thumbnail */}
        <motion.img
          ref={imgRef}
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-64 md:h-120 object-cover rounded-2xl mb-6 shadow-xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Sections */}
        {"desc learn curriculum instructor reviews faq".split(" ").map((key, idx) => (
          <section key={key} ref={(el) => (sectionRefs.current[idx] = el)} className="mb-6 relative z-10">
            {key === "desc" && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-2">Course Description</h2>
                <p className="text-gray-700 leading-relaxed">{course.description}</p>
              </div>
            )}

            {key === "learn" && (
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> What you'll learn
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {course.youWillLearn.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">Who this course is for</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {course.whoIsFor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {course.requirements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {key === "curriculum" && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Curriculum Breakdown</h2>
                <div className="space-y-4">
                  {course.curriculum.map((block, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4">
                      <div className="font-semibold mb-2">{block.module}</div>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {block.items.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {key === "instructor" && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Course Instructor</h2>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="w-28 h-28 rounded-full object-cover shadow-md" />
                  <div>
                    <h3 className="text-lg font-semibold">{course.instructor.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{course.instructor.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-3">{course.instructor.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{course.instructor.stats.students}+ students</span>
                      <span>{course.instructor.stats.reviews}+ reviews</span>
                      <Stars value={course.instructor.stats.rating} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {key === "reviews" && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
                <div className="space-y-4">
                  {course.reviews.map((review, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{review.name}</h4>
                        <Stars value={review.rating} />
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

            )}

           {key === "faq" && (
  <div className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-xl font-bold mb-4">FAQs</h2>
    <div className="space-y-3">
      {course.faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl">
          <button
            className="w-full flex justify-between items-center p-4 text-left font-medium"
            onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
          >
            {faq.q}
            <ChevronDown
              className={`w-5 h-5 transform transition-transform ${
                openFAQ === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          {openFAQ === idx && (
            <div className="px-4 pb-4 text-gray-700">{faq.a}</div>
          )}
        </div>
      ))}
    </div>

    {/* Enroll Button at the end of FAQs */}
   <div className="flex justify-center mt-8">
  <Link
    to="/enroll/:id"
    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
               text-white font-semibold rounded-xl shadow-lg 
               hover:from-purple-700 hover:to-pink-700 transition"
  >
    Enroll Now
  </Link>
</div>
</div>


            )}
          </section>
        ))}
      </div>
    </>
  );
};

export default CourseDetails;
