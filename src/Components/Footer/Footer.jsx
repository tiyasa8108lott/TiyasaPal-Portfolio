import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="min-h-screen bg-[#171d32] text-white flex flex-col justify-center items-center px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-gray-300 text-center mb-12">Let's connect and discuss opportunities!</p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact Form */}
        <div className="bg-[#252c48] p-8 rounded-lg shadow-lg w-full">
          <form className="flex flex-col space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="bg-[#1e243d] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#465697] w-full"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-[#1e243d] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#465697] w-full"
            />
            <textarea 
              placeholder="Message" 
              className="bg-[#1e243d] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#465697] h-32 w-full"
            />
            <button 
              type="submit" 
              className="bg-[#465697] text-white font-semibold py-3 px-6 rounded-md hover:opacity-85 hover:scale-105 transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info & Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Contact Details */}
          <div className="text-gray-300 text-lg space-y-4">
            <p className="flex items-center"><span className="mr-3">🏠</span> Kolkata, India</p>
            <p className="flex items-center"><span className="mr-3">📞</span> +91-6290806158</p>
            <p className="flex items-center"><span className="mr-3">✉️</span> tiyasapal66@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a href="https://www.facebook.com/share/18ZZ9jAXd2/" className="text-white hover:text-[#465697] transition duration-300">
              <FaFacebookF size={32} />
            </a>
            <a href="https://www.linkedin.com/in/tiyasa-pal-53ba95287" className="text-white hover:text-[#465697] transition duration-300">
              <FaLinkedinIn size={32} />
            </a>
            <a href="https://www.instagram.com/m.y.s.e.l.f__tiy_asa__?igsh=MWJtZWhuZ3R2NTNtcQ==" className="text-white hover:text-[#465697] transition duration-300">
              <FaInstagram size={32} />
            </a>
            <a href="https://github.com/tiyasa8108lott" className="text-white hover:text-[#465697] transition duration-300">
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-gray-400">
        © 2025 Your Name | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
