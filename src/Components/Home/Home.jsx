import React from "react";
import { IoIosArrowDown } from "react-icons/io"; 
import profileImage from "../../assets/profile.jpg"; 
import TextChange from "../TextChange";
import CV from "../../assets/Tiyasa_CV.pdf"; 

const Home = () => {
  // Scroll to About Section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("About"); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative text-white flex flex-col md:flex-row justify-between items-center p-10 md:p-20 min-h-screen">
      {/* Left Section - Text Content */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h2 className="text-xl text-[#465697] font-semibold mb-2">HELLO!</h2>
        <h1 className="text-4xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-lg md:text-xl tracking-tight mt-3">
          I am a passionate software developer skilled in frontend and backend development.
          I enjoy creating user-friendly web applications that solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a 
            href={CV} 
            download="Tiyasa_CV.pdf"
            className="bg-[#465697] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e04e4e] transition duration-300"
          >
            Download CV
          </a>
          
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex justify-center mt-10 md:mt-0">
        <img className="h-72 md:h-96 w-auto rounded-lg shadow-lg" src={profileImage} alt="Profile" />
      </div>

      {/* Scroll Down Arrow */}
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

export default Home;
