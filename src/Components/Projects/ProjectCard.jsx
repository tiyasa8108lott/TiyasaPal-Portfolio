import React from "react";

const ProjectCard = ({ title, main, sourceCode, image }) => {
  return (
    <div className="p-6 w-80 bg-[#0c0e19] shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 flex flex-col justify-between">
      <div>
        <img className="w-full h-40 object-cover rounded-lg" src={image} alt={title} />
        <h3 className="text-2xl font-bold text-[#465697] hover:underline mt-4">
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="text-sm text-gray-300 py-3">{main}</p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center text-white py-2 text-sm md:text-md hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
