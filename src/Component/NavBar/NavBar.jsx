import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import bg from "../../assets/loo.png";

// Icons
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SecurityIcon from "@mui/icons-material/Security";
import GoogleIcon from "@mui/icons-material/Google";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true = login, false = signup
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who we are", path: "/who-we-are" },
    { name: "What we do", path: "/what-we-do" },
    { name: "Careers", path: "/careers" },
    { name: "Our Story", path: "/our-story" },
    { name: "Connect With Us", path: "/connect" },
  ];

  const courses = [
    {
      name: "Web Development",
      icon: <CodeIcon fontSize="small" />,
      submenu: [
        { name: "MERN Stack", path: "/courses/web-development/mern" },
        { name: "Python Full Stack", path: "/courses/web-development/python" },
        { name: "Frontend (React/Angular)", path: "/courses/web-development/frontend" },
        { name: "Backend (Node/Django)", path: "/courses/web-development/backend" },
      ],
    },
    {
      name: "Data Science",
      icon: <StorageIcon fontSize="small" />,
      submenu: [
        { name: "Machine Learning", path: "/courses/data-science/ml" },
        { name: "Deep Learning", path: "/courses/data-science/deep-learning" },
        { name: "Data Analysis with Python", path: "/courses/data-science/analysis" },
        { name: "Big Data", path: "/courses/data-science/big-data" },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <DesignServicesIcon fontSize="small" />,
      submenu: [
        { name: "Wireframing", path: "/courses/ui-ux/wireframing" },
        { name: "Prototyping", path: "/courses/ui-ux/prototyping" },
        { name: "Design Thinking", path: "/courses/ui-ux/design-thinking" },
        { name: "Figma / Adobe XD", path: "/courses/ui-ux/figma-adobe" },
      ],
    },
    {
      name: "Cyber Security",
      icon: <SecurityIcon fontSize="small" />,
      submenu: [
        { name: "Ethical Hacking", path: "/courses/cyber-security/hacking" },
        { name: "Network Security", path: "/courses/cyber-security/network" },
        { name: "Cloud Security", path: "/courses/cyber-security/cloud" },
        { name: "Cryptography", path: "/courses/cyber-security/crypto" },
      ],
    },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-500 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        background: "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
      }}
    >
      {/* Left: Logo + Dropdown */}
      <div className="flex items-center gap-5 relative">
        <Link to="/">
          <img src={bg} alt="logo" className="h-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" />
        </Link>
        <span className="font-extrabold text-2xl text-gray-900">MarqWon</span>

        <div className="relative">
          <Button
            variant="contained"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "10px",
              px: 3,
              py: 1.2,
              color: "#fff",
              background: "linear-gradient(90deg, #2563eb, #9333ea)",
              "&:hover": { background: "linear-gradient(90deg, #1d4ed8, #7e22ce)" },
            }}
          >
            Explore Live Bootcamps
          </Button>
<AnimatePresence>
  {dropdownOpen && (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full left-0 mt-2 w-[500px] bg-white shadow-xl rounded-xl overflow-hidden z-50 p-5 grid grid-cols-2 gap-4"
    >
      {courses.map((course, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setHoveredCourse(i)}
          onMouseLeave={() => setHoveredCourse(null)}
          whileHover={{ scale: 1.03 }}
          className={`relative flex flex-col gap-2 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
            hoveredCourse === i ? "bg-blue-50 shadow-md" : ""
          }`}
        >
          {/* Course Title */}
          <div className="flex items-center gap-2 font-semibold text-gray-900 mb-1">
            {course.icon} <span>{course.name}</span>
          </div>

          {/* Arrow Indicator */}
          {hoveredCourse === i && (
            <div className="absolute top-1/2 right-[-10px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-blue-500"></div>
          )}

          {/* Submenu Links */}
          {hoveredCourse === i && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col gap-1 ml-6"
            >
              {course.submenu.map((sub, j) => (
                <Link
                  key={j}
                  to={sub.path}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                  onClick={() => setDropdownOpen(false)}
                >
                  {sub.name}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </div>

      {/* Right: Links + Login */}
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex items-center gap-10 font-extrabold text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          variant="outlined"
          onClick={() => {
            setAuthOpen(true);
            setIsLogin(true);
          }}
          sx={{ borderRadius: "10px", fontWeight: "bold" }}
        >
          Login
        </Button>
      </div>

      {/* AUTH DIALOG (Login/Signup) */}
      <Dialog
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        PaperProps={{ sx: { borderRadius: "16px", p: 3, width: 450, boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" } }}
      >
        <AnimatePresence mode="wait" initial={false} custom={isLogin ? 1 : -1}>
          {isLogin ? (
            <motion.div key="login" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
              <DialogTitle sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.5rem", mb: 1 }}>
                Welcome Back 👋
              </DialogTitle>
              <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                <TextField label="Email Address" type="email" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                <TextField label="Password" type="password" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                <Link to="/forgot-password" style={{ textAlign: "right", fontSize: "0.9rem", color: "#2563eb", textDecoration: "none" }}>Forgot password?</Link>
                <Button fullWidth variant="contained" sx={{ mt: 1, borderRadius: "12px", py: 1.3, fontWeight: "bold", background: "linear-gradient(90deg, #2563eb, #9333ea)", "&:hover": { background: "linear-gradient(90deg, #1d4ed8, #7e22ce)" } }}>Login</Button>
                <Divider sx={{ my: 2 }}>OR</Divider>
                <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ borderRadius: "12px", fontWeight: "bold", color: "#555", borderColor: "#ddd", backgroundColor: "#fff", "&:hover": { backgroundColor: "#f5f5f5" } }}>Continue with Google</Button>
              </DialogContent>
              <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <span style={{ fontSize: "0.9rem" }}>
                  Don’t have an account?{" "}
                  <span style={{ color: "#2563eb", fontWeight: "bold", cursor: "pointer" }} onClick={() => setIsLogin(false)}>
                    Sign Up
                  </span>
                </span>
              </DialogActions>
            </motion.div>
          ) : (
            <motion.div key="signup" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }}>
              <DialogTitle sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.5rem", mb: 1 }}>
                Create Account 🚀
              </DialogTitle>
              <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                <TextField label="Full Name" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                <TextField label="Email Address" type="email" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                <TextField label="Password" type="password" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                <TextField label="Confirm Password" type="password" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                <Button fullWidth variant="contained" sx={{ mt: 1, borderRadius: "12px", py: 1.3, fontWeight: "bold", background: "linear-gradient(90deg, #2563eb, #9333ea)", "&:hover": { background: "linear-gradient(90deg, #1d4ed8, #7e22ce)" } }}>Sign Up</Button>
                <Divider sx={{ my: 2 }}>OR</Divider>
                <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ borderRadius: "12px", fontWeight: "bold", color: "#555", borderColor: "#ddd", backgroundColor: "#fff", "&:hover": { backgroundColor: "#f5f5f5" } }}>Continue with Google</Button>
              </DialogContent>
              <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <span style={{ fontSize: "0.9rem" }}>
                  Already have an account?{" "}
                  <span style={{ color: "#2563eb", fontWeight: "bold", cursor: "pointer" }} onClick={() => setIsLogin(true)}>
                    Login
                  </span>
                </span>
              </DialogActions>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </motion.nav>
  );
};

export default Navbar;
