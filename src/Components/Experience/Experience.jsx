import React from "react";
import { IoIosArrowDown } from "react-icons/io"; 
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

const Experience = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38B2AC" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
    { icon: <SiExpress />, name: "Express.js", color: "#FFFFFF" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <FaPython />, name: "Python", color: "#FFD43B" },
    { icon: <FaJava />, name: "Java", color: "#007396" },
    { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
    { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
  ];

  // Scroll to Next Section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("Projects"); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="Experience" className="min-h-screen flex flex-col justify-center items-center text-white p-10 md:p-24 relative">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        My Skills
      </h1>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-6 w-40 h-40 bg-zinc-900 rounded-xl flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              border: `2px solid ${skill.color}`,
              boxShadow: `0 0 15px ${skill.color}`,
            }}
          >
            <div className="text-5xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
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

export default Experience;
