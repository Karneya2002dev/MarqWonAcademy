// VerifyCertificate.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function VerifyCertificate() {
  const [serial, setSerial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verifying certificate: ${serial}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 flex flex-col items-center justify-center px-4 relative">

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 shadow-sm bg-black/70 backdrop-blur-md">
        <div className="text-2xl font-extrabold tracking-wide text-white">
          <span className="text-purple-400">LMES</span> Academy
        </div>
        <div className="hidden md:flex items-center space-x-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition">Courses</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="text-purple-400 font-medium">Verify</a>
          <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-800 transition">Login</button>
          <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Sign Up</button>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-xl shadow-lg rounded-2xl max-w-lg w-full p-10 mt-20 text-center border border-purple-500/30"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-purple-400" />
        </div>

        <h1 className="text-3xl font-bold text-white">Verify Certificate</h1>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          Enter the <span className="font-semibold text-purple-300">Certificate Serial Number</span> 
          from your issued certificate to verify its authenticity.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="text-left w-full">
            <label className="text-sm font-medium text-gray-200">Certificate Serial Number</label>
            <input
              type="text"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              className="w-full border border-gray-600 bg-black/40 text-white rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              placeholder="e.g., LMES-2025-XYZ123"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold w-full py-3 rounded-lg shadow-md hover:from-pink-500 hover:to-purple-700 transition"
          >
            Verify Certificate
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
