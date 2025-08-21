// Footer.jsx
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Left Branding */}
        <div>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Uptor</span>{" "}
            a Product of{" "}
            <span className="font-semibold text-white">LMES</span>
          </p>

          <div className="mt-6">
            <h2 className="text-white font-bold text-lg">Uptor</h2>
            <p className="text-sm text-gray-400 mt-2">
              Elevate your Career.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-5">
            <a href="#" className="bg-gray-900 p-2 rounded-md hover:bg-pink-600">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-900 p-2 rounded-md hover:bg-pink-600">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-gray-900 p-2 rounded-md hover:bg-pink-600">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-gray-900 p-2 rounded-md hover:bg-pink-600">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-semibold mb-4">COURSES</h3>
          <ul className="space-y-2 text-sm">
            <li>Data Science & Machine Learning</li>
            <li>Full Stack Development</li>
            <li>Electronics Mastery</li>
            <li>Master in Python</li>
            <li>Full Stack Marketing</li>
            <li>Generative AI Essentials</li>
          </ul>
        </div>

        {/* Workshops */}
        <div>
          <h3 className="text-white font-semibold mb-4">WORKSHOPS</h3>
          <ul className="space-y-2 text-sm">
            <li>Data Science</li>
            <li>Full Stack Development</li>
            <li>Electronics Mastery</li>
            <li>Generative AI</li>
            <li>Content Marketing</li>
            <li>Meta Ads</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Help & Support</li>
            <li>Apply as Mentor</li>
            <li>Verify Certificate</li>
            <li>Terms and Conditions</li>
            <li>Privacy and Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex-1 border-t border-gray-800"></div>
        <div className="mx-3 w-2 h-2 bg-purple-600 rounded-full"></div>
        <div className="flex-1 border-t border-gray-800"></div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        Copyright © LMES Academy Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
