import React from "react";
import { IoIosArrowDown } from "react-icons/io"; 
import ProjectCard from "./ProjectCard";
import eNurseryImg from "../../assets/project.jpg";
import attendanceImg from "../../assets/project.jpg";
import restaurantImg from "../../assets/project.jpg";

const Projects = () => {
  // Scroll to Next Section (Footer)
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("Footer"); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Element with ID 'Footer' not found.");
    }
  };

  return (
    <div id="Projects" className="min-h-screen flex flex-col items-center justify-center text-white p-10 md:p-24 relative">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Projects
      </h1>

      {/* Project Cards in One Row */}
      <div className="flex flex-wrap justify-center gap-6">
        <ProjectCard
          title="E-Nursery Website"
          main="An e-commerce website offering a variety of plants, accessories, and pots."
          sourceCode="https://github.com/tiyasa8108lott/Plant-Nursury-Website"
          image={eNurseryImg}
        />
        <ProjectCard
          title="Student Attendance System"
          main="A Java-based system for managing student attendance records."
          sourceCode="https://github.com/tiyasa8108lott/Java-Full-Stack-Project/tree/master/studentmgt"
          image={attendanceImg}
        />
        <ProjectCard
          title="Restaurant Backend API"
          main="Developed a backend API with database management for menus, orders, users, and reservations."
          sourceCode="https://github.com/tiyasa8108lott/Resturant_backend_API-s"
          image={restaurantImg}
        />
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

export default Projects;
