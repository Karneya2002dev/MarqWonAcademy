// VerifyCertificate.jsx
import React, { useState } from "react";

export default function VerifyCertificate() {
  const [serial, setSerial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verifying certificate: ${serial}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center px-4">

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        {/* Logo */}
        {/* <div className="text-2xl font-bold">
          <span className="text-black">Up</span>
          <span className="text-pink-500">tor</span>
        </div> */}

        {/* Nav */}
        {/* <div className="flex items-center space-x-6 text-gray-600">
          <a href="#" className="hover:text-black">Courses</a>
          <a href="#" className="hover:text-black">Contact Us</a>
          <a href="#" className="hover:text-black">Verify Certificate</a>
          <button className="px-3 py-1 border border-black rounded hover:bg-gray-100">Login</button>
          <button className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800">Sign Up</button>
        </div> */}
      </div>

      {/* Content */}
      <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-lg max-w-lg w-full p-8 mt-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Verify Certificate</h1>
        <p className="text-gray-600 mt-2">
          To verify the legitimacy of any certificate issued by LMES Academy Private Limited please enter 
          <span className="font-semibold"> Certificate Serial Number</span> given on your certificate.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="text-left">
            <label className="text-sm font-medium text-gray-700">Certificate Serial Number</label>
            <input
              type="text"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Enter serial number"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition"
          >
            Verify Certificate
          </button>
        </form>
      </div>
    </div>
  );
}
