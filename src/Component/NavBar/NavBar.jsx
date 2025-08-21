import React, { useState, useEffect } from "react";
import logo from "../../assets/logosimple.png"; // ✅ Update path

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Purple gradient text style
  const gradientText =
    "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-10 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo with Text */}
      <a href="/" className="flex items-center space-x-2 hover:scale-105 transition">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-2xl font-bold">
          <span className="text-white">Up</span>
          <span className={gradientText}>tor</span>
        </h1>
      </a>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        {[
          { name: "Courses", path: "/courses" },
          { name: "Workshops", path: "/workshops" },
          { name: "Help & Support", path: "/support" },
          { name: "Verify Certificate", path: "/verify" },
          { name: "Apply as Mentor", path: "/mentor" },
          { name: "Community", path: "/community" },
        ].map((link) => (
          <li key={link.path}>
            <a
              href={link.path}
              className="transition text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-600 hover:to-purple-700"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-4 pr-4">
        <a href="/login">
          <button className="px-5 py-2 border border-gray-500 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition">
            Login
          </button>
        </a>
        <a href="/signup">
          <button className="px-5 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:opacity-90 transition">
            Sign Up
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
