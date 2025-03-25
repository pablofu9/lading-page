import React from "react";
import TechIcon from "./TechIcons";

const ExperienceCard = ({ 
  company, 
  date, 
  job, 
  description = [], 
  proyects = [], 
  techIcon: TechIconComponent // Nuevo prop para el icono tecnológico
}) => {
  return (
    <div className="bg-darkGray shadow-lg rounded-lg p-10 mx-auto w-auto h-auto shadow-gray-500/10 text-justify">
      <div className="flex items-center mb-4">
        {/* Icono tecnológico (si se pasa) */}
        {TechIconComponent && <TechIcon icon={TechIconComponent}/>}
        
        <div className="flex flex-col ml-4">
          <h1 className="text-2xl font-extrabold font-s">
            {job} - {company}
          </h1>
          <h2>{date}</h2>
        </div>
      </div>
      <div className="border-l-4 border-orangeColor pl-4">
      <p className="font-semibold mt-4 underline">Responsabilidades:</p>

        <ul className="list-disc list-inside text-white/80 py-5">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        {proyects.length > 0 && (
          <>
            <p className="font-semibold mt-4 underline">Proyectos:</p>
            <ul className="list-disc list-inside text-white/80 py-5 ">
              {proyects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;