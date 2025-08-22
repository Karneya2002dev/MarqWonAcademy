import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logosimple.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isMentorOpen, setIsMentorOpen] = useState(false); // ✅ New

  const [mentorForm, setMentorForm] = useState({
    name: "",
    email: "",
    expertise: "",
    message: "",
    resume: null,
  });

  const location = useLocation();
  const isVerifyPage = location.pathname === "/verify";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientText =
    "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent";

  // ✅ Handle input change
  const handleMentorChange = (e) => {
    const { name, value, files } = e.target;
    setMentorForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // ✅ Handle form submit
  const handleMentorSubmit = (e) => {
    e.preventDefault();
    console.log("Mentor Form Submitted:", mentorForm);
    alert("Application submitted successfully!");
    setIsMentorOpen(false);
    setMentorForm({
      name: "",
      email: "",
      expertise: "",
      message: "",
      resume: null,
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-10 py-4 flex items-center justify-between transition-all duration-500 
        ${
          isVerifyPage
            ? "bg-white text-black shadow-md"
            : scrolled
            ? "bg-black/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 hover:scale-105 transition"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-2xl font-bold">
            <span className={isVerifyPage ? "text-black" : "text-white"}>Up</span>
            <span className={gradientText}>tor</span>
          </h1>
        </a>

        {/* Nav Links */}
        <ul
          className={`hidden md:flex space-x-8 font-medium ${
            isVerifyPage ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {[
            { name: "Courses", path: "/courses" },
            { name: "Workshops", path: "/workshops" },
            { name: "Help & Support", path: "/support" },
            { name: "Verify Certificate", path: "/verify" },
            { name: "Apply as Mentor", path: "#" }, // ✅ trigger modal
            { name: "Community", path: "/community" },
          ].map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={
                  link.name === "Apply as Mentor"
                    ? (e) => {
                        e.preventDefault();
                        setIsMentorOpen(true);
                      }
                    : undefined
                }
                className="transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-600 hover:to-purple-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 pr-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className={`px-5 py-2 border rounded-md transition ${
              isVerifyPage
                ? "border-gray-400 text-black hover:bg-gray-100"
                : "border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignupOpen(true)}
            className="px-5 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* ✅ Apply as Mentor Modal */}
      {isMentorOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setIsMentorOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Apply as Mentor
            </h2>

            <form onSubmit={handleMentorSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={mentorForm.name}
                  onChange={handleMentorChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={mentorForm.email}
                  onChange={handleMentorChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Area of Expertise
                </label>
                <input
                  type="text"
                  name="expertise"
                  value={mentorForm.expertise}
                  onChange={handleMentorChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Web Development, Data Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Why do you want to mentor?
                </label>
                <textarea
                  name="message"
                  value={mentorForm.message}
                  onChange={handleMentorChange}
                  rows="4"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Write a short statement..."
                />
              </div>

              {/* ✅ Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Resume (PDF/DOCX)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleMentorChange}
                  className="mt-2"
                  required
                />
                {mentorForm.resume && (
                  <p className="mt-2 text-sm text-gray-600">
                    📄 Selected: <span className="font-medium">{mentorForm.resume.name}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
