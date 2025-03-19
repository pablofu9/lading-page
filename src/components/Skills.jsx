import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaSwift } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import TechIcon from "./TechIcons";
import { SiXcode } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full mx-auto px-11 py-11 flex flex-col items-center">
      {/* Título siempre arriba */}
      <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
        Tecnologías
      </h2>

      {/* Contenedor de iconos */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        <TechIcon icon={FaSwift} name="Swift" />
        <TechIcon icon={FaReact} name="React" />
        <TechIcon icon={IoLogoFirebase} name="Firebase" />
        <TechIcon icon={SiTypescript} name="TypeScript" />
        <TechIcon icon={IoLogoJavascript} name="JavaScript" />
        <TechIcon icon={FaFigma} name="Figma" />
        <TechIcon icon={SiXcode} name="Xcode" />
        <TechIcon icon={DiVisualstudio} name="Visual Studio Code" />
        <TechIcon icon={FaGitAlt} name="Git" />

      </div>
    </div>
  );
};

export default Skills;
