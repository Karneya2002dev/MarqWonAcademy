import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ for hamburger icons
import logo from "../../assets/logosimple.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✅ mobile menu state

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });
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

  // ✅ Mentor, Login, Signup handlers (unchanged)
  const handleMentorChange = (e) => {
    const { name, value, files } = e.target;
    setMentorForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleMentorSubmit = (e) => {
    e.preventDefault();
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoginOpen(false);
    const msg = new SpeechSynthesisUtterance(
      `Welcome back, ${loginForm.email.split("@")[0]}!`
    );
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
    setLoginForm({ email: "", password: "" });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful! Please log in.");
    setIsSignupOpen(false);
    setSignupForm({ name: "", email: "", password: "" });
  };

  const navLinks = [
    { name: "Courses", path: "/courses" },
    { name: "Workshops", path: "/workshops" },
    { name: "Help & Support", path: "/support" },
    { name: "Verify Certificate", path: "/verify" },
    { name: "Apply as Mentor", path: "#" },
    { name: "Community", path: "/community" },
  ];

  return (
    <>
      {/* Navbar */}
<nav
  className={`fixed right-0 left-0 w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] z-50 px-6 md:px-10 flex items-center justify-between transition-all duration-500
    ${
      isVerifyPage
        ? "bg-white text-black shadow-md py-4 top-0"
        : scrolled
        ? "bg-black/80 backdrop-blur-md shadow-md py-3 rounded-xl mx-4 top-4"
        : "bg-transparent py-4 top-0"
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

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex space-x-8 font-medium ${
            isVerifyPage ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {navLinks.map((link) => (
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 pr-4">
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

        {/* Mobile Hamburger */}
       <button
  className={`md:hidden text-2xl transition ${
    isVerifyPage ? "text-black" : "text-white"
  }`}
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

      </nav>

      {/* Mobile Menu Drawer */}
      {/* Mobile Menu Drawer */}
<div
  className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black/95 text-white transform ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out z-40 md:hidden`}
>
  <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
    <h2 className="text-xl font-bold">Menu</h2>
    <button onClick={() => setIsMobileMenuOpen(false)}>
      <X size={28} />
    </button>
  </div>

  <div className="flex flex-col space-y-6 p-6">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.path}
        onClick={
          link.name === "Apply as Mentor"
            ? (e) => {
                e.preventDefault();
                setIsMentorOpen(true);
                setIsMobileMenuOpen(false);
              }
            : () => setIsMobileMenuOpen(false)
        }
        className="block text-lg hover:text-purple-400"
      >
        {link.name}
      </a>
    ))}

    {/* Mobile Buttons */}
    <button
      onClick={() => {
        setIsLoginOpen(true);
        setIsMobileMenuOpen(false);
      }}
      className="w-full px-5 py-2 border border-gray-400 rounded-md"
    >
      Login
    </button>
    <button
      onClick={() => {
        setIsSignupOpen(true);
        setIsMobileMenuOpen(false);
      }}
      className="w-full px-5 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
    >
      Sign Up
    </button>
  </div>
</div>



      {/* Mentor Modal */}
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
              <input
                type="text"
                name="name"
                value={mentorForm.name}
                onChange={handleMentorChange}
                placeholder="Full Name"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={mentorForm.email}
                onChange={handleMentorChange}
                placeholder="Email"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="expertise"
                value={mentorForm.expertise}
                onChange={handleMentorChange}
                placeholder="Expertise"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                name="message"
                value={mentorForm.message}
                onChange={handleMentorChange}
                placeholder="Why do you want to mentor?"
                rows="3"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleMentorChange}
                required
              />
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

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Login
            </h2>
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                placeholder="Password"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsSignupOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Sign Up
            </h2>
            <form onSubmit={handleSignupSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={signupForm.name}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, name: e.target.value })
                }
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
                }
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
                placeholder="Password"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
       
      )}
      
    </>
  );
};

export default Navbar;
