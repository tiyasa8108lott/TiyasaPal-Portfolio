import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import MyPhoto from "../../assets/Tiyasa.jpg"; 

const About = () => {
  // Scroll to Next Section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("Experience"); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-between bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 min-h-screen relative"
    >
      {/* Left Section - About Text */}
      <div className="md:w-3/5">
        <h2 className="text-xl md:text-4xl font-bold mb-4 border-b border-gray-500 pb-2">
          About Me
        </h2>
        <p className="text-md md:text-lg leading-relaxed text-gray-300">
          Hello! My name is Tiyasa, and I enjoy creating things that live on
          the internet. I have a strong passion for software development and love
          solving real-world problems through technology.
        </p>
        <p className="text-md md:text-lg leading-relaxed text-gray-300 mt-3">
          I am currently pursuing my Master of Computer Applications (MCA)
          in my final year, working on various projects in frontend and backend development.
        </p>
        <p className="text-md md:text-lg leading-relaxed text-gray-300 mt-3">
          Apart from coding, I enjoy listening to music, cooking, reading, and exploring new technologies.
        </p>
      </div>

      {/* Right Section - Styled Photo */}
      <div className="md:w-2/5 flex justify-center items-center relative">
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#465697] to-[#3a3f58] blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <img
            src={MyPhoto}
            alt="Tiyasa"
            className="relative h-60 md:h-80 w-auto rounded-lg border-4 border-[#465697] shadow-lg group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Centered Arrow at the Bottom */}
      <button 
        onClick={scrollToNextSection} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white 
                   hover:opacity-85 hover:scale-125 transition duration-300"
      >
        <IoIosArrowDown size={50} className="animate-bounce text-[#465697]" />
      </button>
    </div>
  );
};

export default About;
